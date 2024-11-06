 <div align="center">
    <h1>Webclues_DevOpstask</h1>
</div>

# Creating Docker container through Dockerfile and running the container in a detached mode
 - docker build -t nodejsapp .
 - docker run -d -p 3000:3000 --name nodejsweb-app nodejsapp:latest
---
# creating the kubernetes namespace and deploying the nginx on that namespace**
 - kubectl create ns nginx-namespace
 -  kubectl apply -f nginx-deployment.yaml
 ---
# Terraform to provision the ec2 instance in AWS
# Initialize Terraform (only required the first time or if modules/providers change)
 - terraform init

# Review the execution plan before applying
 - terraform plan

# creating the resources by applying this command
 - terraform apply
---
#  Install and configure the Nginx and deploy the application through Ansible 
 - ansible-playbook -i inventory.ini playbook.yaml
