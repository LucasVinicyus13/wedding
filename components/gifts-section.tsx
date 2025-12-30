"use client"

import { Gift } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"
import Image from "next/image"

export function GiftsSection() {
  const [openModal, setOpenModal] = useState<string | null>(null)

  const gifts = [
    {
      title: "Lista de Presentes",
      description: "Escolha um presente especial da nossa lista",
      modalType: "presentes",
    },
    {
      title: "Pix",
      description: "Contribua de forma prática e rápida",
      modalType: "pix",
    },
    {
      title: "Conta Bancária",
      description: "Depósito ou transferência bancária",
      modalType: "bancaria",
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
                  <button
                    onClick={() => setOpenModal(gift.modalType)}
                    className="inline-block px-6 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Ver opções
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={openModal === "presentes"} onOpenChange={(open) => !open && setOpenModal(null)}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary">Lista de Presentes</DialogTitle>
          </DialogHeader>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
            {/* 
              ============================================
              ADICIONE SEUS PRODUTOS AQUI
              ============================================
              Para cada produto, copie o bloco abaixo e substitua:
              - src="/diverse-products-still-life.png" -> URL da imagem do produto
              - "Nome do Produto" -> Nome real do produto
              - "R$ 000,00" -> Preço do produto
              - href="#" -> Link para a loja onde comprar
              ============================================
            */}

            <div className="border-2 border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors">
              <div className="aspect-square relative bg-muted">
                <Image src="/diverse-products-still-life.png" alt="Produto" fill className="object-cover" />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-semibold text-foreground">Nome do Produto</h3>
                <p className="text-lg font-bold text-primary">R$ 000,00</p>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Comprar
                </a>
              </div>
            </div>

            {/* Copie o bloco acima para adicionar mais produtos */}
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={openModal === "pix"} onOpenChange={(open) => !open && setOpenModal(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary">Pix</DialogTitle>
          </DialogHeader>
          <div className="py-6 space-y-6 text-center">
            {/* 
              ============================================
              ADICIONE SEU QR CODE DO PIX AQUI
              ============================================
              Substitua o src abaixo pela URL da imagem do QR Code
              ============================================
            */}
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-muted rounded-lg flex items-center justify-center">
                <Image
                  src="/qr-code.jpeg"
                  alt="QR Code Pix"
                  width={256}
                  height={256}
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* 
              ============================================
              ADICIONE SUA CHAVE PIX AQUI
              ============================================
              Substitua o texto abaixo pela sua chave Pix real
              ============================================
            */}
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Chave Pix:</p>
              <p className="text-lg font-mono font-semibold text-foreground break-all px-4">
                (43) 99836-9388
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={openModal === "bancaria"} onOpenChange={(open) => !open && setOpenModal(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary">Dados Bancários</DialogTitle>
          </DialogHeader>
          <div className="py-6 space-y-4">
            {/* 
              ============================================
              ADICIONE SUAS INFORMAÇÕES BANCÁRIAS AQUI
              ============================================
              Substitua os valores abaixo pelas suas informações reais
              ============================================
            */}
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Banco:</p>
              <p className="text-base font-semibold text-foreground">001 - Banco do Brasil S.A.</p>
            </div>

            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Agência:</p>
              <p className="text-base font-semibold text-foreground">633-5</p>
            </div>

            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Conta:</p>
              <p className="text-base font-semibold text-foreground">45192-4</p>
            </div>

            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Tipo de Conta:</p>
              <p className="text-base font-semibold text-foreground">Conta Corrente</p>
            </div>

            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">CPF:</p>
              <p className="text-base font-semibold text-foreground">132.273.879-30</p>
            </div>

            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Titular:</p>
              <p className="text-base font-semibold text-foreground">Lucas Vinicyus Sanches Anacleto</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
