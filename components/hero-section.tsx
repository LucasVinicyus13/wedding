import Image from "next/image"

export function HeroSection() {
  return (
    <section id="inicio" className="relative h-screen w-full">
      <div className="absolute inset-0">
        <Image
          src="/elegant-couple-photo-at-wedding-venue.jpg"
          alt="Foto do casal"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/30 to-transparent" />
      </div>

      <div className="relative h-full flex items-end justify-center pb-16">
        <div className="w-64 h-64 relative">
          <Image
            src="/IniciaisLE.png"
            alt="Iniciais do Casal"
            fill
            className="object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
