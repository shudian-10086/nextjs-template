import { BlogPost } from '@/types/blog-post';
import type { Metadata } from 'next';

export const blogPosts: BlogPost[] = [
  {
    slug: 'my-first-blog-post',
    title: '我的第一篇博客文章',
    date: '2024年7月26日',
    shortDescription: '欢迎来到 MiniGameHub 的博客！这是我的第一篇测试文章。我们将分享关于游戏开发、最新游戏发布、行业趋势以及社区故事等内容。',
    content: `
      <p>
        欢迎来到 MiniGameHub 的博客！这是我的第一篇测试文章。在这里，我们将分享关于游戏开发、最新游戏发布、行业趋势以及社区故事等内容。
      </p>
      <p>
        我们的目标是创建一个不仅能让您玩得开心，还能让您了解游戏幕后故事的平台。敬请期待更多精彩内容！
      </p>
      <h3>为什么我们创建 MiniGameHub？</h3>
      <p>
        MiniGameHub 的诞生源于对简单、纯粹游戏乐趣的追求。我们注意到市面上很多游戏都需要复杂的安装过程或者订阅费用。我们希望提供一个即开即玩、完全免费的平台，让每个人都能随时随地享受游戏的乐趣，无需任何负担。
      </p>
      <h4>我们未来会发布哪些内容？</h4>
      <ul>
        <li>新游戏预览和深度评测</li>
        <li>游戏开发日志和幕后故事</li>
        <li>社区亮点和玩家采访</li>
        <li>游戏行业新闻和技术分享</li>
      </ul>
      <p>
        感谢您的阅读，期待在评论区与您互动！
      </p>
    `,
  },
  // Add more blog posts here
];

export const getBlogPosts = (): BlogPost[] => {
  return blogPosts;
};

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {}; // 或者返回一个默认的元数据
  }

  const title = `${post.title} - MiniGameHub Blog`;
  const description = post.shortDescription;
  const url = `https://minigamehub.com/blog/${post.slug}`; // 请替换为你的实际域名

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      // 如果有文章的封面图片，可以在这里添加：
      // images: [
      //   {
      //     url: post.imageUrl || '/default-blog-image.png', // 请替换为实际的图片 URL
      //     width: 1200,
      //     height: 630,
      //     alt: post.title,
      //   },
      // ],
    },
    // 如果需要 Twitter card，可以添加：
    // twitter: {
    //   card: 'summary_large_image',
    //   title,
    //   description,
    //   creator: '@YourTwitterHandle', // 替换为你的 Twitter 句柄
    //   images: [post.imageUrl || '/default-blog-image.png'],
    // },
  };
} 