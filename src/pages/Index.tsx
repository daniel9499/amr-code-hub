import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Cog, Brain, Server, ArrowRight, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions built with modern technologies.',
      link: '/services'
    },
    {
      icon: Cog,
      title: 'Automation Solutions',
      description: 'Streamline processes with intelligent automation systems.',
      link: '/services'
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Leverage artificial intelligence for business growth.',
      link: '/services'
    },
    {
      icon: Server,
      title: 'IT Consulting',
      description: 'Strategic technology guidance for your business.',
      link: '/services'
    }
  ];

  const features = [
    'Scalable and efficient solutions',
    'Modern technology stack',
    'Agile development process',
    'Ongoing support and maintenance',
    'Transparent communication',
    'Proven track record'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Innovative Software Solutions for
              <span className="text-primary"> Modern Business</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
              AMR CodeStuff specializes in software development, automation solutions, and IT consulting. 
              We deliver scalable, efficient solutions tailored to your unique business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button asChild size="lg" className="group">
                <Link to="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">
                  View Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions to drive your business forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="group hover:shadow-glow transition-all duration-300 cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button asChild variant="ghost" className="w-full group">
                      <Link to={service.link}>
                        Learn More
                        <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose AMR CodeStuff?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We combine technical expertise with business understanding to deliver solutions 
                that not only meet your current needs but scale for future growth.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div 
                    key={feature} 
                    className="flex items-center space-x-3 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button asChild size="lg" className="group">
                  <Link to="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-primary" />
                  <span>Client Success</span>
                </CardTitle>
                <CardDescription>
                  What our clients say about working with us
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <blockquote className="text-foreground italic">
                  "AMR CodeStuff transformed our business with their innovative automation solutions. 
                  The team was professional, responsive, and delivered exactly what we needed."
                </blockquote>
                <div className="text-sm text-muted-foreground">
                  — Sarah Johnson, CEO at TechFlow Solutions
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your technology goals with innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="group">
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="tel:(307) 372-1880">
                Call Us: (307) 372-1880
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
