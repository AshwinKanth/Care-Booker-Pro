import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import AppointmentForm from '../components/AppointmentForm';
import { Doctor } from '../types';

const DoctorProfile = () => {
  const { id } = useParams();
  const { doctors } = useAppContext();
  const doctor = doctors.find((doc: Doctor) => doc.id === id);

  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  if (!doctor) return <p className="text-center mt-5">Doctor not found</p>;

  return (
    <div className="container my-5">
      <button className="btn btn-outline-secondary mb-4" onClick={() => navigate(-1)}>← Back</button>
      <div className="row g-4">
        <div className="col-md-8">
          <div className="card shadow p-4 h-100">
            <div className="row g-4 align-items-center">
              <div className="col-md-4 text-center">
                <img src={doctor.image} className="img-fluid rounded-circle w-75" alt={doctor.name} />
              </div>
              <div className="col-md-8">
                <h3 className="mb-3">{doctor.name}</h3>
                <p><strong>Specialization:</strong> {doctor.specialization}</p>
                <p>
                  <strong>Status:</strong>{' '}
                  <span className={`badge bg-${doctor.status === 'Available Today' ? 'success' : doctor.status === 'Fully Booked' ? 'danger' : 'warning'}`}>
                    {doctor.status}
                  </span>
                </p>
                <p><strong>Bio:</strong> {doctor.bio}</p>
                <button className="btn btn-success mt-3" onClick={() => setShowForm(true)}>Book Appointment</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow p-3">
            <h5 className="mb-3">Quick Info</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><strong>Name:</strong> {doctor.name}</li>
              <li className="list-group-item"><strong>Specialization:</strong> {doctor.specialization}</li>
              <li className="list-group-item"><strong>Experience:</strong> {doctor.experience} years</li>
              <li className="list-group-item"><strong>Rating:</strong> {doctor.rating}</li>
              <li className="list-group-item"><strong>Location:</strong> {doctor.clinic}</li>
              <li className="list-group-item"><strong>Status:</strong> {doctor.status}</li>
              <li className="list-group-item"><strong>Available:</strong> {doctor.status === 'Available Today' ? 'Yes' : 'No'}</li>
            </ul>
          </div>
        </div>
      </div>

      {showForm && <AppointmentForm doctor={doctor} onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default DoctorProfile;
