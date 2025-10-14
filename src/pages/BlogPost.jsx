import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { BlogPost } from "@/api/entities";
// import ReactMarkdown from "react-markdown";
import { format } from "date-fns";
import { Calendar, User, ArrowLeft, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { createPageUrl } from "@/utils";

export default function BlogPostPage() {
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchPost = async () => {
      // Extract post ID from URL path (e.g., /Blogs/123)
      const pathParts = location.pathname.split('/');
      const postId = pathParts[pathParts.length - 1];
      
      if (postId && postId !== 'Blogs') {
        try {
          const fetchedPost = await BlogPost.get(postId);
          setPost(fetchedPost);
          
          // Fetch related posts
          const allPosts = await BlogPost.list('-publication_date', 4);
          setRelatedPosts(allPosts.filter(p => p.id !== postId).slice(0, 3));
        } catch (error) {
          console.error("Failed to fetch blog post:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };
    fetchPost();
  }, [location.pathname]);

  const shareOnSocial = (platform) => {
    const url = window.location.href;
    const title = post?.title || '';
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    };
    
    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--background)] text-[var(--text-main)]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[var(--primary-accent)] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[var(--text-muted)]">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--background)] text-[var(--text-main)] text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Article Not Found</h1>
          <p className="text-[var(--text-muted)] text-lg mb-8">
            The blog post you're looking for doesn't exist or may have been moved.
          </p>
          <Link
            to={createPageUrl("Blogs")}
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 bg-gradient-to-r from-[var(--secondary-accent)] to-[var(--yellow-accent)] text-[#121212] hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Blog</span>
          </Link>
        </motion.div>
      </div>
    );
  }

  const readingTime = Math.ceil(post.content.split(' ').length / 200);

  return (
    <div className="bg-[var(--background)] text-[var(--text-main)]">
      {/* Hero Section with Featured Image */}
      <div className="relative h-[70vh] lg:h-[80vh] overflow-hidden">
        <img
          src={post.featured_image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/80 to-transparent"></div>
        
        {/* Floating Back Button */}
        <div className="absolute top-8 left-4 lg:left-8 z-10">
          <Link
            to={createPageUrl("Blogs")}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-morphism text-white hover:bg-white/20 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Blog</span>
          </Link>
        </div>
      </div>

      {/* Article Content */}
      <div className="relative -mt-32 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-morphism rounded-3xl p-8 lg:p-12 mb-16"
          >
            {/* Article Header */}
            <header className="mb-12">
              <h1 className="text-4xl lg:text-6xl font-bold text-[var(--text-main)] mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-[var(--text-muted)] mb-8 pb-8 border-b border-[var(--glass-border)]">
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--primary-accent)] to-[var(--secondary-accent)] flex items-center justify-center text-white font-bold">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span className="font-semibold text-[var(--text-main)]">{post.author}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>{format(new Date(post.publication_date), "MMMM d, yyyy")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>{readingTime} min read</span>
                </div>
              </div>

              {/* Excerpt */}
              <p className="text-xl text-[var(--text-muted)] leading-relaxed italic border-l-4 border-[var(--primary-accent)] pl-6">
                {post.excerpt}
              </p>
            </header>

            {/* Article Body */}
            <div className="prose prose-lg dark:prose-invert max-w-none text-[var(--text-muted)] 
              prose-headings:text-[var(--text-main)] prose-headings:font-bold 
              prose-strong:text-[var(--text-main)] 
              prose-a:text-[var(--primary-accent)] hover:prose-a:text-[var(--secondary-accent)] 
              prose-p:leading-relaxed prose-p:mb-6 
              prose-headings:mb-4 prose-headings:mt-12
              prose-h2:text-3xl prose-h3:text-2xl
              prose-ul:my-6 prose-ol:my-6
              prose-li:my-2
              prose-blockquote:border-l-4 prose-blockquote:border-[var(--primary-accent)] prose-blockquote:pl-6 prose-blockquote:italic
              prose-img:rounded-2xl prose-img:my-8">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            {/* Social Share */}
            <div className="mt-16 pt-8 border-t border-[var(--glass-border)]">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <p className="text-[var(--text-muted)] font-semibold flex items-center space-x-2">
                  <Share2 className="w-5 h-5" />
                  <span>Share this article</span>
                </p>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => shareOnSocial('facebook')}
                    className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => shareOnSocial('twitter')}
                    className="w-10 h-10 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => shareOnSocial('linkedin')}
                    className="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <Linkedin className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-main)] mb-8">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`${createPageUrl("Blogs")}/${relatedPost.id}`}
                    className="group glass-morphism rounded-2xl overflow-hidden hover:bg-[var(--background)]/60 transition-all duration-300"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={relatedPost.featured_image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-[var(--text-main)] mb-2 line-clamp-2 group-hover:text-[var(--primary-accent)] transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-[var(--text-muted)] line-clamp-2 mb-3">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center space-x-2 text-[var(--primary-accent)] font-semibold text-sm">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Link
              to={createPageUrl("Blogs")}
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 glass-morphism text-[var(--text-main)] hover:bg-[var(--background-alt)]/60 border border-[var(--glass-border)] hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Explore More Articles</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}