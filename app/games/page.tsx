'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { getGames } from '@/data/games';
import { GamesGrid } from '@/components/games-grid';

export default function GamesPage() {
  const allGames = getGames();

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <GamesGrid 
          games={allGames} 
          title="所有游戏" 
          useTagFilter={true} 
          enablePagination={true}
          gamesPerPage={12}
        />
      </main>
      <Footer />
    </>
  );
} 