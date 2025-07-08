# Car recovR

Car recovR is a web-based car recovery portal designed to streamline the process of recovering stolen vehicles using Automatic Number Plate Recognition (ANPR) and surveillance technology. Built as a Final Year Project (FYP) at the National University of Computer and Emerging Sciences (NUCES), Karachi, this project leverages the FARM stack (FastAPI, React, MongoDB) to provide a secure and efficient platform for car owners and administrators to manage vehicle registration and theft complaints.
![](https://github.com/MuhammadEahtesham/CarrecovR-FYP/blob/main/img.jpg)

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Project Overview

Car recovR addresses the growing issue of vehicle theft by providing a centralized platform where car owners can register their vehicles and report thefts, while administrators manage complaints and coordinate recovery using ANPR-based surveillance. The system ensures data security and confidentiality through robust authentication and authorization mechanisms.

The portal consists of two primary modules:

- **User Module**: Allows car owners to register vehicles, update details, and file theft complaints.
- **Admin Module**: Enables administrators to manage user accounts, review complaints, and monitor surveillance data for vehicle recovery.

## Features

- **Vehicle Registration**: Users can register their cars with details such as make, model, color, and license plate number, authenticated via CNIC and attribute-based rules.
- **Complaint Registration**: Users can report stolen vehicles, with the system validating details against the registered database.
- **ANPR Integration**: Extracts license plate numbers from surveillance footage using computer vision technology.
- **Surveillance Module**: Monitors camera feeds to detect stolen vehicles and notifies admins with location details (latitude and longitude).
- **Security**: Implements encryption, digital signatures, and self-signed certificates for secure communication and data integrity.
- **Admin Dashboard**: Provides an overview of registered users, complaints, and surveillance data for efficient management.
- **Scalability**: Built with a modular architecture to handle increasing traffic and data.

## Technologies Used

Car recovR is built using the FARM stack and additional tools for enhanced functionality:

- **Frontend**:
  - ReactJS: For building dynamic and responsive user interfaces.
  - Material UI: For pre-styled components to accelerate UI development.
- **Backend**:
  - FastAPI: High-performance API framework for handling backend logic.
  - WebSocket: For real-time communication between frontend and backend.
  - JWT Token: For secure user authentication and authorization.
  - Email Validator: For validating user input during account creation.
- **Database**:
  - MongoDB: NoSQL database for scalable and flexible data storage.
- **Other**:
  - Python: For backend logic and ANPR implementation.
  - HTML & CSS: For structuring and styling the frontend.
  - JavaScript: For client-side interactivity.

## Installation

Follow these steps to set up the Car recovR project locally:

### Prerequisites

- Node.js (v16 or higher)
- Python (v3.8 or higher)
- MongoDB (v4.4 or higher)
- Git

### Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/car-recovr.git
   cd car-recovr
   ```

2. **Backend Setup**:

   ```bash
   # Navigate to the backend directory
   cd backend

   # Create a virtual environment
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate

   # Install dependencies
   pip install -r requirements.txt
   ```

3. **Frontend Setup**:

   ```bash
   # Navigate to the frontend directory
   cd frontend

   # Install dependencies
   npm install
   ```

4. **Database Setup**:

   - Ensure MongoDB is installed and running on your system.
   - Update the MongoDB connection string in the backend configuration file (e.g., `config.py`).

5. **Run the Application**:

   - **Start the Backend**:
     ```bash
     cd backend
     uvicorn main:app --reload
     ```
   - **Start the Frontend**:
     ```bash
     cd frontend
     npm start
     ```

6. **Access the Application**:
   - Open your browser and navigate to `http://localhost:3000` for the frontend.
   - The backend API will be available at `http://localhost:8000`.

## Usage

1. **User Registration**:

   - Navigate to the signup page to create a user account.
   - Provide details such as CNIC, email, and vehicle information.

2. **Car Registration**:

   - Log in as a user and access the car registration module.
   - Submit vehicle details, including a clear image of the license plate for ANPR processing.

3. **Filing a Complaint**:

   - Log in as a user and go to the complaint registration section.
   - Enter the stolen vehicle’s details, which will be validated against the database.

4. **Admin Operations**:

   - Log in as an admin to access the dashboard.
   - Review user registrations, manage complaints, and monitor surveillance feeds.

5. **Surveillance Monitoring**:
   - Admins can view real-time camera feeds and receive alerts for matched license plates.

## Contributing

We welcome contributions to enhance Car recovR! to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request with a detailed description of your changes.

Please ensure your code follows the project’s coding standards and includes relevant tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


---

**Car recovR** - Empowering vehicle security through technology.
