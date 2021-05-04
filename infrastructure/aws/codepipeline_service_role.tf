resource "aws_iam_role" "codepipeline_iam_role" {
  name = "CodepipelineIAMRole"
  assume_role_policy = file("${path.module}/codepipeline_iam_role.json")
    
}

resource "aws_iam_role_policy" "codepipeline_iam_role_policy" {
  role = aws_iam_role.codepipeline_iam_role.name
  policy = file("${path.module}/codepipeline_iam_role_policy.json")
}