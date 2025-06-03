import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-rose-500/20 via-purple-500/20 to-blue-500/20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Social Hub 360</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Un espacio dinámico y flexible que se adapta a tus necesidades durante todo el día y la noche
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild>
                <Link href="#services">
                  Descubrir <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#reservation">Reservar Ahora</Link>
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <span className="font-medium">Restaurante</span>
              </div>
              <div className="h-1 w-1 rounded-full bg-border"></div>
              <div className="flex items-center space-x-1">
                <span className="font-medium">Bar & Discoteca</span>
              </div>
              <div className="h-1 w-1 rounded-full bg-border"></div>
              <div className="flex items-center space-x-1">
                <span className="font-medium">Eventos</span>
              </div>
            </div>
          </div>
          <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last">
            <img
              alt="Social Hub 360"
              className="aspect-video object-cover w-full rounded-xl"
              height="310"
              src="/images/social-lounge.jpg"
              width="550"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
