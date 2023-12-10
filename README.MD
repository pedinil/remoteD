Docker Compose Setup for Frontend-Backend Application
=====================================================

This Docker Compose configuration sets up a simple frontend-backend application with the following services:

-   frontend: React application served on port 3000.
-   backend: Backend server running on port 5001.

Prerequisites
-------------

Make sure you have Docker and Docker Compose installed on your machine.

-   Docker installation: [Get Docker](https://docs.docker.com/get-docker/)
-   Docker Compose installation: [Install Docker Compose](https://docs.docker.com/compose/install/)

Usage
-----

1.  Clone the repository:

    bashCopy code

    `git clone <repository_url>
    cd <repository_directory>`

2.  Create a `.env` file in the root directory with the following content:

    envCopy code

    `REACT_APP_BACKEND_URL=http://localhost:5001`

    This environment variable is used by the frontend to specify the backend URL.

3.  Build and run the services:

    bashCopy code

    `docker-compose up --build`

    This command will build the Docker images for the frontend and backend, create and start containers for both services.

4.  Access the application:

    Open your web browser and go to [http://localhost:3000](http://localhost:3000/) to access the React frontend.

Configuration
-------------

The services are configured in the `docker-compose.yml` file.

### Frontend Service

-   Build Path: `./frontend/`
-   Ports: Exposed on host port 3000.
-   Environment Variable:
    -   `REACT_APP_BACKEND_URL`: URL of the backend service (`http://localhost:5001` by default).

### Backend Service

-   Build Path: `./backend/`
-   Ports: Exposed on host port 5001.

Notes
-----

-   Ensure that the specified ports (3000 and 5001) are available on your machine.
-   Adjust the `REACT_APP_BACKEND_URL` in the `.env` file if you want to use a different backend URL.
