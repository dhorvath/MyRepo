'use client'

import { useForm, ValidationError } from '@formspree/react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function BookAppointment() {
  // Replace "xyzyovkl" with your actual form ID from Formspree
  const [state, handleSubmit] = useForm("xyzyovkl");

  if (state.succeeded) {
    return (
      <div className="max-w-md mx-auto">
        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-lg">Thanks for booking your appointment! We&apos;ll be in touch soon.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">Book Your Appointment</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" name="email" required />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="date" name="date" required />
              <ValidationError prefix="Date" field="date" errors={state.errors} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Time</Label>
              <Input id="time" type="time" name="time" required />
              <ValidationError prefix="Time" field="time" errors={state.errors} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="barber">Barber</Label>
              <Select name="barber">
                <SelectTrigger>
                  <SelectValue placeholder="Select a barber" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="john">John Doe</SelectItem>
                  <SelectItem value="jane">Jane Smith</SelectItem>
                  <SelectItem value="mike">Mike Johnson</SelectItem>
                  <SelectItem value="sarah">Sarah Williams</SelectItem>
                </SelectContent>
              </Select>
              <ValidationError prefix="Barber" field="barber" errors={state.errors} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="service">Service</Label>
              <Select name="service">
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="signature">Signature Haircut</SelectItem>
                  <SelectItem value="luxury">Luxury Shave</SelectItem>
                  <SelectItem value="beard">Beard Sculpting</SelectItem>
                  <SelectItem value="color">Color Refresh</SelectItem>
                  <SelectItem value="scalp">Relaxation Scalp Massage</SelectItem>
                  <SelectItem value="junior">Junior Gentlemen&apos;s Cut</SelectItem>
                  <SelectItem value="fatherSon">Father & Son Package</SelectItem>
                  <SelectItem value="fullExperience">The Full Experience</SelectItem>
                </SelectContent>
              </Select>
              <ValidationError prefix="Service" field="service" errors={state.errors} />
            </div>
            <Button type="submit" className="w-full" disabled={state.submitting}>
              {state.submitting ? "Booking..." : "Book Appointment"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

