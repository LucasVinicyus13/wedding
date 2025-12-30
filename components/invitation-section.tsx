export function InvitationSection() {
  return (
    <section id="convite" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-block px-6 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">Você está convidado</span>
            </div>
            <h2 className="text-5xl font-bold text-primary text-balance">Nosso Convite</h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-foreground/80 px-4">
            <p>
              É com imensa alegria que convidamos você para celebrar conosco o nosso casamento. Será uma honra
              compartilhar esse momento único e especial ao lado de pessoas queridas que fazem parte da nossa história.
            </p>
            <p>
              Preparamos cada detalhe com carinho para que esse dia seja inesquecível. Sua presença é o presente mais
              valioso que poderíamos receber.
            </p>
            <p className="font-semibold text-foreground pt-4 border-t border-border/50">
              Por gentileza, este convite é pessoal e intransferível. Solicitamos que apenas os convidados mencionados
              no convite compareçam à cerimônia.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
