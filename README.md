# Social Aid Platform (Solidarity App)

A full-stack web application designed to help people find social aid resources (food, shelter, clothing, hygiene) provided by local associations.

This project is built as a technical assignment & portfolio project to demonstrate full-stack development skills, API design, and incremental delivery (MVP first).

---

## Tech Stack

### Backend
![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white) 
![Spring Boot](https://img.shields.io/badge/spring%20boot-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

### Frontend
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

### Tools
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05032.svg?style=for-the-badge&logo=git&logoColor=white)

---

## Current features (MVP)

- Public directory of social aid resources
- Advanced search and filtering (city, category tags, associations)
- Public access to important informational content
- CRUD operations on associations & informations
- Authentication system in place (email/password)
- UI actions conditionally displayed when authenticated
- Responsive and mobile-first user interface
- Application logging and API documentation
- Fully Dockerized for easy local setup and deployment

> At this stage, access control is mainly enforced at the frontend level.  
> Backend role-based security is intentionally deferred to a later phase.
---

## Getting Started

### Prerequisites
Make sure you have installed:
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- .env.docker file at the repository root (see [Environment variables](#environment-variables) for more details)

### Running the Project
The entire application (backend + frontend + database) is fully Dockerized. To start it, run:

```bash
docker compose --env-file .env.docker up --build
```

This will build the images and start all containers:
- Frontend accessible at: http://localhost:3000/
- Backend API accessible at: http://localhost:8080/
- Postgres database with initialized data

### Environment variables
The project uses a `.env.docker` file at the repository root to configure environment variables for Dockerized development.  
> Replace  `your_user` and `your_password` with your actual credentials when running locally

```env
DB_HOST=postgres
DB_PORT=5432
DB_NAME=solidarity-app
DB_USER=your_user
DB_PASSWORD=your_password

POSTGRES_USER=your_user
POSTGRES_PASSWORD=your_password
POSTGRES_DB=solidarity-app
```


### API Documentation
The backend exposes an OpenAPI documentation available at: [Swagger UI](http://localhost:8080/swagger-ui/index.html)
This allows you to explore all available endpoints, request/response schemas, and try out the API directly from your browser

## Architecture

### Backend
The backend follows a classic Layered Architecture: Controller -> Service -> Repository -> Database
- Clear separation of concerns
- DTO-based API responses
- Business logic isolated in services
- PostgreSQL database initialized via SQL scripts

### Frontend
Frontend and backend are separated and communicate through a REST API
- React application bootstrapped with Vite
- Component-based architecture
- API access centralized via service layers
- Responsive, mobile-first layout
  
### Project Structure
```text
┌── backend/           # Spring Boot REST API
├── frontend/          # React application using Vite
├── docker-compose.yml # Containerization
├── .env.docker 
└── README.md
```

---
## Scope Decisions

- The application is publicly accessible for browsing and searching resources.
- Data management (CRUD) is restricted to authenticated users.
- The scope was kept focused to deliver a clean MVP, avoid premature complexity & keep the codebase understandable.

---
## @TODO

Following features are planned but not implemented yet:

### Authentification
- JWT-based auth
- Role based access controle for admin & user

### Features
- City name autocompletion usign the French public API: https://geo.api.gouv.fr/decoupage-administratif/communes
> This API can also provide geographic coordinates (longitude & latitude) to place associations on an interactive map later

- Interactive map view for associations
- Improved error handling (HTTP request, exceptions..)

### DevOps
- CI/CD pipelines
- Deployment to AWS