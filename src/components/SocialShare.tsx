import React from "react";
import { Facebook, Twitter, LinkIcon, Mail } from "lucide-react";

interface SocialShareProps {
  title: string;
  url: string;
}

const PressableStyle =
  "border-1 rounded border-gray-300 p-2 hover:bg-[gold] transition-colors duration-200 cursor-pointer";

const Link = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <a href={href} target="_blank" className={PressableStyle}>
    {children}
  </a>
);

export default function SocialShare({ title, url }: SocialShareProps) {
  const shareUrl = globalThis?.location?.origin + url; // TODO: Fix ME

  const shareToFacebook = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    shareUrl
  )}`;

  const shareToTwitter = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    title
  )}&url=${encodeURIComponent(shareUrl)}`;

  const shareByEmail = `mailto:?subject=${encodeURIComponent(
    title
  )}&body=${encodeURIComponent(`Check out this travel post: ${shareUrl}`)}`;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      // TODO show toast
      console.log({
        title: "Link copied!",
        description: "The link has been copied to your clipboard.",
      });
    } catch (_err) {
      // TODO show toast
      console.log({
        title: "Failed to copy",
        description: "Please copy the link manually.",
        variant: "destructive",
      });
    }
  }; // TODO: requires clientside hydration

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium text-gray-700">Share:</span>
      <Link href={shareToFacebook}>
        <Facebook className="w-4 h-4" />
      </Link>
      <Link href={shareToTwitter}>
        <Twitter className="w-4 h-4" />
      </Link>
      <Link href={shareByEmail}>
        <Mail className="w-4 h-4" />
      </Link>
      <button type="button" className={PressableStyle} onClick={copyLink}>
        <LinkIcon className="w-4 h-4" />
      </button>
    </div>
  );
}
