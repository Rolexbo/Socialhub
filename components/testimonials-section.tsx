import { Star } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">Experiencias memorables en Social Hub 360</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="rounded-full overflow-hidden h-10 w-10">
                  <img src="/placeholder.svg?height=40&width=40" alt="Avatar" className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="font-medium">María González</p>
                  <CardDescription>Empresaria</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                "Social Hub 360 es el lugar perfecto para reuniones de negocios durante el día y para relajarse con
                amigos por la noche. La versatilidad del espacio es impresionante."
              </p>
            </CardContent>
            <CardFooter>
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-current text-yellow-500" />
                <Star className="h-4 w-4 fill-current text-yellow-500" />
                <Star className="h-4 w-4 fill-current text-yellow-500" />
                <Star className="h-4 w-4 fill-current text-yellow-500" />
                <Star className="h-4 w-4 fill-current text-yellow-500" />
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="rounded-full overflow-hidden h-10 w-10">
                  <img src="/placeholder.svg?height=40&width=40" alt="Avatar" className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="font-medium">Carlos Rodríguez</p>
                  <CardDescription>DJ Local</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                "El sistema de sonido y la atmósfera de Social Hub 360 son incomparables. Como DJ, es uno de mis lugares
                favoritos para tocar en Santa Cruz. El público siempre responde increíblemente."
              </p>
            </CardContent>
            <CardFooter>
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-current text-yellow-500" />
                <Star className="h-4 w-4 fill-current text-yellow-500" />
                <Star className="h-4 w-4 fill-current text-yellow-500" />
                <Star className="h-4 w-4 fill-current text-yellow-500" />
                <Star className="h-4 w-4 fill-current text-yellow-500" />
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="rounded-full overflow-hidden h-10 w-10">
                  <img src="/placeholder.svg?height=40&width=40" alt="Avatar" className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="font-medium">Laura Méndez</p>
                  <CardDescription>Influencer</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                "Organicé mi evento de lanzamiento en Social Hub 360 y fue todo un éxito. El equipo se encargó de cada
                detalle y mis seguidores quedaron encantados con el lugar. Definitivamente volveré."
              </p>
            </CardContent>
            <CardFooter>
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-current text-yellow-500" />
                <Star className="h-4 w-4 fill-current text-yellow-500" />
                <Star className="h-4 w-4 fill-current text-yellow-500" />
                <Star className="h-4 w-4 fill-current text-yellow-500" />
                <Star className="h-4 w-4 fill-current text-yellow-500" />
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
