import { MapPin, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function SocialSpacesSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center py-8">
      <div className="space-y-4">
        <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
          <MapPin className="mr-1 h-4 w-4" />
          <span>Espacios Sociales</span>
        </div>
        <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Áreas de Relajación y Entretenimiento</h3>
        <p className="text-muted-foreground">
          Zonas de "lounge" con asientos cómodos donde los grupos de amigos pueden reunirse para socializar en un
          ambiente relajado. Aquí ofrecemos juegos de mesa, noches de trivia y otras actividades lúdicas.
        </p>
        <p className="text-muted-foreground">
          Pequeñas áreas privadas que los grupos pueden reservar para reuniones más íntimas, donde se ofrecen servicios
          personalizados de bebidas y comida. Eventos semanales temáticos como "Sala de Despecho" o "Karaoke Night" para
          fomentar la interacción social entre grupos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button>Reservar Área</Button>
          <Button variant="outline">Ver Actividades</Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Lounge VIP</CardTitle>
            <CardDescription>Espacios exclusivos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-square relative overflow-hidden rounded-md">
              <img src="/images/daytime-lounge.jpg" alt="Lounge VIP" className="object-cover w-full h-full" />
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
              Reservar
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Ambiente Nocturno</CardTitle>
            <CardDescription>Socialización nocturna</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-square relative overflow-hidden rounded-md">
              <img src="/images/nightlife-bar.jpg" alt="Sala de Juegos" className="object-cover w-full h-full" />
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
              Ver Juegos
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
