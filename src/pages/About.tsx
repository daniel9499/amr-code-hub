import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Users, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To deliver innovative, scalable, and efficient technology solutions that empower businesses to achieve their goals and stay ahead in the digital landscape.'
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To be the trusted technology partner that transforms businesses through cutting-edge software development, automation, and AI integration.'
    },
    {
      icon: Users,
      title: 'Values',
      description: 'Excellence, innovation, integrity, and client success drive everything we do. We believe in building lasting partnerships through quality and trust.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '5+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  const expertise = [
    'Full-Stack Development',
    'Cloud Architecture',
    'DevOps & CI/CD',
    'Database Design',
    'API Development',
    'Mobile Applications',
    'Machine Learning',
    'Process Automation',
    'Security Implementation',
    'Performance Optimization'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            About AMR CodeStuff
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Your trusted partner in digital transformation, specializing in innovative software solutions that drive business success.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={value.title}
                  className="text-center group hover:shadow-glow transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and client success.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and practices we excel at to deliver outstanding results.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {expertise.map((skill, index) => (
              <div
                key={skill}
                className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-elegant transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-sm font-medium text-foreground">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Story
              </h2>
              <p className="text-xl text-muted-foreground">
                Building the future through innovative technology solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <p className="text-muted-foreground">
                  AMR CodeStuff was founded with a simple mission: to help businesses leverage technology 
                  for growth and success. We believe that the right software solutions can transform how 
                  companies operate, compete, and serve their customers.
                </p>
                <p className="text-muted-foreground">
                  Our team combines deep technical expertise with business acumen to deliver solutions 
                  that not only meet current needs but also scale for future growth. We work closely 
                  with each client to understand their unique challenges and goals.
                </p>
                <p className="text-muted-foreground">
                  From startups to established enterprises, we've helped organizations across various 
                  industries digitize their operations, automate processes, and integrate AI-powered 
                  solutions that drive competitive advantage.
                </p>
              </div>

              <Card className="animate-scale-in">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Why Choose Us?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-foreground">Proven track record of successful project delivery</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-foreground">Agile development methodology for faster results</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-foreground">Ongoing support and maintenance services</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-foreground">Transparent communication throughout the process</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <Button asChild size="lg" className="group">
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;