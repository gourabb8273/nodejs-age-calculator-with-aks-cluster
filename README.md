# Node.js Age Calculator App

## Overview
This is a Node.js application for calculating age based on the provided date of birth. The application is containerized and deployed on Azure Kubernetes Service (AKS) using Azure DevOps CI/CD pipelines.

<img src="https://github.com/gourabb8273/nodejs-age-calculator-with-aks-cluster/assets/109871120/f578b7f2-14d2-4150-a152-9419fdafb4ca" alt="Your Image" width="600" height="300">

## Usage

- The application calculates age based on the provided date of birth.
- Access the deployed application externally through the LoadBalancer service.

## Azure DevOps CI/CD Pipeline

The CI/CD pipeline automates the build and deployment processes:

1. **Continuous Integration (CI):**
   - Automatically triggered on code push.
   - Builds the Docker image.
   - Pushes the Docker image to the container registry.

2. **Continuous Deployment (CD):**
   - Triggers on successful CI.
   - Deploys the application to AKS.

## Docker Hub

- The latest Docker image for this application is available on Docker Hub.
- Docker Hub Link: [gourabbanerjee05/nodejs-dob-app](https://hub.docker.com/r/gourabbanerjee05/nodejs-dob-app)

## Configuration

- Environment variables are configured in the CI/CD pipeline.
- Adjust deployment.yaml for additional configuration settings.

## Contributing

Feel free to contribute by opening issues or creating pull requests.

## Running the Application Locally
 - Install Node js
 - Clone the repo: https://github.com/gourabb8273/nodejs-age-calculator-with-aks-cluster.git 
 - Install Dependencies - npm install
 - Run the Express Server - node app
