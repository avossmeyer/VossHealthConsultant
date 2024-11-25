import BookingForm from '../components/booking/BookingForm'

export default function BookingPage() {
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Schedule a Consultation</h1>
      <BookingForm />
    </main>
  )
}