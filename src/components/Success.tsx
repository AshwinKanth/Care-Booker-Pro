import React from 'react';
import { Link } from 'react-router-dom';

export default function Success() {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100 text-center">
      <div>
        <h1 className="text-success fw-bold mb-3">🎉 Appointment Confirmed!</h1>
        <p className="lead">Thank you for using Care Booker Pro.</p>
        <Link to="/" className="btn btn-outline-primary mt-4">Back to Home</Link>
      </div>
    </div>
  );
}