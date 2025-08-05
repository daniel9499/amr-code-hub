import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Cog, Brain, Server, ArrowRight, CheckCircle, Star, Users, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Testimonials from '@/components/Testimonials';

import ScrollReveal from '@/components/ScrollReveal';
import ParallaxBackground from '@/components/ParallaxBackground';
import { motion } from 'framer-motion';
import heroWaveBackground from '@/assets/hero-wave-background.jpg';

const Index = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: '.NET, Web & Mobile applications built for scale and performance.',
      features: ['Enterprise .NET Solutions', 'Modern Web Applications', 'Mobile App Development'],
      link: '/services'
    },
    {
      icon: Brain,
      title: 'Automation & AI Solutions',
      description: 'Intelligent automation and AI integration to transform your business.',
      features: ['Process Automation', 'AI Integration', 'Machine Learning Models'],
      link: '/services'
    },
    {
      icon: Server,
      title: 'IT Consulting & Strategy',
      description: 'Strategic technology guidance for digital transformation success.',
      features: ['Technology Strategy', 'Digital Transformation', 'Architecture Planning'],
      link: '/services'
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Seasoned professionals with 10+ years of experience in enterprise solutions.'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: '100+ successful projects delivered across various industries and scales.'
    },
    {
      icon: Clock,
      title: 'Rapid Delivery',
      description: 'Agile methodologies ensure fast time-to-market without compromising quality.'
    }
  ];

  const benefits = [
    'Scalable enterprise-grade solutions',
    'Modern .NET and cloud technologies',
    'Agile development methodology',
    'Dedicated project management',
    '24/7 ongoing support and maintenance',
    'Transparent pricing and communication'
  ];

  return (
    <div className="min-h-screen font-poppins">
      {/* Hero Section with Fixed Background */}
      <section 
        className="relative py-24 lg:py-40 min-h-screen flex items-center bg-fixed bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroWaveBackground})` }}
      >
        {/* Enhanced gradient overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/80 to-accent/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/40"></div>
        
        {/* Floating shapes for modern effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-tight">
                Transform Your Business with
                <span className="bg-gradient-accent bg-clip-text text-transparent block mt-2">
                  Expert Software Solutions
                </span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto font-inter font-light"
            >
              AMR CodeStuff specializes in <span className="font-semibold text-white">.NET development</span>, 
              <span className="font-semibold text-white"> automation solutions</span>, 
              and <span className="font-semibold text-white">AI integration</span> for businesses nationwide.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
            >
              <Button asChild size="lg" variant="premium" className="group text-lg px-8 py-4">
                <Link to="/contact">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4">
                <Link to="/services">
                  Explore Our Services
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-8 text-muted-foreground text-sm font-inter"
            >
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                Free initial consultation
              </span>
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                Custom solutions
              </span>
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                Langhorne PA based
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Our Specialized Services
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-inter font-light">
                Comprehensive technology solutions designed for modern businesses nationwide.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <ScrollReveal key={service.title} direction="up" delay={index * 0.2}>
                  <Card className="group hover:shadow-hover hover:scale-105 transition-all duration-500 h-full bg-gradient-card backdrop-blur-sm border-primary/10 hover:border-primary/30">
                    <CardHeader className="pb-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-glow"
                      >
                        <Icon className="h-10 w-10 text-primary-foreground" />
                      </motion.div>
                      <CardTitle className="text-2xl mb-3 font-semibold">{service.title}</CardTitle>
                      <CardDescription className="text-lg text-muted-foreground">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 }}
                            className="flex items-center space-x-3"
                          >
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            <span className="text-foreground font-medium">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                      <Button asChild variant="outline" className="w-full group mt-6 hover:shadow-glow">
                        <Link to={service.link}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-muted/20 via-background to-muted/30 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)_/_0.1)_0%,transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Why Businesses Choose AMR CodeStuff
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-inter font-light">
                We combine deep technical expertise with business understanding to deliver solutions that drive real results.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} direction="up" delay={index * 0.2}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-center group"
                  >
                    <div className="w-24 h-24 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-glow group-hover:shadow-hover transition-all duration-500 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                      <Icon className="h-12 w-12 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                    <p className="text-lg text-muted-foreground font-inter">{item.description}</p>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Benefits Grid */}
          <ScrollReveal direction="up" delay={0.3}>
            <div className="bg-gradient-card backdrop-blur-sm rounded-3xl p-10 lg:p-12 shadow-elegant border border-primary/10">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                What You Get With AMR CodeStuff
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center space-x-4 p-3 rounded-xl hover:bg-primary/5 transition-colors"
                  >
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>


      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        {/* Modern background with curved overlay */}
        <div className="absolute inset-0 bg-gradient-tech"></div>
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
        
        {/* Curved design element */}
        <div className="absolute -top-20 left-0 right-0 h-40 bg-background rounded-[100%] transform scale-x-150"></div>
        
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto font-inter font-light">
              Get a free consultation with our expert team. We'll discuss your project requirements 
              and provide tailored solutions for your business needs.
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" variant="secondary" className="group text-lg px-8 py-4 bg-white text-primary hover:bg-white/90 hover:shadow-glow">
                <Link to="/contact">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:shadow-glow backdrop-blur-sm">
                <a href="tel:(630) 570-0549">
                  Call Now: (630) 570-0549
                </a>
              </Button>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.4}>
            <div className="flex flex-wrap justify-center gap-8 text-white/80 text-sm font-inter mt-8">
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 text-white mr-2" />
                Located in Langhorne, PA
              </span>
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 text-white mr-2" />
                Serving businesses nationwide
              </span>
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 text-white mr-2" />
                Free initial consultation
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
