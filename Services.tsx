import React from 'react';
import { Monitor, Smartphone, Globe, Zap, Shield, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies and best practices.',
      features: ['React & TypeScript', 'Responsive Design', 'Performance Optimization', 'SEO Friendly']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications that provide native-like experiences.',
      features: ['React Native', 'iOS & Android', 'App Store Deployment', 'Push Notifications']
    },
    {
      icon: Globe,
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment integration and inventory management.',
      features: ['Shopping Cart', 'Payment Gateway', 'Admin Dashboard', 'Analytics']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Speed up your existing applications and improve user experience.',
      features: ['Code Splitting', 'Lazy Loading', 'Bundle Optimization', 'CDN Integration']
    },
    {
      icon: Shield,
      title: 'Security Audits',
      description: 'Comprehensive security reviews to protect your applications and data.',
      features: ['Vulnerability Assessment', 'Code Review', 'Security Best Practices', 'Compliance']
    },
    {
      icon: Headphones,
      title: 'Consulting & Support',
      description: 'Technical guidance and ongoing support for your development projects.',
      features: ['Architecture Planning', 'Code Reviews', '24/7 Support', 'Training']
    }
  ];

  return (
    <section id="services" className="section-padding bg-neutral-50 dark:bg-neutral-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            I offer comprehensive development services to help bring your digital vision to life.
            From concept to deployment, I've got you covered.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-8 group hover:scale-105"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                  {service.description}
                </p>
              </div>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-primary-600 rounded-full" />
                    <span className="text-sm text-neutral-600 dark:text-neutral-300">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-6 py-3 px-4 bg-transparent border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white rounded-lg transition-all duration-300 font-medium"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;