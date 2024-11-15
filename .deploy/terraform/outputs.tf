output "ec2_instance_ip" {
  value = aws_instance.app_server.public_ip
}

output "ec2_instance_dns" {
  value = aws_instance.app_server.public_dns
} 