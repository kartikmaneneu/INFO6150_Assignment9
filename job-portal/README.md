# JobHub - React Job Portal

Assignment 9 frontend for a React-based job seeker portal.

## Features

- Axios login connected to the Assignment 8 backend
- Persisted frontend login state and logout
- Protected React Router routes
- Home, About, Job Listings, Contact, and Company Showcase pages
- Frontend job listing data
- Company image gallery backed by Assignment 8 uploads
- Material UI components

## Setup

```bash
npm install
cp .env.example .env
npm run dev
```

Set `VITE_API_URL` to the Node.js backend base URL (Assignment 8 defaults to `http://localhost:5000`). The frontend uses:

- `POST /user/login` with `{ email, password }`
- `GET /user/images` for uploaded profile images
- `GET /images/<filename>` to display uploaded images

Assignment 8 does not provide server-side sessions or a logout endpoint. The portal verifies credentials with the backend, then persists the signed-in user in browser storage; logout clears that local state. The image list endpoint returns only display names and image paths, not credentials.

Start Assignment 8 in a separate terminal after MongoDB is available:

```bash
cd ../INFO6150_Assignment8
npm start
```

Set `FRONTEND_ORIGIN=http://localhost:5173` in the backend environment if the frontend uses a different origin.

## Folder Structure

```text
src/
  api/           Axios configuration
  components/    Shared layout and protected route
  context/       Authentication session state
  data/          Frontend job listings
  pages/         Separate folder for each route page
```

## Available Routes

| Route | Page |
|---|---|
| `/login` | Login |
| `/` | Home |
| `/about` | About |
| `/jobs` | Job Listings |
| `/contact` | Contact |
| `/companies` | Company Showcase |
