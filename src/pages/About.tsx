import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Users, Award, ArrowRight, Code, Clock, Shield, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const coreValues = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower businesses through innovative software solutions, automation, and strategic IT consulting. We transform complex technical challenges into competitive advantages that drive sustainable growth.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the trusted technology partner for businesses seeking digital transformation. We envision a future where technology seamlessly enhances every aspect of business operations.'
    },
    {
      icon: Users,
      title: 'Our Values',
      description: 'Excellence, integrity, innovation, and client success guide everything we do. We believe in transparent communication, continuous learning, and building lasting partnerships through quality deliverables.'
    }
  ];

  const expertise = [
    {
      icon: Code,
      title: '10+ Years Experience',
      description: 'Deep expertise in Microsoft .NET, enterprise software development, and modern web technologies.'
    },
    {
      icon: Clock,
      title: 'Rapid Delivery',
      description: 'Agile methodologies and proven processes ensure fast time-to-market without compromising quality.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Security-first approach with comprehensive testing and compliance standards for enterprise applications.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'Cutting-edge AI and automation solutions that position your business ahead of the competition.'
    }
  ];

  const teamStats = [
    { number: '10+', label: 'Years Combined Experience' },
    { number: '100+', label: 'Projects Delivered' },
    { number: '50+', label: 'Happy Clients' },
    { number: '24/7', label: 'Support Available' }
  ];

  const technologies = [
    'Microsoft .NET Framework & .NET Core',
    'C# & ASP.NET Development',
    'SQL Server & Entity Framework',
    'Azure Cloud Services',
    'React & Angular',
    'Mobile Development (Xamarin)',
    'Python & Machine Learning',
    'Power Platform & SharePoint',
    'DevOps & CI/CD',
    'Microservices Architecture'
  ];

  const industries = [
    'Healthcare & Medical Devices',
    'Financial Services',
    'Manufacturing & Industrial',
    'Retail & E-commerce',
    'Professional Services',
    'Government & Public Sector'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            About AMR CodeStuff
          </h1>
          <p className="text-xl text-foreground max-w-3xl mx-auto animate-fade-in">
            Your trusted technology partner in <strong>Langhorne, PA</strong> and beyond. We specialize in 
            enterprise-grade software development, intelligent automation, and strategic IT consulting.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={value.title}
                  className="text-center group hover:shadow-glow transition-all duration-300 animate-scale-in h-full"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-base">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Story & Expertise */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story & Expertise
              </h2>
              <div className="space-y-6 text-foreground">
                <p>
                  <strong>AMR CodeStuff</strong> was founded with a clear mission: to bridge the gap between complex 
                  technology challenges and business success. Based in <strong>Langhorne, PA</strong>, we serve clients 
                  nationwide with a focus on enterprise-grade solutions.
                </p>
                <p>
                  Our team brings over <strong>10 years of combined experience</strong> in Microsoft .NET development, 
                  automation solutions, and AI integration. We've successfully delivered <strong>100+ projects</strong> 
                  across various industries, from healthcare and finance to manufacturing and retail.
                </p>
                <p>
                  What sets us apart is our deep understanding of both technology and business strategy. We don't just 
                  build software – we create solutions that drive measurable business outcomes and competitive advantages.
                </p>
              </div>
              
              <div className="mt-8">
                <Button asChild size="lg" className="group">
                  <Link to="/contact">
                    Work with Our Team
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="animate-scale-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {expertise.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Card 
                      key={item.title}
                      className="group hover:shadow-glow transition-all duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CardHeader>
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-3">
                          <Icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm">{item.description}</CardDescription>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and client success.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
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

      {/* Technologies & Industries */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Technologies */}
            <div className="animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Technologies We Master
              </h2>
              <p className="text-foreground mb-8">
                Our expertise spans the full Microsoft technology stack and modern development frameworks.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {technologies.map((tech, index) => (
                  <div
                    key={tech}
                    className="bg-card border border-border rounded-lg p-3 text-center hover:shadow-card transition-all duration-300 animate-scale-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="text-sm font-medium text-foreground">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Industries */}
            <div className="animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Industries We Serve
              </h2>
              <p className="text-foreground mb-8">
                Deep domain knowledge across multiple industries enables us to deliver targeted solutions.
              </p>
              <div className="space-y-4">
                {industries.map((industry, index) => (
                  <Card
                    key={industry}
                    className="animate-scale-in hover:shadow-glow transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <Award className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <span className="font-medium text-foreground">{industry}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose AMR CodeStuff */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="bg-gradient-tech text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose AMR CodeStuff?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span>Proven track record with 100+ successful projects delivered</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span>Deep expertise in Microsoft .NET and enterprise technologies</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span>Agile methodologies ensuring rapid time-to-market</span>
                  </div>
                </div>
                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span>24/7 ongoing support and maintenance services</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span>Transparent communication and project management</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span>Local presence in Langhorne, PA with nationwide reach</span>
                  </div>
                </div>
              </div>
              <Button asChild size="lg" variant="secondary" className="group">
                <Link to="/contact">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;