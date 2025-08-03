import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { Doctor } from '../types';
import { useState } from 'react';

const Home = () => {
  const { doctors }: { doctors: Doctor[] } = useAppContext();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSpecialization(e.target.value);
  };

  const filteredDoctors = doctors.filter((doc: Doctor) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.specialization.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      selectedSpecialization === '' || selectedSpecialization === 'All'
        ? true
        : doc.specialization === selectedSpecialization;

    return matchesSearch && matchesFilter;
  });

  const uniqueSpecializations = Array.from(new Set(doctors.map((doc: Doctor) => doc.specialization)));

  return (
    <div className="container py-5">
      <h2 className="text-center mb-2 fw-bold text-info">Find Your Doctor</h2>
      <p className="text-center text-muted mb-5">
        Book appointments with qualified healthcare professionals at your convenience
      </p>

      <div className="row mb-4">
        <div className="col-md-8 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search doctors by name or specialization..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="col-md-4">
          <select className="form-select" onChange={handleFilter}>
            <option value="">Filter by specialization</option>
            <option value="All">All Specializations</option>
            {uniqueSpecializations.map((spec: string) => (
              <option key={spec} value={spec}>
                {spec}
              </option>
            ))}
          </select>
        </div>
      </div>

      <h4 className="mb-3">Available Doctors</h4>
      <p className="text-muted">{filteredDoctors.length} doctors found</p>

      <div className="row">
        {filteredDoctors.map((doc: Doctor) => (
          <div key={doc.id} className="col-md-6 col-xl-4 mb-4">
            <div className="card h-100 shadow-sm p-3">
              <div className="d-flex align-items-center gap-3 mb-3">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="rounded-circle"
                  style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                />
                <div>
                  <h5 className="mb-0">{doc.name}</h5>
                  <small className="text-info">{doc.specialization}</small>
                </div>
              </div>

              <div className="mb-2">
                <span
                  className={`badge bg-${
                    doc.status === 'Available Today'
                      ? 'success'
                      : doc.status === 'Limited Availability'
                      ? 'warning text-dark'
                      : 'danger'
                  }`}
                >
                  {doc.status}
                </span>
              </div>

              <div className="text-muted small mb-2">
                ⭐ {doc.rating} &nbsp; • &nbsp; {doc.clinic} &nbsp; • &nbsp; {doc.experience}y exp
              </div>

              <p className="text-muted small mb-3">{doc.description}</p>

              <button
                className="btn btn-info text-white w-100"
                onClick={() => navigate(`/doctor/${doc.id}`)}
              >
                View Profile & Book
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
