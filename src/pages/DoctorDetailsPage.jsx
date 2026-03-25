import { Navigate, useParams } from 'react-router-dom'
import { getDoctorBookingHref, getDoctorById } from '../data/doctors'

function DoctorDetailsPage() {
  const { doctorId } = useParams()
  const doctor = doctorId ? getDoctorById(doctorId) : null

  return <Navigate to={doctor ? getDoctorBookingHref(doctor.id) : '/book-appointment'} replace />
}

export default DoctorDetailsPage
