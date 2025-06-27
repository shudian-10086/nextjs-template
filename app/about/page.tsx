import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen py-16 px-4 bg-slate-50">
        <div className="nyt-container text-center max-w-2xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900" style={{ fontFamily: 'Noto Serif, Georgia, serif' }}>
            关于 MiniGameHub
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed">
            MiniGameHub 致力于为全球玩家提供一个免费、易玩且无需下载的在线游戏平台。我们相信，每个人都应该能够轻松享受游戏的乐趣。
          </p>
          <p className="text-lg lg:text-xl text-slate-600 leading-relaxed">
            我们精选了数百款涵盖动作、益智、赛车和冒险等各种类型的迷你游戏，旨在带给您和您的家人无尽的娱乐体验。
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
} 