import Link from 'next/link';
import Image from 'next/image';
import { Star, Play, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Game } from '@/types/game';

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Link href={`/games/${game.slug}`}>
      <Card className="nyt-card group hover:-translate-y-1 transition-all duration-300">
        <CardContent className="p-0">
          <div className="relative aspect-video overflow-hidden rounded-t-sm">
            <Image
              src={game.thumbnail}
              alt={game.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
              loading="lazy"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            <div className="absolute top-3 left-3">
              <Badge className="bg-slate-900/80 text-white border-0 px-2 py-1 text-xs">
                {game.category}
              </Badge>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center">
                <Play className="w-5 h-5 text-white ml-0.5" />
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="font-medium text-lg mb-2 group-hover:text-slate-700 transition-colors text-slate-900" style={{ fontFamily: 'Noto Serif, Georgia, serif' }}>
              {game.title}
            </h3>
            <p className="text-slate-600 text-sm mb-4 line-clamp-2 leading-relaxed">
              {game.shortDescription}
            </p>
            
            <div className="flex items-center justify-between text-sm mb-4">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-slate-500 text-slate-500" />
                <span className="font-medium text-slate-500">{game.rating}</span>
              </div>
              <div className="flex items-center gap-1 text-slate-500">
                <Users className="w-4 h-4" />
                <span>{(game.playCount / 1000).toFixed(0)}k</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-1">
              {game.tags.slice(0, 3).map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-xs bg-slate-100 text-slate-600 border-slate-300 px-2 py-0.5"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}