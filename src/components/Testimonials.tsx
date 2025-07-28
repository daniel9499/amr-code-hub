import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "CTO, TechFlow Solutions", 
      content: "AMR CodeStuff transformed our legacy systems with modern .NET solutions. Their automation expertise reduced our processing time by 75% and significantly improved our operational efficiency.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      title: "Operations Director, Manufacturing Plus",
      content: "The AI-powered automation solutions delivered by AMR CodeStuff revolutionized our inventory management. We've seen a 40% reduction in overhead costs and near-perfect accuracy in forecasting.",
      rating: 5
    },
    {
      id: 3,
      name: "Jennifer Walsh",
      title: "CEO, HealthTech Innovations",
      content: "Their IT consulting expertise guided us through a complete digital transformation. The team's deep understanding of both technology and business strategy was exactly what we needed.",
      rating: 5
    },
    {
      id: 4,
      name: "David Kim",
      title: "VP Technology, RetailMax",
      content: "AMR CodeStuff delivered a comprehensive e-commerce platform that scaled with our business. Their mobile-first approach and attention to performance exceeded our expectations.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how AMR CodeStuff has helped businesses across industries achieve their technology goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="group hover:shadow-glow transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Quote className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.title}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '100+', label: 'Projects Delivered' },
            { number: '50+', label: 'Happy Clients' },
            { number: '99%', label: 'Client Satisfaction' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground font-medium text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;