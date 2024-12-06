import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="border-b">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">City Barbershop</Link>
          <ul className="hidden md:flex space-x-4">
            <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
            <li><Link href="/barbers" className="hover:text-primary transition-colors">Our Barbers</Link></li>
            <li><Link href="/appointments" className="hover:text-primary transition-colors">My Appointments</Link></li>
          </ul>
          <Button asChild>
            <Link href="/book">Book Now</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}

