# Expense Tracker App Documentation

## Table of Contents

1. [Introduction](#introduction)
2. [Setup](#setup)
   - [Frontend Setup](#frontend-setup)
   - [Backend Setup](#backend-setup)
   - [Database Setup](#database-setup)
3. [Features and Usage](#features-and-usage)
   - [User Authentication](#user-authentication)
   - [Dashboard](#dashboard)
   - [Group Management](#group-management)
   - [Budgeting](#budgeting)
   - [Transaction History](#transaction-history)
   - [Analytics](#analytics)
4. [API Documentation](#api-documentation)
5. [Deployment](#deployment)
   - [Frontend Deployment](#frontend-deployment)
   - [Backend Deployment](#backend-deployment)
6. [Testing](#testing)
7. [Troubleshooting](#troubleshooting)
8. [Contributing](#contributing)
9. [License](#license)

## Introduction

The Expense Tracker App is designed to help individuals manage their expenses and financial activities effectively. This documentation provides an overview of the app's features, setup instructions, usage guidelines, API documentation, deployment process, and more.

## Setup

### Frontend Setup

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the frontend directory: `cd expense-tracker-frontend`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`

### Backend Setup

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the backend directory: `cd expense-tracker-backend`
3. Install dependencies: `npm install`
4. Configure environment variables: Create a `.env` file based on the provided `.env.example`.
5. Start the backend server: `npm start`

### Database Setup

1. Prisma Configuration: Configure the Prisma `.env` file with your database connection details.
2. Run Migrations: Use `npx prisma migrate dev` to apply database migrations.

## Features and Usage

### User Authentication

- Users can register an account by providing their username, email, and password.
- Registered users can log in using their credentials.
- JWT tokens are used for secure and token-based authentication.

### Dashboard

- The dashboard displays the user's financial overview, including balance, expenses, and income.
- Graphs visualize financial trends and transactions over time.

### Group Management

- Users can select existing groups or create new ones.
- Group debt calculation shows debts between users in the same group.

### Budgeting

- Users can set budget limits for different categories.
- Intelligent tag filtering helps users manage their budgets effectively.

### Transaction History

- Users can view a detailed history of their transactions.
- Search, filter, and sorting options are available to find specific transactions.

### Analytics

- Balance analytics provide insights into overall financial status.
- Analytics by friend and by tag help users track spending patterns.

## Deployment

### Frontend Deployment

1. Build the frontend: `npm run build`
2. Deploy the build to your preferred hosting platform.

### Backend Deployment

1. Deploy the backend using a server or cloud service.
2. Set up environment variables for production.

## License

This project is licensed under the [MIT License](license.md).
