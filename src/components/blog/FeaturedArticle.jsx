import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function FeaturedArticle({ post }) {
  return (
    <Link
      to={`${createPageUrl('BlogDetail')}?slug=${post.slug}`}
      className="block group"
    >
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="relative h-[600px] rounded-3xl overflow-hidden"
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
        <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12">
          <div className="max-w-3xl">
            {/* Featured Badge */}
            <div className="inline-block px-4 py-2 bg-[var(--secondary-accent)] text-[#121212] rounded-full text-sm font-semibold mb-6">
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 group-hover:text-[var(--yellow-accent)] transition-colors duration-300 leading-tight">
              {post.title}
            </h2>

            {/* Excerpt */}
            <p className="text-xl text-white/90 leading-relaxed mb-6">
              {post.excerpt}
            </p>

            {/* CTA */}
            <div className="flex items-center text-[var(--yellow-accent)] font-semibold text-lg group-hover:gap-3 transition-all duration-300">
              <span>Read Full Story</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </div>
        </div>

        {/* Hover Enhancement */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </motion.article>
    </Link>
  );
}