# 🚗 Car Rental System (Full-Stack)

<p align="center">
  <img src="https://img.shields.io/badge/Java-17-orange?style=for-the-badge&logo=openjdk" alt="Java">
  <img src="https://img.shields.io/badge/Spring%20Boot-3.x-green?style=for-the-badge&logo=springboot" alt="Spring Boot">
  <img src="https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react" alt="React">
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL">
  <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" alt="JWT">
</p>

## 📌 Project Overview
A scalable, full-stack car rental management platform designed to streamline vehicle reservation processes. The system features a robust RESTful API backend built with **Spring Boot** and a dynamic user interface built with **React.js**.

---

## 🛠️ Tech Stack

- **Backend:** Java 17, Spring Boot, Spring Security, Spring Data JPA, Hibernate
- **Frontend:** React.js, JavaScript (ES6+), CSS
- **Database:** PostgreSQL
- **Security:** JWT (JSON Web Token) Authentication & Role-Based Authorization
- **Tools & Version Control:** Git, GitHub, Postman, Maven

---

## ⚙️ Key Features
- **User Authentication & Authorization:** Secure registration, login, and role-based access control (Admin / Customer) via Spring Security and JWT.
- **Vehicle Management:** CRUD operations for car listings, pricing, availability tracking, and category filters.
- **Reservation Workflow:** Users can browse available cars, book date ranges, and manage active rentals.
- **Relational Data Modeling:** Optimized PostgreSQL database schemas with proper foreign key constraints and indexing using JPA/Hibernate.

---

## 🚀 Getting Started

### Prerequisites
- Java JDK 17+
- Node.js & npm
- PostgreSQL

### Backend Setup
1. Clone the repository:
   ```bash
   git clone [https://github.com/Serdal0/car-rental-system.git](https://github.com/Serdal0/car-rental-system.git)

2. Configure your database settings in src/main/resources/application.properties:

Properties
spring.datasource.url=jdbc:postgresql://localhost:5432/car_rental_db
spring.datasource.username=your_username
spring.datasource.password=your_password


3. Run the Spring Boot application:

./mvnw spring-boot:run
Frontend Setup
Navigate to the frontend directory:

4.
cd frontend
Install dependencies:

5. 
npm install
Start the development server:

6.
npm run dev
