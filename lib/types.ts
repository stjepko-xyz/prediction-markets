export interface Market {
  accounts: Record<string, unknown>;
  canCloseEarly: boolean;
  closeTime: number;
  eventTicker: string;
  expirationTime: number;
  marketType: string;
  noSubTitle: string;
  openInterest: number;
  openTime: number;
  result: string;
  rulesPrimary: string;
  status: string;
  subtitle: string;
  ticker: string;
  title: string;
  volume: number;
  yesSubTitle: string;
  earlyCloseCondition?: string;
  noAsk?: string;
  noBid?: string;
  rulesSecondary?: string;
  yesAsk?: string;
  yesBid?: string;
}

export interface Event {
  seriesTicker: string;
  subtitle: string;
  ticker: string;
  title: string;
  competition: string;
  competitionScope: string;
  imageUrl: string;
  liquidity: number;
  markets: Market[];
  openInterest: number;
  settlementSources: unknown;
  strikeDate: number;
  strikePeriod: string;
  volume: number;
  volume24h: number;
}

export interface Events {
  events: Event[];
  cursor: number;
}
