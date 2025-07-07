import type { BlogPost, Author } from "./types";

export const author: Author = {
  name: "Daisy",
  bio: "Professional travel blogger and photographer with over 10 years of experience exploring the world. I've visited 50+ countries and love sharing hidden gems, local cultures, and unforgettable adventures. When I'm not traveling, you can find me planning my next expedition or editing photos from my latest journey.",
  avatar: "/placeholder.png?height=200&width=200",
  socialLinks: {
    instagram: "https://instagram.com/daisy",
    twitter: "https://twitter.com/daisy",
    facebook: "https://facebook.com/daisy",
    email: "hello@daisy.com",
  },
};

export const blogPosts: BlogPost[] = [
  {
    id: "4",
    title: "Costa Rica: Pura Vida and Wildlife Wonders",
    slug: "costa-rica-pura-vida-wildlife",
    excerpt:
      "Experience the magic of Costa Rica's incredible biodiversity, from sloths in Manuel Antonio to volcanic hot springs in Arenal. Pura Vida awaits!",
    content: `
      <p>Costa Rica truly lives up to its name - "Rich Coast." This small Central American country packs an incredible punch when it comes to biodiversity, adventure, and that famous "Pura Vida" lifestyle that will capture your heart.</p>
      
      <h2>Manuel Antonio: Where Jungle Meets Beach</h2>
      <p>Manuel Antonio National Park is a perfect introduction to Costa Rica's wildlife. Within minutes of arriving, I spotted three-toed sloths hanging lazily in the trees, colorful poison dart frogs, and troops of white-faced capuchin monkeys playing on the beach.</p>
      
      <img src="/placeholder.svg?height=400&width=600" alt="Sloth in Manuel Antonio" style="width: 100%; margin: 20px 0; border-radius: 8px;" />
      
      <h2>Arenal Volcano: Fire and Water</h2>
      <p>The perfectly cone-shaped Arenal Volcano dominates the landscape, and while it's currently dormant, the area is still geothermally active. Soaking in natural hot springs while surrounded by rainforest is pure magic.</p>
      
      <h2>Monteverde Cloud Forest: A Mystical Experience</h2>
      <p>Walking through the cloud forest feels like entering another world. The mist-covered trees are home to over 400 bird species, including the elusive quetzal. The canopy zip-line tours here are absolutely thrilling!</p>
      
      <img src="/placeholder.svg?height=400&width=600" alt="Monteverde cloud forest" style="width: 100%; margin: 20px 0; border-radius: 8px;" />
      
      <h2>Wildlife Encounters</h2>
      <p>Costa Rica is home to 5% of the world's biodiversity in just 0.03% of the planet's surface. Every day brought new animal encounters:</p>
      
      <ul>
        <li>Scarlet macaws flying overhead in Corcovado</li>
        <li>Sea turtles nesting on the beaches of Tortuguero</li>
        <li>Howler monkeys providing the jungle's morning alarm clock</li>
        <li>Colorful toucans and over 900 bird species</li>
      </ul>
      
      <h2>The Pura Vida Philosophy</h2>
      <p>More than just a greeting, "Pura Vida" (pure life) embodies the Costa Rican approach to life - appreciating simple pleasures, living in the moment, and maintaining a positive outlook. It's infectious and something I've carried with me long after leaving.</p>
      
      <p>Costa Rica isn't just a destination; it's a reminder of what's truly important in life. The country's commitment to conservation and sustainable tourism makes it a model for the world.</p>
    `,
    coverImage: "/placeholder.png?height=400&width=800",
    tags: [
      "Costa Rica",
      "Wildlife",
      "Nature",
      "Adventure",
      "Rainforest",
      "Pura Vida",
    ],
    location: "Costa Rica",
    publishedAt: "2024-01-20",
    video: "/costa_rica.MOV",
  },
  {
    id: "2",
    title: "Tokyo Street Food Adventure: A Culinary Journey",
    slug: "tokyo-street-food-adventure",
    excerpt:
      "From ramen stalls to conveyor belt sushi, explore Tokyo's incredible street food scene through the eyes of a hungry traveler.",
    content: `
      <p>Tokyo's street food scene is a sensory overload in the best possible way. Every corner offers a new flavor, aroma, and experience that will leave you craving more.</p>
      
      <h2>Must-Try Street Foods</h2>
      <p>Here are my top picks for street food that you absolutely cannot miss when visiting Tokyo:</p>
      
      <ul>
        <li>Takoyaki (octopus balls) from Dotonbori</li>
        <li>Fresh sushi from Tsukiji Outer Market</li>
        <li>Ramen from tiny hole-in-the-wall shops</li>
        <li>Taiyaki (fish-shaped pastries) filled with red bean paste</li>
      </ul>
      
      <img src="/placeholder.png?height=400&width=600" alt="Tokyo street food market" style="width: 100%; margin: 20px 0; border-radius: 8px;" />
      
      <p>The key to experiencing authentic Tokyo street food is to follow the locals and don't be afraid to point at what looks good!</p>
    `,
    coverImage: "/tokyo.png?height=400&width=800",
    tags: ["Japan", "Food", "Street Food", "Tokyo", "Culture"],
    location: "Tokyo, Japan",
    publishedAt: "2024-01-10",
  },
  {
    id: "1",
    title: "Hidden Gems of Santorini: Beyond the Instagram Spots",
    slug: "hidden-gems-santorini",
    excerpt:
      "Discover the authentic side of Santorini away from the crowds. From secret beaches to local tavernas, here's your guide to the real Greece.",
    content: `
      <p>Santorini is undoubtedly one of the most photographed destinations in the world, but beyond the famous blue domes and sunset views lies a treasure trove of authentic experiences waiting to be discovered.</p>
      
      <h2>Secret Beaches Worth the Hike</h2>
      <p>While most tourists flock to the popular beaches, I found some incredible hidden spots that offer the same crystal-clear waters without the crowds.</p>
      
      <img src="/placeholder.png?height=400&width=600" alt="Hidden beach in Santorini" style="width: 100%; margin: 20px 0; border-radius: 8px;" />
      
      <h2>Local Tavernas</h2>
      <p>The best meals I had weren't at the cliff-side restaurants with the views, but at small family-run tavernas in the island's interior villages.</p>
      
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen style="margin: 20px 0; border-radius: 8px;"></iframe>
      
      <p>For more travel tips, check out my <a href="/about" style="color: #0ea5e9; text-decoration: underline;">about page</a> where I share more about my travel philosophy.</p>
    `,
    coverImage: "/santorini.png?height=400&width=800",
    tags: ["Greece", "Islands", "Hidden Gems", "Mediterranean"],
    location: "Santorini, Greece",
    publishedAt: "2024-01-15",
  },
  {
    id: "3",
    title: "Backpacking Through Patagonia: A 3-Week Adventure",
    slug: "backpacking-patagonia-adventure",
    excerpt:
      "Join me on an epic 3-week backpacking journey through the stunning landscapes of Patagonia, from glaciers to granite peaks.",
    content: `
      <p>Patagonia has been on my bucket list for years, and finally making the journey was everything I hoped for and more. This vast wilderness spanning Argentina and Chile offers some of the most dramatic landscapes on Earth.</p>
      
      <h2>The Route</h2>
      <p>My 3-week itinerary took me through:</p>
      
      <img src="/placeholder.png?height=400&width=600" alt="Patagonia landscape" style="width: 100%; margin: 20px 0; border-radius: 8px;" />
      
      <h2>Essential Gear</h2>
      <p>Packing for Patagonia requires careful consideration of the unpredictable weather. Here's what I couldn't live without:</p>
      
      <p>The weather in Patagonia can change from sunny to stormy in minutes, so being prepared is crucial for a safe and enjoyable trip.</p>
    `,
    coverImage: "/placeholder.png?height=400&width=800",
    tags: [
      "Argentina",
      "Chile",
      "Backpacking",
      "Adventure",
      "Hiking",
      "Nature",
    ],
    location: "Patagonia, Argentina & Chile",
    publishedAt: "2024-01-05",
  },
];
