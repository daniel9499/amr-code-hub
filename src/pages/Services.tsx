import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Cog, Brain, Server, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions built with modern technologies and best practices.',
      features: [
        'Web Applications',
        'Mobile Apps',
        'Desktop Software',
        'API Development',
        'Database Design',
        'Cloud Integration'
      ]
    },
    {
      icon: Cog,
      title: 'Automation Solutions',
      description: 'Streamline your business processes with intelligent automation systems.',
      features: [
        'Process Automation',
        'Workflow Optimization',
        'Data Processing',
        'Integration Services',
        'Custom Scripts',
        'Task Scheduling'
      ]
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Leverage artificial intelligence to enhance your business capabilities.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Chatbots & Virtual Assistants',
        'AI-Powered Automation'
      ]
    },
    {
      icon: Server,
      title: 'IT Consulting',
      description: 'Strategic technology guidance to help your business grow and succeed.',
      features: [
        'Technology Strategy',
        'Architecture Planning',
        'Security Assessment',
        'Performance Optimization',
        'Cloud Migration',
        'Digital Transformation'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Comprehensive technology solutions designed to drive your business forward with innovation and efficiency.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="group hover:shadow-glow transition-all duration-300 animate-scale-in border-border"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A structured approach to deliver exceptional results every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Understanding your business needs and technical requirements.'
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Creating detailed project roadmaps and technical specifications.'
              },
              {
                step: '03',
                title: 'Development',
                description: 'Building solutions using best practices and modern technologies.'
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'Testing, deployment, and ongoing support for your success.'
              }
            ].map((process, index) => (
              <div
                key={process.step}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-primary-foreground">{process.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{process.title}</h3>
                <p className="text-muted-foreground text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <Button asChild size="lg" className="group">
            <Link to="/contact">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;