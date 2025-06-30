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
    <div className={`relative overflow-hidden ${className}`}>
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
          className="w-full h-full bg-gradient-to-br from-slate-400 to-slate-600 flex items-center justify-center bg-cover bg-center bg-no-repeat relative cursor-pointer group"
          style={backgroundImage ? {
            backgroundImage: `url(${backgroundImage})`,
          } : {}}
          onClick={handleStart}
        >
          {/* 如果有背景图片，添加半透明遮罩层以确保文字可读性 */}
          {backgroundImage && (
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm group-hover:bg-black/30 transition-colors duration-300"></div>
          )}
          
          <div className="text-center relative z-10">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm border border-white/30 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
              <Play className="w-8 h-8 text-orange-400 ml-1" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-lg group-hover:text-slate-100 transition-colors duration-300">{title}</h3>
            <p className="text-slate-100 mb-6 max-w-sm drop-shadow-md group-hover:text-white transition-colors duration-300">
              Click to start playing this awesome game!
            </p>
            <Button 
              onClick={(e) => {
                e.stopPropagation(); // 防止重复触发
                handleStart();
              }} 
              size="lg" 
              className="gap-2 bg-orange-400 text-slate-800 hover:bg-slate-100 shadow-lg group-hover:shadow-xl transition-shadow duration-300"
            >
              <Play className="w-4 h-4" />
              Start Game
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}