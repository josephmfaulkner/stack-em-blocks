
resource "aws_s3_bucket" "artifact_bucket" {
  bucket = var.build_bucket_name
  force_destroy = true
  acl    = "private"

  tags = {
    Name = "${var.build_bucket_name}"
  }
}


resource "aws_s3_bucket" "static_site_bucket" {
  bucket = var.site_bucket_name
  force_destroy = true
  acl    = "public-read"

  tags = {
    Name = "${var.site_bucket_name}"
  }

  website {
    index_document = "index.html"
    error_document = "error.html"
  }

}

resource "aws_s3_bucket_policy" "static_site_bucket_policy" {
  bucket = aws_s3_bucket.static_site_bucket.id


  # Terraform's "jsonencode" function converts a
  # Terraform expression's result to valid JSON syntax.
  policy = jsonencode({
    Version = "2012-10-17"
    Id      = "StaticSiteBucketPolicy"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = [
            "s3:GetObject",
        ]
        Resource = [
            "arn:aws:s3:::${var.site_bucket_name}/*",
        ]
      },
    ]
  })
}
