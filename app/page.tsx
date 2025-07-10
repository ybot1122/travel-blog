import { blogPosts } from "@/lib/data";
import BlogPostCard from "@/components/BlogPostCard";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-[light] text-[veryDarkGreen]">
      <HeroSection featuredPost={featuredPost} />
      <section>
        <div className="max-w-7xl mx-auto">
          {/* Other Posts */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Latest Adventures
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
