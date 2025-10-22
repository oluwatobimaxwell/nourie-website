
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function BlogCard({ post }) {
  const readTime = Math.ceil(post.content.split(' ').length / 200);

  return (
    <Link
      to={`${createPageUrl('BlogDetail')}?slug=${post.slug}`}
      className="block group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500"
      style={{ height: '480px' }}
    >
      <motion.article
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative w-full h-full"
      >
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={post.featured_image || 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800'}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Dynamic Gradient Overlay - Darkens more on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10 opacity-85 group-hover:opacity-95 transition-opacity duration-400" />
        </div>

        {/* Content Container - Positioned at Bottom */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
          <div className="space-y-4 transform translate-y-0 group-hover:-translate-y-5 transition-transform duration-400 ease-out">
            {/* Metadata - Always Visible */}
            <div className="flex items-center gap-4 text-xs text-white/70">
              <div className="flex items-center space-x-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span className="font-medium">{format(new Date(post.publication_date), 'MMM d, yyyy')}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span className="font-medium">{readTime} min read</span>
              </div>
            </div>

            {/* Title - Always Visible, Shifts Up on Hover */}
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight line-clamp-2 group-hover:text-[var(--yellow-accent)] transition-colors duration-300">
              {post.title}
            </h3>

            {/* Excerpt - Hidden by Default, Fades In and Slides Up on Hover */}
            <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-32 group-hover:opacity-100 transition-all duration-400 ease-out">
              <p className="text-white/90 text-sm leading-relaxed mb-3 line-clamp-2">
                {post.excerpt}
              </p>

              <div className="flex items-center text-[var(--yellow-accent)] font-semibold text-sm">
                <span>Read Article</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Border Accent on Hover */}
        <div className="absolute inset-0 border-2 border-[var(--primary-accent)] rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />

        {/* Top Gradient for Better Readability */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/30 to-transparent pointer-events-none" />
      </motion.article>
    </Link>
  );
}
