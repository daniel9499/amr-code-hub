import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Cog, Brain, Server, ArrowRight, CheckCircle, Monitor, Smartphone, Database, Cloud, Cpu, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const mainServices = [
    {
      icon: Code,
      title: 'Custom Software Development',
      subtitle: '.NET, Web & Mobile Applications',
      description: 'Enterprise-grade custom software solutions built with Microsoft .NET, modern web technologies, and mobile platforms. We specialize in scalable, maintainable code that grows with your business.',
      technologies: [
        'Microsoft .NET Framework & .NET Core',
        'ASP.NET MVC & Web API',
        'C# Application Development',
        'Entity Framework & SQL Server',
        'Azure Cloud Integration',
        'React & Angular Web Apps'
      ],
      subServices: [
        {
          icon: Monitor,
          title: 'Enterprise .NET Solutions',
          description: 'Robust desktop and web applications using the full Microsoft technology stack.'
        },
        {
          icon: Smartphone,
          title: 'Mobile App Development',
          description: 'Cross-platform mobile apps for iOS and Android using Xamarin and React Native.'
        },
        {
          icon: Database,
          title: 'Database Design & Optimization',
          description: 'Scalable database architecture with SQL Server, Entity Framework, and cloud databases.'
        }
      ],
      ctaText: 'Discuss Your Software Project'
    },
    {
      icon: Brain,
      title: 'Automation & AI Solutions',
      subtitle: 'Intelligent Process Automation',
      description: 'Transform your business operations with cutting-edge automation and artificial intelligence. From workflow automation to machine learning models, we help you reduce costs and increase efficiency.',
      technologies: [
        'Robotic Process Automation (RPA)',
        'Machine Learning & AI Models',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Workflow Automation',
        'Data Analytics & Reporting'
      ],
      subServices: [
        {
          icon: Cog,
          title: 'Process Automation',
          description: 'Automate repetitive tasks and workflows to improve efficiency and reduce human error.'
        },
        {
          icon: Brain,
          title: 'AI Integration',
          description: 'Implement machine learning models and AI-powered features into your existing systems.'
        },
        {
          icon: Target,
          title: 'Predictive Analytics',
          description: 'Data-driven insights and forecasting models to support strategic decision making.'
        }
      ],
      ctaText: 'Explore Automation Options'
    },
    {
      icon: Server,
      title: 'IT Consulting & Strategy',
      subtitle: 'Strategic Technology Planning',
      description: 'Expert guidance to align your technology investments with business objectives. We provide comprehensive IT strategy, architecture planning, and digital transformation consulting.',
      technologies: [
        'Technology Strategy & Roadmapping',
        'Cloud Migration Planning',
        'Enterprise Architecture Design',
        'Security Assessment & Planning',
        'Digital Transformation Strategy',
        'Technology Stack Evaluation'
      ],
      subServices: [
        {
          icon: Cloud,
          title: 'Cloud Strategy & Migration',
          description: 'Strategic planning and execution of cloud adoption for improved scalability and cost efficiency.'
        },
        {
          icon: Cpu,
          title: 'System Architecture',
          description: 'Design robust, scalable system architectures that support current and future business needs.'
        },
        {
          icon: Server,
          title: 'Performance Optimization',
          description: 'Analyze and optimize existing systems for better performance, security, and maintainability.'
        }
      ],
      ctaText: 'Schedule IT Consultation'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We start by understanding your business requirements, current technology landscape, and specific challenges to create a tailored approach.'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Our team develops a comprehensive project plan with clear milestones, timelines, and deliverables aligned with your business goals.'
    },
    {
      step: '03',
      title: 'Development & Implementation',
      description: 'Using agile methodologies, we build and implement solutions with regular communication and iterative feedback cycles.'
    },
    {
      step: '04',
      title: 'Testing & Deployment',
      description: 'Rigorous testing ensures quality and reliability before deployment, followed by ongoing support and optimization.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Professional Software Development Services
          </h1>
          <p className="text-xl text-foreground max-w-3xl mx-auto animate-fade-in">
            AMR CodeStuff delivers enterprise-grade <strong>.NET solutions</strong>, <strong>automation systems</strong>, 
            and <strong>IT consulting</strong> services for businesses in Langhorne, PA and nationwide.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-24">
            {mainServices.map((service, index) => {
              const MainIcon = service.icon;
              return (
                <div 
                  key={service.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={`animate-fade-in ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                        <MainIcon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                        <p className="text-lg text-primary font-medium">{service.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-foreground mb-6">{service.description}</p>
                    
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-foreground mb-4">Technologies & Expertise:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.technologies.map((tech) => (
                          <div key={tech} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-foreground">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button asChild size="lg" className="group">
                      <Link to="/contact">
                        {service.ctaText}
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>

                  <div className={`animate-scale-in ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="grid grid-cols-1 gap-6">
                      {service.subServices.map((subService, subIndex) => {
                        const SubIcon = subService.icon;
                        return (
                          <Card 
                            key={subService.title}
                            className="group hover:shadow-glow transition-all duration-300"
                            style={{ animationDelay: `${subIndex * 100}ms` }}
                          >
                            <CardHeader>
                              <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                                  <SubIcon className="h-5 w-5 text-primary-foreground" />
                                </div>
                                <CardTitle className="text-lg">{subService.title}</CardTitle>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <CardDescription className="text-base">{subService.description}</CardDescription>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                </div>
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
              Our Proven Development Process
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              A structured, agile approach that ensures successful project delivery every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <Card
                key={process.step}
                className="text-center animate-scale-in hover:shadow-glow transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold text-primary-foreground">{process.step}</span>
                  </div>
                  <CardTitle className="text-lg">{process.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{process.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-tech">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free consultation to discuss your software development, automation, or IT consulting needs. 
            We'll provide expert guidance and a tailored solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="group">
              <Link to="/contact">
                Get a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <a href="tel:(630) 570-0549">
                Call: (630) 570-0549
              </a>
            </Button>
          </div>
          <p className="text-white/80 text-sm mt-6">
            Langhorne PA Software Development • .NET Automation Solutions • Enterprise IT Consulting
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;