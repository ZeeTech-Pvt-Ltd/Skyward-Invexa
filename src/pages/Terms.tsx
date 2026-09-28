import { Link } from 'react-router-dom'
import { site } from '@/data/site'
import { usePageMeta } from '@/lib/usePageMeta'
import { Callout } from '@/components/ui/Callout'
import { Container } from '@/components/ui/Container'
import { Prose, ProseList, ProseSection } from '@/components/ui/Prose'
import { Section } from '@/components/ui/Section'
import { DarkPageHero } from '@/components/sections/DarkPageHero'

const LAST_UPDATED = 'September 2026'

export default function Terms() {
  usePageMeta({
    title: 'Terms of Use',
    description:
      'The terms governing use of the Skyward Invexa website and platform, including eligibility, no-advice disclaimer, risk disclosure and limitation of liability.',
    path: '/terms',
  })

  return (
    <>
      <DarkPageHero
        eyebrow={`Last updated ${LAST_UPDATED}`}
        title="Skyward Invexa Terms of Use"
        lead={`The terms on which you may use ${site.domain} and the ${site.name} platform.`}
      />

      <Section>
        <Container>
          <Callout tone="warn" title="Before This Page Goes Live" className="mb-12 max-w-3xl">
            These terms are a working draft that reflects how the site is built. They are not a
            substitute for a client agreement. Have them reviewed by a qualified Australian
            financial services lawyer, and align them with your Australian Financial Services Licence
            conditions, before the site is published.
          </Callout>

          <Prose>
            <ProseSection heading="1. Agreement to These Terms">
              <p>
                By accessing this website or using the platform, you agree to these terms. If you do
                not agree, do not use the site. If you hold an account, your account agreement and
                product disclosure documentation also apply, and prevail over these terms where they
                conflict.
              </p>
            </ProseSection>

            <ProseSection heading="2. Who May Use the Service">
              <p>
                The service is intended for residents of Australia aged 18 or over. Access from
                outside Australia may be restricted by the laws of the jurisdiction you are in. You
                are responsible for complying with those laws, and we may decline or cancel access
                where we are not permitted to provide the service.
              </p>
            </ProseSection>

            <ProseSection heading="3. No Financial Product Advice">
              <p>
                All content on this website is general information only. It does not take into
                account your objectives, financial situation or needs, and it is not a
                recommendation to buy, sell or hold any financial product. We do not provide personal
                financial product advice and we do not manage money on your behalf.
              </p>
              <p>
                Where we describe a feature, a fee or a market, we are describing the product, not
                predicting an outcome. No statement on this site should be read as a forecast of
                future performance.
              </p>
            </ProseSection>

            <ProseSection heading="4. Risk Disclosure">
              <p>
                Trading and investing carry risk of loss. Prices can fall as well as rise, and you
                may receive back less than you invested. Leveraged and derivative products are high
                risk and are not suitable for all investors; losses can exceed the amount you
                initially committed. You should read the relevant product disclosure documentation in
                full and consider obtaining independent advice from a licensed adviser before you
                trade.
              </p>
            </ProseSection>

            <ProseSection heading="5. Your Account">
              <p>You agree to:</p>
              <ProseList
                items={[
                  'Provide accurate, current and complete information, and keep it up to date.',
                  'Keep your login credentials and two-factor device secure, and not share them.',
                  'Notify us immediately if you believe your account has been accessed without your authority.',
                  'Use the account only for your own trading, and not on behalf of any other person.',
                ]}
              />
              <p>
                We may suspend or close an account where we are required to by law, where we suspect
                fraud or misuse, or where information provided cannot be verified.
              </p>
            </ProseSection>

            <ProseSection heading="6. Orders, Execution and Settlement">
              <p>
                Orders are executed on a best-efforts basis and are subject to available liquidity,
                market conditions and the rules of the relevant venue. A stop-loss or limit
                instruction is an instruction to attempt execution at a price, not a guarantee that
                the order will fill at that price. In fast-moving or gapping markets, orders may fill
                at a materially different price.
              </p>
            </ProseSection>

            <ProseSection heading="7. Fees">
              <p>
                The fees that apply to your account are set out in your account agreement and
                reflected on your statements. Any fee schedule published on this website is
                illustrative and may be updated. We will give notice before a fee change takes
                effect for an existing account.
              </p>
            </ProseSection>

            <ProseSection heading="8. Intellectual Property">
              <p>
                This website, its design, code, written content and branding are owned by us or
                licensed to us, and are protected by copyright and trade mark law. The name{' '}
                {site.name} and its associated marks may not be used without our written permission.
              </p>
            </ProseSection>

            <ProseSection heading="9. Availability">
              <p>
                We aim for continuous availability, but we do not warrant that the site or the
                platform will be uninterrupted or error-free. Scheduled maintenance and market
                outages may affect access, and some markets are only open during their own trading
                sessions.
              </p>
            </ProseSection>

            <ProseSection heading="10. Limitation of Liability">
              <p>
                To the extent permitted by law, we are not liable for indirect or consequential loss
                arising from your use of this website or the platform, including loss arising from
                market movements, execution at a price different from the one you requested, or
                interruption of service. Nothing in these terms excludes rights you have under the
                Australian Consumer Law or any other right that cannot lawfully be excluded.
              </p>
            </ProseSection>

            <ProseSection heading="11. Privacy">
              <p>
                Our handling of personal information is described in our{' '}
                <Link to="/privacy" className="text-brand-600 hover:text-brand-700">
                  privacy policy
                </Link>
                , which forms part of these terms.
              </p>
            </ProseSection>

            <ProseSection heading="12. Governing Law and Changes">
              <p>
                These terms are governed by the laws of New South Wales, Australia. We may amend
                these terms by publishing an updated version on this page with a revised date.
                Continued use of the site after an amendment constitutes acceptance of it.
              </p>
            </ProseSection>

            <ProseSection heading="13. Contact">
              <p>
                Questions about these terms can be sent to{' '}
                <a
                  href={`mailto:${site.emails.compliance}`}
                  className="text-brand-600 hover:text-brand-700"
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
