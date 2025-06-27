import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Mail, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function ConnectPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen py-16 px-4 bg-slate-50">
        <div className="nyt-container text-center max-w-2xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900" style={{ fontFamily: 'Noto Serif, Georgia, serif' }}>
            保持联系
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed">
            我们很高兴能与您建立联系！无论是问题、建议还是合作机会，都欢迎随时与我们联系。
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link href="mailto:support@minigamehub.com" target="_blank" rel="noopener noreferrer">
              <Button className="nyt-button gap-2 text-base px-8 py-3">
                <Mail className="w-5 h-5" />
                发送邮件
              </Button>
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="nyt-button-outline gap-2 text-base px-8 py-3">
                <MessageSquare className="w-5 h-5" />
                加入 Discord
              </Button>
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="nyt-button-outline gap-2 text-base px-8 py-3">
                <MessageSquare className="w-5 h-5" />
                关注 Twitter
              </Button>
            </Link>
          </div>

          <p className="text-sm text-slate-500 leading-relaxed">
            我们通常会在 24 小时内回复。
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
} 