import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// This is mock data. In a real application, you'd fetch this from your backend.
const appointments = [
  { id: 1, date: '2023-06-15', time: '10:00', barber: 'John Doe', service: 'Signature Haircut' },
  { id: 2, date: '2023-06-20', time: '14:30', barber: 'Jane Smith', service: 'Luxury Shave' },
  { id: 3, date: '2023-06-25', time: '11:00', barber: 'Mike Johnson', service: 'Beard Sculpting' },
]

export default function Appointments() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center">My Appointments</h1>
      <div className="space-y-6">
        {appointments.map((appointment) => (
          <Card key={appointment.id} className="overflow-hidden transition-all hover:shadow-lg">
            <CardHeader className="bg-primary text-primary-foreground">
              <CardTitle>{new Date(appointment.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} at {appointment.time}</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-lg mb-2"><strong>Barber:</strong> {appointment.barber}</p>
              <p className="text-lg"><strong>Service:</strong> {appointment.service}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

