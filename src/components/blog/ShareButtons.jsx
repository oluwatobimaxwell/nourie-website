import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Link as LinkIcon, Check } from 'lucide-react';

export default function ShareButtons({ title }) {
  const [copied, setCopied] = useState(false);
  const url = window.location.href;

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

  return (
    <div className="border-t border-b border-[var(--glass-border)] py-8 my-16">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h4 className="text-lg font-semibold text-[var(--text-main)]">Share this story</h4>
        <div className="flex items-center space-x-3">
          {shareLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-11 h-11 rounded-full glass-morphism flex items-center justify-center text-[var(--text-muted)] transition-all duration-300 ${link.color}`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Share on ${link.name}`}
            >
              <link.icon className="w-5 h-5" />
            </motion.a>
          ))}
          <motion.button
            onClick={copyToClipboard}
            className="w-11 h-11 rounded-full glass-morphism flex items-center justify-center text-[var(--text-muted)] hover:bg-[var(--primary-accent)]/10 hover:text-[var(--primary-accent)] transition-all duration-300 relative"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Copy link"
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.div
                  key="check"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <Check className="w-5 h-5 text-[var(--primary-accent)]" />
                </motion.div>
              ) : (
                <motion.div
                  key="link"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <LinkIcon className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </div>
  );
}