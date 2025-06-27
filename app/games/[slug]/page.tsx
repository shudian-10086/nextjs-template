import { notFound } from 'next/navigation';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { GameIframe } from '@/components/game-iframe';
import { GameInfo } from '@/components/game-info';
import { GameCard } from '@/components/game-card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Share2, Heart } from 'lucide-react';
import Link from 'next/link';
import { getGameBySlug, getRelatedGames, getGames } from '@/data/games';
import { Metadata } from 'next';

interface GamePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const game = getGameBySlug(params.slug);
  
  if (!game) {
    return {
      title: '游戏未找到',
      description: '抱歉，您查找的游戏不存在。',
    };
  }

  return {
    title: `${game.title} - 免费在线游戏`,
    description: game.description,
    keywords: [game.title, ...game.tags, game.category, '免费游戏', '在线游戏'].join(', '),
    openGraph: {
      title: `${game.title} - 免费在线游戏 | MiniGameHub`,
      description: game.description,
      type: 'article',
      url: `https://minigamehub.com/games/${game.slug}`,
      images: [
        {
          url: game.thumbnail,
          width: 800,
          height: 600,
          alt: game.title,
        },
      ],
      article: {
        publishedTime: game.releaseDate,
        authors: [game.developer],
        tags: game.tags,
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: `${game.title} - 免费在线游戏`,
      description: game.shortDescription,
      images: [game.thumbnail],
    },
    alternates: {
      canonical: `https://minigamehub.com/games/${game.slug}`,
    },
  };
}

export function generateStaticParams() {
  const games = getGames();
  return games.map((game) => ({
    slug: game.slug
  }));
}

export default function GamePage({ params }: GamePageProps) {
  const game = getGameBySlug(params.slug);
  
  if (!game) {
    notFound();
  }

  const relatedGames = getRelatedGames(game);

  // 游戏页面结构化数据
  const gameSchema = {
    "@context": "https://schema.org",
    "@type": "Game",
    "name": game.title,
    "description": game.description,
    "url": `https://minigamehub.com/games/${game.slug}`,
    "image": game.thumbnail,
    "genre": game.category,
    "keywords": game.tags.join(", "),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": game.rating,
      "ratingCount": Math.floor(game.playCount / 10),
      "bestRating": "5",
      "worstRating": "1"
    },
    "interactionStatistic": {
      "@type": "InteractionCounter",
      "interactionType": "https://schema.org/PlayAction",
      "userInteractionCount": game.playCount
    },
    "datePublished": game.releaseDate,
    "author": {
      "@type": "Organization",
      "name": game.developer
    },
    "publisher": {
      "@type": "Organization",
      "name": "MiniGameHub"
    },
    "applicationCategory": "Game",
    "applicationSubCategory": game.category,
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(gameSchema)
        }}
      />
      <Navigation />
      <main className="min-h-screen">
        {/* Game Header */}
        <section className="py-8 px-4 border-b">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              <Link href="/games">
                <Button variant="ghost" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Games
                </Button>
              </Link>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <Heart className="w-4 h-4" />
                  Save
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Game Content */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Game Player */}
              <div className="lg:col-span-2">
                <div className="aspect-[4/3] mb-6">
                  <GameIframe
                    gameUrl={game.gameUrl}
                    title={game.title}
                    className="w-full h-full"
                  />
                </div>
              </div>
              
              {/* Game Info */}
              <div className="lg:col-span-1">
                <GameInfo game={game} />
              </div>
            </div>
          </div>
        </section>
         {/* Game Content Details */}
         <section className="py-8 px-4 border-b">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-2">{game.title}</h1>
            <div className="text-xl text-muted-foreground" dangerouslySetInnerHTML={{ __html: game.content }}>

            </div>
          </div>
        </section>
        
        {/* Related Games */}
        {relatedGames.length > 0 && (
          <section className="py-16 px-4 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Related Games</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedGames.map((relatedGame) => (
                  <GameCard key={relatedGame.id} game={relatedGame} />
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  );
}