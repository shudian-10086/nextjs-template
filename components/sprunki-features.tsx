import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Music, 
  Palette, 
  Users, 
  Sparkles, 
  Heart, 
  Volume2,
  Zap
} from 'lucide-react';

export function SprunkiFeatures() {
  const features = [
    {
      icon: Music,
      title: 'Interactive Music Creation',
      description: 'Create unique beats and melodies with an intuitive drag-and-drop interface that makes music production accessible to everyone.',
      highlight: 'No Experience Required'
    },
    {
      icon: Palette,
      title: '20+ Unique Characters',
      description: 'Each Sprunki character brings distinctive sounds, animations, and personality to your musical compositions.',
      highlight: 'Endless Combinations'
    },
    {
      icon: Volume2,
      title: 'Real-time Beat Mixing',
      description: 'Layer different sounds and rhythms in real-time to create complex, professional-sounding musical pieces.',
      highlight: 'Live Mixing'
    },
    {
      icon: Sparkles,
      title: 'Visual Effects',
      description: 'Watch your music come to life with synchronized visual effects and character animations that respond to your beats.',
      highlight: 'Immersive Experience'
    },
    {
      icon: Heart,
      title: 'Family-Friendly',
      description: 'Designed for all ages with colorful graphics, positive themes, and educational value in music and creativity.',
      highlight: 'Safe for Kids'
    },
    {
      icon: Zap,
      title: 'Save & Share',
      description: 'Save your musical masterpieces and share them with friends and family to showcase your creative talents.',
      highlight: 'Social Features'
    }
  ];

  return (
    <section className="nyt-section bg-slate-50" id="features">
      <div className="nyt-container">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-slate-200 text-slate-700 hover:text-slate-100 px-4 py-2 text-sm font-medium tracking-wide">
            Game Features
          </Badge>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-medium mb-6 text-slate-900" style={{ fontFamily: 'Noto Serif, Georgia, serif' }}>
            Why Sprunki Game is Special
          </h2>
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover what makes Sprunki Game the ultimate creative music platform for players of all ages
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="nyt-card group hover:-translate-y-1 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-slate-900 rounded-sm flex items-center justify-center group-hover:bg-slate-800 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge className="bg-slate-900 text-slate-100 border-slate-800 px-2 py-1 text-xs">
                      {feature.highlight}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-medium text-slate-900 group-hover:text-slate-700 transition-colors" style={{ fontFamily: 'Noto Serif, Georgia, serif' }}>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}