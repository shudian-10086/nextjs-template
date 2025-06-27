import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { StagewiseInitializer } from '@/components/dev/stagewise-initializer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://minigamehub.com'),
  title: {
    default: 'MiniGameHub - 免费在线小游戏平台 | 精选休闲游戏大全',
    template: '%s | MiniGameHub'
  },
  description: '探索MiniGameHub，最优质的免费在线小游戏平台。提供音乐创作、益智解谜、竞速赛车、冒险探索等多种类型游戏。无需下载，立即畅玩Sprunki音乐游戏等热门作品。',
  keywords: ['在线小游戏', '免费游戏', 'Sprunki游戏', '音乐游戏', '益智游戏', '竞速游戏', '冒险游戏', '网页游戏', '休闲游戏', '浏览器游戏'],
  authors: [{ name: 'MiniGameHub', url: 'https://minigamehub.com' }],
  creator: 'MiniGameHub',
  publisher: 'MiniGameHub',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code-here',
    yandex: 'your-yandex-verification-code-here',
    yahoo: 'your-yahoo-verification-code-here',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://minigamehub.com',
    siteName: 'MiniGameHub',
    title: 'MiniGameHub - 免费在线小游戏平台',
    description: '探索精选免费小游戏，包括Sprunki音乐创作、益智解谜、竞速冒险等。无需下载，即点即玩！',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MiniGameHub - 免费在线小游戏平台',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MiniGameHub - 免费在线小游戏平台',
    description: '探索精选免费小游戏，包括Sprunki音乐创作、益智解谜、竞速冒险等。无需下载，即点即玩！',
    images: ['/og-image.jpg'],
    creator: '@minigamehub',
    site: '@minigamehub',
  },
  alternates: {
    canonical: 'https://minigamehub.com',
    languages: {
      'zh-CN': 'https://minigamehub.com',
      'en-US': 'https://minigamehub.com/en',
    },
  },
  category: 'entertainment',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="light">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#1e293b" />
        <meta name="msapplication-TileColor" content="#1e293b" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="MiniGameHub" />
        <meta name="application-name" content="MiniGameHub" />
        <meta name="msapplication-tooltip" content="MiniGameHub - 免费在线小游戏平台" />
        <meta name="msapplication-starturl" content="/" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="canonical" href="https://minigamehub.com" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://turbowarp.org" />
      </head>
      <body className={inter.className}>
        {children}
        <StagewiseInitializer />
      </body>
    </html>
  );
}