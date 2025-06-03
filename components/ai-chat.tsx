"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

const AI_RESPONSES = {
  horarios:
    "Nuestros horarios son: Lunes a Jueves de 12:00 a 02:00, Viernes y Sábados de 12:00 a 04:00, y Domingos de 12:00 a 00:00. ¡Te esperamos!",
  ubicacion:
    "Estamos ubicados en Av. Equipetrol, entre 2do y 3er anillo, Santa Cruz de la Sierra, Bolivia. Es una zona muy accesible y con buen estacionamiento.",
  reservas:
    "Puedes hacer tu reserva completando el formulario en nuestra página web o llamándonos al +591 3 123 4567. También puedes escribirnos a info@socialhub360.com",
  eventos:
    "Tenemos eventos temáticos toda la semana: Lunes de Despecho, Martes de Nostalgia, Miércoles Latinos, Jueves de Rock y Viernes de Fiesta. También organizamos eventos privados y corporativos.",
  menu: "Ofrecemos gastronomía de fusión combinando sabores locales con influencias internacionales. Tenemos brunch disponible todo el día y una carta variada para almuerzo y cena.",
  precios:
    "Nuestros precios son competitivos y varían según el servicio. Para eventos privados y cotizaciones específicas, contáctanos directamente. Ofrecemos promociones especiales en días temáticos.",
  musica:
    "Contamos con DJs residentes profesionales y música variada: electrónica, rock alternativo, música latina, pop, y más. Cada día tiene su estilo musical específico.",
  capacidad:
    "Tenemos diferentes espacios que se adaptan desde grupos pequeños hasta eventos de mayor capacidad. Contamos con áreas VIP, lounge y espacios para eventos corporativos.",
  default:
    "¡Hola! Soy el asistente virtual de Social Hub 360. Puedo ayudarte con información sobre horarios, ubicación, reservas, eventos, menú y más. ¿En qué puedo asistirte?",
}

function getAIResponse(userMessage: string): string {
  const message = userMessage.toLowerCase()

  if (message.includes("horario") || message.includes("hora") || message.includes("abierto")) {
    return AI_RESPONSES.horarios
  }
  if (message.includes("ubicacion") || message.includes("direccion") || message.includes("donde")) {
    return AI_RESPONSES.ubicacion
  }
  if (message.includes("reserva") || message.includes("reservar") || message.includes("mesa")) {
    return AI_RESPONSES.reservas
  }
  if (message.includes("evento") || message.includes("fiesta") || message.includes("celebra")) {
    return AI_RESPONSES.eventos
  }
  if (
    message.includes("menu") ||
    message.includes("comida") ||
    message.includes("plato") ||
    message.includes("comer")
  ) {
    return AI_RESPONSES.menu
  }
  if (message.includes("precio") || message.includes("costo") || message.includes("cuanto")) {
    return AI_RESPONSES.precios
  }
  if (message.includes("musica") || message.includes("dj") || message.includes("cancion")) {
    return AI_RESPONSES.musica
  }
  if (message.includes("capacidad") || message.includes("personas") || message.includes("grupo")) {
    return AI_RESPONSES.capacidad
  }
  if (message.includes("hola") || message.includes("ayuda") || message.includes("info")) {
    return AI_RESPONSES.default
  }

  return "Gracias por tu consulta. Para información más específica, puedes contactarnos al +591 3 123 4567 o escribirnos a info@socialhub360.com. ¡Estaremos encantados de ayudarte!"
}

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "¡Hola! Soy el asistente virtual de Social Hub 360. ¿En qué puedo ayudarte hoy?",
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputMessage),
        isUser: false,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="rounded-full h-14 w-14 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 md:w-96">
          <Card className="shadow-2xl border-0">
            <CardHeader className="bg-gradient-to-r from-rose-500 to-purple-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                Asistente Social Hub 360
              </CardTitle>
            </CardHeader>
            <CardContent className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isUser
                        ? "bg-gradient-to-r from-rose-500 to-purple-600 text-white"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {!message.isUser && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                      {message.isUser && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted p-3 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Bot className="h-4 w-4" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </CardContent>
            <CardFooter className="p-4">
              <div className="flex w-full gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Escribe tu consulta..."
                  className="flex-1 px-3 py-2 border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <Button onClick={handleSendMessage} size="sm">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  )
}
