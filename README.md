<br />
<div align="center">

![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)

<img src="web\public\logo.png" alt="Logo" width="80" height="80">

  <h1 align="center" id="readme-top">CashFlow</h3>

  <p align="center">
    CashFlow is an expense tracker app designed to help individuals manage their expenses and financial activities effectively. This documentation provides an overview of the app's features, setup instructions, usage guidelines, API documentation, deployment process, and more.
  </p>
</div>

## Table of Contents

1. [Setup](#setup)
   - [Frontend Setup](#frontend-setup)
   - [Backend Setup](#backend-setup)
   - [Database Setup](#database-setup)
2. [Features and Usage](#features-and-usage)
   - [User Authentication](#user-authentication)
   - [Dashboard](#dashboard)
   - [Group Management](#group-management)
   - [Budgeting](#budgeting)
   - [Transaction History](#transaction-history)
   - [Analytics](#analytics)
3. [API Documentation](#api-documentation)
4. [Deployment](#deployment)
   - [Frontend Deployment](#frontend-deployment)
   - [Backend Deployment](#backend-deployment)
5. [Testing](#testing)
6. [Troubleshooting](#troubleshooting)
7. [Contributing](#contributing)
8. [License](#license)

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

This project is licensed under the [MIT License](LICENSE).

<p align="right">(<a href="#readme-top">back to top</a>)</p>
