import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users,
  Award,
  Scale,
  Clock,
  Target,
  Eye,
  Heart,
  CheckCircle,
  ArrowRight,
  Linkedin,
  Mail,
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import attorneyMale1 from '@/assets/attorney-male-1.jpg';
import attorneyFemale1 from '@/assets/attorney-female-1.jpg';
import attorneyMale2 from '@/assets/attorney-male-2.jpg';

const About = () => {
  const values = [
    {
      icon: Scale,
      title: 'Integrity',
      description: 'We conduct our practice with the highest ethical standards and unwavering honesty.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every case, delivering superior legal representation.'
    },
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We understand the human element in every legal matter and provide empathetic support.'
    },
    {
      icon: Clock,
      title: 'Dedication',
      description: 'We are committed to achieving the best possible outcomes for our clients.'
    }
  ];

  const teamMembers = [
    {
      name: 'James Mitchell',
      position: 'Senior Partner & Managing Attorney',
      specialization: 'Criminal Defense & Corporate Law',
      image: attorneyMale1,
      bio: 'With over 20 years of experience, James has successfully defended complex criminal cases and guided numerous corporations through legal challenges. He graduated summa cum laude from Harvard Law School.',
      credentials: ['Harvard Law School JD', 'State Bar Certified', 'ABA Criminal Justice Section'],
      email: 'james.mitchell@lexprime.com',
      phone: '(555) 123-4567'
    },
    {
      name: 'Sarah Thompson',
      position: 'Partner',
      specialization: 'Family Law & Personal Injury',
      image: attorneyFemale1,
      bio: 'Sarah brings 15 years of dedicated service in family law and personal injury cases. She is known for her compassionate approach and aggressive advocacy for her clients.',
      credentials: ['Yale Law School JD', 'Family Law Specialist', 'Personal Injury Board Certified'],
      email: 'sarah.thompson@lexprime.com',
      phone: '(555) 123-4568'
    },
    {
      name: 'Robert Chen',
      position: 'Senior Attorney',
      specialization: 'Immigration & Real Estate Law',
      image: attorneyMale2,
      bio: 'Robert specializes in complex immigration matters and real estate transactions. With fluency in multiple languages, he has helped hundreds of families achieve their American dreams.',
      credentials: ['Stanford Law School JD', 'Immigration Law Certified', 'Real Estate Law Specialist'],
      email: 'robert.chen@lexprime.com',
      phone: '(555) 123-4569'
    }
  ];

  const milestones = [
    { year: '1999', event: 'Founded LexPrime Advocates LLP' },
    { year: '2005', event: 'Expanded to serve corporate clients' },
    { year: '2010', event: 'Reached 500+ successful cases' },
    { year: '2015', event: 'Opened second office location' },
    { year: '2020', event: 'Achieved 98% client satisfaction rate' },
    { year: '2024', event: 'Celebrating 25 years of legal excellence' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent text-accent-foreground">
              About LexPrime Advocates
            </Badge>
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
              25 Years of Legal Excellence
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
              Dedicated to providing exceptional legal services with integrity, expertise, 
              and unwavering commitment to justice.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Target className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-playfair font-bold text-primary">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                To provide exceptional legal representation that protects our clients' rights, 
                interests, and futures. We are committed to delivering personalized attention, 
                strategic thinking, and aggressive advocacy to achieve the best possible outcomes 
                for every client we serve.
              </p>
              <div className="space-y-4">
                {[
                  'Client-focused approach to every case',
                  'Transparent communication and regular updates',
                  'Strategic legal solutions tailored to individual needs',
                  'Commitment to achieving favorable outcomes'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <Eye className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-playfair font-bold text-primary">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                To be the premier law firm recognized for our legal expertise, ethical standards, 
                and dedication to justice. We envision a future where every client receives 
                the highest quality legal representation and achieves their desired outcomes 
                through our unwavering commitment to excellence.
              </p>
              <Card className="shadow-professional-md">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-primary mb-4">Core Principles</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Upholding the highest ethical standards</li>
                    <li>• Providing accessible and affordable legal services</li>
                    <li>• Building lasting relationships with our clients</li>
                    <li>• Contributing positively to our community</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-primary">
              What Drives Us Forward
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our core values guide every decision we make and every case we handle, 
              ensuring consistent excellence in our legal practice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="shadow-professional-md text-center">
                <CardContent className="p-8">
                  <value.icon className="h-12 w-12 text-accent mx-auto mb-6" />
                  <h3 className="text-xl font-playfair font-semibold mb-4 text-primary">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">Our Team</Badge>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-primary">
              Meet Our Expert Attorneys
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our experienced legal team brings decades of combined experience across 
              multiple practice areas to serve our clients effectively.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="shadow-professional-md hover:shadow-professional-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-playfair font-bold text-primary mb-2">
                      {member.name}
                    </h3>
                    <p className="text-accent font-medium mb-1">{member.position}</p>
                    <p className="text-sm text-muted-foreground mb-4">{member.specialization}</p>
                    
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {member.bio}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-primary mb-2">Credentials</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {member.credentials.map((cred, idx) => (
                          <li key={idx}>• {cred}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t">
                      <a 
                        href={`mailto:${member.email}`}
                        className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
                      >
                        <Mail className="h-4 w-4 text-primary" />
                      </a>
                      <a 
                        href={`tel:${member.phone}`}
                        className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
                      >
                        <Phone className="h-4 w-4 text-primary" />
                      </a>
                      <a 
                        href="#"
                        className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
                      >
                        <Linkedin className="h-4 w-4 text-primary" />
                      </a>
                      <Button size="sm" className="ml-auto bg-gradient-primary">
                        Schedule Consultation
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">Our History</Badge>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-primary">
              25 Years of Growth & Success
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A journey of dedication, growth, and unwavering commitment to our clients.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent"></div>
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card className="shadow-professional-md">
                      <CardContent className="p-4">
                        <div className="text-2xl font-playfair font-bold text-accent mb-2">
                          {milestone.year}
                        </div>
                        <p className="text-foreground">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Experience You Can Trust
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            With 25 years of legal excellence, our team is ready to fight for your rights 
            and achieve the best possible outcome for your case.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Contact Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/practice-areas">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;