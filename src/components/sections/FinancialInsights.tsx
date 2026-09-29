import Image from 'next/image';
import { ChevronRight, Calendar, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { ROUTES, BLOG_POSTS } from '@/lib/constants';

export default function FinancialInsights() {
  const blogs = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-20 bg-gradient-navy-accent relative overflow-hidden">
      {/* Premium background accents */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-gold-primary rounded-full blur-3xl opacity-15" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold-primary rounded-full blur-3xl opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-primary/10 border border-gold-primary/30">
            <BookOpen size={16} className="text-gold-primary" />
            <span className="text-gold-primary font-semibold text-sm tracking-wide">KNOWLEDGE HUB</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">Financial Insights &amp; Guides</h2>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">
            Stay informed with verified financial education, loan planning strategies, and vehicle buying tips.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-navy/40 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-gold-primary/20 transition-all border border-gold-primary/20 hover:border-gold-primary/50 flex flex-col justify-between group hover:-translate-y-2"
            >
              <div>
                {/* Blog Card Image */}
                <div className="h-48 w-full relative overflow-hidden bg-navy">
                  <Image
                    src={blog.image}
                    alt={`${blog.title} - Financial Guide`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-gradient-gold text-navy text-xs font-bold rounded-full shadow-md">
                    {blog.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-gold-primary font-semibold mb-2">
                    <Calendar size={13} />
                    <span>{blog.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-gold-primary transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-white/70 line-clamp-2 mb-4 leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6">
                <Link
                  href={`/blog/${blog.slug}`}
                  className="inline-flex items-center gap-2 text-sm text-gold-primary hover:text-gold-light font-bold transition-colors"
                >
                  <span>Read Full Guide</span>
                  <ChevronRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href={ROUTES.BLOG}
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-gold text-navy font-semibold rounded-xl hover:shadow-lg hover:shadow-gold-primary/50 transition-all transform hover:scale-105"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
