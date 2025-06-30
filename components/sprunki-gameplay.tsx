import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Play, 
  MousePointer, 
  Layers, 
  Save, 
  Share2, 
  Lightbulb,
  ArrowRight,
  Mic,
  Music,
  Palette,
  Menu,
  Gamepad2,
  HelpCircle,
  Trophy
} from 'lucide-react';

export function SprunkiGameplay() {
  const steps = [
    {
      step: 1,
      icon: MousePointer,
      title: 'Choose Your Characters',
      description: 'Browse through 20+ unique Sprunki characters, each with their own distinctive sound and personality.',
      tip: 'Start with 2-3 characters to learn the basics'
    },
    {
      step: 2,
      icon: Layers,
      title: 'Drag & Drop to Create',
      description: 'Simply drag characters onto the stage to start building your musical composition layer by layer.',
      tip: 'Experiment with different positions for varied effects'
    },
    {
      step: 3,
      icon: Play,
      title: 'Listen & Adjust',
      description: 'Hit play to hear your creation and make real-time adjustments to perfect your musical masterpiece.',
      tip: 'Use the pause feature to make precise edits'
    },
    {
      step: 4,
      icon: Save,
      title: 'Save & Share',
      description: 'Save your favorite compositions and share them with friends to showcase your musical creativity.',
      tip: 'Create multiple versions to explore different styles'
    }
  ];

  const tips = [
    'Start with a simple rhythm base and gradually add melody layers',
    'Mix different character types for richer, more complex sounds',
    'Use the reset button to quickly try new combinations',
    'Listen to other players\' creations for inspiration',
    'Don\'t be afraid to experiment - there are no wrong combinations!'
  ];

  return (
    <section className="nyt-section" id="how-to-play">
      <div className="nyt-container">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-slate-200 text-slate-700 hover:text-slate-100 px-4 py-2 text-sm font-medium tracking-wide">
            How to Play
          </Badge>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-medium mb-6 text-orange-400 font-rubik">
            Master Sprunki Game in 4 Easy Steps
          </h2>
          <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Learn how to create amazing music compositions with our step-by-step gameplay guide
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl border border-slate-200">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&mute=1&loop=1&playlist=dQw4w9WgXcQ"
                title="Sprunki Gameplay Demo"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-orange-200 text-orange-900 px-6 py-3 rounded-md shadow-lg rotate-3 hidden md:block">
              <p className="font-semibold text-lg">Dive into the Beat!</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-medium text-slate-100 font-rubik">
                Intuitive Beat Making
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Easily create complex rhythms with our drag-and-drop interface. No music theory required.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600">
                  <Play className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-slate-100">Real-time Playback</h4>
                  <p className="text-sm text-slate-300">Hear your creations instantly.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600">
                  <Mic className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-slate-100">Vocal Recording</h4>
                  <p className="text-sm text-slate-300">Add your voice to the mix.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600">
                  <Music className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-slate-100">Instrument Library</h4>
                  <p className="text-sm text-slate-300">Access a vast collection of sounds.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-slate-100">Customizable Visuals</h4>
                  <p className="text-sm text-slate-300">Sync visuals to your beats.</p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-orange-200 border border-orange-300 rounded-sm">
              <span className="text-orange-900 text-xl font-bold flex-shrink-0">💡</span>
              <div>
                <h4 className="font-semibold text-orange-900 mb-1">Pro Tip:</h4>
                <p className="text-sm text-orange-900">Experiment with different positions for varied effects.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gameplay Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="nyt-card group hover:-translate-y-1 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <div className="w-10 h-10 bg-slate-100 rounded-sm flex items-center justify-center">
                      <Icon className="w-5 h-5 text-slate-700" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-medium text-slate-900 group-hover:text-slate-700 transition-colors font-rubik">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="flex items-start gap-3 p-4 bg-orange-200 border border-orange-300 rounded-sm">
                    <Lightbulb className="w-4 h-4 text-orange-900 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-orange-900 font-medium">
                      Tip: {step.tip}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Pro Tips Section */}
        <Card className="nyt-card bg-slate-50 border-slate-300">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-900 rounded-sm flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-white" />
              </div>
              <CardTitle className="text-xl font-medium text-slate-900 font-rubik">
                Pro Tips for Better Music
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 mb-6">
              {tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">{tip}</span>
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              <Button className="nyt-button gap-2">
                <Play className="w-4 h-4" />
                Start Playing Now
              </Button>
              <Button className="nyt-button-outline gap-2">
                <Share2 className="w-4 h-4" />
                Share Tips
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}