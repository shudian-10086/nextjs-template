import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  HelpCircle, 
  MessageCircle, 
  Music,
  Users,
  Smartphone,
  Gamepad2
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function SprunkiFAQ() {
  const faqCategories = [
    {
      category: 'Getting Started',
      icon: Gamepad2,
      questions: [
        {
          question: 'What makes Sprunki Game special?',
          answer: 'Sprunki Game combines music creation with interactive gameplay, making it accessible for all ages. Each character has unique sounds and animations that respond to your creativity, creating an immersive musical experience unlike any other game.'
        },
        {
          question: 'Do I need musical experience to play?',
          answer: 'Not at all! Sprunki Game is designed for everyone. The intuitive drag-and-drop interface makes music creation fun and easy, regardless of your musical background. You\'ll be creating amazing beats within minutes!'
        },
        {
          question: 'Is Sprunki Game suitable for children?',
          answer: 'Absolutely! Sprunki Game is family-friendly with colorful graphics, positive themes, and educational value in music and creativity. It\'s perfect for kids to explore their musical talents in a safe, engaging environment.'
        }
      ]
    },
    {
      category: 'Gameplay Features',
      icon: Music,
      questions: [
        {
          question: 'How many characters are available?',
          answer: 'There are over 20 unique Sprunki characters, each with distinct sounds, personalities, and visual effects. New characters are regularly added to expand your creative options and keep the experience fresh.'
        },
        {
          question: 'Can I save my musical creations?',
          answer: 'Yes! You can save your compositions locally and even share them with friends. The game stores your creations so you can return to them anytime and continue building your musical library.'
        },
        {
          question: 'What types of music can I create?',
          answer: 'Sprunki Game supports various musical styles from electronic beats to melodic compositions. With different character combinations, you can create everything from simple rhythms to complex multi-layered musical pieces.'
        }
      ]
    },
    {
      category: 'Technical Support',
      icon: Smartphone,
      questions: [
        {
          question: 'Can I play Sprunki Game on mobile devices?',
          answer: 'Yes, Sprunki Game is optimized for both desktop and mobile play. The responsive design ensures you can create music anywhere, anytime, with touch-friendly controls on mobile devices.'
        },
        {
          question: 'Do I need to download anything?',
          answer: 'No downloads required! Sprunki Game runs directly in your web browser, making it instantly accessible. Just visit the website and start creating music immediately.'
        },
        {
          question: 'What if I encounter technical issues?',
          answer: 'If you experience any technical problems, try refreshing your browser first. For persistent issues, our support team is available to help you get back to creating music quickly.'
        }
      ]
    }
  ];

  return (
    <section className="nyt-section bg-white">
      <div className="nyt-container">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-slate-200 text-slate-700 hover:text-slate-100 px-4 py-2 text-sm font-medium tracking-wide">
            Frequently Asked Questions
          </Badge>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-medium mb-6 text-slate-900" style={{ fontFamily: 'Noto Serif, Georgia, serif' }}>
            Everything You Need to Know About Sprunki Game
          </h2>
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions and get the most out of your Sprunki Game experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {faqCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <Card key={categoryIndex} className="nyt-card">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-slate-900 rounded-sm flex items-center justify-center">
                      <CategoryIcon className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-lg font-medium text-slate-900" style={{ fontFamily: 'Noto Serif, Georgia, serif' }}>
                      {category.category}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem 
                        key={faqIndex} 
                        value={`${categoryIndex}-${faqIndex}`}
                        className="px-6 border-b-0 last:border-b-0"
                      >
                        <AccordionTrigger className="text-left hover:no-underline py-4">
                          <span className="font-medium text-sm leading-relaxed pr-2 text-slate-900">
                            {faq.question}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="pb-4">
                          <p className="text-sm text-slate-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact Support Section */}
        <Card className="nyt-card mt-16 bg-slate-50 border-slate-300">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-medium mb-2 text-slate-900" style={{ fontFamily: 'Noto Serif, Georgia, serif' }}>
              Still Have Questions?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our friendly support team is here to help you get the most out of Sprunki Game.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="nyt-button gap-2">
                <MessageCircle className="w-4 h-4" />
                Contact Support
              </Button>
              <Button className="nyt-button-outline gap-2">
                <Users className="w-4 h-4" />
                Join Community
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}