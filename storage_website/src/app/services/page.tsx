import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  { 
    name: 'Signature Haircut', 
    price: '$35', 
    description: 'Precision cut tailored to your style and face shape. Includes consultation, shampoo, cut, and style.',
    duration: '45 minutes'
  },
  { 
    name: 'Luxury Shave', 
    price: '$25', 
    description: 'Traditional hot towel and straight razor shave for the smoothest finish. Includes pre-shave oil and after-shave balm.',
    duration: '30 minutes'
  },
  { 
    name: 'Beard Sculpting', 
    price: '$20', 
    description: 'Expert shaping and maintenance for your beard. Includes trim, shape, and beard oil application.',
    duration: '20 minutes'
  },
  { 
    name: 'Color Refresh', 
    price: '$60', 
    description: 'Revitalize your look with our premium coloring service. Includes consultation, color application, and style.',
    duration: '90 minutes'
  },
  { 
    name: 'Relaxation Scalp Massage', 
    price: '$30', 
    description: 'Indulgent scalp massage to melt away stress. Uses premium oils for hair and scalp health.',
    duration: '20 minutes'
  },
  { 
    name: 'Junior Gentlemen\'s Cut', 
    price: '$25', 
    description: 'Stylish cuts for our younger clientele (12 and under). Includes consultation and style tips for parents.',
    duration: '30 minutes'
  },
  {
    name: 'Father & Son Package',
    price: '$55',
    description: 'Bonding time with style. Includes a Signature Haircut for dad and a Junior Gentlemen\'s Cut for son.',
    duration: '75 minutes'
  },
  {
    name: 'The Full Experience',
    price: '$80',
    description: 'Our ultimate package: Signature Haircut, Luxury Shave, and Relaxation Scalp Massage.',
    duration: '90 minutes'
  }
]

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <Card key={service.name} className="overflow-hidden transition-all hover:shadow-lg">
            <CardHeader className="bg-primary text-primary-foreground">
              <CardTitle className="text-2xl">{service.name}</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-3xl font-bold mb-4">{service.price}</p>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <p className="text-sm font-semibold">Duration: {service.duration}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

