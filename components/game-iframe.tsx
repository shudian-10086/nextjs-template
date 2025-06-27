'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GameIframeProps {
  gameUrl: string;
  title: string;
  className?: string;
}

export function GameIframe({ gameUrl, title, className = '' }: GameIframeProps) {
  const [hasStarted, setHasStarted] = useState(false);

  const handleStart = () => {
    setHasStarted(true);
  };

  return (
    <div className={`relative bg-slate-300 overflow-hidden py-6 ${className}`}>
      <iframe
        src={gameUrl}
        title={title}
        width="100%"
        height="100%"
        frameBorder="0"
        allow="autoplay; fullscreen; microphone; camera"
        allowFullScreen
        className="w-full h-full"
      />

      {!hasStarted && (
        <div className="absolute inset-0 bg-gradient-to-br backdrop-blur-2xl border flex items-center justify-center z-10">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Play className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-slate-400 mb-6 max-w-sm">
              Click to start playing this awesome game!
            </p>
            <Button onClick={handleStart} size="lg" className="gap-2">
              <Play className="w-4 h-4" />
              Start Game
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}