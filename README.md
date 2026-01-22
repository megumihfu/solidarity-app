# Social Aid Platform (Solidarity App)

A full-stack web application designed to help people find social aid resources (food, shelter, clothing, hygiene) provided by local associations.

This project is built as a technical assignment to demonstrate full-stack development skills, clean architecture, and best practices.

---

## Tech Stack

### Backend
![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white) 
![Spring Boot](https://img.shields.io/badge/spring%20boot-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

### Frontend
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

### Tools
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05032.svg?style=for-the-badge&logo=git&logoColor=white)

---

## Features

- Public directory of social aid resources
- Advanced search and filtering (category, tags, associations)
- Secure administration via JWT authentication
- CRUD operations on resources and categories
- Responsive and mobile-first user interface
- Application logging and API documentation
- Unit tests focused on business logic

---

## Architecture

The backend follows a classic Layered Architecture: Controller -> Service -> Repository -> Database

Frontend and backend are  separated and communicate through a REST API.

```text
┌── backend/           # Spring Boot REST API
├── frontend/          # React application using Vite
├── docker-compose.yml # Containerization
└── README.md
```

---
## Scope Decisions

The application is publicly accessible for browsing and searching resources.
Data management (CRUD operations) is restricted to authenticated administrators.
The scope was intentionally kept focused to ensure clarity, quality, and timely delivery.
