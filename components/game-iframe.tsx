'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GameIframeProps {
  gameUrl: string;
  title: string;
  className?: string;
  backgroundImage?: string;
}

export function GameIframe({ gameUrl, title, className = '', backgroundImage }: GameIframeProps) {
  const [hasStarted, setHasStarted] = useState(false);

  const handleStart = () => {
    setHasStarted(true);
  };

  return (
    <div className={`relative bg-slate-300 overflow-hidden ${className}`}>
      {/* 只有在用户点击开始后才加载iframe */}
      {hasStarted ? (
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
      ) : (
        <div 
          className="w-full h-full bg-gradient-to-br from-slate-400 to-slate-600 flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
          style={backgroundImage ? {
            backgroundImage: `url(${backgroundImage})`,
          } : {}}
        >
          {/* 如果有背景图片，添加半透明遮罩层以确保文字可读性 */}
          {backgroundImage && (
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
          )}
          
          <div className="text-center relative z-10">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm border border-white/30">
              <Play className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-lg">{title}</h3>
            <p className="text-slate-100 mb-6 max-w-sm drop-shadow-md">
              Click to start playing this awesome game!
            </p>
            <Button onClick={handleStart} size="lg" className="gap-2 bg-white text-slate-800 hover:bg-slate-100 shadow-lg">
              <Play className="w-4 h-4" />
              Start Game
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}