import { useNavigate } from 'react-router-dom';

const BookingSuccess = () => {
  const navigate = useNavigate();
  return (
    <div className="container text-center my-5">
      <h2 className="text-success mb-3">🎉 Appointment Confirmed!</h2>
      <p className="lead">You'll receive an email confirmation shortly.</p>
      <button className="btn btn-primary mt-4" onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
};

export default BookingSuccess;