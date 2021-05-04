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

variable "env" {
    description = "Depolyment environment"
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

variable "repository_branch" {
    description = "Repository branch to connect to"
    type = string
}

variable "repository_owner" {
    description = "GitHub repository owner"
    type = string
}

variable "repository_name" {
    description = "GitHub repository name"
    type = string
}

variable "github_token" {
    description = "Secret Github Token for Hooks"
    type = string
}

