import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'

const assurances = [
  'No account or inactivity fee',
  'Fund in Australian dollars',
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-bg">
      {/* Layered background: emerald glow over a fading blueprint grid. */}
      <div className="glow-hero pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />

      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/40 bg-brand-400/10 px-3.5 py-1.5 text-xs font-medium tracking-wide text-brand-300">
              <Icon name="globe" className="size-3.5" />
              Built for Australian investors
            </span>

            <h1 className="mt-7 text-[2.6rem] leading-[1.02] font-semibold tracking-tight text-hero-fg sm:text-5xl lg:text-[3.6rem]">
              Skyward Invexa
              <span className="mt-3 block text-xl leading-snug font-medium sm:text-2xl lg:text-[1.6rem]">
                Multi-Asset Market Access for Australian Investors
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-hero-muted sm:text-lg">
              One account for digital assets, ASX-listed equities, foreign exchange and commodity
              contracts. Published fees, risk controls on the order ticket, and no performance
              promises, because we can&apos;t make any.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button to="/sign-up" variant="light" size="lg">
                Open an Account
                <span aria-hidden="true">→</span>
              </Button>
              <Button href="#register" variant="outlineLight" size="lg">
                Get Started
              </Button>
            </div>

            <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-hero-muted">
              {assurances.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Icon name="check" className="size-3.5 text-brand-300" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative lg:pl-6">
            <img
              src="/img2.webp"
              alt="A person holding a phone, with app panels floating around them."
              width={1273}
              height={1236}
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
