import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Star, 
  Users, 
  Calendar, 
  User, 
  Gamepad,
  HelpCircle,
  Lightbulb,
  Trophy 
} from 'lucide-react';
import { Game } from '@/types/game';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface GameInfoProps {
  game: Game;
}

export function GameInfo({ game }: GameInfoProps) {
  return (
    <div className="space-y-6">
      {/* Game Stats 
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Star className="w-4 h-4 fill-blue-600 text-blue-600" />
                <span className="font-bold text-lg">{game.rating}</span>
              </div>
              <p className="text-sm text-muted-foreground">Rating</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Users className="w-4 h-4 text-muted-foreground" />
                <span className="font-bold text-lg">{(game.playCount / 1000).toFixed(0)}k</span>
              </div>
              <p className="text-sm text-muted-foreground">Players</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Trophy className="w-4 h-4 text-muted-foreground" />
                <span className="font-bold text-lg">{game.difficulty}</span>
              </div>
              <p className="text-sm text-muted-foreground">Difficulty</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="font-bold text-lg">2024</span>
              </div>
              <p className="text-sm text-muted-foreground">Release</p>
            </div>
          </div>
        </CardContent>
      </Card>
      */}
      {/* Game Description */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gamepad className="w-5 h-5" />
            About This Game
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            {game.description}
          </p>
          
          <div>
            <h4 className="font-semibold mb-2">Developer</h4>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-muted-foreground" />
              <span>{game.developer}</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Category & Tags</h4>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                {game.category}
              </Badge>
              {game.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="bg-muted/50">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Game Features 
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5" />
            Game Features
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {game.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
 */}
      {/* Accordion for How to Play and FAQ */}
      <Card>
        <CardContent className="p-0">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="controls" className="px-6">
              <AccordionTrigger className="flex items-center gap-2">
                <Gamepad className="w-4 h-4" />
                Controls
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2">
                  {game.controls.map((control, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">{control}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="how-to-play" className="px-6">
              <AccordionTrigger className="flex items-center gap-2">
                <Lightbulb className="w-4 h-4" />
                How to Play
              </AccordionTrigger>
              <AccordionContent>
                <ol className="space-y-2">
                  {game.howToPlay.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-sm">{step}</span>
                    </li>
                  ))}
                </ol>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq" className="px-6">
              <AccordionTrigger className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4" />
                Frequently Asked Questions
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  {game.faq.map((item, index) => (
                    <div key={index}>
                      <h5 className="font-medium text-sm mb-1">{item.question}</h5>
                      <p className="text-sm text-muted-foreground">{item.answer}</p>
                      {index < game.faq.length - 1 && <Separator className="mt-4" />}
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}