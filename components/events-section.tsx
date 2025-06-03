import { CalendarDays, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function EventsSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center py-8">
      <div className="space-y-4">
        <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
          <CalendarDays className="mr-1 h-4 w-4" />
          <span>Eventos</span>
        </div>
        <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Eventos Culturales y Temáticos</h3>
        <p className="text-muted-foreground">
          Un espacio modular que puede ser utilizado para organizar eventos como conciertos pequeños, desfiles o eventos
          empresariales. También puede ofrecerse para eventos privados como cumpleaños, reuniones y celebraciones, con
          opciones de catering.
        </p>
        <p className="text-muted-foreground">
          Nuestro equipo de profesionales se encarga de que cada evento sea único y memorable, adaptándose a las
          necesidades específicas de cada cliente.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button>Ver Calendario</Button>
          <Button variant="outline">Organizar Evento</Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Eventos Temáticos</CardTitle>
            <CardDescription>Noches especiales</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-square relative overflow-hidden rounded-md">
              <img src="/images/group-applauding.jpg" alt="Eventos Temáticos" className="object-cover w-full h-full" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-current text-yellow-500" />
              <Star className="h-4 w-4 fill-current text-yellow-500" />
              <Star className="h-4 w-4 fill-current text-yellow-500" />
              <Star className="h-4 w-4 fill-current text-yellow-500" />
              <Star className="h-4 w-4 fill-current text-yellow-500" />
            </div>
            <Button variant="ghost" size="sm">
              Ver Próximos
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Eventos Corporativos</CardTitle>
            <CardDescription>Networking profesional</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-square relative overflow-hidden rounded-md">
              <img
                src="/images/corporate-event.jpg"
                alt="Eventos Corporativos"
                className="object-cover w-full h-full"
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-current text-yellow-500" />
              <Star className="h-4 w-4 fill-current text-yellow-500" />
              <Star className="h-4 w-4 fill-current text-yellow-500" />
              <Star className="h-4 w-4 fill-current text-yellow-500" />
              <Star className="h-4 w-4 fill-current text-yellow-500" />
            </div>
            <Button variant="ghost" size="sm">
              Cotizar
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
