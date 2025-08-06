import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Scale,
  Users,
  Award,
  Shield,
  Clock,
  CheckCircle,
  Star,
  Quote,
  ArrowRight,
  Gavel,
  BookOpen,
  Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-law-building.jpg';

const Home = () => {
  const stats = [
    { number: '25+', label: 'Years Experience' },
    { number: '1000+', label: 'Cases Won' },
    { number: '50+', label: 'Expert Attorneys' },
    { number: '98%', label: 'Success Rate' }
  ];

  const practiceAreas = [
    {
      icon: Gavel,
      title: 'Criminal Defense',
      description: 'Expert criminal defense representation for all types of charges.',
      features: ['DUI/DWI Defense', 'Felony Charges', 'Drug Crimes', 'White Collar Crime']
    },
    {
      icon: Heart,
      title: 'Family Law',
      description: 'Compassionate legal support for family matters and disputes.',
      features: ['Divorce & Separation', 'Child Custody', 'Adoption', 'Domestic Relations']
    },
    {
      icon: Users,
      title: 'Corporate Law',
      description: 'Comprehensive business legal services and corporate counsel.',
      features: ['Business Formation', 'Contract Law', 'Mergers & Acquisitions', 'Compliance']
    },
    {
      icon: Shield,
      title: 'Personal Injury',
      description: 'Fighting for maximum compensation for injury victims.',
      features: ['Auto Accidents', 'Medical Malpractice', 'Workplace Injuries', 'Product Liability']
    },
    {
      icon: BookOpen,
      title: 'Real Estate',
      description: 'Complete real estate legal services for buyers and sellers.',
      features: ['Property Transactions', 'Title Issues', 'Construction Law', 'Landlord/Tenant']
    },
    {
      icon: Scale,
      title: 'Immigration',
      description: 'Helping individuals and families navigate immigration law.',
      features: ['Visa Applications', 'Green Cards', 'Citizenship', 'Deportation Defense']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Business Owner',
      content: 'LexPrime helped me navigate a complex business acquisition. Their expertise and attention to detail were exceptional.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Individual Client',
      content: 'When I faced criminal charges, LexPrime fought tirelessly for me. They achieved a result I never thought possible.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Family Client',
      content: 'During my difficult divorce, LexPrime provided compassionate yet aggressive representation. Highly recommended.',
      rating: 5
    }
  ];

  const blogPosts = [
    {
      title: 'Understanding Your Rights During Police Questioning',
      excerpt: 'Learn about your constitutional rights and how to protect yourself during police encounters.',
      date: '2024-01-15',
      category: 'Criminal Law'
    },
    {
      title: 'Business Formation: LLC vs Corporation',
      excerpt: 'A comprehensive guide to choosing the right business structure for your company.',
      date: '2024-01-10',
      category: 'Corporate Law'
    },
    {
      title: 'Child Custody Modifications: When and How',
      excerpt: 'Understanding when you can request changes to existing custody arrangements.',
      date: '2024-01-05',
      category: 'Family Law'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <Badge className="mb-6 bg-accent text-accent-foreground">
              Trusted Legal Excellence Since 1999
            </Badge>
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
              Premier Legal Advocates
              <span className="block text-accent">Fighting for Justice</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
              Experienced attorneys providing exceptional legal representation with proven results. 
              Your trusted partners in achieving justice and protecting your rights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-4">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4">
                View Practice Areas
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary">About LexPrime</Badge>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-primary">
                Dedicated to Excellence in Legal Representation
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                For over 25 years, LexPrime Advocates LLP has been at the forefront of legal excellence, 
                providing comprehensive legal services to individuals, families, and businesses throughout 
                the region.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Experienced team of specialized attorneys',
                  'Proven track record of successful outcomes',
                  'Personalized attention to every case',
                  'Transparent communication throughout the process'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/about">
                <Button className="bg-gradient-primary">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="shadow-professional-md">
                <CardContent className="p-6 text-center">
                  <Award className="h-8 w-8 text-accent mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Award Winning</h4>
                  <p className="text-sm text-muted-foreground">
                    Recognized for legal excellence and client satisfaction
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-professional-md">
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 text-accent mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">24/7 Support</h4>
                  <p className="text-sm text-muted-foreground">
                    Emergency legal support when you need it most
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-primary">
              Comprehensive Legal Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our experienced attorneys provide expert legal representation across multiple practice areas, 
              ensuring you receive specialized knowledge for your specific legal needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <Card key={index} className="shadow-professional-md hover:shadow-professional-lg transition-all duration-300 group">
                <CardContent className="p-8">
                  <area.icon className="h-12 w-12 text-accent mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-playfair font-semibold mb-4 text-primary">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {area.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {area.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/practice-areas">
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">Client Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-primary">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say 
              about their experience with LexPrime Advocates.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-professional-md">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-accent mb-4" />
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">Legal Insights</Badge>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-primary">
              Latest Legal News & Articles
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Stay informed with our latest legal insights, news, and expert analysis 
              on important legal matters.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="shadow-professional-md hover:shadow-professional-lg transition-all duration-300">
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-4">
                    {post.category}
                  </Badge>
                  <h3 className="text-lg font-semibold mb-3 text-primary">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <Link to="/blog">
                      <Button variant="ghost" size="sm">
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/blog">
              <Button className="bg-gradient-primary">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Contact us today for a free consultation. Our experienced attorneys are ready 
            to fight for your rights and achieve the best possible outcome for your case.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;