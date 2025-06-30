'use client';

import { useState } from 'react';
import { GameCard } from './game-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Game, GameCategory } from '@/types/game';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface GamesGridProps {
  games: Game[];
  title?: string;
  useTagFilter?: boolean;
  showViewAllButton?: boolean;
  enablePagination?: boolean;
  gamesPerPage?: number;
}

export function GamesGrid({ 
  games, 
  title = "All Games", 
  useTagFilter = false, 
  showViewAllButton = false,
  enablePagination = false,
  gamesPerPage = 12
}: GamesGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<GameCategory | 'All'>('All');
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  
  // Get categories
  const categories: (GameCategory | 'All')[] = [
    'All',
    'Action',
    'Adventure', 
    'Puzzle',
    'Strategy',
    'Racing',
    'Sports',
    'Arcade',
    'Casual'
  ];

  // Get unique tags from games
  const getAllTags = () => {
    const allTags = games.flatMap(game => game.tags);
    return ['All', ...Array.from(new Set(allTags))];
  };

  const tags = getAllTags();
  
  const filteredGames = useTagFilter 
    ? (selectedTag === 'All' 
        ? games 
        : games.filter(game => game.tags.includes(selectedTag)))
    : (selectedCategory === 'All' 
        ? games 
        : games.filter(game => game.category === selectedCategory));

  // Pagination logic
  const totalPages = enablePagination ? Math.ceil(filteredGames.length / gamesPerPage) : 1;
  const startIndex = enablePagination ? (currentPage - 1) * gamesPerPage : 0;
  const endIndex = enablePagination ? startIndex + gamesPerPage : filteredGames.length;
  const paginatedGames = enablePagination ? filteredGames.slice(startIndex, endIndex) : filteredGames;

  // Reset to page 1 when filter changes
  const handleFilterChange = (newFilter: any) => {
    setCurrentPage(1);
    if (useTagFilter) {
      setSelectedTag(newFilter);
    } else {
      setSelectedCategory(newFilter);
    }
  };

  return (
    <section className="nyt-section">
      <div className="nyt-container">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-medium mb-8 text-slate-200 text-center lg:text-left" style={{ fontFamily: 'Noto Serif, Georgia, serif' }}>
            {title}
          </h2>
          <div className="flex flex-wrap justify-center lg:justify-start gap-2">
            {useTagFilter ? (
              // Tag filter buttons
              tags.map((tag) => (
                <Button
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleFilterChange(tag)}
                  className={selectedTag === tag 
                    ? "nyt-button text-sm px-4 py-2" 
                    : "nyt-button-outline text-sm px-4 py-2"
                  }
                >
                  {tag}
                </Button>
              ))
            ) : (
              // Category filter buttons
              categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleFilterChange(category)}
                  className={selectedCategory === category 
                    ? "nyt-button text-sm px-4 py-2" 
                    : "nyt-button-outline text-sm px-4 py-2"
                  }
                >
                  {category}
                </Button>
              ))
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {paginatedGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
        
        {showViewAllButton && (
          <div className="text-center mt-12">
            <Link href="/games">
              <Button className="nyt-button-outline gap-2">
                查看全部游戏
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        )}

        {enablePagination && totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              上一页
            </Button>
            
            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(page)}
                  className="w-8 h-8 p-0"
                >
                  {page}
                </Button>
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="gap-1"
            >
              下一页
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}

        {paginatedGames.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-500 text-lg">
              No games found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}