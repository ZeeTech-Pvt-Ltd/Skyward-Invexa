import { cookieCategories } from '@/data/content'
import { site } from '@/data/site'
import { usePageMeta } from '@/lib/usePageMeta'
import { Badge } from '@/components/ui/Badge'
import { Callout } from '@/components/ui/Callout'
import { Container } from '@/components/ui/Container'
import { Prose, ProseList, ProseSection } from '@/components/ui/Prose'
import { Section } from '@/components/ui/Section'
import { Table, TBody, TD, TH, THead, TR } from '@/components/ui/Table'
import { DarkPageHero } from '@/components/sections/DarkPageHero'

const LAST_UPDATED = 'September 2026'

export default function CookiePolicy() {
  usePageMeta({
    title: 'Cookie Policy',
    description:
      'How Skyward Invexa uses cookies and similar technologies, which categories are optional, and how to control them in your browser.',
    path: '/cookie-policy',
  })

  return (
    <>
      <DarkPageHero
        eyebrow={`Last updated ${LAST_UPDATED}`}
        title="Skyward Invexa Cookie Policy"
        lead={`What cookies are set when you visit ${site.domain}, what each category is for, and how to turn the optional ones off.`}
      />

      <Section>
        <Container>
          <Callout tone="warn" title="Before This Page Goes Live" className="mb-12 max-w-3xl">
            This policy describes the cookie behaviour the site is built to have. If you add
            analytics, advertising pixels or a consent-management tool, update the table below and
            the consent behaviour to match, and have the wording reviewed before publishing.
          </Callout>

          <Prose>
            <ProseSection heading="1. What Cookies Are">
              <p>
                A cookie is a small text file that a website asks your browser to store. It lets the
                site recognise your browser on a later request, for example to remember that you
                had already dismissed a notice. Similar technologies, such as local storage and
                pixels, do comparable things; this policy covers those too.
              </p>
            </ProseSection>

            <ProseSection heading="2. Consent">
              <p>
                Strictly necessary cookies are set without asking, because the site cannot function
                properly without them. Every other category is optional and is only set once you
                have agreed to it. Declining an optional category does not reduce your access to any
                part of the site.
              </p>
            </ProseSection>

            <ProseSection heading="3. Categories We Use">
              <p>
                The table below lists each category, what it does and whether you can decline it.
              </p>
            </ProseSection>
          </Prose>
        </Container>
      </Section>

      <Section tone="raised" divided size="tight">
        <Container>
          <Table caption="Cookie categories used on skywardinvexa-au.com">
            <THead>
              <TH>Category</TH>
              <TH>Purpose</TH>
              <TH>Typical Contents</TH>
              <TH>Optional</TH>
            </THead>
            <TBody>
              {cookieCategories.map((category) => (
                <TR key={category.name}>
                  <TD className="font-medium text-heading">{category.name}</TD>
                  <TD>{category.purpose}</TD>
                  <TD>{category.examples}</TD>
                  <TD>
                    <Badge tone={category.optional ? 'brand' : 'neutral'}>
                      {category.optional ? 'You Choose' : 'Always On'}
                    </Badge>
                  </TD>
                </TR>
              ))}
            </TBody>
          </Table>
        </Container>
      </Section>

      <Section divided>
        <Container>
          <Prose>
            <ProseSection heading="4. Managing Cookies in Your Browser">
              <p>
                Every major browser lets you view, block and delete cookies. Blocking the strictly
                necessary category will break parts of the site: forms may lose your progress and
                the navigation may not remember its state.
              </p>
              <ProseList
                items={[
                  'Chrome: Settings, then Privacy and security, then Third-party cookies',
                  'Safari: Settings, then Privacy, then Manage Website Data',
                  'Firefox: Settings, then Privacy & Security, then Cookies and Site Data',
                  'Edge: Settings, then Cookies and site permissions',
                ]}
              />
              <p>
                Private or incognito browsing clears most cookies when you close the window, though
                it does not make you anonymous to the sites you visit.
              </p>
            </ProseSection>

            <ProseSection heading="5. Third Parties">
              <p>
                Where an optional category is enabled, the provider of that service may set its own
                cookie and receive your IP address and the page you visited. We choose providers
                that support regional data handling, and we do not permit them to use your data for
                their own advertising.
              </p>
            </ProseSection>

            <ProseSection heading="6. Changes and Contact">
              <p>
                We will update this page when the cookies we set change, and revise the date at the
                top. Questions can be sent to{' '}
                <a
                  href={`mailto:${site.emails.compliance}`}
                  className="font-medium text-brand-700 hover:text-brand-500"
                >
                  {site.emails.compliance}
                </a>
                . Our handling of personal information more broadly is described in the{' '}
                <a href="/privacy" className="font-medium text-brand-700 hover:text-brand-500">
                  Privacy Policy
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
