import { createFileRoute, useParams } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/sections/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import { blogPosts } from "@/data/content";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = blogPosts.find((p) => p.id === params.slug);
    return {
      meta: [
        { title: `${post?.title || "Article"} - Karachi Healthcare Blog` },
        {
          name: "description",
          content: post?.excerpt || "Health insights from our expert team.",
        },
      ],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { slug } = useParams({ from: "/blog/$slug" });
  const post = blogPosts.find((p) => p.id === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-24 text-center">
          <h1 className="text-4xl font-semibold">Article not found</h1>
          <p className="mt-4 text-muted-foreground">
            The article you're looking for doesn't exist.
          </p>
          <Button asChild className="mt-8">
            <a href="/blog">View All Articles</a>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        {/* Hero */}
        <section className="py-24 bg-brand-tint/50">
          <div className="mx-auto max-w-4xl px-6">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition mb-6"
            >
              <ArrowLeft className="h-4 w-4" /> Back to blog
            </a>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-brand-tint text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold text-ink">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 mt-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" /> {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" /> {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" /> 5 min read
              </span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="h-64 md:h-80 bg-brand-soft rounded-3xl mb-8 flex items-center justify-center">
                  <span className="text-8xl">🏥</span>
                </div>

                <article className="prose prose-lg max-w-none">
                  <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <div className="text-muted-foreground leading-relaxed space-y-4">
                    <p>{post.content}</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt mollit
                      anim id est laborum.
                    </p>
                    <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                      Key Takeaways
                    </h3>
                    <ul className="space-y-2">
                      <li>Regular physiotherapy can significantly improve recovery times</li>
                      <li>Early intervention is crucial for optimal outcomes</li>
                      <li>Home exercises complement in-clinic treatments</li>
                      <li>Consistency is more important than intensity</li>
                    </ul>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                      quae ab illo inventore veritatis et quasi architecto beatae vitae
                      dicta sunt explicabo.
                    </p>
                  </div>
                </article>

                <div className="flex items-center gap-4 mt-12 pt-8 border-t">
                  <span className="text-sm text-muted-foreground">
                    Share this article:
                  </span>
                  <button className="h-9 w-9 rounded-full bg-brand-tint grid place-items-center text-primary hover:bg-primary hover:text-primary-foreground transition">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="p-6 rounded-2xl border-brand/20">
                  <h3 className="font-semibold mb-4">About the Author</h3>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-brand-tint grid place-items-center text-primary font-semibold">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium">{post.author}</p>
                      <p className="text-sm text-muted-foreground">
                        Senior Physiotherapist
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 rounded-2xl border-brand/20 bg-brand-tint/50">
                  <h3 className="font-semibold mb-3">Need Help?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Book a consultation with our specialists to discuss your
                    specific needs.
                  </p>
                  <Button asChild className="w-full rounded-xl">
                    <a href="/booking">Book Appointment</a>
                  </Button>
                </Card>

                <Card className="p-6 rounded-2xl border-brand/20">
                  <h3 className="font-semibold mb-4">Related Articles</h3>
                  <div className="space-y-3">
                    {blogPosts
                      .filter((p) => p.id !== post.id)
                      .slice(0, 3)
                      .map((related) => (
                        <a
                          key={related.id}
                          href={`/blog/${related.id}`}
                          className="block p-3 rounded-lg hover:bg-brand-tint/50 transition"
                        >
                          <p className="font-medium text-sm line-clamp-2">
                            {related.title}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {related.date}
                          </p>
                        </a>
                      ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
