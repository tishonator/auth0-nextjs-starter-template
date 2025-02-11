# Auth0 Next.js Starter Template
Auth0 + Next.js 15 + TypeScript + Tailwind starter template

## Features
- ✅ Next.js 15 with **App Router**
- ✅ **Auth0 Authentication** (Login & Logout)
- ✅ **TypeScript & Tailwind CSS**
- ✅ Works with **Vercel Deployment**


## **🚀 Live Demo**
👉 **[Try the Demo Here](https://auth0-nextjs-starter-template.vercel.app/)**  

## Installation

Clone the repo and install dependencies:

sh
git clone https://github.com/tishonator/auth0-nextjs-starter-template.git
cd auth0-nextjs-starter-template

npm install

## Setup Auth0
Go to Auth0 Dashboard
Create a new application → Single Page Application

Set Allowed Callback URLs:
http://localhost:3000/api/auth/callback,
https://auth0-nextjs-starter-template.vercel.app/api/auth/callback

Set Allowed Logout URLs:
http://localhost:3000,
https://auth0-nextjs-starter-template.vercel.app

Set Allowed Web Origins:
http://localhost:3000,
https://auth0-nextjs-starter-template.vercel.app


Copy Domain, Client ID, and Client Secret to .env.local:

AUTH0_SECRET=your-random-secret
AUTH0_BASE_URL=http://localhost:3000
AUTH0_ISSUER_BASE_URL=https://your-auth0-domain.auth0.com
AUTH0_CLIENT_ID=your-auth0-client-id
AUTH0_CLIENT_SECRET=your-auth0-client-secret

## Run the App

npm run dev