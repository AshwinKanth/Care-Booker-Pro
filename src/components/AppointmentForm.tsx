import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { Doctor } from '../types';

interface Props {
  doctor: Doctor;
  onClose: () => void;
}

const AppointmentForm = ({ doctor, onClose }: Props) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
  });
  const { setAppointment } = useAppContext();
  const navigate = useNavigate();

  const timeSlots = ['09:30', '10:00', '10:30', '11:00', '11:30', '12:00'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.date || !form.time) {
      toast.error('Please fill all the fields');
      return;
    }
    const dateTime = `${form.date}T${form.time}`;
    setAppointment({
      doctorId: doctor.id,
      patientName: form.name,
      email: form.email,
      dateTime,
    });
    toast.success('Your appointment is confirmed!');
    navigate('/success');
  };

  return (
    <div className="modal show d-block" tabIndex={-1} style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0 shadow-lg">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">Appointment Details</h5>
            <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
          </div>

          <div className="modal-body">
             <div className="d-flex align-items-center mb-4">
              <img src={doctor.image} className="rounded-circle me-3" alt={doctor.name} width={70} height={70} />
              <div>
                <h5 className="mb-0">{doctor.name}</h5>
                <p className="mb-0 text-muted">{doctor.specialization}</p>
                <small className="text-secondary">Medical Center Downtown</small>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <h6 className="mb-3">Patient Information</h6>

              <div className="mb-3">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address *</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Preferred Date *</label>
                <input
                  type="date"
                  className="form-control"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Available Time Slots *</label>
                <select
                  className="form-select"
                  value={form.time}
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                  required
                >
                  <option value="">Select a time slot</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-outline-secondary me-2" onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Confirm Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
