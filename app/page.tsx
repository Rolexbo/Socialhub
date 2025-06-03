import Link from "next/link"
import { CalendarDays, Clock, MapPin, Music, Utensils } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import EventsSection from "@/components/events-section"
import GastronomySection from "@/components/gastronomy-section"
import Hero from "@/components/hero"
import NightlifeSection from "@/components/nightlife-section"
import SocialSpacesSection from "@/components/social-spaces-section"
import TestimonialsSection from "@/components/testimonials-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
                Social Hub 360
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              Nosotros
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-primary">
              Servicios
            </Link>
            <Link href="#events" className="text-sm font-medium hover:text-primary">
              Eventos
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contacto
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild>
              <Link href="#reservation">Reservar</Link>
            </Button>
            <Button variant="outline" className="md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <Hero />

        <section id="about" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sobre Social Hub 360</h2>
                <p className="text-muted-foreground md:text-xl">
                  Social Hub 360 es un espacio dinámico y flexible que funciona durante todo el día y la noche,
                  adaptándose a las diferentes demandas de nuestros clientes.
                </p>
                <p className="text-muted-foreground">
                  Somos un concepto innovador y multifuncional que ofrece algo para todos, especialmente para personas
                  entre 25 y 50 años. Combinamos una experiencia gastronómica variada, entretenimiento nocturno, eventos
                  de calidad y espacios para socialización en un mismo lugar.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button asChild>
                    <Link href="#services">Nuestros Servicios</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#contact">Contáctanos</Link>
                  </Button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Social Hub 360"
                  className="aspect-video object-cover w-full rounded-lg"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Nuestros Servicios</h2>
              <p className="text-muted-foreground md:text-xl max-w-[800px]">
                Un espacio multifuncional que se adapta a tus necesidades a lo largo del día
              </p>
            </div>
            <Tabs defaultValue="nightlife" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="nightlife" className="flex items-center gap-2">
                  <Music className="h-4 w-4" />
                  <span>Vida Nocturna</span>
                </TabsTrigger>
                <TabsTrigger value="gastronomy" className="flex items-center gap-2">
                  <Utensils className="h-4 w-4" />
                  <span>Gastronomía</span>
                </TabsTrigger>
                <TabsTrigger value="events" className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  <span>Eventos</span>
                </TabsTrigger>
                <TabsTrigger value="social" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Espacios Sociales</span>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="nightlife">
                <NightlifeSection />
              </TabsContent>
              <TabsContent value="gastronomy">
                <GastronomySection />
              </TabsContent>
              <TabsContent value="events">
                <EventsSection />
              </TabsContent>
              <TabsContent value="social">
                <SocialSpacesSection />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="events" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Eventos Temáticos</h2>
              <p className="text-muted-foreground md:text-xl max-w-[800px]">
                Cada día de la semana tiene su propio ambiente y estilo musical
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-all">
                <div className="absolute inset-0 bg-gradient-to-b from-rose-500/20 to-rose-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Lunes de Despecho</h3>
                  <Clock className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground mb-4">
                  Conecta con tus emociones y comparte experiencias de desamor con baladas, boleros y rancheras.
                </p>
                <Button variant="outline" className="w-full">
                  Ver Detalles
                </Button>
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-all">
                <div className="absolute inset-0 bg-gradient-to-b from-amber-500/20 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Martes de Nostalgia</h3>
                  <Clock className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground mb-4">
                  Viaja en el tiempo con los mejores clásicos de los 70s, 80s y 90s que evocan recuerdos inolvidables.
                </p>
                <Button variant="outline" className="w-full">
                  Ver Detalles
                </Button>
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-all">
                <div className="absolute inset-0 bg-gradient-to-b from-green-500/20 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Miércoles Latinos</h3>
                  <Clock className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground mb-4">
                  Muévete al ritmo de la salsa, bachata, reguetón y merengue en una noche llena de sabor latino.
                </p>
                <Button variant="outline" className="w-full">
                  Ver Detalles
                </Button>
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-all">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Jueves de Rock</h3>
                  <Clock className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground mb-4">
                  Disfruta de lo mejor del rock y música alternativa en un ambiente más reflexivo y relajado.
                </p>
                <Button variant="outline" className="w-full">
                  Ver Detalles
                </Button>
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-all">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Viernes de Fiesta</h3>
                  <Clock className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground mb-4">
                  Comienza el fin de semana con máxima energía, música dance, pop comercial y electrónica.
                </p>
                <Button variant="outline" className="w-full">
                  Ver Detalles
                </Button>
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-all">
                <div className="absolute inset-0 bg-gradient-to-b from-pink-500/20 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Eventos Especiales</h3>
                  <CalendarDays className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground mb-4">
                  Descubre nuestros eventos exclusivos, desfiles, conciertos y celebraciones temáticas.
                </p>
                <Button variant="outline" className="w-full">
                  Ver Calendario
                </Button>
              </div>
            </div>
          </div>
        </section>

        <TestimonialsSection />

        <section id="reservation" className="py-16 md:py-24">
          <div className="container">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Haz tu Reserva</h2>
                <p className="text-muted-foreground md:text-xl">
                  Reserva tu mesa, evento privado o área VIP en Social Hub 360
                </p>
                <form className="space-y-4 mt-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Nombre
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="date"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Fecha
                      </label>
                      <input
                        id="date"
                        type="date"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="time"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Hora
                      </label>
                      <input
                        id="time"
                        type="time"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="guests"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Número de personas
                    </label>
                    <input
                      id="guests"
                      type="number"
                      min="1"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="4"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Detalles adicionales de tu reserva"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Enviar Reserva
                  </Button>
                </form>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Reserva en Social Hub 360"
                  className="aspect-video object-cover w-full rounded-lg"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Contáctanos</h2>
              <p className="text-muted-foreground md:text-xl max-w-[800px]">
                Estamos ubicados en una zona estratégica de Santa Cruz de la Sierra
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Mapa de ubicación"
                  className="aspect-video object-cover w-full rounded-lg"
                  width={800}
                  height={600}
                />
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Ubicación</h3>
                  <p className="text-muted-foreground">
                    Av. Equipetrol, entre 2do y 3er anillo
                    <br />
                    Santa Cruz de la Sierra, Bolivia
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Horarios</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="font-medium">Lunes - Jueves</p>
                      <p className="text-muted-foreground">12:00 - 02:00</p>
                    </div>
                    <div>
                      <p className="font-medium">Viernes - Sábado</p>
                      <p className="text-muted-foreground">12:00 - 04:00</p>
                    </div>
                    <div>
                      <p className="font-medium">Domingo</p>
                      <p className="text-muted-foreground">12:00 - 00:00</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Contacto</h3>
                  <p className="text-muted-foreground">
                    Teléfono: +591 3 123 4567
                    <br />
                    Email: info@socialhub360.com
                  </p>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-8 md:py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
              Social Hub 360
            </span>
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2025 Social Hub 360. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span className="sr-only">Facebook</span>
            </Button>
            <Button variant="ghost" size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="sr-only">Instagram</span>
            </Button>
            <Button variant="ghost" size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
