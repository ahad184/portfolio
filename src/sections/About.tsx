import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background Elements - Removed to use global App background */}

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid place-items-center text-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-center gap-3 mb-8"
            >
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-primary to-secondary" />
              <span className="text-primary font-medium text-sm tracking-wider uppercase">
                About Me
              </span>
              <div className="w-12 h-0.5 bg-gradient-to-r from-secondary via-primary to-transparent" />
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-10 leading-tight"
            >
              Building web apps <span className="gradient-text">end to end</span>
            </motion.h2>

            {/* Bio - Encapsulated in Tech Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden group hover:border-primary/20 transition-colors duration-500"
            >
              {/* Tech Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/30 rounded-tl-lg" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/30 rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/30 rounded-bl-lg" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/30 rounded-br-lg" />

              {/* Subtle Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 pointer-events-none" />

              {/* Hover Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto relative z-10">
                <p>
                  I work as a freelance <span className="text-white font-medium">full stack developer</span>. At the moment I'm building and maintaining two production systems: Xpressway, a logistics and transport-management platform with dispatch, load management, invoicing and live chat; and a CRM for an Umrah operator that handles visas, trip vouchers, transport scheduling and pilgrim reporting in Arabic and English.
                </p>
                <p>
                  Before going independent I worked as a Junior Full Stack Developer at <span className="text-white font-medium">Algotix.ai</span>, where I built application features with the team and assisted in teaching undergraduate programming courses — explaining a concept to a room of students is still the best test of whether I really understand it.
                </p>
                <p>
                  My stack is <span className="text-white font-medium">TypeScript</span> end to end: React on the frontend, Node.js with NestJS or Express on the backend, PostgreSQL with Prisma for data. I deploy on Linux servers with Docker, run CI/CD through GitHub Actions, and have learned first-hand why backups, monitoring and audit logs matter once a system is live.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
