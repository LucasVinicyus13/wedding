import { MapPin, Calendar, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function CeremonySection() {
  return (
    <section id="cerimonia" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-bold text-primary text-balance">Cerimônia & Recepção</h2>
            <p className="text-lg text-muted-foreground">Detalhes do nosso grande dia</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-foreground">Data</h3>
                    <p className="text-muted-foreground">15 de Junho de 2025</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-foreground">Horário</h3>
                    <p className="text-muted-foreground">17h00 - Cerimônia</p>
                    <p className="text-muted-foreground">18h30 - Recepção</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="font-semibold text-xl text-foreground">Local</h3>
                  <p className="text-muted-foreground">Capela Santa Maria</p>
                  <p className="text-sm text-muted-foreground">
                    Rua das Flores, 123 - Jardim Primavera
                    <br />
                    São Paulo, SP - CEP 01234-567
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Ver no Google Maps
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
ce
