
import React, { useState } from "react";
import { motion } from "framer-motion";
import BlogHero from "../components/blog/BlogHero";
import FeaturedArticle from "../components/blog/FeaturedArticle";
import BlogGrid from "../components/blog/BlogGrid";
import NewsletterCTA from "../components/blog/NewsletterCTA";
import { useBlogPosts } from "../components/hooks/useBlogPosts";

export default function Blogs() {
  const [searchTerm, setSearchTerm] = useState("");
  const { 
    posts, 
    totalCount, 
    isLoading, 
    isError, 
    error,
    fetchNextPage, 
    hasNextPage, 
    isFetchingNextPage 
  } = useBlogPosts(searchTerm);

  // Loading State
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[var(--background)] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[var(--primary-accent)] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[var(--text-muted)]">Loading...</p>
        </div>
      </div>
    );
  }

  // Error State
  if (isError) {
    return (
      <div className="min-h-screen bg-[var(--background)] flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <div className="w-24 h-24 bg-red-100 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <svg className="w-12 h-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-[var(--text-main)] mb-4">
            Something went wrong
          </h1>
          <p className="text-xl text-[var(--text-muted)] mb-8">
            {error?.message || "Failed to load blog posts. Please try again later."}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[var(--primary-accent)] to-[#356859] text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Blog Index View
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1);

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <BlogHero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <FeaturedArticle post={featuredPost} />
          </motion.div>
        )}

        {recentPosts.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-main)] mb-2">
                Recent Stories
              </h2>
              <p className="text-lg text-[var(--text-muted)]">
                Fresh perspectives from the Nourie kitchen
              </p>
            </motion.div>

            <BlogGrid posts={recentPosts} />

            {hasNextPage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center mt-12"
              >
                <button
                  onClick={() => fetchNextPage()}
                  disabled={isFetchingNextPage}
                  className="px-8 py-3 rounded-full glass-morphism text-[var(--text-main)] font-semibold hover:bg-[var(--background-alt)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isFetchingNextPage ? (
                    <span className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-[var(--primary-accent)] border-t-transparent rounded-full animate-spin"></div>
                      <span>Loading...</span>
                    </span>
                  ) : (
                    "Load More Stories"
                  )}
                </button>
              </motion.div>
            )}
          </>
        )}
      </div>
      <NewsletterCTA />
    </div>
  );
}
