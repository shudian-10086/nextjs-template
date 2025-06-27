import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { getBlogPosts } from '@/data/blog-posts';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function BlogListPage() {
  const blogPosts = getBlogPosts();

  return (
    <>
      <Navigation />
      <main className="min-h-screen py-16 px-4 bg-slate-50">
        <div className="nyt-container max-w-5xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-12" style={{ fontFamily: 'Noto Serif, Georgia, serif' }}>
            最新博客文章
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="nyt-card group hover:-translate-y-1 transition-all duration-300 h-full">
                  <CardHeader>
                    <CardTitle className="text-xl font-medium text-slate-900 group-hover:text-slate-700 transition-colors" style={{ fontFamily: 'Noto Serif, Georgia, serif' }}>
                      {post.title}
                    </CardTitle>
                    <p className="text-sm text-slate-500 mt-2">{post.date}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">
                      {post.shortDescription}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 