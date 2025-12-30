"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"

export function ConfirmationSection() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    confirmacao: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Dados do formulário:", formData)
    alert("Confirmação enviada com sucesso! Obrigado.")
  }

  return (
    <section id="confirmacao" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-bold text-primary text-balance">Confirme sua Presença</h2>
            <p className="text-lg text-muted-foreground">
              Por favor, confirme sua presença até o dia 01 de Junho de 2025
            </p>
          </div>

          <Card className="border-2">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-base">
                    Nome Completo
                  </Label>
                  <Input
                    id="nome"
                    type="text"
                    placeholder="Digite seu nome completo"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefone" className="text-base">
                    Telefone
                  </Label>
                  <Input
                    id="telefone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-base">Confirmação de Presença</Label>
                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant={formData.confirmacao === "sim" ? "default" : "outline"}
                      className="flex-1 h-12"
                      onClick={() => setFormData({ ...formData, confirmacao: "sim" })}
                    >
                      Sim, estarei presente
                    </Button>
                    <Button
                      type="button"
                      variant={formData.confirmacao === "nao" ? "default" : "outline"}
                      className="flex-1 h-12"
                      onClick={() => setFormData({ ...formData, confirmacao: "nao" })}
                    >
                      Não poderei comparecer
                    </Button>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 text-base"
                  disabled={!formData.nome || !formData.telefone || !formData.confirmacao}
                >
                  Enviar Confirmação
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
