export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  tags: string[];
  location: string;
  publishedAt: string;
  video?: string;
}

export interface Author {
  name: string;
  bio: string;
  avatar: string;
  socialLinks: {
    instagram?: string;
    twitter?: string;
    facebook?: string;
    email?: string;
  };
}
