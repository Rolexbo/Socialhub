import { Utensils, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function GastronomySection() {
  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center py-8">
      <div className="space-y-4">
        <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
          <Utensils className="mr-1 h-4 w-4" />
          <span>Gastronomía</span>
        </div>
        <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Restaurante</h3>
        <p className="text-muted-foreground">
          Un restaurante que funciona durante todo el día, sirviendo brunch y comidas. Nuestra propuesta gastronómica es
          de comida de fusión, combinando sabores locales con influencias internacionales, lo que lo hace atractivo para
          un público sofisticado y explorador.
        </p>
        <p className="text-muted-foreground">
          Ofrecemos una experiencia culinaria única con ingredientes frescos y de alta calidad, preparados por nuestros
          chefs expertos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button>Ver Menú</Button>
          <Button variant="outline">Reservar Mesa</Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Brunch</CardTitle>
            <CardDescription>Disponible todo el día</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-square relative overflow-hidden rounded-md">
              <img src="/placeholder.svg?height=300&width=300" alt="Brunch" className="object-cover w-full h-full" />
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
              Ver Opciones
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Fusión Gourmet</CardTitle>
            <CardDescription>Sabores internacionales</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-square relative overflow-hidden rounded-md">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Comida Gourmet"
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
              Ver Carta
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
