# NestJS Microservices Monorepo Project

This repository contains a NestJS project set up as a monorepo with microservices. Follow the steps below to create a microservice-based architecture using NestJS.

## Getting Started

This guide will walk you through setting up the basic structure of a monorepo project with NestJS.

### Prerequisites

Make sure you have the following tools installed:

- [Node.js](https://nodejs.org/) (version >= 18)
- [Nest CLI](https://docs.nestjs.com/cli/overview) (can be installed globally using `npm i -g @nestjs/cli`)
- [Git](https://git-scm.com/) (optional for version control)

## Steps to Create a Microservices Project

### 1. Create a New NestJS Project

First, create a new NestJS project using the Nest CLI.

```bash
nest new bookstore
cd bookstore
nest generate app bookstore-api-gateway
nest generate app user

bookstore/
├── apps/
│   ├── bookstore-api-gateway/   # API Gateway
│   └── user/                    # User microservice
├── node_modules/
├── nest-cli.json
├── package.json
└── tsconfig.json

npm run start:bookstore-api-gateway

npm run start:user

nest generate app <microservice-name>

nest generate module <module-name> --project <microservice-name>

nest generate controller <controller-name> --project <microservice-name>

nest generate service <service-name> --project <microservice-name>

```

## Add a user module or service  to gateway application

``` bash
nest generate module user --project bookstore-api-gateway
nest generate controller user --project bookstore-api-gateway
nest generate service user --project bookstore-api-gateway

nest generate module books --project bookstore-api-gateway
nest generate controller books --project bookstore-api-gateway
nest generate service books --project bookstore-api-gateway
```

 
## Command to start indivisual microservices

### Make sure you are inside the root bookstore folder

``` bash
nest start bookstore-api-gateway --watch
nest start user --watch
```

### TO add common contact for the api

``` bash

nest generate library contracts

```