import Image from "next/image";

import { blogPosts } from "@/lib/data";
import BlogPostCard from "@/components/BlogPostCard";
import Badge from "@/components/Badge";

export default function Home() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-[light] text-[veryDarkGreen]">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">My Travel</h1>
            <p className="text-xl text-[green] max-w-2xl mx-auto">
              Join me on incredible journeys around the world. Discover hidden
              gems, local cultures, and unforgettable experiences.
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Featured Story
            </h2>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <Image
                    src={featuredPost.coverImage || "/placeholder.svg"}
                    alt={featuredPost.title}
                    width={800}
                    height={600}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span>
                      {new Date(featuredPost.publishedAt).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.slice(0, 3).map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="px-3 py-1 bg-[darkGreen] text-[light] rounded-full text-sm"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <a
                    href={`/posts/${featuredPost.slug}`}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-travel-ocean to-travel-forest text-white rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>

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
