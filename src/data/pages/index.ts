import type { MarketingPage } from '../pageTypes'
import { aiCryptoTrading } from './aiCryptoTrading'
import { aiForexTrading } from './aiForexTrading'
import { aiGoldTrading } from './aiGoldTrading'
import { aiStockTrading } from './aiStockTrading'
import { aiTradingForBeginners } from './aiTradingForBeginners'
import { aiTradingSignals } from './aiTradingSignals'
import { automatedTrading } from './automatedTrading'
import { howItWorks } from './howItWorks'
import { review } from './review'
import { riskManagementTools } from './riskManagementTools'
import { whatIsAiTrading } from './whatIsAiTrading'
import { whyInvest } from './whyInvest'

/**
 * Every marketing page, in the order they are linked from the menu.
 *
 * `App.tsx` turns this list into routes and the sitemap mirrors it, so adding
 * a page means adding a data file and one line here, and nothing else.
 */
export const marketingPages: MarketingPage[] = [
  // Markets
  aiCryptoTrading,
  aiForexTrading,
  aiGoldTrading,
  aiStockTrading,
  // Platform
  howItWorks,
  automatedTrading,
  aiTradingSignals,
  riskManagementTools,
  // Learn
  whatIsAiTrading,
  aiTradingForBeginners,
  whyInvest,
  review,
]
