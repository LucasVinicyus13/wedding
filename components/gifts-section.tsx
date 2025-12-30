import { Gift } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function GiftsSection() {
  const gifts = [
    {
      title: "Lista de Presentes",
      description: "Escolha um presente especial da nossa lista",
      link: "#",
    },
    {
      title: "Pix",
      description: "Contribua de forma prática e rápida",
      link: "#",
    },
    {
      title: "Conta Bancária",
      description: "Depósito ou transferência bancária",
      link: "#",
    },
  ]

  return (
    <section id="presentes" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-bold text-primary text-balance">Lista de Presentes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sua presença é o nosso maior presente, mas se desejar nos presentear, preparamos algumas opções
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {gifts.map((gift, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors group">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Gift className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{gift.title}</h3>
                  <p className="text-muted-foreground">{gift.description}</p>
                  <a
                    href={gift.link}
                    className="inline-block px-6 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Ver opções
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
