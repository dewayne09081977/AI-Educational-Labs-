# AI Educational Labs

This project contains the complete code for the AI Educational Labs platform, including a React frontend and Node.js backend.

## Project Structure

*   `client/`: React frontend (Vite)
*   `server/`: Node.js backend (Express)

## Local Setup

### 1. Backend

Navigate to the `server` directory and install dependencies:

```bash
cd server
npm install
```

Copy the example environment file and fill in your keys:

```bash
cp .env.example .env
```

Start the backend server:

```bash
npm start
```

### 2. Frontend

Navigate to the `client` directory and install dependencies:

```bash
cd client
npm install
```

Start the frontend development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## Deployment

This application is ready to be deployed to Google Cloud Run. See the deployment instructions for details on setting environment variables and configuring your domain.
