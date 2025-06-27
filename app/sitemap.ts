import { MetadataRoute } from 'next';
import { getGames } from '@/data/games';

export default function sitemap(): MetadataRoute.Sitemap {
  const games = getGames();
  const baseUrl = 'https://minigamehub.com';

  // 静态页面 - 使用简单日期格式 (YYYY-MM-DD)
  const staticPages = [
    {
      url: baseUrl,
      lastModified: '2024-06-27', // 主页最后更新时间
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/games`,
      lastModified: '2024-06-27', // 游戏列表页最后更新时间
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: '2024-06-01', // 关于页面最后更新时间
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/connect`,
      lastModified: '2024-06-01', // 联系页面最后更新时间
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: '2024-06-20', // 博客页面最后更新时间
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: '2024-05-01', // 隐私政策最后更新时间
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: '2024-05-01', // 服务条款最后更新时间
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
  ];

  // 游戏页面 - 使用简单日期格式 (YYYY-MM-DD)
  const gamePages = games.map((game) => ({
    url: `${baseUrl}/games/${game.slug}`,
    lastModified: game.releaseDate || '2024-01-01',
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...gamePages];
} 