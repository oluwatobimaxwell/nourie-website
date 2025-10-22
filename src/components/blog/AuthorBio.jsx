import React from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";

export default function AuthorBio({
  author,
  author_image,
  author_bio = "Part of the Nourie team, passionate about bringing you stories that celebrate food, community, and the joy of a good meal.",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="glass-morphism rounded-2xl p-8 border border-[var(--glass-border)]"
    >
      <div className="flex items-start space-x-6">
        {author_image ? (
          <img
            src={author_image}
            alt={author}
            className="w-16 h-16 rounded-full object-cover flex-shrink-0 shadow-lg"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--primary-accent)] to-[var(--secondary-accent)] flex items-center justify-center flex-shrink-0 shadow-lg">
            <User className="w-8 h-8 text-white" />
          </div>
        )}
        <div className="flex-1">
          <h4 className="text-xl font-bold text-[var(--text-main)] mb-2">
            Written by {author}
          </h4>
          <p className="text-[var(--text-muted)] leading-relaxed" dangerouslySetInnerHTML={{ __html: author_bio }} />
        </div>
      </div>
    </motion.div>
  );
}