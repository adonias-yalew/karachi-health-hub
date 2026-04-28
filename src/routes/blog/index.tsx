import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/sections/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";
import { blogPosts } from "@/data/content";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        {/* Hero */}
        <section className="py-24 bg-brand-tint/50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-xs uppercase tracking-[0.22em] text-primary">
                Health insights
              </p>
              <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-ink">
                Our Blog
              </h1>
              <p className="mt-4 text-muted-foreground">
                Expert tips, insights, and advice from our physiotherapy
                specialists to help you live a healthier, pain-free life.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card
                  key={post.id}
                  className="overflow-hidden rounded-3xl border-brand/20 flex flex-col"
                >
                  <div className="h-48 bg-brand-soft">
                    <div className="h-full w-full bg-gradient-to-br from-brand/30 to-brand/10 flex items-center justify-center">
                      <span className="text-6xl">🏥</span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-full bg-brand-tint text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" /> {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> {post.date}
                      </span>
                    </div>
                    <Button
                      asChild
                      variant="ghost"
                      className="self-start p-0 h-auto text-primary hover:text-primary hover:bg-transparent"
                    >
                      <a href={`/blog/${post.id}`}>
                        Read more <ArrowRight className="h-4 w-4 ml-1" />
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-24 bg-brand-tint/40">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="text-3xl font-semibold mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest health tips and clinic
              updates.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 h-12 px-4 rounded-xl border border-border bg-background outline-none focus:border-primary transition"
              />
              <Button type="submit" className="rounded-xl">
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
