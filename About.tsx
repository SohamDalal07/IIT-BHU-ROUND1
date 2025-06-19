import React from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const skills = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Expert in React, TypeScript, and modern web technologies',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user experiences',
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency',
      color: 'from-accent-500 to-accent-600'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams and stakeholders',
      color: 'from-success-500 to-success-600'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '25+', label: 'Happy Clients' },
    { number: '100%', label: 'Satisfaction Rate' }
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-neutral-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            I'm a passionate developer with a keen eye for design and a love for creating
            digital experiences that make a difference. With expertise in modern web technologies,
            I bring ideas to life through clean code and beautiful interfaces.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About Alex"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-primary rounded-2xl -z-10" />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
              Crafting Digital Excellence
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              My journey in web development started with a curiosity about how things work
              on the internet. Today, I specialize in creating responsive, accessible,
              and performant web applications that solve real-world problems.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new design trends, contributing
              to open-source projects, or sharing knowledge with the developer community.
            </p>
            
            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Work Together
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 text-center group hover:scale-105"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                {skill.title}
              </h4>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-neutral-600 dark:text-neutral-300 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;