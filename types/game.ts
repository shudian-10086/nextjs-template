export interface Game {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  category: GameCategory;
  tags: string[];
  thumbnail: string;
  gameUrl: string;
  featured: boolean;
  rating: number;
  playCount: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  controls: string[];
  features: string[];
  howToPlay: string[];
  faq: FAQ[];
  screenshots: string[];
  releaseDate: string;
  developer: string;
  content: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export type GameCategory = 
  | 'Action'
  | 'Adventure'
  | 'Puzzle'
  | 'Strategy'
  | 'Racing'
  | 'Sports'
  | 'Arcade'
  | 'Casual';

export interface GameStats {
  totalGames: number;
  totalPlays: number;
  categories: GameCategory[];
}