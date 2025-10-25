import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { useBlogPosts } from "../hooks/useBlogPosts";
import { Calendar, Clock } from "lucide-react";
import { format } from "date-fns";

const FeaturedBlogCard = ({ post }) => {
  return (
    <Link
      to={`${createPageUrl('BlogDetail')}?slug=${post.slug}`}
      className="block group h-full"
    >
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="relative h-full min-h-[600px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <motion.img
            src={post.featured_image || 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200'}
            alt={post.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end p-8">
          <div className="inline-block px-4 py-2 bg-[var(--secondary-accent)] text-[#121212] rounded-full text-sm font-semibold mb-4 w-fit">
            Featured Story
          </div>

          {/* Metadata */}
          <div className="flex items-center gap-4 text-sm text-white/80 mb-4">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{format(new Date(post.publication_date), 'MMM d, yyyy')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>{post.read_time} min read</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-[var(--yellow-accent)] transition-colors duration-300 leading-tight line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-lg text-white/90 leading-relaxed mb-4 line-clamp-2">
            {post.excerpt}
          </p>

          {/* CTA */}
          <div className="flex items-center text-[var(--yellow-accent)] font-semibold text-lg group-hover:gap-3 transition-all duration-300">
            <span>Read Article</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>
      </motion.article>
    </Link>
  );
};

const SmallBlogCard = ({ post }) => {
  return (
    <Link
      to={`${createPageUrl('BlogDetail')}?slug=${post.slug}`}
      className="block group"
    >
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="relative h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <motion.img
            src={post.featured_image || 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800'}
            alt={post.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end p-5">
          {/* Metadata */}
          <div className="flex items-center gap-3 text-xs text-white/70 mb-3">
            <div className="flex items-center space-x-1.5">
              <Calendar className="w-3 h-3" />
              <span>{format(new Date(post.publication_date), 'MMM d')}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Clock className="w-3 h-3" />
              <span>{post.read_time} min</span>
            </div>
          </div>

          {/* Title */}
          <h4 className="text-lg font-bold text-white leading-tight line-clamp-2 group-hover:text-[var(--yellow-accent)] transition-colors duration-300">
            {post.title}
          </h4>
        </div>
      </motion.article>
    </Link>
  );
};

export default function BlogSection() {
  const { posts, isLoading, isError } = useBlogPosts();

  // Loading State
  if (isLoading) {
    return (
      <section className="py-24 md:py-32 bg-[var(--background-alt)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-[var(--primary-accent)] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-[var(--text-muted)]">Loading stories...</p>
          </div>
        </div>
      </section>
    );
  }

  // Error or No Posts State
  if (isError || !posts || posts.length === 0) {
    return null; // Don't show section if there's an error or no posts
  }

  const featuredPost = posts[0];
  const gridPosts = posts.slice(1, 5); // Get next 4 posts

  return (
    <section className="py-24 md:py-32 bg-[var(--background-alt)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, var(--primary-accent) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[var(--primary-accent)]/10 rounded-full mb-6">
            <BookOpen className="w-5 h-5 text-[var(--primary-accent)]" />
            <span className="text-[var(--primary-accent)] font-semibold text-sm tracking-wide uppercase">Our Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-main)] mb-6 tracking-tight">
            From <span className="gradient-text">The Nourie Journal</span>
          </h2>
          <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto font-light">
            Dive into the stories behind our meals, our mission, our technology, and the vibrant culinary landscape of Abuja and beyond.
          </p>
        </motion.div>

        {/* Blog Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left: Featured Post */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FeaturedBlogCard post={featuredPost} />
          </motion.div>

          {/* Right: 2x2 Grid of Posts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {gridPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <SmallBlogCard post={post} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA to Blog Page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to={createPageUrl("Blogs")}
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-full glass-morphism text-[var(--text-main)] font-semibold text-lg hover:bg-[var(--background)] transition-all duration-300 group shadow-lg"
          >
            <span>Explore All Stories</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}