import React, { useState,useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField, Button, Grid, Container, Paper, TableColumn } from '@mui/material';
import './MedicationForm.css';

const MedicationForm = () => {
  // State for the input fields
  const [formData, setFormData] = useState({
    drug_name: '',
    dosage: '',
    dosage_type: '',
    route: '',
    frequency: '',
    quantity: '',
    notes: '',
    medication_type: '',
    refill: '',


  });

  const [gridData, setGridData] = useState([]);
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const fetchData = async () => {
    try {
      // Make a GET request to the API endpoint
      const response = await fetch(process.env.REACT_APP_BACKEND_URL+'/api/');

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        const data = await response.json();
        setGridData(data);
      } else {
        console.error('API call failed');
      }
    } catch (error) {
      console.error('Error during API call:', error);
    }
  };

  const handleSavePdfClick = async () => {
    try {
      // Make a GET request to the API endpoint
      const response = await fetch(process.env.REACT_APP_BACKEND_URL+'/api/savepdf/'+selectedRowId);

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        setSuccessMessage('Item saved successfully.');
      } else {
        console.error('API call failed');
      }
    } catch (error) {
      console.error('Error during API call:', error);
    }
  };

 

  useEffect(() => {
  
    // Call the fetchData function on component mount
    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount




  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to be sent to the API
    const postData = {
      ...formData,
      // Add any additional data needed for the API call
    };

    try {
      // Make a POST request to the API endpoint
      
      const response = await fetch(process.env.REACT_APP_BACKEND_URL+'/api/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers needed for the API call
        },
        body: JSON.stringify(postData),
      });

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        console.log('API call successful');
        fetchData();
        // Reset the form or perform any other actions on successful API call
      } else {
        console.error('API call failed');
      }
    } catch (error) {
      console.error('Error during API call:', error);
    }
  };




  const handlePdfClick = () => {
    // Add logic for handling the edit action based on the selected row ID
    if (selectedRowId!=null)
    {
          const fileUrl = process.env.REACT_APP_BACKEND_URL+'/api/pdf/'+selectedRowId;
          window.open(fileUrl, '_blank');
    }
   
    console.log('Edit clicked for row ID:', selectedRowId);
  };

  const handleDelete = async () => {
    if (selectedRowId) {
      try {
        const response = await fetch(process.env.REACT_APP_BACKEND_URL+'/api/'+selectedRowId, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            // Add any other headers if needed
          },
        });

        if (response.ok) {
          console.log(`Item with ID ${selectedRowId} deleted successfully.`);
          // Perform any additional logic after successful deletion

          // Refresh the data by making a GET request or updating the state
          fetchData();
        } else {
          console.error('Failed to delete item.');
        }
      } catch (error) {
        console.error('Error during delete API call:', error);
      }
    } else {
      console.warn('No item selected for deletion.');
    }
  };


  const columns: TableColumn[] = [
    { field: 'id', headerName: 'ID', hideable: true },
    { field: 'drug_name', headerName: 'drug_name Type', flex: 1 },
    { field: 'dosage', headerName: 'dosage', flex: 1 },
    { field: 'dosage_type', headerName: 'dosage_type', flex: 1 },
    { field: 'route', headerName: 'route', flex: 1 },
    { field: 'frequency', headerName: 'frequency', flex: 1 },
    { field: 'notes', headerName: 'Notes', flex: 1 },
    { field: 'medication_type', headerName: 'Medication Type', flex: 1 },
    { field: 'quantity', headerName: 'Quantity', flex: 1 },
    { field: 'refill', headerName: 'Refill', flex: 1 },
    { field: 'action', headerName: 'Action', flex: 1, renderCell: () => <Button onClick={handlePdfClick}>PDF</Button> },
    { field: 'delete', headerName: 'Delete', flex: 1, renderCell: () => <Button onClick={handleDelete}>Del</Button> },
    { field: 'SavePdf', headerName: 'SavePdf', flex: 1, renderCell: () => <Button onClick={handleSavePdfClick}>SavePDF</Button> },
  ];

  return (
    <Container className="Container">
      <Paper elevation={3} className="Paper">
        {/* Top Box with Textboxes */}
        <form onSubmit={handleSubmit} className="form">
          <Grid container spacing={2} className="Grid">
      
            <Grid item xs={12} sm={2}>
              <TextField
                fullWidth
                label="Drug Name"
                name="drug_name"
                value={formData.drug_name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                fullWidth
                type='number'
                label="Dosage"
                name="dosage"
                value={formData.dosage}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                fullWidth
                label="Dosage Type"
                name="dosage_type"
                value={formData.dosage_type}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                fullWidth
                label="Route"
                name="route"
                value={formData.route}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                fullWidth
                label="Quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                fullWidth
                label="Frequency"
                name="frequency"
                value={formData.frequency}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                fullWidth
                label="Medication_type"
                name="medication_type"
                value={formData.medication_type}
                onChange={handleChange}
              />
            </Grid>

              <Grid item xs={12} sm={2}>
              <TextField
                fullWidth
                label="Refill"
                name="refill"
                value={formData.refill}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                fullWidth
                label="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
              />
              </Grid>
          </Grid>
          <Button variant="contained" className="Button" type="submit">
            Submit
          </Button>
        </form>

        {/* Bottom Box with DataGrid */}
        <div  className="DataGridContainer">
          <DataGrid
            rows={gridData}
            columns={columns}
            pageSize={10}
            autoHeight
            disableSelectionOnClick
            onRowClick={(selection) => {
              console.log('Selection:', selection.id);
              setSelectedRowId(selection.id);  
              
            }}

            // onRoonSelectionModelChangewClick={(selection) => {
            //   console.log('Selection:', selection.id);
            //   setSelectedRowId(selection.id);  
              
            // }}
         
          />
        </div>
        {successMessage && <div style={{ color: 'green', marginTop: '10px' }}>{successMessage}</div>}
      </Paper>
    </Container>
  );
};

export default MedicationForm;
