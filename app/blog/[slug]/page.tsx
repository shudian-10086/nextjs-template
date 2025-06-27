import { notFound } from 'next/navigation';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { getBlogPostBySlug, getBlogPosts } from '@/data/blog-posts';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen py-16 px-4 bg-slate-50">
        <div className="nyt-container max-w-4xl mx-auto space-y-8">
          <Link href="/blog" className="inline-block mb-8">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              返回博客列表
            </Button>
          </Link>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'Noto Serif, Georgia, serif' }}>
            {post.title}
          </h1>
          <p className="text-sm text-slate-500 mb-8">
            发布日期：{post.date}
          </p>
          
          <div 
            className="prose prose-slate max-w-none text-slate-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

        </div>
      </main>
      <Footer />
    </>
  );
} 