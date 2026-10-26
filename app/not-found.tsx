import type { Metadata } from 'next'
import NotFound from '@/views/NotFound'
import { site } from '@/data/site'

const DESCRIPTION =
  'The page you were looking for could not be found. Browse the site navigation, or head back to the homepage to start again.'

/**
 * Next marks the 404 route noindex itself, so this sets only the title,
 * description and social card. Adding `robots` here as well would emit two
 * tags for the same directive. No canonical either: "do not index me" and
 * "here is my canonical URL" contradict each other.
 */
export const metadata: Metadata = {
  title: `Page not found | ${site.name}`,
  description: DESCRIPTION,
  twitter: {
    card: 'summary',
    title: `Page not found | ${site.name}`,
    description: DESCRIPTION,
  },
}

export default NotFound
