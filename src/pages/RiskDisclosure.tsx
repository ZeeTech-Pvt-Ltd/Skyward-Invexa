import { riskWarning, site } from '@/data/site'
import { usePageMeta } from '@/lib/usePageMeta'
import { Callout } from '@/components/ui/Callout'
import { Container } from '@/components/ui/Container'
import { Prose, ProseList, ProseSection } from '@/components/ui/Prose'
import { Section } from '@/components/ui/Section'
import { PageHero } from '@/components/sections/PageHero'

const LAST_UPDATED = 'September 2026'

export default function RiskDisclosure() {
  usePageMeta({
    title: 'Risk Disclosure',
    description:
      'The Skyward Invexa risk disclosure statement: how leverage, volatility, gapping, liquidity and execution risk can affect your positions, and what to do before you trade.',
    path: '/risk-disclosure',
  })

  return (
    <>
      <PageHero
        eyebrow={`Last updated ${LAST_UPDATED}`}
        title="Skyward Invexa Risk Disclosure Statement"
        lead="Read this before you place an order. It sets out the ways a position can lose money on this platform, including the ones that catch experienced traders out."
      />

      <Section>
        <Container>
          <Callout tone="warn" title="The Short Version" className="mb-12 max-w-3xl">
            {riskWarning.body}
          </Callout>

          <Prose>
            <ProseSection heading="1. Trading Risk">
              <p>
                Prices move. A position can be worth less when you close it than when you opened it,
                and there is no mechanism on this platform that prevents a loss. Skyward Invexa
                provides execution and market access; it does not underwrite your positions, and it
                does not compensate clients for market losses.
              </p>
            </ProseSection>

            <ProseSection heading="2. Leverage and Margin Risk">
              <p>
                Leveraged products let you control a position larger than the money you commit. That
                works in both directions. A move against a leveraged position erodes your margin
                faster than the same move would erode an unleveraged one, and a position can be
                closed out automatically once margin falls below the required level.
              </p>
            </ProseSection>

            <ProseSection heading="3. Gap and Slippage Risk">
              <p>
                A stop-loss is an instruction to attempt execution, not a guarantee of price.
                Markets can gap between one traded price and the next, over a weekend, after an
                announcement, or in thin conditions, and a stop may fill materially away from the
                level you set, or not at all.
              </p>
            </ProseSection>

            <ProseSection heading="4. Liquidity Risk">
              <p>
                Some instruments trade thinly at certain times of day. Thin markets mean wider
                spreads, slower fills, and a larger difference between the price you expected and
                the price you get. This applies particularly outside the main session for the
                instrument in question.
              </p>
            </ProseSection>

            <ProseSection heading="5. Contract for Difference Specific Risk">
              <p>
                Foreign-exchange and commodity exposure on this platform is provided as contracts
                for difference. You do not own or take delivery of the underlying asset. The
                contract is closed out in cash, and the counterparty to your contract is a market
                participant, not the exchange on which the underlying instrument trades.
              </p>
            </ProseSection>

            <ProseSection heading="6. Digital Asset Specific Risk">
              <p>
                Digital assets are volatile, trade continuously, and are exposed to risks that do
                not apply to regulated securities markets, including protocol failure, network
                congestion, forks, and abrupt changes in the rules governing the asset itself.
              </p>
            </ProseSection>

            <ProseSection heading="7. Technology and Execution Risk">
              <p>
                Platforms fail. Connectivity drops, feeds stall, and orders can be delayed or
                rejected. Keep a way to reach us that does not depend on the platform being up, and
                do not rely on a single device or a single internet connection to manage an open
                position.
              </p>
            </ProseSection>

            <ProseSection heading="8. Concentration and Suitability">
              <p>Before you commit capital, be satisfied that you can answer these honestly:</p>
              <ProseList
                items={[
                  'Could you absorb the total loss of the money you are committing, without changing your financial position?',
                  'Do you understand the total cost of the trade: spread, commission and any funding?',
                  'Do you know what would happen to your position if the market moved sharply against it overnight?',
                  'Is the product you have chosen appropriate for your objective, or would a simpler instrument serve it better?',
                ]}
              />
            </ProseSection>

            <ProseSection heading="9. No Personal Advice">
              <p>
                Nothing on this website, in the platform, or in correspondence with our staff is
                personal financial product advice. We do not know your objectives, financial
                situation or needs, and we do not assess whether any product is suitable for you.
                Consider obtaining independent advice from a licensed adviser.
              </p>
            </ProseSection>

            <ProseSection heading="10. Seeking Help">
              <p>
                If trading is affecting your finances or your wellbeing, stop and seek support.
                Free and confidential counselling is available in Australia through the National
                Debt Helpline on 1800 007 007 and Lifeline on 13 11 14. Questions about this
                disclosure can be sent to{' '}
                <a
                  href={`mailto:${site.emails.compliance}`}
                  className="font-medium text-brand-700 hover:text-brand-500"
                >
                  {site.emails.compliance}
                </a>
                .
              </p>
            </ProseSection>
          </Prose>
        </Container>
      </Section>
    </>
  )
}
