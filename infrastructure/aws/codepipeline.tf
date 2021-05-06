
resource "aws_codepipeline" "static_web_pipeline" {
  name     = "static-web-pipeline"
  role_arn = aws_iam_role.codepipeline_iam_role.arn
  tags     = {
    Environment = var.env
  }

  artifact_store {
    location = aws_s3_bucket.artifact_bucket.id
    type     = "S3"
  }

  stage {
    name = "Source"

    action {
      category = "Source"
      configuration = {
        "Branch"               = var.repository_branch
        "Owner"                = var.repository_owner
        "PollForSourceChanges" = "false"
        "Repo"                 = var.repository_name
        "OAuthToken"           = var.github_token
      }
      input_artifacts = []
      name            = "Source"
      output_artifacts = [
        "SourceArtifact",
      ]
      owner     = "ThirdParty"
      provider  = "GitHub"
      run_order = 1
      version   = "1"
    }
  }
  stage {
    name = "Build"

    action {
      category = "Build"
      configuration = {
        "EnvironmentVariables" = jsonencode(
          [
            {
              name  = "environment"
              type  = "PLAINTEXT"
              value = var.env
            },
          ]
        )
        "ProjectName" = "${var.app_name}-static-web-build"
      }
      input_artifacts = [
        "SourceArtifact",
      ]
      name = "Build"
      output_artifacts = [
        "BuildArtifact",
      ]
      owner     = "AWS"
      provider  = "CodeBuild"
      run_order = 1
      version   = "1"
    }
  }
  stage {
    name = "DeployToTesting"

    action {
      category = "Deploy"
      configuration = {
        "BucketName" = aws_s3_bucket.static_site_bucket.id
        "Extract"    = "true"
      }
      input_artifacts = [
        "BuildArtifact",
      ]
      name             = "Deploy"
      output_artifacts = []
      owner            = "AWS"
      provider         = "S3"
      run_order        = 1
      version          = "1"
    }
  }

  stage {
    name = "ApproveToProduction"

    action {
      name     = "Approval"
      category = "Approval"
      owner    = "AWS"
      provider = "Manual"
      version  = "1"

      configuration = {
          ExternalEntityLink = "http://${aws_s3_bucket.static_site_bucket.website_endpoint}"
      }
    }
  }

  stage {
    name = "DeployToProduction"

    action {
      category = "Deploy"
      configuration = {
        "BucketName" = var.prod_site_bucket_name
        "Extract"    = "true"
      }
      input_artifacts = [
        "BuildArtifact",
      ]
      name             = "Deploy"
      output_artifacts = []
      owner            = "AWS"
      provider         = "S3"
      run_order        = 1
      version          = "1"
    }
  }
}