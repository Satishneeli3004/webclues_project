# webclues_devopstask

**#Creating docker container through Dockerfile and start the container**
docker build -t nodejsapp .

docker run -d -p 3000:3000 --name nodejsweb-app nodejsapp:latest

**#creating the kubernetes namespace and deploying the nginx on that namespace**
kubectl create ns nginx-namespace
kubectl apply -f nginx-deployment.yaml

**#terraform to provision to the ec2 instance**
# Initialize Terraform (only required the first time or if modules/providers change)
terraform init

# Review the execution plan before applying
terraform plan

# creating the resources by applying this command
terraform apply

# to apply the 

#  to install and configure Nginx and deploy the application.
ansible-playbook -i inventory.ini playbook.yaml
