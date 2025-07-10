"use client";

import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/types";
import { useRouter } from "next/navigation";
import Badge from "./Badge";
import Card from "./Card";
import CardContent from "./CardContent";
import { Calendar, MapPin } from "lucide-react";

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const router = useRouter();

  const handleTagClick = (tag: string) => {
    router.push(`/search?tag=${encodeURIComponent(tag)}`);
  };

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group shadow-2xl px-4">
      <div className="relative overflow-hidden">
        <Image
          src={post.coverImage || "/placeholder.svg"}
          alt={post.title}
          width={800}
          height={400}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary">
            <MapPin className="w-3 h-3 mr-1 inline-block" />
            {post.location}
          </Badge>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {new Date(post.publishedAt).toLocaleDateString()}
          </div>
        </div>

        <Link href={`/posts/${post.slug}`}>
          <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-travel-forest transition-colors line-clamp-2">
            {post.title}
          </h2>
        </Link>

        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge
              key={tag}
              variant="primary"
              href={`/search?tag=${encodeURIComponent(tag)}`}
            >
              {tag}
            </Badge>
          ))}
          {post.tags.length > 3 && (
            <Badge variant="outline">+{post.tags.length - 3} more</Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
