terraform {
  backend "s3" {
    bucket         = "seb-blog-state-bucket"
    key            = "seb-blog.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-state-lock"
  }
}
 
provider "aws" {
  region = var.aws_region
}

// Your EC2, security groups, and other resources here 