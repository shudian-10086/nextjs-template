import { Game } from '@/types/game';

export const games: Game[] = [
  {
    id: '1',
    title: 'Sprunki Game',
    slug: 'sprunki-game',
    description: 'Sprunki Game is an innovative music creation platform that combines beatboxing with interactive character design. Create unique musical compositions by mixing and matching different Sprunki characters, each with their own distinctive sounds and personalities.',
    shortDescription: 'Create amazing music with colorful Sprunki characters in this interactive beatbox experience.',
    category: 'Casual',
    tags: ['music', 'creative', 'beatbox', 'interactive', 'family-friendly'],
    thumbnail: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
    backgroundImage: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gameUrl: 'https://turbowarp.org/1114551059/embed',
    featured: true,
    rating: 4.9,
    playCount: 285420,
    difficulty: 'Easy',
    controls: [
      'Mouse Click - Select and place characters',
      'Drag & Drop - Move characters to create beats',
      'Spacebar - Play/Pause composition',
      'R - Reset current composition',
      'S - Save your creation'
    ],
    features: [
      'Interactive Music Creation',
      '20+ Unique Sprunki Characters',
      'Real-time Beat Mixing',
      'Save & Share Compositions',
      'Colorful Visual Effects',
      'Kid-Friendly Interface',
      'No Musical Experience Required',
      'Endless Creative Possibilities'
    ],
    howToPlay: [
      'Choose your favorite Sprunki characters from the character panel',
      'Drag characters onto the stage to start creating beats',
      'Each character adds a unique sound layer to your composition',
      'Experiment with different character combinations for varied rhythms',
      'Use the play button to listen to your musical creation',
      'Save your favorite compositions and share them with friends',
      'Try different arrangements to discover new sound combinations'
    ],
    faq: [
      {
        question: 'What makes Sprunki Game special?',
        answer: 'Sprunki Game combines music creation with interactive gameplay, making it accessible for all ages. Each character has unique sounds and animations that respond to your creativity.'
      },
      {
        question: 'Do I need musical experience to play?',
        answer: 'Not at all! Sprunki Game is designed for everyone. The intuitive drag-and-drop interface makes music creation fun and easy, regardless of your musical background.'
      },
      {
        question: 'Can I save my musical creations?',
        answer: 'Yes! You can save your compositions and even share them with friends. The game stores your creations locally so you can return to them anytime.'
      },
      {
        question: 'How many characters are available?',
        answer: 'There are over 20 unique Sprunki characters, each with distinct sounds, personalities, and visual effects. New characters are regularly added to expand your creative options.'
      },
      {
        question: 'Is Sprunki Game suitable for children?',
        answer: 'Absolutely! Sprunki Game is family-friendly with colorful graphics, positive themes, and educational value in music and creativity.'
      },
      {
        question: 'Can I play Sprunki Game on mobile devices?',
        answer: 'Yes, Sprunki Game is optimized for both desktop and mobile play, so you can create music anywhere, anytime.'
      }
    ],
    screenshots: [
      'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    releaseDate: '2024-01-15',
    developer: 'Sprunki Studios',
    content: `
      <h2 class="text-2xl font-semibold text-slate-900 mb-4" style="font-family: 'Noto Serif', Georgia, serif;">游戏介绍</h2>
      <p class="text-slate-600 leading-relaxed mb-6">Sprunki Game is an innovative music creation platform that combines beatboxing with interactive character design. Create unique musical compositions by mixing and matching different Sprunki characters, each with their own distinctive sounds and personalities.</p>

      <h2 class="text-2xl font-semibold text-slate-900 mb-4" style="font-family: 'Noto Serif', Georgia, serif;">如何游玩</h2>
      <ul class="list-disc list-inside text-slate-600 space-y-2 mb-6">
        <li>Choose your favorite Sprunki characters from the character panel</li>
        <li>Drag characters onto the stage to start creating beats</li>
        <li>Each character adds a unique sound layer to your composition</li>
        <li>Experiment with different character combinations for varied rhythms</li>
        <li>Use the play button to listen to your musical creation</li>
        <li>Save your favorite compositions and share them with friends</li>
        <li>Try different arrangements to discover new sound combinations</li>
      </ul>

      <h2 class="text-2xl font-semibold text-slate-900 mb-4" style="font-family: 'Noto Serif', Georgia, serif;">主要特色</h2>
      <ul class="list-disc list-inside text-slate-600 space-y-2 mb-6">
        <li>Interactive Music Creation</li>
        <li>20+ Unique Sprunki Characters</li>
        <li>Real-time Beat Mixing</li>
        <li>Save & Share Compositions</li>
        <li>Colorful Visual Effects</li>
        <li>Kid-Friendly Interface</li>
        <li>No Musical Experience Required</li>
        <li>Endless Creative Possibilities</li>
      </ul>

      <h2 class="text-2xl font-semibold text-slate-900 mb-4" style="font-family: 'Noto Serif', Georgia, serif;">常见问题</h2>
      <div class="space-y-4">
        <div>
          <h3 class="text-lg font-medium text-slate-800">What makes Sprunki Game special?</h3>
          <p class="text-slate-600 leading-relaxed">Sprunki Game combines music creation with interactive gameplay, making it accessible for all ages. Each character has unique sounds and animations that respond to your creativity.</p>
        </div>
        <div>
          <h3 class="text-lg font-medium text-slate-800">Do I need musical experience to play?</h3>
          <p class="text-slate-600 leading-relaxed">Not at all! Sprunki Game is designed for everyone. The intuitive drag-and-drop interface makes music creation fun and easy, regardless of your musical background.</p>
        </div>
        <div>
          <h3 class="text-lg font-medium text-slate-800">Can I save my musical creations?</h3>
          <p class="text-slate-600 leading-relaxed">Yes! You can save your compositions and even share them with friends. The game stores your creations locally so you can return to them anytime.</p>
        </div>
        <div>
          <h3 class="text-lg font-medium text-slate-800">How many characters are available?</h3>
          <p class="text-slate-600 leading-relaxed">There are over 20 unique Sprunki characters, each with distinct sounds, personalities, and visual effects. New characters are regularly added to expand your creative options.</p>
        </div>
        <div>
          <h3 class="text-lg font-medium text-slate-800">Is Sprunki Game suitable for children?</h3>
          <p class="text-slate-600 leading-relaxed">Absolutely! Sprunki Game is family-friendly with colorful graphics, positive themes, and educational value in music and creativity.</p>
        </div>
        <div>
          <h3 class="text-lg font-medium text-slate-800">Can I play Sprunki Game on mobile devices?</h3>
          <p class="text-slate-600 leading-relaxed">Yes, Sprunki Game is optimized for both desktop and mobile play, so you can create music anywhere, anytime.</p>
        </div>
      </div>
    `
  },
  {
    id: '2',
    title: 'Puzzle Master',
    slug: 'puzzle-master',
    description: 'Challenge your mind with this collection of brain-teasing puzzles. Solve increasingly difficult levels and unlock new puzzle types.',
    shortDescription: 'Brain-teasing puzzle collection with multiple game modes.',
    category: 'Puzzle',
    tags: ['puzzle', 'brain', 'logic', 'educational','cars'],
    thumbnail: 'https://images.pexels.com/photos/3846177/pexels-photo-3846177.jpeg?auto=compress&cs=tinysrgb&w=800',
    backgroundImage: 'https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gameUrl: 'https://turbowarp.org/1114551059/embed',
    featured: false,
    rating: 4.6,
    playCount: 89234,
    difficulty: 'Hard',
    controls: ['Mouse - Click and Drag', 'Keyboard - Type Answers'],
    features: ['50+ Levels', 'Multiple Puzzle Types', 'Hint System', 'Timer Challenges'],
    howToPlay: [
      'Read the puzzle instructions carefully',
      'Use mouse to interact with puzzle elements',
      'Think logically to solve each challenge',
      'Use hints if you get stuck'
    ],
    faq: [
      {
        question: 'How many levels are there?',
        answer: 'There are over 50 unique levels across different puzzle categories.'
      },
      {
        question: 'Can I skip difficult levels?',
        answer: 'You need to complete levels in order, but you can use hints to help solve them.'
      }
    ],
    screenshots: [
      'https://images.pexels.com/photos/3846177/pexels-photo-3846177.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    releaseDate: '2024-02-20',
    developer: 'MindGames Inc',
    content: `
      <h2 class="text-2xl font-semibold text-slate-900 mb-4" style="font-family: 'Noto Serif', Georgia, serif;">游戏介绍</h2>
      <p class="text-slate-600 leading-relaxed mb-6">Challenge your mind with this collection of brain-teasing puzzles. Solve increasingly difficult levels and unlock new puzzle types.</p>

      <h2 class="text-2xl font-semibold text-slate-900 mb-4" style="font-family: 'Noto Serif', Georgia, serif;">如何游玩</h2>
      <ul class="list-disc list-inside text-slate-600 space-y-2 mb-6">
        <li>Read the puzzle instructions carefully</li>
        <li>Use mouse to interact with puzzle elements</li>
        <li>Think logically to solve each challenge</li>
        <li>Use hints if you get stuck</li>
      </ul>

      <h2 class="text-2xl font-semibold text-slate-900 mb-4" style="font-family: 'Noto Serif', Georgia, serif;">主要特色</h2>
      <ul class="list-disc list-inside text-slate-600 space-y-2 mb-6">
        <li>50+ Levels</li>
        <li>Multiple Puzzle Types</li>
        <li>Hint System</li>
        <li>Timer Challenges</li>
      </ul>

      <h2 class="text-2xl font-semibold text-slate-900 mb-4" style="font-family: 'Noto Serif', Georgia, serif;">常见问题</h2>
      <div class="space-y-4">
        <div>
          <h3 class="text-lg font-medium text-slate-800">How many levels are there?</h3>
          <p class="text-slate-600 leading-relaxed">There are over 50 unique levels across different puzzle categories.</p>
        </div>
        <div>
          <h3 class="text-lg font-medium text-slate-800">Can I skip difficult levels?</h3>
          <p class="text-slate-600 leading-relaxed">You need to complete levels in order, but you can use hints to help solve them.</p>
        </div>
      </div>
    `
  },
  {
    id: '3',
    title: 'Racing Thunder',
    slug: 'racing-thunder',
    description: 'High-speed racing action with multiple tracks and cars. Compete against AI opponents and try to set new lap records.',
    shortDescription: 'High-speed racing with multiple tracks and vehicles.',
    category: 'Racing',
    tags: ['racing', 'cars', 'speed', 'competition'],
    thumbnail: 'https://images.pexels.com/photos/358273/pexels-photo-358273.jpeg?auto=compress&cs=tinysrgb&w=800',
    backgroundImage: 'https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gameUrl: 'https://turbowarp.org/1114551059/embed',
    featured: false,
    rating: 4.7,
    playCount: 156789,
    difficulty: 'Medium',
    controls: ['Arrow Keys - Steer', 'Shift - Boost', 'Ctrl - Brake'],
    features: ['8 Unique Tracks', '12 Different Cars', 'Time Trials', 'Championship Mode'],
    howToPlay: [
      'Select your car and track',
      'Use arrow keys to steer your vehicle',
      'Press Shift for speed boost (limited use)',
      'Complete laps faster than opponents to win'
    ],
    faq: [
      {
        question: 'How do I unlock new cars?',
        answer: 'Win races to earn points and unlock new vehicles.'
      },
      {
        question: 'What is the boost system?',
        answer: 'Each car has limited boost energy that regenerates over time.'
      }
    ],
    screenshots: [
      'https://images.pexels.com/photos/358273/pexels-photo-358273.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    releaseDate: '2024-01-08',
    developer: 'SpeedWorks',
    content: `
      <h2 class="text-2xl font-semibold text-slate-900 mb-4" style="font-family: 'Noto Serif', Georgia, serif;">游戏介绍</h2>
      <p class="text-slate-600 leading-relaxed mb-6">High-speed racing action with multiple tracks and cars. Compete against AI opponents and try to set new lap records.</p>

      <h2 class="text-2xl font-semibold text-slate-900 mb-4" style="font-family: 'Noto Serif', Georgia, serif;">如何游玩</h2>
      <ul class="list-disc list-inside text-slate-600 space-y-2 mb-6">
        <li>Select your car and track</li>
        <li>Use arrow keys to steer your vehicle</li>
        <li>Press Shift for speed boost (limited use)</li>
        <li>Complete laps faster than opponents to win</li>
      </ul>

      <h2 class="text-2xl font-semibold text-slate-900 mb-4" style="font-family: 'Noto Serif', Georgia, serif;">主要特色</h2>
      <ul class="list-disc list-inside text-slate-600 space-y-2 mb-6">
        <li>8 Unique Tracks</li>
        <li>12 Different Cars</li>
        <li>Time Trials</li>
        <li>Championship Mode</li>
      </ul>

      <h2 class="text-2xl font-semibold text-slate-900 mb-4" style="font-family: 'Noto Serif', Georgia, serif;">常见问题</h2>
      <div class="space-y-4">
        <div>
          <h3 class="text-lg font-medium text-slate-800">How do I unlock new cars?</h3>
          <p class="text-slate-600 leading-relaxed">Win races to earn points and unlock new vehicles.</p>
        </div>
        <div>
          <h3 class="text-lg font-medium text-slate-800">What is the boost system?</h3>
          <p class="text-slate-600 leading-relaxed">Each car has limited boost energy that regenerates over time.</p>
        </div>
      </div>
    `
  },
  {
    id: '4',
    title: 'Adventure Quest',
    slug: 'adventure-quest',
    description: 'Embark on an epic adventure through mysterious lands. Solve puzzles, fight monsters, and discover hidden treasures.',
    shortDescription: 'Epic adventure with puzzles, combat, and exploration.',
    category: 'Adventure',
    tags: ['adventure', 'rpg', 'exploration', 'fantasy'],
    thumbnail: 'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=800',
    backgroundImage: 'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gameUrl: 'https://turbowarp.org/1114551059/embed',
    featured: false,
    rating: 4.9,
    playCount: 203456,
    difficulty: 'Hard',
    controls: ['WASD - Move', 'Mouse - Interact', 'E - Use Item', 'Tab - Inventory'],
    features: ['Open World', 'Character Progression', 'Multiple Endings', 'Side Quests'],
    howToPlay: [
      'Explore the world using WASD keys',
      'Talk to NPCs to get quests and information',
      'Collect items and manage your inventory',
      'Battle enemies using strategy and timing'
    ],
    faq: [
      {
        question: 'How long does it take to complete?',
        answer: 'The main story takes about 3-4 hours, with additional side content available.'
      },
      {
        question: 'Can I save my progress?',
        answer: 'Yes, the game automatically saves your progress at key checkpoints.'
      }
    ],
    screenshots: [
      'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    releaseDate: '2023-12-12',
    developer: 'Epic Adventures',
    content: `
      <h2 class="text-2xl font-semibold text-slate-900 mb-4" style="font-family: 'Noto Serif', Georgia, serif;">游戏介绍</h2>
      <p class="text-slate-600 leading-relaxed mb-6">Embark on an epic adventure through mysterious lands. Solve puzzles, fight monsters, and discover hidden treasures.</p>

      <h2 class="text-2xl font-semibold text-slate-900 mb-4" style="font-family: 'Noto Serif', Georgia, serif;">如何游玩</h2>
      <ul class="list-disc list-inside text-slate-600 space-y-2 mb-6">
        <li>Explore the world using WASD keys</li>
        <li>Talk to NPCs to get quests and information</li>
        <li>Collect items and manage your inventory</li>
        <li>Battle enemies using strategy and timing</li>
      </ul>

      <h2 class="text-2xl font-semibold text-slate-900 mb-4" style="font-family: 'Noto Serif', Georgia, serif;">主要特色</h2>
      <ul class="list-disc list-inside text-slate-600 space-y-2 mb-6">
        <li>Open World</li>
        <li>Character Progression</li>
        <li>Multiple Endings</li>
        <li>Side Quests</li>
      </ul>

      <h2 class="text-2xl font-semibold text-slate-900 mb-4" style="font-family: 'Noto Serif', Georgia, serif;">常见问题</h2>
      <div class="space-y-4">
        <div>
          <h3 class="text-lg font-medium text-slate-800">How long does it take to complete?</h3>
          <p class="text-slate-600 leading-relaxed">The main story takes about 3-4 hours, with additional side content available.</p>
        </div>
        <div>
          <h3 class="text-lg font-medium text-slate-800">Can I save my progress?</h3>
          <p class="text-slate-600 leading-relaxed">Yes, the game automatically saves your progress at key checkpoints.</p>
        </div>
      </div>
    `
  },
  {
    id: '5',
    title: 'Basketball Pro',
    slug: 'basketball-pro',
    description: 'Show off your basketball skills in this realistic sports game. Practice free throws, play matches, and become a basketball legend.',
    shortDescription: 'Realistic basketball game with multiple game modes.',
    category: 'Sports',
    tags: ['basketball', 'sports', 'skill', 'realistic'],
    thumbnail: 'https://images.pexels.com/photos/1080884/pexels-photo-1080884.jpeg?auto=compress&cs=tinysrgb&w=800',
    backgroundImage: 'https://images.pexels.com/photos/1080884/pexels-photo-1080884.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gameUrl: 'https://turbowarp.org/1114551059/embed',
    featured: false,
    rating: 4.5,
    playCount: 78923,
    difficulty: 'Easy',
    controls: ['Mouse - Aim and Shoot', 'Spacebar - Jump', 'Arrow Keys - Move Player'],
    features: ['Multiple Game Modes', 'Realistic Physics', 'Stat Tracking', 'Tournament Mode'],
    howToPlay: [
      'Use mouse to aim your shots',
      'Click and hold to set power, release to shoot',
      'Time your shots carefully for best accuracy',
      'Practice different shot types to improve'
    ],
    faq: [
      {
        question: 'How do I improve my shooting accuracy?',
        answer: 'Practice in free throw mode and pay attention to the timing and power indicators.'
      },
      {
        question: 'Are there different difficulty levels?',
        answer: 'Yes, you can adjust opponent difficulty in the settings menu.'
      }
    ],
    screenshots: [
      'https://images.pexels.com/photos/1080884/pexels-photo-1080884.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    releaseDate: '2024-01-30',
    developer: 'Sports Interactive',
    content: `
      <h2 class="text-2xl font-semibold text-slate-900 mb-4" style="font-family: 'Noto Serif', Georgia, serif;">游戏介绍</h2>
      <p class="text-slate-600 leading-relaxed mb-6">Show off your basketball skills in this realistic sports game. Practice free throws, play matches, and become a basketball legend.</p>

      <h2 class="text-2xl font-semibold text-slate-900 mb-4" style="font-family: 'Noto Serif', Georgia, serif;">如何游玩</h2>
      <ul class="list-disc list-inside text-slate-600 space-y-2 mb-6">
        <li>Use mouse to aim your shots</li>
        <li>Click and hold to set power, release to shoot</li>
        <li>Time your shots carefully for best accuracy</li>
        <li>Practice different shot types to improve</li>
      </ul>

      <h2 class="text-2xl font-semibold text-slate-900 mb-4" style="font-family: 'Noto Serif', Georgia, serif;">主要特色</h2>
      <ul class="list-disc list-inside text-slate-600 space-y-2 mb-6">
        <li>Multiple Game Modes</li>
        <li>Realistic Physics</li>
        <li>Stat Tracking</li>
        <li>Tournament Mode</li>
      </ul>

      <h2 class="text-2xl font-semibold text-slate-900 mb-4" style="font-family: 'Noto Serif', Georgia, serif;">常见问题</h2>
      <div class="space-y-4">
        <div>
          <h3 class="text-lg font-medium text-slate-800">How do I improve my shooting accuracy?</h3>
          <p class="text-slate-600 leading-relaxed">Practice in free throw mode and pay attention to the timing and power indicators.</p>
        </div>
        <div>
          <h3 class="text-lg font-medium text-slate-800">Are there different difficulty levels?</h3>
          <p class="text-slate-600 leading-relaxed">Yes, you can adjust opponent difficulty in the settings menu.</p>
        </div>
      </div>
    `
  }
];

export const featuredGame = games.find(game => game.featured) || games[0];

export const getGameBySlug = (slug: string): Game | undefined => {
  return games.find(game => game.slug === slug);
};

export const getGamesByCategory = (category: string): Game[] => {
  return games.filter(game => game.category === category);
};

export const getRelatedGames = (currentGame: Game, limit: number = 4): Game[] => {
  return games
    .filter(game =>
      game.id !== currentGame.id &&
      (game.category === currentGame.category ||
      game.tags.some(tag => currentGame.tags.includes(tag)))
    )
    .sort(() => 0.5 - Math.random()) // Shuffle results
    .slice(0, limit);
};

export const getGames = (): Game[] => {
  return games;
};

export const getGameCategories = (): string[] => {
  const categories = new Set<string>();
  games.forEach(game => categories.add(game.category));
  return Array.from(categories);
};

export const getFeaturedGames = (): Game[] => {
  return games.filter(game => game.featured);
};

export const getGameTags = (): string[] => {
  const allTags = games.flatMap(game => game.tags);
  return Array.from(new Set(allTags));
};