import { HeroSection } from '@/components/hero-section';
import { GamesGrid } from '@/components/games-grid';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { SprunkiFeatures } from '@/components/sprunki-features';
import { SprunkiGameplay } from '@/components/sprunki-gameplay';
import { SprunkiFAQ } from '@/components/sprunki-faq';
import { SprunkiRatings } from '@/components/sprunki-ratings';
import { games, featuredGame } from '@/data/games';
import { Game } from '@/types/game';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MiniGameHub - 免费在线小游戏平台 | 精选休闲游戏大全',
  description: '探索MiniGameHub，最优质的免费在线小游戏平台。提供音乐创作、益智解谜、竞速赛车、冒险探索等多种类型游戏。无需下载，立即畅玩Sprunki音乐游戏等热门作品。',
  keywords: '在线小游戏,免费游戏,Sprunki游戏,音乐游戏,益智游戏,竞速游戏,冒险游戏,网页游戏,休闲游戏',
  authors: [{ name: 'MiniGameHub' }],
  creator: 'MiniGameHub',
  publisher: 'MiniGameHub',
  robots: 'index, follow',
  openGraph: {
    title: 'MiniGameHub - 免费在线小游戏平台',
    description: '探索精选免费小游戏，包括Sprunki音乐创作、益智解谜、竞速冒险等。无需下载，即点即玩！',
    url: 'https://minigamehub.com',
    siteName: 'MiniGameHub',
    type: 'website',
    locale: 'zh_CN',
    images: [
      {
        url: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: 'MiniGameHub - 免费在线小游戏平台',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MiniGameHub - 免费在线小游戏平台',
    description: '探索精选免费小游戏，包括Sprunki音乐创作、益智解谜、竞速冒险等。无需下载，即点即玩！',
    images: ['https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200'],
  },
  alternates: {
    canonical: 'https://minigamehub.com',
  },
};

export default function HomePage() {
  const nonFeaturedGames = games.filter(game => !game.featured);
  const limitedGames = nonFeaturedGames.slice(0, 8); // 限制显示8个游戏

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": "https://minigamehub.com/#website",
                "url": "https://minigamehub.com",
                "name": "MiniGameHub",
                "description": "免费在线小游戏平台，提供各种类型的精选游戏",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://minigamehub.com/games?search={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                },
                "inLanguage": "zh-CN"
              },
              {
                "@type": "Organization",
                "@id": "https://minigamehub.com/#organization",
                "name": "MiniGameHub",
                "url": "https://minigamehub.com",
                "description": "专注于提供优质免费在线游戏的平台"
              },
              {
                "@type": "WebPage",
                "@id": "https://minigamehub.com/#webpage",
                "url": "https://minigamehub.com",
                "name": "MiniGameHub - 免费在线小游戏平台",
                "isPartOf": { "@id": "https://minigamehub.com/#website" },
                "about": { "@id": "https://minigamehub.com/#organization" },
                "description": "探索MiniGameHub，最优质的免费在线小游戏平台。提供音乐创作、益智解谜、竞速赛车、冒险探索等多种类型游戏。",
                "inLanguage": "zh-CN"
              },
              {
                "@type": "ItemList",
                "name": "热门游戏",
                "description": "MiniGameHub平台上的热门游戏列表",
                "itemListElement": limitedGames.map((game, index) => ({
                  "@type": "ListItem",
                  "position": index + 1,
                  "item": {
                    "@type": "Game",
                    "name": game.title,
                    "description": game.description,
                    "url": `https://minigamehub.com/games/${game.slug}`,
                    "image": game.thumbnail,
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": game.rating,
                      "ratingCount": Math.floor(game.playCount / 10),
                      "bestRating": "5",
                      "worstRating": "1"
                    },
                    "genre": game.category,
                    "keywords": game.tags.join(", ")
                  }
                }))
              }
            ]
          })
        }}
      />
      <Navigation />
      <main className="min-h-screen">
        <HeroSection featuredGame={featuredGame} />
        <SprunkiFeatures />
        <SprunkiGameplay />
        <SprunkiRatings />
        <SprunkiFAQ />
        <div id="games">
          <GamesGrid games={limitedGames} title="Discover More Games" showViewAllButton={true} />
        </div>
      </main>
      <Footer />
    </>
  );
}

