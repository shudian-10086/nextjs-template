import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Users, Play } from 'lucide-react';
import { Game } from '@/types/game';
import { GameIframe } from './game-iframe';
import Link from 'next/link';

interface HeroSectionProps {
  featuredGame: Game;
}

export function HeroSection({ featuredGame }: HeroSectionProps) {
  return (
    <section className="nyt-section" id="play-now">
      <div className="nyt-container max-w-7xl mx-auto">
        <div className="nyt-grid lg:grid-cols-5 items-center">
          {/* Game Preview */}
          <div className="relative lg:col-span-3">
            <div className="aspect-[4/3] rounded-sm overflow-hidden">
              <GameIframe
                gameUrl={featuredGame.gameUrl}
                title={featuredGame.title}
                backgroundImage={featuredGame.backgroundImage}
                className="w-full h-full"
              />
            </div>
          </div>
          {/* Game Info */}
          <div className="space-y-8 lg:col-span-2">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight text-orange-400 font-rubik">
                {featuredGame.title}
              </h1>
            </div>
            
            <p className="text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
              {featuredGame.description}
            </p>
            
            <div className="flex items-center gap-8 py-4">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-orange-400 text-orange-400" />
                <span className="font-semibold text-lg text-slate-200">{featuredGame.rating}</span>
                <span className="text-slate-400 text-sm">rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-400" />
                <span className="font-semibold text-lg text-slate-200">
                  {(featuredGame.playCount / 1000).toFixed(0)}k
                </span>
                <span className="text-slate-400 text-sm">players</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {featuredGame.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="bg-slate-100 text-slate-700 border-slate-300 px-3 py-1 text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}