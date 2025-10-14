
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BlogPost } from "@/api/entities";
import { createPageUrl } from "@/utils";
import { format } from "date-fns";
import { Calendar, User, ArrowRight } from "lucide-react";

const FeaturedPostCard = ({ post }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
    className="group relative mb-16"
  >
    <Link to={`${createPageUrl("Blogs")}/${post.id}`} className="block">
      <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden glass-morphism">
        {/* Image */}
        <div className="absolute inset-0">
          <img
            src={post.featured_image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
        </div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end">
          <div className="flex items-center space-x-4 text-sm text-white/80 mb-4">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{format(new Date(post.publication_date), 'MMMM d, yyyy')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight max-w-4xl">
            {post.title}
          </h2>
          
          <p className="text-white/90 text-lg lg:text-xl leading-relaxed mb-6 max-w-3xl line-clamp-3">
            {post.excerpt}
          </p>
          
          <div className="flex items-center space-x-2 text-[var(--secondary-accent)] font-semibold text-lg">
            <span>Read Full Article</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

const PostCard = ({ post, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
    viewport={{ once: true }}
    className="group h-full"
  >
    <Link to={`${createPageUrl("Blogs")}/${post.id}`} className="block h-full">
      <div className="h-full glass-morphism rounded-2xl overflow-hidden flex flex-col hover:bg-[var(--background)]/60 transition-all duration-300">
        {/* Image */}
        <div className="h-64 overflow-hidden">
          <img
            src={post.featured_image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center space-x-3 text-sm text-[var(--text-muted)] mb-3">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{format(new Date(post.publication_date), 'MMM d, yyyy')}</span>
            </div>
            <span>•</span>
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
          </div>
          
          <h3 className="text-2xl font-semibold text-[var(--text-main)] mb-3 line-clamp-2 group-hover:text-[var(--primary-accent)] transition-colors">
            {post.title}
          </h3>
          
          <p className="text-[var(--text-muted)] leading-relaxed line-clamp-3 mb-4 flex-1">
            {post.excerpt}
          </p>
          
          <div className="flex items-center space-x-2 text-[var(--primary-accent)] font-semibold">
            <span>Read More</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

export default function Blogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayCount, setDisplayCount] = useState(9);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const allPosts = await BlogPost.list("-publication_date");
        setPosts(allPosts);
        setHasMore(allPosts.length > displayCount);
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const loadMore = () => {
    const newCount = displayCount + 6;
    setDisplayCount(newCount);
    setHasMore(posts.length > newCount);
  };

  const featuredPost = posts[0];
  const regularPosts = posts.slice(1, displayCount);

  return (
    <div className="bg-[var(--background)] text-[var(--text-main)]">
      {/* Hero Section */}
      <section className="py-24 bg-[var(--background)] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[var(--primary-accent)]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[var(--secondary-accent)]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl lg:text-6xl font-bold mb-6"
          >
            The Nourie <span className="gradient-text">Blog</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed"
          >
            Stories, recipes, and insights from our journey to revolutionize food accessibility in Nigeria.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center text-[var(--text-muted)] py-32">
              <div className="inline-block animate-pulse">Loading articles...</div>
            </div>
          ) : posts.length > 0 ? (
            <>
              {/* Featured Post */}
              {featuredPost && <FeaturedPostCard post={featuredPost} />}

              {/* Regular Posts Grid */}
              {regularPosts.length > 0 && (
                <>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {regularPosts.map((post, index) => (
                      <PostCard key={post.id} post={post} index={index} />
                    ))}
                  </div>

                  {/* Load More Button */}
                  {hasMore && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <button
                        onClick={loadMore}
                        className="px-8 py-4 rounded-full font-semibold transition-all duration-300 glass-morphism text-[var(--text-main)] hover:bg-[var(--background-alt)]/60 border border-[var(--glass-border)] hover:scale-105"
                      >
                        Load More Articles
                      </button>
                    </motion.div>
                  )}
                </>
              )}
            </>
          ) : (
            <div className="text-center text-[var(--text-muted)] py-32">
              <p className="text-xl mb-4">No blog posts yet.</p>
              <p>Check back soon for inspiring stories and updates!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
