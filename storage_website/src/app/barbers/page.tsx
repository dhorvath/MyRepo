import Image from 'next/image'
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const barbers = [
  { 
    name: 'John Doe', 
    specialty: 'Classic Cuts & Styling', 
    image: '/placeholder.svg?height=400&width=400',
    bio: 'With over 15 years of experience, John is a master of classic barbering techniques. His attention to detail and steady hand make him the go-to for traditional cuts and hot towel shaves.',
    favoriteTool: 'Straight razor'
  },
  { 
    name: 'Jane Smith', 
    specialty: 'Modern Styles & Color', 
    image: '/placeholder.svg?height=400&width=400',
    bio: 'Jane brings a fresh perspective to men\'s grooming with her expertise in modern styling and coloring techniques. She\'s known for her creative fades and on-trend looks.',
    favoriteTool: 'Precision scissors'
  },
  { 
    name: 'Mike Johnson', 
    specialty: 'Beard Grooming & Shaves', 
    image: '/placeholder.svg?height=400&width=400',
    bio: 'Mike is our beard guru. With a passion for facial hair styling, he can transform any beard into a work of art. His luxury shaves are an experience not to be missed.',
    favoriteTool: 'Beard trimmer'
  },
  { 
    name: 'Sarah Williams', 
    specialty: 'Precision Cuts & Fades', 
    image: '/placeholder.svg?height=400&width=400',
    bio: 'Sarah is a wizard with clippers, creating crisp lines and smooth fades. Her precision cuts are popular among clients looking for a sharp, clean look.',
    favoriteTool: 'Professional clippers'
  },
]

export default function Barbers() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Expert Barbers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {barbers.map((barber) => (
          <Card key={barber.name} className="overflow-hidden transition-all hover:shadow-lg">
            <CardHeader className="p-0">
              <Image src={barber.image} alt={barber.name} width={400} height={400} className="object-cover w-full h-64" />
            </CardHeader>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-2">{barber.name}</h2>
              <p className="text-lg font-medium text-primary mb-4">{barber.specialty}</p>
              <p className="text-muted-foreground mb-4">{barber.bio}</p>
              <p className="text-sm font-semibold">Favorite Tool: {barber.favoriteTool}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

