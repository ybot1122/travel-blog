"use client";

import { Facebook, Twitter, LinkIcon, Mail } from "lucide-react";

interface SocialShareProps {
  title: string;
  url: string;
}

export default function SocialShare({ title, url }: SocialShareProps) {
  const shareUrl =
    typeof window !== "undefined" ? window.location.origin + url : url;

  const shareToFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
      "_blank"
    );
  };

  const shareToTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        title
      )}&url=${encodeURIComponent(shareUrl)}`,
      "_blank"
    );
  };

  const shareByEmail = () => {
    window.open(
      `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(
        `Check out this travel post: ${shareUrl}`
      )}`
    );
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      // TODO show toast
      console.log({
        title: "Link copied!",
        description: "The link has been copied to your clipboard.",
      });
    } catch (err) {
      // TODO show toast
      console.log({
        title: "Failed to copy",
        description: "Please copy the link manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium text-gray-700">Share:</span>
      <button onClick={shareToFacebook}>
        <Facebook className="w-4 h-4 cursor-pointer hover:scale-125 transition duration-200" />
      </button>
      <button onClick={shareToTwitter}>
        <Twitter className="w-4 h-4 cursor-pointer  hover:scale-125 transition duration-200" />
      </button>
      <button onClick={shareByEmail}>
        <Mail className="w-4 h-4 cursor-pointer  hover:scale-125 transition duration-200" />
      </button>
      <button onClick={copyLink}>
        <LinkIcon className="w-4 h-4 cursor-pointer  hover:scale-125 transition duration-200" />
      </button>
    </div>
  );
}
