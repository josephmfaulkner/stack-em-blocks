# StackEm Blocks!
## Start Playing Online: [stackemblocks.games.josephmfaulkner.com](https://stackemblocks.games.josephmfaulkner.com/)
\
![Main Gameplay](/screenshots/main-gameplay.gif)


- - - -

## Getting Started
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### You will need: 

* [Git](https://git-scm.com/)
* [NodeJs](https://nodejs.org/)
* [Yarn](https://classic.yarnpkg.com/en/) or [NPM](https://www.npmjs.com/get-npm)

```
### Using Yarn:
git clone https://github.com/josephmfaulkner/stack-em-blocks.git
cd stack-em-blocks
yarn install 
yarn start

### Using NPM:
git clone https://github.com/josephmfaulkner/stack-em-blocks.git
cd stack-em-blocks
npm install 
npm start
```

By default, the project will run on [localhost:3000](http://localhost:3000/)

- - - -

## Deploying Infrastructure
The cloud resources can be provisioned automatically using Terraform 

### You will need: 
* [Terraform (v0.13.0)](https://www.terraform.io/downloads.html)
```
cd infrastructure/heroku
terraform init -var-file="secret.tfvars"
terraform plan -var-file="secret.tfvars"
terraform apply -var-file="secret.tfvars"
```