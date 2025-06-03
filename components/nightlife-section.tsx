import { Music, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function NightlifeSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center py-8">
      <div className="space-y-4">
        <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
          <Music className="mr-1 h-4 w-4" />
          <span>Vida Nocturna</span>
        </div>
        <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Discoteca & Bar</h3>
        <p className="text-muted-foreground">
          Un área que se convierte en un club nocturno a partir de cierta hora, con DJs locales e internacionales que
          ofrecen música variada de calidad (electrónica, rock alternativo, música latina, etc.).
        </p>
        <p className="text-muted-foreground">
          Durante la noche, el bar sirve bebidas de alta calidad y opciones de comida. En noches más tranquilas,
          ofrecemos música en vivo de artistas jóvenes o noches de karaoke.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button>Ver Eventos</Button>
          <Button variant="outline">Reservar VIP</Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>DJs Residentes</CardTitle>
            <CardDescription>Música de alta calidad</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-square relative overflow-hidden rounded-md">
              <img src="/placeholder.svg?height=300&width=300" alt="DJ" className="object-cover w-full h-full" />
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
              Ver Lineup
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Cócteles Premium</CardTitle>
            <CardDescription>Bebidas de alta calidad</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-square relative overflow-hidden rounded-md">
              <img src="/placeholder.svg?height=300&width=300" alt="Cócteles" className="object-cover w-full h-full" />
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
