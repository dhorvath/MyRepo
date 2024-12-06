import { Instagram, Twitter, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-8">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-6">
            <Link 
              href="https://instagram.com" 
              target="_blank"
              className="hover:text-primary transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-6 h-6" />
            </Link>
            <Link 
              href="https://twitter.com" 
              target="_blank"
              className="hover:text-primary transition-colors"
              aria-label="Follow us on Twitter"
            >
              <Twitter className="w-6 h-6" />
            </Link>
            <Link 
              href="https://linkedin.com" 
              target="_blank"
              className="hover:text-primary transition-colors"
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
          </div>
          <p>&copy; 2023 City Barbershop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

