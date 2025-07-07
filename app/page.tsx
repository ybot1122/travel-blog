import Image from "next/image";

import { blogPosts } from "@/lib/data";
import BlogPostCard from "@/components/BlogPostCard";
import Badge from "@/components/Badge";
import Link from "next/link";

export default function Home() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-[light] text-[veryDarkGreen]">
      {/* Hero Section */}
      <section className="px-4">
        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mx-auto">
            <div className="aspect-[4/3] max-h-96 w-full">
              <Image
                src={featuredPost.coverImage || "/placeholder.svg"}
                alt={featuredPost.title}
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-t-2xl"
                style={{ maxHeight: "24rem" }}
              />
            </div>
            <div className="p-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
                <Link href={`/posts/${featuredPost.slug}`}>
                  {featuredPost.title}
                </Link>
              </h1>
              <div className="text-center text-xl text-gray-500 mb-4">
                {new Date(featuredPost.publishedAt).toLocaleDateString()}
              </div>
              <p className="text-gray-600 mb-6">
                {featuredPost.excerpt}
                <Link
                  href={`/posts/${featuredPost.slug}`}
                  className="inline-flex items-center underline pl-2"
                >
                  Read More
                </Link>
              </p>
              <div className="flex flex-wrap gap-2">
                {featuredPost.tags.slice(0, 3).map((tag) => (
                  <Badge
                    key={tag}
                    variant="primary"
                    href={`/search?tag=${encodeURIComponent(tag)}`}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
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
