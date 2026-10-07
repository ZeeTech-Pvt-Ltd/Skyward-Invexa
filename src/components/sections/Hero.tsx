import { hero } from '@/data/content'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-bg">
      {/* Layered background: emerald glow over a fading blueprint grid. */}
      <div className="glow-hero pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />

      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-400/10 px-3.5 py-1.5 text-xs font-medium tracking-wide text-brand-300">
              <Icon name="globe" className="size-3.5" />
              {hero.eyebrow}
            </span>

            <h1 className="mt-7 text-[2.4rem] leading-[1.05] font-semibold tracking-tight text-hero-fg sm:text-5xl lg:text-[3.2rem]">
              {hero.heading}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-hero-muted sm:text-lg">
              {hero.sub}
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {hero.bullets.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-hero-muted">
                  <Icon name="check" className="mt-0.5 size-4 shrink-0 text-brand-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button to="/sign-up" variant="light" size="lg">
                {hero.cta}
              </Button>
              <Button href="#register" variant="outlineLight" size="lg">
                See the Platform
              </Button>
            </div>

            <p className="mt-5 max-w-lg text-xs leading-relaxed text-hero-muted">{hero.micro}</p>
          </div>

          <div className="relative lg:pl-2">
            {/* Two encodes: 1x screens take the 138KB file, retina the larger
                one. The dimensions reserve the box so nothing shifts. */}
            <img
              src="/img2.webp"
              srcSet="/img2.webp 900w, /img2@2x.webp 1273w"
              sizes="(min-width: 1024px) 42rem, (min-width: 640px) 34rem, calc(100vw - 2.5rem)"
              alt="A person holding a phone, with app panels floating around them."
              width={900}
              height={874}
              fetchPriority="high"
              decoding="async"
              className="mx-auto w-full max-w-[34rem] lg:mx-0 lg:ml-auto lg:max-w-[42rem]"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
