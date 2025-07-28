import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Cog, Brain, Server, ArrowRight, CheckCircle, Star, Users, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Testimonials from '@/components/Testimonials';
import modernHeroBackground from '@/assets/modern-hero-background.jpg';

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-20 lg:py-32 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${modernHeroBackground})` }}
      >
        {/* Gradient overlay for modern effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-primary/20"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Transform Your Business with
              <span className="text-primary block mt-2">Expert Software Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
              AMR CodeStuff specializes in <strong>.NET development</strong>, <strong>automation solutions</strong>, 
              and <strong>AI integration</strong> for businesses in Langhorne, PA and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in mb-8">
              <Button asChild size="lg" className="group shadow-glow">
                <Link to="/contact">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">
                  Explore Our Services
                </Link>
              </Button>
            </div>
            <p className="text-muted-foreground text-sm animate-fade-in">
              ✓ Free initial consultation • ✓ Custom solutions • ✓ Langhorne PA based
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Specialized Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions designed for modern businesses in Langhorne, PA and nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="group hover:shadow-glow transition-all duration-300 h-full animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="ghost" className="w-full group mt-4">
                      <Link to={service.link}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Businesses Choose AMR CodeStuff
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine deep technical expertise with business understanding to deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.title}
                  className="text-center animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>

          {/* Benefits Grid */}
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              What You Get With AMR CodeStuff
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit} 
                  className="flex items-center space-x-3 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-tech">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free consultation with our expert team. We'll discuss your project requirements 
            and provide tailored solutions for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="group">
              <Link to="/contact">
                Get a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <a href="tel:(307) 372-1880">
                Call Now: (307) 372-1880
              </a>
            </Button>
          </div>
          <p className="text-white/80 text-sm mt-6">
            Located in Langhorne, PA • Serving businesses nationwide • Free initial consultation
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
