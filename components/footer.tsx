import Link from 'next/link';
import { Github, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="nyt-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <div className="text-xl font-bold text-slate-900" style={{ fontFamily: 'Noto Serif, Georgia, serif' }}>
                MiniGameHub
              </div>
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed">
              Your ultimate destination for free online games. Play, discover, and enjoy hundreds of games across all genres.
            </p>
          </div>

          {/* Games */}
          <div>
            <h3 className="font-medium mb-4 text-slate-900" style={{ fontFamily: 'Noto Serif, Georgia, serif' }}>
              Game Categories
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#games" className="text-slate-600 hover:text-slate-900 transition-colors">Action Games</Link></li>
              <li><Link href="/#games" className="text-slate-600 hover:text-slate-900 transition-colors">Puzzle Games</Link></li>
              <li><Link href="/#games" className="text-slate-600 hover:text-slate-900 transition-colors">Racing Games</Link></li>
              <li><Link href="/#games" className="text-slate-600 hover:text-slate-900 transition-colors">Adventure Games</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-medium mb-4 text-slate-900" style={{ fontFamily: 'Noto Serif, Georgia, serif' }}>
              Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-slate-600 hover:text-slate-900 transition-colors">Help Center</Link></li>
              <li><Link href="#" className="text-slate-600 hover:text-slate-900 transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="text-slate-600 hover:text-slate-900 transition-colors">Bug Report</Link></li>
              <li><Link href="#" className="text-slate-600 hover:text-slate-900 transition-colors">Feedback</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-medium mb-4 text-slate-900" style={{ fontFamily: 'Noto Serif, Georgia, serif' }}>
              Connect
            </h3>
            <div className="flex gap-4">
              <Link href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500">
            © 2024 MiniGameHub. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}