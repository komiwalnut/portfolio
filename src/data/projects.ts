import { Project } from '@/types';

export const projects: Project[] = [
  {
    title: "Ronin Wallet Tracker",
    description: "Monitors Ronin wallet for ERC-20 token transfers and posts updates to Discord channel",
    tech: ["Python", "Web3.py", "Discord Webhooks"],
    link: "https://github.com/komiwalnut/ronin-wallet-tracker"
  },
  {
    title: "Sabong Saga Genesis Sales Tracker",
    description: "Tracks Genesis NFT sales on Mavis Market, posts updates to Discord channel",
    tech: ["Python", "GraphQL", "Discord Webhooks"],
    link: "https://github.com/komiwalnut/sabong-saga-genesis-sales"
  },
  {
    title: "Lazy Signal Fire",
    description: "Automated blockchain transaction sender that calls the fire() function periodically",
    tech: ["TypeScript", "Ethers.js", "Ronin"],
    link: "https://github.com/komiwalnut/lazy-signal-fire"
  },
  {
    title: "Sabong Saga crypto & ERC20 Token Dashboard",
    description: "Real-time dashboard for tracking Sabong-Saga crypto and ERC-20 token transfers",
    tech: ["Next.js", "Tailwind CSS", "Vercel", "GraphQL", "Ether.js"],
    link: "https://github.com/komiwalnut/sabong-saga-dashboard"
  },
  {
    title: "Sierra Weather Bot",
    description: "PH-timezone Discord weather alerts with command support",
    tech: ["Python", "NASA EONET API", "Matplotlib", "NumPy"],
    link: "https://github.com/komiwalnut/Sierra"
  },
  {
    title: "Crypto Price Bot",
    description: "Multi-currency crypto price tracker for Discord",
    tech: ["Python", "CoinGecko API", "Discord.py"],
    link: "https://github.com/komiwalnut/discord-crypto-price-bot"
  },
  {
    title: "Wild Forest NFT Sales Tracker",
    description: "Tracks sales data for the Wild Forest NFT Trading Contest",
    tech: ["Python", "GraphQL", "Discord.py", "FastAPI"],
    link: "https://github.com/komiwalnut/wild-forest-nft-sales-tracker"
  },
  {
    title: "Delubyo",
    description: "Interactive text-based survival game set during a Philippine typhoon",
    tech: ["TypeScript", "HTML/CSS", "Vercel"],
    link: "https://github.com/komiwalnut/delubyo"
  },
  {
    title: "Wild Forest Community",
    description: "A hub for tools made for the Wild Forest community by the Wild Forest community",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "GraphQL", "Redis", "Vercel"],
    link: "https://github.com/komiwalnut/wild-forest-community"
  }
];
