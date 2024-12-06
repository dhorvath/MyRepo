import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-5xl font-bold mb-6 mt-20">Welcome to City Barbershop</h1>
      <p className="text-xl mb-12 max-w-2xl">Experience the art of grooming in the heart of the city. Our expert barbers blend traditional techniques with modern style for a cut above the rest.</p>
      <Button asChild size="lg" className="mb-20">
        <Link href="/book">Book Your Appointment</Link>
      </Button>
      <div className="grid md:grid-cols-2 gap-12 text-left max-w-4xl w-full">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b">
                <td className="py-2">Address:</td>
                <td className="py-2">123 Main Street</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">City:</td>
                <td className="py-2">Cityville</td>
              </tr>
              <tr>
                <td className="py-2">State & ZIP:</td>
                <td className="py-2">State 12345</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Hours of Operation</h2>
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b">
                <td className="py-2">Monday - Friday:</td>
                <td className="py-2">9am - 7pm</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Saturday:</td>
                <td className="py-2">10am - 6pm</td>
              </tr>
              <tr>
                <td className="py-2">Sunday:</td>
                <td className="py-2">Closed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

