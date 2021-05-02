variable "access_key" {
    description = "Access key for AWS IAM User"
    type        = string
}

variable "secret_key" {
    description = "Secret key for AWS IAM User"
    type        = string
}

variable "region" {
    description = "AWS Region"
    type = string
}

variable "app_name" {
    description = "Name of the application"
    type = string
}

variable "build_bucket_name" {
    description = "Name of the S3 bucket to keep the build artifacts for the project"
    type = string
}

variable "site_bucket_name" {
    description = "Name of the S3 bucket where the site shall be hosted"
    type = string
}