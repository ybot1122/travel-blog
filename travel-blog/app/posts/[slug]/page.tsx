import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, MapPin, ArrowLeft, Play } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import Badge from "@/components/Badge";
import SocialShare from "@/components/SocialShare";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/">
          <button className="mb-8 flex items-center cursor-pointer">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </button>
        </Link>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(post.publishedAt).toLocaleDateString()}
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              {post.location}
            </div>
            {post.video && (
              <div className="flex items-center text-travel-forest">
                <Play className="w-4 h-4 mr-1" />
                Video included
              </div>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                variant="primary"
                href={`/search?tag=${encodeURIComponent(tag)}`}
              >
                {tag}
              </Badge>
            ))}
          </div>

          <SocialShare title={post.title} url={`/posts/${post.slug}`} />
        </header>

        {/* Video Section */}
        <div className="mb-8 aspect-[4/3] w-full max-w-2xl mx-auto">
          {post.video ? (
            <video
              src={post.video}
              className="w-full h-full object-cover object-center rounded-2xl"
              autoPlay
              controls
              muted
            />
          ) : (
            <div className="relative w-full h-full">
              <Image
                src={post.coverImage || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 800px"
                priority
              />
            </div>
          )}
        </div>

        {/* Content */}
        <div
          id="post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <SocialShare title={post.title} url={`/posts/${post.slug}`} />
      </article>
    </div>
  );
}
