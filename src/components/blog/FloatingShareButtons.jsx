import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Link as LinkIcon, Check } from 'lucide-react';

export default function FloatingShareButtons({ title, slug, inline = false }) {
  const [copied, setCopied] = useState(false);
  const url = `https://blog.eatnourie.com/${slug}`;

  const shareLinks = [
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      color: 'hover:bg-[#1DA1F2]/10 hover:text-[#1DA1F2]'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      color: 'hover:bg-[#1877F2]/10 hover:text-[#1877F2]'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      color: 'hover:bg-[#0A66C2]/10 hover:text-[#0A66C2]'
    },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (inline) {
    return (
      <>
        {shareLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-12 h-12 rounded-full glass-morphism flex items-center justify-center text-[var(--text-muted)] transition-all duration-300 ${link.color}`}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Share on ${link.name}`}
          >
            <link.icon className="w-5 h-5" />
          </motion.a>
        ))}
        <motion.button
          onClick={copyToClipboard}
          className="w-12 h-12 rounded-full glass-morphism flex items-center justify-center text-[var(--text-muted)] hover:bg-[var(--primary-accent)]/10 hover:text-[var(--primary-accent)] transition-all duration-300"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Copy link"
        >
          {copied ? (
            <Check className="w-5 h-5 text-[var(--primary-accent)]" />
          ) : (
            <LinkIcon className="w-5 h-5" />
          )}
        </motion.button>
      </>
    );
  }

  // Floating sidebar version for desktop
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="fixed left-8 top-1/2 -translate-y-1/2 z-30"
    >
      <div className="flex flex-col space-y-3">
        <span className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">Share</span>
        {shareLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-11 h-11 rounded-full glass-morphism flex items-center justify-center text-[var(--text-muted)] transition-all duration-300 ${link.color} shadow-lg`}
            whileHover={{ scale: 1.15, x: 4 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Share on ${link.name}`}
          >
            <link.icon className="w-5 h-5" />
          </motion.a>
        ))}
        <motion.button
          onClick={copyToClipboard}
          className="w-11 h-11 rounded-full glass-morphism flex items-center justify-center text-[var(--text-muted)] hover:bg-[var(--primary-accent)]/10 hover:text-[var(--primary-accent)] transition-all duration-300 shadow-lg relative"
          whileHover={{ scale: 1.15, x: 4 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Copy link"
        >
          {copied ? (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Check className="w-5 h-5 text-[var(--primary-accent)]" />
            </motion.div>
          ) : (
            <LinkIcon className="w-5 h-5" />
          )}
        </motion.button>
      </div>
    </motion.div>
  );
}