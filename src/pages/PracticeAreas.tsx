import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Gavel,
  Heart,
  Users,
  Shield,
  BookOpen,
  Scale,
  Building,
  Car,
  Home,
  Briefcase,
  GraduationCap,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PracticeAreas = () => {
  const practiceAreas = [
    {
      icon: Gavel,
      title: 'Criminal Defense',
      description: 'Comprehensive criminal defense representation protecting your rights and freedom.',
      services: [
        'DUI/DWI Defense',
        'Drug Crimes',
        'Assault & Battery',
        'Theft & Burglary',
        'White Collar Crimes',
        'Domestic Violence',
        'Federal Crimes',
        'Appeals'
      ],
      approach: 'Our criminal defense team provides aggressive representation with meticulous case preparation and strategic defense planning.',
      experience: '500+ cases won',
      successRate: '95%'
    },
    {
      icon: Heart,
      title: 'Family Law',
      description: 'Compassionate legal support for all family-related matters and disputes.',
      services: [
        'Divorce & Separation',
        'Child Custody',
        'Child Support',
        'Spousal Support',
        'Adoption',
        'Prenuptial Agreements',
        'Domestic Relations',
        'Guardianship'
      ],
      approach: 'We understand the emotional challenges of family disputes and provide compassionate yet effective legal representation.',
      experience: '300+ families helped',
      successRate: '92%'
    },
    {
      icon: Users,
      title: 'Corporate Law',
      description: 'Complete business legal services for companies of all sizes.',
      services: [
        'Business Formation',
        'Corporate Governance',
        'Contract Negotiation',
        'Mergers & Acquisitions',
        'Intellectual Property',
        'Employment Law',
        'Commercial Litigation',
        'Compliance'
      ],
      approach: 'Strategic business counsel that helps companies navigate complex legal challenges and achieve their goals.',
      experience: '200+ businesses served',
      successRate: '98%'
    },
    {
      icon: Shield,
      title: 'Personal Injury',
      description: 'Fighting for maximum compensation for injury victims and their families.',
      services: [
        'Auto Accidents',
        'Medical Malpractice',
        'Workplace Injuries',
        'Product Liability',
        'Slip & Fall',
        'Wrongful Death',
        'Construction Accidents',
        'Nursing Home Abuse'
      ],
      approach: 'Aggressive advocacy to ensure injury victims receive full compensation for their damages and suffering.',
      experience: '400+ injury cases',
      successRate: '96%'
    },
    {
      icon: BookOpen,
      title: 'Real Estate Law',
      description: 'Comprehensive real estate legal services for buyers, sellers, and investors.',
      services: [
        'Property Transactions',
        'Title Examination',
        'Contract Review',
        'Closing Services',
        'Landlord/Tenant',
        'Construction Law',
        'Zoning Issues',
        'Real Estate Litigation'
      ],
      approach: 'Detailed attention to every aspect of real estate transactions to protect your investment.',
      experience: '1000+ transactions',
      successRate: '99%'
    },
    {
      icon: Scale,
      title: 'Immigration Law',
      description: 'Helping individuals and families navigate complex immigration processes.',
      services: [
        'Visa Applications',
        'Green Card Process',
        'Citizenship Applications',
        'Deportation Defense',
        'Asylum Cases',
        'Family Reunification',
        'Employment-Based Immigration',
        'Immigration Appeals'
      ],
      approach: 'Personalized immigration strategies to help clients achieve their American dreams.',
      experience: '250+ immigration cases',
      successRate: '94%'
    },
    {
      icon: Building,
      title: 'Estate Planning',
      description: 'Protecting your legacy and ensuring your wishes are carried out.',
      services: [
        'Wills & Trusts',
        'Estate Administration',
        'Probate',
        'Tax Planning',
        'Asset Protection',
        'Powers of Attorney',
        'Healthcare Directives',
        'Estate Litigation'
      ],
      approach: 'Comprehensive estate planning to protect your assets and provide for your loved ones.',
      experience: '300+ estates planned',
      successRate: '97%'
    },
    {
      icon: Briefcase,
      title: 'Employment Law',
      description: 'Protecting employee rights and helping employers maintain compliance.',
      services: [
        'Wrongful Termination',
        'Discrimination Claims',
        'Harassment Cases',
        'Wage & Hour Disputes',
        'Employment Contracts',
        'Workplace Policies',
        'FMLA Issues',
        'Whistleblower Protection'
      ],
      approach: 'Dedicated advocacy for fair treatment in the workplace for both employees and employers.',
      experience: '150+ employment cases',
      successRate: '93%'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent text-accent-foreground">
              Our Legal Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
              Comprehensive Legal Expertise
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
              Expert legal representation across multiple practice areas with proven results 
              and unwavering commitment to client success.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-2">
                8
              </div>
              <div className="text-muted-foreground font-medium">
                Practice Areas
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-2">
                1500+
              </div>
              <div className="text-muted-foreground font-medium">
                Cases Handled
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-2">
                96%
              </div>
              <div className="text-muted-foreground font-medium">
                Average Success Rate
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-2">
                25+
              </div>
              <div className="text-muted-foreground font-medium">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-primary">
              Our Areas of Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our experienced attorneys provide specialized legal services across multiple practice areas, 
              ensuring you receive expert representation tailored to your specific legal needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {practiceAreas.map((area, index) => (
              <Card key={index} className="shadow-professional-md hover:shadow-professional-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <area.icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-2xl font-playfair font-bold text-primary mb-3">
                        {area.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {area.description}
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <h4 className="font-semibold text-primary mb-3">Services Include:</h4>
                          <ul className="space-y-2">
                            {area.services.slice(0, 4).map((service, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                                {service}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-3">Additional Services:</h4>
                          <ul className="space-y-2">
                            {area.services.slice(4).map((service, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                                {service}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="bg-secondary p-4 rounded-lg mb-6">
                        <h4 className="font-semibold text-primary mb-2">Our Approach</h4>
                        <p className="text-sm text-muted-foreground">
                          {area.approach}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                        <div className="flex gap-6">
                          <div className="text-center">
                            <div className="text-lg font-bold text-accent">{area.experience}</div>
                            <div className="text-xs text-muted-foreground">Experience</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-accent">{area.successRate}</div>
                            <div className="text-xs text-muted-foreground">Success Rate</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link to="/contact" className="flex-1">
                          <Button className="w-full bg-gradient-primary">
                            Free Consultation
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                        <Button variant="outline" className="flex-1">
                          <Phone className="mr-2 h-4 w-4" />
                          Call Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">Why Choose LexPrime</Badge>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-primary">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-professional-md text-center">
              <CardContent className="p-8">
                <TrendingUp className="h-12 w-12 text-accent mx-auto mb-6" />
                <h3 className="text-xl font-playfair font-semibold mb-4 text-primary">
                  Proven Results
                </h3>
                <p className="text-muted-foreground">
                  Over 25 years of successful outcomes with a 96% average success rate across all practice areas.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-professional-md text-center">
              <CardContent className="p-8">
                <GraduationCap className="h-12 w-12 text-accent mx-auto mb-6" />
                <h3 className="text-xl font-playfair font-semibold mb-4 text-primary">
                  Expert Knowledge
                </h3>
                <p className="text-muted-foreground">
                  Board-certified attorneys with specialized expertise in their respective practice areas.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-professional-md text-center">
              <CardContent className="p-8">
                <Heart className="h-12 w-12 text-accent mx-auto mb-6" />
                <h3 className="text-xl font-playfair font-semibold mb-4 text-primary">
                  Personal Attention
                </h3>
                <p className="text-muted-foreground">
                  Every client receives personalized attention and regular communication throughout their case.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Need Legal Representation?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Don't wait to protect your rights. Contact our experienced legal team today 
            for a free consultation and learn how we can help with your case.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreas;