import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">David for Mayor</h1>
          <p className="text-xl">San Francisco 2025</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">My Background</h2>
          <Card>
            <CardContent className="prose">
              <p>
                As a long-time resident of San Francisco, I've dedicated my career to public service and community development. With 15 years of experience in city planning and 5 years on the city council, I understand the unique challenges and opportunities our city faces.
              </p>
              <p>
                My background in urban development and passion for sustainable growth make me the ideal candidate to lead San Francisco into a brighter future.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">My Platform</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Affordable Housing</CardTitle>
              </CardHeader>
              <CardContent>
                Implement policies to increase affordable housing options and address homelessness.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Sustainable Transportation</CardTitle>
              </CardHeader>
              <CardContent>
                Expand public transit, bike lanes, and promote eco-friendly transportation alternatives.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Economic Growth</CardTitle>
              </CardHeader>
              <CardContent>
                Support local businesses and attract new industries to create jobs and boost our economy.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Environmental Protection</CardTitle>
              </CardHeader>
              <CardContent>
                Implement green initiatives and work towards making San Francisco a carbon-neutral city.
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <Card>
            <CardContent>
              <form 
                className="space-y-4" 
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const formData = new FormData(form);
                  
                  try {
                    const response = await fetch('/api/contact', {
                      method: 'POST',
                      body: JSON.stringify({
                        name: formData.get('name'),
                        email: formData.get('email'),
                        message: formData.get('message'),
                      }),
                      headers: {
                        'Content-Type': 'application/json',
                      },
                    });
                    
                    if (!response.ok) {
                      throw new Error('Failed to send message');
                    }
                    
                    // Clear the form on success
                    form.reset();
                    alert('Message sent successfully!');
                  } catch (err) {
                    console.error('Error sending message:', err);
                    alert('Failed to send message. Please try again.');
                  }
                }}
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <Input id="name" name="name" required placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    required 
                    placeholder="your@email.com" 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    required 
                    placeholder="Your message" 
                  />
                </div>
                <Button type="submit">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <p>&copy; 2024 David for SF Mayor Campaign</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <TwitterIcon className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <LinkedinIcon className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <GithubIcon className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

