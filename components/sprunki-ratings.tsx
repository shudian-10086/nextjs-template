import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Star, 
  Users, 
  ThumbsUp, 
  MessageSquare, 
  Award,
  TrendingUp,
  Heart,
  Share2
} from 'lucide-react';

export function SprunkiRatings() {
  const overallRating = 4.9;
  const totalReviews = 15420;
  const totalPlayers = 285420;

  const ratingBreakdown = [
    { stars: 5, count: 12336, percentage: 80 },
    { stars: 4, count: 2314, percentage: 15 },
    { stars: 3, count: 462, percentage: 3 },
    { stars: 2, count: 154, percentage: 1 },
    { stars: 1, count: 154, percentage: 1 }
  ];

  const highlights = [
    {
      icon: Heart,
      label: 'Player Satisfaction',
      value: '95%',
      description: 'Players love Sprunki Game'
    },
    {
      icon: TrendingUp,
      label: 'Growing Community',
      value: '285k+',
      description: 'Active players worldwide'
    },
    {
      icon: Award,
      label: 'Top Rated',
      value: '#1',
      description: 'Music game category'
    },
    {
      icon: Share2,
      label: 'Shared Creations',
      value: '50k+',
      description: 'Musical compositions shared'
    }
  ];

  const recentReviews = [
    {
      name: 'Sarah M.',
      rating: 5,
      comment: 'Absolutely love this game! My kids and I spend hours creating music together. It\'s educational and so much fun!',
      date: '2 days ago',
      helpful: 24
    },
    {
      name: 'Mike R.',
      rating: 5,
      comment: 'As a music teacher, I use Sprunki Game in my classes. Students are more engaged and creative than ever before.',
      date: '1 week ago',
      helpful: 18
    },
    {
      name: 'Emma L.',
      rating: 4,
      comment: 'Great game with amazing characters! Would love to see even more character options in future updates.',
      date: '2 weeks ago',
      helpful: 12
    }
  ];

  return (
    <section className="nyt-section bg-slate-700" id="ratings">
      <div className="nyt-container">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-slate-200 text-slate-700 hover:text-slate-100 px-4 py-2 text-sm font-medium tracking-wide">
            Player Reviews & Ratings
          </Badge>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-medium mb-6 text-orange-400" style={{ fontFamily: 'Noto Serif, Georgia, serif' }}>
            What Players Say About Sprunki Game
          </h2>
          <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied players who love creating music with Sprunki Game
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Overall Rating */}
          <Card className="nyt-card lg:col-span-1 !bg-slate-600 ">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-slate-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-10 h-10 text-orange-200 fill-current" />
              </div>
              <CardTitle className="text-4xl font-medium text-orange-200" style={{ fontFamily: 'Noto Serif, Georgia, serif' }}>
                {overallRating}
              </CardTitle>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(overallRating)
                        ? 'text-orange-200 fill-current'
                        : 'text-orange-200'
                    }`}
                  />
                ))}
              </div>
              <p className="text-orange-300">
                Based on {totalReviews.toLocaleString()} reviews
              </p>
            </CardHeader>
            <CardContent className="space-y-3">
              {ratingBreakdown.map((rating) => (
                <div key={rating.stars} className="flex items-center gap-3">
                  <div className="flex items-center gap-1 w-12">
                    <span className="text-sm font-medium text-orange-200">{rating.stars}</span>
                    <Star className="w-3 h-3 text-orange-300 fill-current" />
                  </div>
                  <Progress value={rating.percentage} className="flex-1 h-2" />
                  <span className="text-sm text-orange-300 w-12 text-right">
                    {rating.percentage}%
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Highlights */}
          <Card className="nyt-card lg:col-span-2 !bg-slate-600 !text-slate-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-100" style={{ fontFamily: 'Noto Serif, Georgia, serif' }}>
                <Award className="w-5 h-5 text-orange-300" />
                Game Highlights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                {highlights.map((highlight, index) => {
                  const Icon = highlight.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-slate-900 rounded-sm flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-medium text-orange-200 mb-1" style={{ fontFamily: 'Noto Serif, Georgia, serif' }}>
                        {highlight.value}
                      </div>
                      <div className="font-medium text-orange-100 mb-1">{highlight.label}</div>
                      <div className="text-sm text-orange-300">
                        {highlight.description}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Reviews */}
        <Card className="nyt-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-900" style={{ fontFamily: 'Noto Serif, Georgia, serif' }}>
              <MessageSquare className="w-5 h-5 text-slate-600" />
              Recent Player Reviews
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {recentReviews.map((review, index) => (
              <div key={index} className="border-b border-slate-200 last:border-b-0 pb-6 last:pb-0">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white font-semibold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">{review.name}</div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? 'text-orange-300 fill-current'
                                : 'text-slate-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="text-sm text-slate-500">{review.date}</span>
                </div>
                <p className="text-slate-600 mb-3 leading-relaxed">
                  {review.comment}
                </p>
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="gap-2 text-slate-500 hover:text-slate-700">
                    <ThumbsUp className="w-4 h-4" />
                    Helpful ({review.helpful})
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

      </div>
    </section>
  );
}