# github-copilot-deployment-lambda-demo

This is a simple Node.js application that deploys an AWS Lambda function using the Serverless Framework and GitHub Actions.

## Setup

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies by running `npm install`.

## Deployment

This project uses GitHub Actions for deployment. The workflow is defined in `.github/workflows/main.yml`. It runs on the `windows-latest` runner and executes the `npx serverless deploy` command.

The AWS Lambda function is configured in `src/serverless.yml`. The handler function, which is the entry point for the Lambda function, is exported from `src/handler.js`.

## Usage

After deployment, you can invoke the Lambda function through the AWS Management Console, AWS CLI, or any other method that AWS supports.