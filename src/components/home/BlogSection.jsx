import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BlogPost } from '@/api/entities/BlogPost';
import { createPageUrl } from '@/utils';
import { format } from 'date-fns';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';

const FeaturedPostCard = ({ post }) => {
  const readingTime = Math.ceil(post.content.split(' ').length / 200);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group relative h-full"
    >
      <Link to={createPageUrl(`Blogs/${post.id}`)} className="block h-full">
        <div className="relative h-full min-h-[600px] rounded-2xl overflow-hidden bg-[var(--background)] border border-[var(--glass-border)] hover:border-[var(--primary-accent)]/30 transition-all duration-500">
          {/* Image */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--background)]"></div>
            <img
              src={post.featured_image}
              alt={post.title}
              className="w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
            />
          </div>
          
          {/* Content */}
          <div className="relative h-full p-8 lg:p-12 flex flex-col justify-end">
            {/* Meta */}
            <div className="flex items-center space-x-4 text-sm text-[var(--text-muted)] mb-4">
              <div className="flex items-center space-x-2">
                <Calendar className="w-3.5 h-3.5" />
                <span>{format(new Date(post.publication_date), 'MMM d, yyyy')}</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-2">
                <Clock className="w-3.5 h-3.5" />
                <span>{readingTime} min read</span>
              </div>
            </div>
            
            {/* Title */}
            <h3 className="text-3xl lg:text-5xl font-bold text-[var(--text-main)] mb-4 leading-tight group-hover:text-[var(--primary-accent)] transition-colors duration-300">
              {post.title}
            </h3>
            
            {/* Excerpt */}
            <p className="text-[var(--text-muted)] text-lg lg:text-xl leading-relaxed mb-6 line-clamp-2 font-light">
              {post.excerpt}
            </p>
            
            {/* Author */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--primary-accent)] to-[var(--secondary-accent)] flex items-center justify-center text-white font-semibold text-sm">
                  {post.author.charAt(0)}
                </div>
                <span className="text-[var(--text-main)] font-medium">{post.author}</span>
              </div>
              
              <div className="flex items-center space-x-2 text-[var(--primary-accent)] font-medium">
                <span className="hidden sm:inline">Read Article</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const RegularPostCard = ({ post, index }) => {
  const readingTime = Math.ceil(post.content.split(' ').length / 200);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <Link to={createPageUrl(`Blogs/${post.id}`)} className="block h-full">
        <div className="h-full bg-[var(--background)] border border-[var(--glass-border)] rounded-2xl overflow-hidden hover:border-[var(--primary-accent)]/30 transition-all duration-500 flex flex-col">
          {/* Image */}
          <div className="relative h-64 overflow-hidden">
            <img
              src={post.featured_image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/20 to-transparent"></div>
          </div>
          
          {/* Content */}
          <div className="p-6 lg:p-8 flex-1 flex flex-col">
            {/* Meta */}
            <div className="flex items-center space-x-3 text-xs text-[var(--text-muted)] mb-4">
              <div className="flex items-center space-x-1.5">
                <Calendar className="w-3 h-3" />
                <span>{format(new Date(post.publication_date), 'MMM d, yyyy')}</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-1.5">
                <Clock className="w-3 h-3" />
                <span>{readingTime} min</span>
              </div>
            </div>
            
            {/* Title */}
            <h3 className="text-xl lg:text-2xl font-bold text-[var(--text-main)] mb-3 line-clamp-2 leading-tight group-hover:text-[var(--primary-accent)] transition-colors duration-300">
              {post.title}
            </h3>
            
            {/* Excerpt */}
            <p className="text-[var(--text-muted)] leading-relaxed line-clamp-3 mb-6 flex-1 font-light">
              {post.excerpt}
            </p>
            
            {/* Author & CTA */}
            <div className="flex items-center justify-between pt-4 border-t border-[var(--glass-border)]">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--primary-accent)] to-[var(--secondary-accent)] flex items-center justify-center text-white font-semibold text-xs">
                  {post.author.charAt(0)}
                </div>
                <span className="text-[var(--text-main)] text-sm font-medium">{post.author}</span>
              </div>
              
              <ArrowRight className="w-4 h-4 text-[var(--primary-accent)] group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default function BlogSection() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const latestPosts = await BlogPost.list('-publication_date', 3);
      setPosts(latestPosts);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  return (
    <section ref={ref} className="py-20 sm:py-32 bg-[var(--background)] relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23A8D5BA' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-main)] mb-6">
            Latest <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-lg sm:text-xl text-[var(--text-muted)] max-w-2xl mx-auto font-light leading-relaxed">
            Insights, recipes, and stories from our journey to make quality food accessible to everyone.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-96">
            <div className="w-12 h-12 border-4 border-[var(--primary-accent)] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : posts.length > 0 ? (
          <>
            {/* Blog Grid */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
              {/* Featured Post - Left Column */}
              {featuredPost && (
                <div className="lg:row-span-2">
                  <FeaturedPostCard post={featuredPost} />
                </div>
              )}
              
              {/* Regular Posts - Right Column */}
              <div className="grid gap-8">
                {regularPosts.map((post, index) => (
                  <RegularPostCard key={post.id} post={post} index={index} />
                ))}
              </div>
            </div>

            {/* View All CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link 
                to={createPageUrl("Blogs")} 
                className="inline-flex items-center space-x-3 px-8 py-4 rounded-full font-semibold transition-all duration-300 border-2 border-[var(--primary-accent)] text-[var(--primary-accent)] hover:bg-[var(--primary-accent)] hover:text-white group"
              >
                <span>View All Articles</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </>
        ) : (
          <div className="text-center text-[var(--text-muted)] py-20">
            <p className="text-lg">No articles yet. Check back soon for inspiring stories!</p>
          </div>
        )}
      </div>
    </section>
  );
}