
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const teamMembers = [
  /* {
    name: "Tobi Sholanke",
    role: "CEO & CTO",
    bio: "Visionary leader driving Nourie's strategic direction and technological innovation. Passionate about leveraging tech to solve food accessibility challenges.",
    image: "https://ui-avatars.com/api/?name=Tobi+Sholanke&size=150&background=356859&color=ffffff&rounded=true"
  },
  */
  {
    name: "Moyin Sholanke",
    role: "Co-Founder & COO",
    bio: "Operational mastermind ensuring seamless execution, from kitchen to delivery. Dedicated to efficiency and exceptional customer experience.",
    image: "https://ui-avatars.com/api/?name=Moyin+Sholanke&size=150&background=F9A03F&color=ffffff&rounded=true"
  },
  {
    name: "Ayo Sholanke",
    role: "Co-Founder/Kitchen Coordinator & Logistics Manager",
    bio: "Ensuring timely and accurate delivery across Abuja. Manages the operational flow for a smooth user and delivery experience.",
    image: "https://ui-avatars.com/api/?name=Ayo+Sholanke&size=150&background=A8D5BA&color=121212&rounded=true"
  },
  {
    name: "Omoyele Samuel",
    role: "Tech Lead & Senior Software Engineer",
    bio: "Software engineer building and maintaining Nourie's robust platform. Committed to innovative and user-friendly digital solutions.",
    image: "https://ui-avatars.com/api/?name=Omoyele+Samuel&size=150&background=FFD166&color=121212&rounded=true"
  },
  {
    name: "Otitolaye Samuel",
    role: "Admin & HR Manager",
    bio: "Fostering a positive workplace culture and managing the administrative heartbeat of our operations.",
    image: "https://ui-avatars.com/api/?name=Otitolaye+Samuel&size=150&background=356859&color=ffffff&rounded=true"
  },
  {
    name: "Adediji Oluwashina",
    role: "Marketing & Sales Lead",
    bio: "Growth strategist connecting Nourie with the community. Expert in building brand awareness and fostering lasting customer relationships.",
    image: "https://ui-avatars.com/api/?name=Adediji+Oluwashina&size=150&background=F9A03F&color=ffffff&rounded=true"
  },
  {
    name: "Agbo George",
    role: "Head Chef",
    bio: "Culinary artist crafting every dish with passion and precision. Brings authentic Nigerian flavors to life, ensuring quality and deliciousness.",
    image: "https://ui-avatars.com/api/?name=Agbo+George&size=150&background=A8D5BA&color=121212&rounded=true"
  },
  {
    name: "Emmanuel Olobayo",
    role: "Customer Support Officer",
    bio: "The friendly voice of Nourie, ensuring every customer feels heard, valued, and supported.",
    image: "https://ui-avatars.com/api/?name=Emmanuel+Olobayo&size=150&background=FFD166&color=121212&rounded=true"
  },
  {
    name: "Adenike Mogbojuri",
    role: "Content Creator & Social Media Manager",
    bio: "Crafting Nourie's story and engaging our community across all social platforms with compelling content.",
    image: "https://ui-avatars.com/api/?name=Adenike+Mogbojuri&size=150&background=356859&color=ffffff&rounded=true"
  },
  {
    name: "Favour Udelue",
    role: "Digital Marketing Specialist",
    bio: "Driving online growth through strategic digital marketing campaigns and online presence optimization.",
    image: "https://ui-avatars.com/api/?name=Favour+Udelue&size=150&background=F9A03F&color=ffffff&rounded=true"
  },
  {
    name: "Emeka Ezeliora",
    role: "FullStack Dev Intern",
    bio: "Bringing fresh ideas and coding skills to help build and refine the Nourie app experience.",
    image: "https://ui-avatars.com/api/?name=Emeka+Ezeliora&size=150&background=A8D5BA&color=121212&rounded=true"
  },
  {
    name: "Boluwatife Ogundiran",
    role: "FullStack Dev Intern",
    bio: "A budding developer contributing to the robustness and functionality of our digital platform.",
    image: "https://ui-avatars.com/api/?name=Boluwatife+Ogundiran&size=150&background=FFD166&color=121212&rounded=true"
  },
  {
    name: "Jesujoba Jemimah",
    role: "FullStack Dev Intern",
    bio: "Supporting our tech team with enthusiasm and a drive to build great software solutions.",
    image: "https://ui-avatars.com/api/?name=Jesujoba+Jemimah&size=150&background=356859&color=ffffff&rounded=true"
  },
  {
    name: "Unwaba Maria",
    role: "Cleaner / Kitchen Assistant",
    bio: "Maintaining a pristine and hygienic kitchen environment, the foundation of our food quality promise.",
    image: "https://ui-avatars.com/api/?name=Unwaba+Maria&size=150&background=F9A03F&color=ffffff&rounded=true"
  },
  {
    name: "Yakubu Numshi Yohanna",
    role: "Operations Support Assistant",
    bio: "The backbone of our operations, providing critical support to ensure everything runs smoothly from kitchen to customer.",
    image: "https://ui-avatars.com/api/?name=Yakubu+Yohanna&size=150&background=A8D5BA&color=121212&rounded=true"
  },
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="team" ref={ref} className="py-32 bg-[var(--background)] relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD166' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-[var(--text-main)] mb-6">
            Meet Our <span className="gradient-text">Driving Force</span>
          </h2>
          <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto font-light">
            Behind every delicious meal is a dedicated team, passionate about our mission to bring quality food to everyone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="glass-morphism rounded-3xl p-8 text-center flex flex-col items-center group"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05, ease: 'easeOut' }}
            >
              <div className="relative w-40 h-40 mb-6">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 rounded-full object-cover border-4 border-[var(--glass-border)]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[var(--primary-accent)] to-[var(--secondary-accent)] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-semibold text-[var(--text-main)]">{member.name}</h3>
              <p className="gradient-text font-medium text-lg mt-1">{member.role}</p>
              <p className="text-md text-[var(--text-muted)] mt-4 font-light flex-grow">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
