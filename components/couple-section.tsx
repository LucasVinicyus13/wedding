import Image from "next/image"

export function CoupleSection() {
  return (
    <section id="casal" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="px-8">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
              <Image
                src="/romantic-couple-portrait-vertical-photo.jpg"
                alt="Foto do casal"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="space-y-6 px-4">
            <h2 className="text-5xl font-bold text-primary text-balance">Nossa História</h2>
            <div className="space-y-4 text-lg leading-relaxed text-foreground/80">
              <p>
                Tudo começou em um dia especial, quando o destino nos uniu de uma forma única e inesquecível. Desde
                então, cada momento ao lado um do outro se transformou em uma memória preciosa que guardamos com carinho
                no coração.
              </p>
              <p>
                Ao longo dessa jornada, descobrimos que o amor verdadeiro não é apenas sobre os grandes gestos, mas
                sobre as pequenas coisas do dia a dia que nos fazem sorrir. Juntos, construímos uma história repleta de
                cumplicidade, respeito e alegria.
              </p>
              <p>
                Agora, estamos prontos para dar o próximo passo e queremos você ao nosso lado para celebrar esse momento
                tão especial. Sua presença tornará nosso dia ainda mais memorável.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
