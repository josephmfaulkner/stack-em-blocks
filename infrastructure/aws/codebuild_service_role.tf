
resource "aws_iam_role" "codebuild_iam_role" {
  name = "CodebuildIAMRole"
  assume_role_policy = file("${path.module}/codebuild_iam_role.json")
    
}

resource "aws_iam_role_policy" "codebuild_iam_role_policy" {
  role = aws_iam_role.codebuild_iam_role.name
  policy = file("${path.module}/codebuild_iam_role_policy.json")
}
