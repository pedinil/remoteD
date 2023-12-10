# Medication API

This Python application provides a simple API for managing medication information. It utilizes the Flask framework for building the API and SQLite as the database.

## Requirements

To install the required dependencies, use the following command:

```bash
pip install -r requirements.txt
```

## API Endpoints
-------------

### Get Medication List

-   Endpoint: `/`
-   Method: `GET`
-   Description: Get a list of all medications.

### Get Medication by ID

-   Endpoint: `/<int:medication_id>`
-   Method: `GET`
-   Description: Get information about a specific medication identified by `medication_id`.

### Get Medication PDF

-   Endpoint: `/pdf/<int:medication_id>`
-   Method: `GET`
-   Description: Generate and retrieve a PDF document for the medication identified by `medication_id`.

### Save Medication PDF

-   Endpoint: `/savepdf/<int:medication_id>`
-   Method: `GET`
-   Description: Save a PDF document for the medication identified by `medication_id`.

### Add Medication

-   Endpoint: `/`
-   Method: `POST`
-   Description: Add a new medication. The request should include the necessary data in the request body.

### Delete Medication

-   Endpoint: `/<int:medication_id>`
-   Method: `DELETE`
-   Description: Delete the medication identified by `medication_id`.

Usage
-----

1.  Install dependencies: `pip install -r requirements.txt`
2.  Run the application: `python app.py`
3.  Access the API at `http://localhost:5000`