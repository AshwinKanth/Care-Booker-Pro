export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  status: 'Available Today' | 'Limited Availability' | 'Fully Booked' | 'On Leave';
  image: string;
  rating: number;
  clinic: string;
  experience: number;
  description: string;
}


export interface Appointment {
  doctorId: string;
  patientName: string;
  email: string;
  dateTime: string;
}

