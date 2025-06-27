'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Home, Grid3X3, Info, MessageSquare, Book, Gamepad2 } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Game", icon: Gamepad2 },
    { href: "/#how-to-play", label: "How to Play", icon: Book },
    { href: "/#faq", label: "FAQ", icon: Info }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-50/95 backdrop-blur-sm border-b border-slate-200">
      <div className="nyt-container">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-slate-900" style={{ fontFamily: 'Noto Serif, Georgia, serif' }}>
              MiniGameHub
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm" className="text-slate-600">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-slate-50">
              <div className="flex items-center mb-8">
                <div className="text-xl font-bold text-slate-900" style={{ fontFamily: 'Noto Serif, Georgia, serif' }}>
                  MiniGameHub
                </div>
              </div>
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200 py-2"
                    >
                      <Icon className="w-4 h-4" />
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}