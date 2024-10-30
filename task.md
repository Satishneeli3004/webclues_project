DevOps Practical Task
Time Duration: 2 Days

Task 1: Simple Node Js Application Deployment on Docker container
Description:
- Create a Dockerfile for a simple Node.js application that listens on port 3000. The
Dockerfile should use a lightweight base image, install dependencies, copy the
application code, and specify the command to run the application.
Deliverables: Dockerfile

Task 2: K8s Deployment

Description:
- Create a Kubernetes deployment configuration file (in YAML) for a web
application. The deployment should have 3 replicas, use the nginx:latest
image, and expose port 80. The configuration should also include a liveness
probe and a readiness probe, also it should have guaranteed QOS for
deployments.
Deliverables: Kubernetes deployment YAML file
Task 3: Resource Provisioning and configuration management through

terraform and ansible

Description:
- Create a Terraform script to provision an ec2 instance with necessary security
group and VPC configurations.
- Configure instance with nginx web server and other necessary configurations
- Deploy task1 node js application on the same nginx web server through
Ansible.
Deliverables: Terraform scripts, Ansible configuration, Web server configuration files
Notes: You can use Github SVC to provide your deliverables, and share it with us. Make
sure to have a Github Repo with public visibility.
