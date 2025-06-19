import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'Alex delivered an exceptional web application that exceeded our expectations. His attention to detail and technical expertise made our project a huge success.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager, InnovateCorp',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'Working with Alex was a pleasure. He understood our vision perfectly and created a mobile app that our users absolutely love. Highly recommended!',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Director, GrowthLab',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'The e-commerce platform Alex built for us increased our sales by 300%. His expertise in modern web technologies is truly impressive.',
      rating: 5
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Founder, CreativeStudio',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'Alex transformed our outdated website into a modern, responsive platform. The results speak for themselves - our engagement rates have tripled!',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-neutral-50 dark:bg-neutral-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about
            working with me and the results we've achieved together.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="card p-8 md:p-12 text-center"
              >
                <Quote className="w-12 h-12 text-primary-600 mx-auto mb-6" />
                
                <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 mb-8 leading-relaxed italic">
                  "{testimonials[currentIndex].content}"
                </p>

                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <h4 className="font-bold text-neutral-900 dark:text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white dark:bg-neutral-700 shadow-lg hover:shadow-xl transition-all duration-300 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white dark:bg-neutral-700 shadow-lg hover:shadow-xl transition-all duration-300 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary-600 scale-125'
                    : 'bg-neutral-300 dark:bg-neutral-600 hover:bg-primary-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { number: '98%', label: 'Client Satisfaction' },
            { number: '50+', label: 'Projects Delivered' },
            { number: '24/7', label: 'Support Available' },
            { number: '100%', label: 'On-Time Delivery' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
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

export default Testimonials;