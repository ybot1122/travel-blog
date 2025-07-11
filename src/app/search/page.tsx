import React, { useState, useMemo, useEffect, useRef } from "react";
import { Search, Filter } from "lucide-react";
import BlogPostCard from "../../components/BlogPostCard.tsx";
import Badge from "../../components/Badge.tsx";
import { BlogPost } from "../../lib/types.ts";

export default function SearchPage({ blogPosts }: { blogPosts: BlogPost[] }) {
  const searchParams = { get: (_s: string) => "" }; // TODO
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const initializedRef = useRef(false);

  // Initialize filters from URL parameters only once
  useEffect(() => {
    if (!initializedRef.current) {
      const tagParam = searchParams.get("tag");
      const locationParam = searchParams.get("location");
      const queryParam = searchParams.get("q");

      if (tagParam) {
        setSelectedTags([tagParam]);
      }
      if (locationParam) {
        setSelectedLocation(locationParam);
      }
      if (queryParam) {
        setSearchQuery(queryParam);
      }

      initializedRef.current = true;
    }
  }, [searchParams]);

  // Get all unique tags and locations
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    blogPosts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags).sort();
  }, []);

  const allLocations = useMemo(() => {
    const locations = new Set(blogPosts.map((post) => post.location));
    return Array.from(locations).sort();
  }, []);

  // Filter posts based on search criteria
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => post.tags.includes(tag));

      const matchesLocation =
        selectedLocation === "" || post.location === selectedLocation;

      return matchesSearch && matchesTags && matchesLocation;
    });
  }, [searchQuery, selectedTags, selectedLocation]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTags([]);
    setSelectedLocation("");
    initializedRef.current = false;
    // Clear URL parameters
    if (typeof window !== "undefined") {
      globalThis.history.replaceState({}, "", "/search");
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by title, content, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-lg"
            />
          </div>

          {/* Location Filter */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              Filter by Location
            </h3>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setSelectedLocation("")}
                className={selectedLocation === "" ? "bg-travel-ocean" : ""}
              >
                All Locations
              </button>
              {allLocations.map((location) => (
                <button
                  type="button"
                  key={location}
                  className={
                    selectedLocation === location ? "default" : "outline"
                  }
                  onClick={() =>
                    setSelectedLocation(
                      location === selectedLocation ? "" : location
                    )
                  }
                >
                  {location}
                </button>
              ))}
            </div>
          </div>

          {/* Tags Filter */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Filter by Tags</h3>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "primary" : "outline"}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Active Filters Display */}
          {(searchQuery || selectedTags.length > 0 || selectedLocation) && (
            <div className="mb-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-700">
                  Active Filters:
                </span>
                <button type="button" onClick={clearFilters}>
                  Clear All
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {searchQuery && (
                  <Badge variant="secondary">Search: "{searchQuery}"</Badge>
                )}
                {selectedLocation && (
                  <Badge variant="secondary">
                    Location: {selectedLocation}
                  </Badge>
                )}
                {selectedTags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    Tag: {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Results Count */}
          <div className="text-sm text-gray-600">
            {filteredPosts.length} post{filteredPosts.length !== 1 ? "s" : ""}{" "}
            found
          </div>
        </div>

        {/* Results */}
        <div>
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No posts found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search criteria or browse all posts
              </p>
              <button
                onClick={clearFilters}
                className="bg-gradient-to-r from-travel-ocean to-travel-forest"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
