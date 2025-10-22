
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import FloatingShareButtons from "../components/blog/FloatingShareButtons";
import RelatedPosts from "../components/blog/RelatedPosts";
import AuthorBio from "../components/blog/AuthorBio";
import { useBlogPost, useBlogPosts } from "../components/hooks/useBlogPosts";

export default function BlogDetail() {
  const [readingProgress, setReadingProgress] = useState(0);
  const [showBackButton, setShowBackButton] = useState(false);
  
  // Extract slug from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get('slug');

  // Fetch the specific blog post
  const { post: currentPost, isLoading: isPostLoading, isError: isPostError } = useBlogPost(slug);
  
  // Fetch related posts
  const { posts: allPosts } = useBlogPosts();
  const relatedPosts = currentPost ? allPosts.filter(p => p.slug !== slug).slice(0, 3) : [];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  useEffect(() => {
    if (currentPost) {
      const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY;
        const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
        setReadingProgress(progress);
        
        setShowBackButton(scrollTop > 500);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [currentPost]);

  // Loading State
  if (isPostLoading) {
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
  if (isPostError) {
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
            Failed to load blog posts. Please try again later.
          </p>
          <Link 
            to={createPageUrl("Blogs")}
            className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-gradient-to-r from-[var(--primary-accent)] to-[#356859] text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Blog</span>
          </Link>
        </div>
      </div>
    );
  }

  // Post not found or no slug
  if (!slug || (!currentPost && !isPostLoading)) {
    return (
      <div className="min-h-screen bg-[var(--background)] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl"
        >
          <div className="w-24 h-24 bg-[var(--primary-accent)]/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <svg className="w-12 h-12 text-[var(--primary-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-main)] mb-4">
            Article Not Found
          </h1>
          
          <p className="text-xl text-[var(--text-muted)] mb-8 leading-relaxed">
            The article you're looking for doesn't exist or may have been moved. Let's get you back to exploring our stories.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to={createPageUrl("Blogs")}
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-gradient-to-r from-[var(--primary-accent)] to-[#356859] text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Blog</span>
            </Link>
            
            <Link 
              to={createPageUrl("Home")}
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full glass-morphism text-[var(--text-main)] font-semibold hover:bg-[var(--background-alt)] transition-all duration-300 border border-[var(--glass-border)]"
            >
              <span>Go to Homepage</span>
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  // Blog Detail View
  return (
    <article className="min-h-screen bg-[var(--background)]">
      <style>{`
        /* Wagtail Rich Text Styles */
        .wagtail-richtext {
          color: var(--text-main);
          font-size: 1.125rem;
          line-height: 1.9;
        }

        /* Paragraphs */
        .wagtail-richtext p {
          margin-bottom: 2rem;
          color: var(--text-main);
          line-height: 1.9;
        }

        .wagtail-richtext p:last-child {
          margin-bottom: 0;
        }

        /* Headings */
        .wagtail-richtext h1,
        .wagtail-richtext h2,
        .wagtail-richtext h3,
        .wagtail-richtext h4,
        .wagtail-richtext h5,
        .wagtail-richtext h6 {
          color: var(--text-main);
          font-weight: 700;
          line-height: 1.3;
          margin-top: 3.5rem;
          margin-bottom: 1.5rem;
          scroll-margin-top: 100px;
        }

        .wagtail-richtext h1 {
          font-size: 2.5rem;
          margin-top: 4rem;
        }

        .wagtail-richtext h2 {
          font-size: 2rem;
          margin-top: 3.5rem;
        }

        .wagtail-richtext h3 {
          font-size: 1.75rem;
          margin-top: 3rem;
        }

        .wagtail-richtext h4 {
          font-size: 1.5rem;
          margin-top: 2.5rem;
        }

        .wagtail-richtext h5 {
          font-size: 1.25rem;
          margin-top: 2rem;
        }

        .wagtail-richtext h6 {
          font-size: 1.125rem;
          margin-top: 2rem;
          color: var(--text-muted);
        }

        /* First heading after intro has less top margin */
        .wagtail-richtext > *:first-child {
          margin-top: 0 !important;
        }

        /* Lists */
        .wagtail-richtext ul,
        .wagtail-richtext ol {
          margin: 2rem 0;
          padding-left: 2rem;
        }

        .wagtail-richtext ul {
          list-style-type: disc;
        }

        .wagtail-richtext ol {
          list-style-type: decimal;
        }

        .wagtail-richtext li {
          margin-bottom: 1rem;
          padding-left: 0.5rem;
          line-height: 1.8;
          color: var(--text-main);
        }

        .wagtail-richtext li::marker {
          color: var(--primary-accent);
          font-weight: 600;
        }

        .wagtail-richtext ul ul,
        .wagtail-richtext ol ol,
        .wagtail-richtext ul ol,
        .wagtail-richtext ol ul {
          margin-top: 0.75rem;
          margin-bottom: 0.75rem;
        }

        /* Nested lists */
        .wagtail-richtext ul ul {
          list-style-type: circle;
        }

        .wagtail-richtext ul ul ul {
          list-style-type: square;
        }

        /* Links */
        .wagtail-richtext a {
          color: var(--primary-accent);
          text-decoration: underline;
          text-underline-offset: 3px;
          text-decoration-thickness: 2px;
          transition: all 0.2s ease;
        }

        .wagtail-richtext a:hover {
          color: var(--secondary-accent);
          text-decoration-thickness: 3px;
        }

        /* Bold and Italic */
        .wagtail-richtext b,
        .wagtail-richtext strong {
          font-weight: 700;
          color: var(--text-main);
        }

        .wagtail-richtext i,
        .wagtail-richtext em {
          font-style: italic;
        }

        /* Blockquotes */
        .wagtail-richtext blockquote {
          margin: 3rem 0;
          padding: 1.5rem 2rem;
          border-left: 4px solid var(--primary-accent);
          background: var(--background-alt);
          border-radius: 0.5rem;
          font-size: 1.25rem;
          font-style: italic;
          color: var(--text-muted);
        }

        .wagtail-richtext blockquote p:last-child {
          margin-bottom: 0;
        }

        /* Code */
        .wagtail-richtext code {
          background: var(--background-alt);
          padding: 0.25rem 0.5rem;
          border-radius: 0.375rem;
          font-family: 'Courier New', monospace;
          font-size: 0.9em;
          color: var(--secondary-accent);
          border: 1px solid var(--glass-border);
        }

        .wagtail-richtext pre {
          background: var(--background-alt);
          padding: 1.5rem;
          border-radius: 0.75rem;
          overflow-x: auto;
          margin: 2rem 0;
          border: 1px solid var(--glass-border);
        }

        .wagtail-richtext pre code {
          background: transparent;
          padding: 0;
          border: none;
          color: var(--text-main);
        }

        /* Images */
        .wagtail-richtext img {
          max-width: 100%;
          height: auto;
          border-radius: 1rem;
          margin: 3rem 0;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }

        /* Horizontal Rule */
        .wagtail-richtext hr {
          margin: 3rem 0;
          border: none;
          border-top: 2px solid var(--glass-border);
        }

        /* Tables */
        .wagtail-richtext table {
          width: 100%;
          margin: 2rem 0;
          border-collapse: collapse;
          border-radius: 0.75rem;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .wagtail-richtext th,
        .wagtail-richtext td {
          padding: 1rem 1.5rem;
          text-align: left;
          border-bottom: 1px solid var(--glass-border);
        }

        .wagtail-richtext th {
          background: var(--background-alt);
          font-weight: 700;
          color: var(--text-main);
        }

        .wagtail-richtext tr:last-child td {
          border-bottom: none;
        }

        .wagtail-richtext tr:hover {
          background: var(--background-alt)/50;
        }

        /* Wagtail block-paragraph wrapper */
        .wagtail-richtext .block-paragraph {
          display: block;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .wagtail-richtext {
            font-size: 1rem;
          }

          .wagtail-richtext h1 {
            font-size: 2rem;
          }

          .wagtail-richtext h2 {
            font-size: 1.75rem;
          }

          .wagtail-richtext h3 {
            font-size: 1.5rem;
          }

          .wagtail-richtext h4 {
            font-size: 1.25rem;
          }

          .wagtail-richtext blockquote {
            font-size: 1.125rem;
            padding: 1rem 1.5rem;
          }

          .wagtail-richtext ul,
          .wagtail-richtext ol {
            padding-left: 1.5rem;
          }
        }
      `}</style>

      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--primary-accent)] to-[var(--secondary-accent)] z-50 origin-left"
        style={{ scaleX: readingProgress / 100 }}
      />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: showBackButton ? 1 : 0, y: showBackButton ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className="fixed top-24 left-4 md:left-8 z-40"
      >
        <Link 
          to={createPageUrl("Blogs")}
          className="flex items-center space-x-2 px-4 py-2 rounded-full glass-morphism text-[var(--text-muted)] hover:text-[var(--primary-accent)] transition-colors duration-300 shadow-lg"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium hidden md:inline">Back to Blog</span>
        </Link>
      </motion.div>

      <header className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6"
              style={{
                background: 'linear-gradient(135deg, var(--primary-accent), var(--secondary-accent))',
                color: 'white'
              }}
            >
              Nourie Stories
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-main)] mb-6 leading-[1.1] tracking-tight">
              {currentPost.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-[var(--text-muted)] mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--primary-accent)] to-[var(--secondary-accent)] flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium text-[var(--text-main)]">{currentPost.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{format(new Date(currentPost.publication_date), 'MMMM d, yyyy')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{currentPost.read_time} min read</span>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-[var(--text-muted)] font-light leading-relaxed">
              {currentPost.excerpt}
            </p>
          </motion.div>
        </div>
      </header>

      {currentPost.featured_image && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={currentPost.featured_image}
              alt={currentPost.title}
              className="w-full h-auto object-cover"
              style={{ maxHeight: '600px' }}
            />
          </div>
        </motion.div>
      )}

      <div className="hidden lg:block">
        <FloatingShareButtons title={currentPost.title} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="wagtail-richtext"
        >
          <div dangerouslySetInnerHTML={{ __html: currentPost.content }} />
        </motion.div>

        <div className="lg:hidden mt-12">
          <div className="flex items-center justify-center space-x-4 py-8 border-y border-[var(--glass-border)]">
            <FloatingShareButtons title={currentPost.title} inline />
          </div>
        </div>

        <div className="mt-16">
          <AuthorBio author={currentPost.author} />
        </div>
      </div>

      {relatedPosts.length > 0 && (
        <div className="mt-24">
          <RelatedPosts posts={relatedPosts} />
        </div>
      )}
    </article>
  );
}
