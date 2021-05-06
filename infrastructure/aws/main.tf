terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
    github = {
      source = "integrations/github"
      version = "~> 4.9.2"
    }
  }
}

# Configure the AWS Provider
provider "aws" {
  
  region = var.region
  access_key = var.access_key
  secret_key = var.secret_key

}

# Configure GitHub Provider
provider "github" {

}
