import React from 'react';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
export default function App() {
  document.title="TextAl | Page not found"
  return (
    <div className="container d-flex justify-content-center my-4">
      <Stack sx={{ width: '90%' }} spacing={2}>
        <Alert severity="error">Error 404! This page doesn't exist.</Alert>
        <Link to="/TextAl" className="d-flex justify-content-center">
          <Button variant="contained">Go back to Home</Button>
        </Link>
      </Stack>
    </div>
  );
}
