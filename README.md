# Prediction Markets

Prediction markets implementation example: Allowing users to browse events, view market odds and place fake trades.

<img width="1491" height="816" alt="Screenshot 2025-12-07 at 22 33 40" src="https://github.com/user-attachments/assets/886c8f16-c232-4550-af66-c55e5beb03cc" />

## Features

- **Event Browsing** - Browse active prediction events
- **Market Trading** - Each event has markets that are available for trading
- **Real-time Odds** - View current ask/bid prices displayed as percentages
- **Responsive Design** - Mobile-friendly UI that adapts to all screen sizes
- **Order Form** - Interactive order placement with buy/sell toggles
- **Solana Wallet Adapter** - Connect with your solana wallet

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with event listings and category filters |
| `/event/[id]` | Event detail page with all markets and order form |

## API Integration

The app integrates with the DFlow API to fetch (Kalshi) prediction market data: https://pond.dflow.net/quickstart/discover-prediction-tokens

- `GET /api/v1/events` - Fetch paginated list of active events with nested markets
- `GET /api/v1/event/:id` - Fetch single event details by ticker

## Missing features at the moment
- In order to trade, real solana transactions need to be added (see DFlow API)
- Real categories can be added 
- Event filters
- Display chart data (Airbnb library has low bundle size charts which are recommended https://visx.airbnb.tech/)
- Order book data
- Overal general information for each market, rules i.e.

## Screenshots

<img width="1495" height="818" alt="Screenshot 2025-12-07 at 22 33 59" src="https://github.com/user-attachments/assets/0c9192a5-ac88-4ae7-af46-e97c05d84957" />
<img width="502" height="816" alt="Screenshot 2025-12-07 at 22 34 32" src="https://github.com/user-attachments/assets/b107e923-d21f-4872-a731-665745828056" />
<img width="1491" height="816" alt="Screenshot 2025-12-07 at 22 48 28" src="https://github.com/user-attachments/assets/ab7eeb7f-7893-4656-a29d-4e9faf32225a" />


## Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
