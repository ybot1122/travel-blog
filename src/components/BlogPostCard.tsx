import React from "react";
import type { BlogPost } from "../lib/types.ts";
import Badge from "./Badge.tsx";
import { Calendar, MapPin } from "lucide-react";

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <div className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group shadow-2xl px-4">
      <div className="relative overflow-hidden">
        <a href={`/posts/${post.slug}`}>
          <img
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </a>
        <div className="absolute top-4 left-4">
          <Badge variant="secondary">
            <MapPin className="w-3 h-3 mr-1 inline-block" />
            {post.location}
          </Badge>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {new Date(post.publishedAt).toLocaleDateString()}
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-travel-forest transition-colors line-clamp-2">
          <a href={`/posts/${post.slug}`}>{post.title}</a>
        </h2>

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
      </div>
    </div>
  );
}
