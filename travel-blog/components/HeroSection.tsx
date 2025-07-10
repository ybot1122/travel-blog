import { BlogPost } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import Badge from "./Badge";

export default function ({ featuredPost }: { featuredPost: BlogPost }) {
  return (
    <section className="px-4">
      {/* Featured Post */}
      <div className="mb-16 max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mx-auto">
          <div className="aspect-[4/3] w-full">
            {featuredPost.video ? (
              <video
                src={featuredPost.video}
                className="w-full h-full object-cover object-center rounded-t-2xl"
                autoPlay
                controls
                muted
              />
            ) : (
              <Image
                src={featuredPost.coverImage || "/placeholder.svg"}
                alt={featuredPost.title}
                width={800}
                height={600}
                className="w-full h-full object-cover object-center rounded-t-2xl"
                style={{ maxHeight: "24rem" }}
              />
            )}
          </div>
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              <Link
                href={`/posts/${featuredPost.slug}`}
                className="hover:text-gray-600"
              >
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
  );
}
