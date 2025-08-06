import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Mail,
  Phone,
  Linkedin,
  Calendar,
  Award,
  GraduationCap,
  Briefcase,
  Star,
  ArrowRight,
  Scale,
  Users,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import attorneyMale1 from '@/assets/attorney-male-1.jpg';
import attorneyFemale1 from '@/assets/attorney-female-1.jpg';
import attorneyMale2 from '@/assets/attorney-male-2.jpg';

const Attorneys = () => {
  const attorneys = [
    {
      id: 'james-mitchell',
      name: 'James Mitchell',
      position: 'Senior Partner & Managing Attorney',
      specializations: ['Criminal Defense', 'Corporate Law', 'White Collar Crime'],
      image: attorneyMale1,
      experience: '20+ Years',
      education: 'Harvard Law School, JD',
      barAdmissions: ['New York', 'Connecticut', 'Federal Courts'],
      bio: 'James Mitchell brings over two decades of legal excellence to LexPrime Advocates. As the founding partner, he has built a reputation for aggressive criminal defense and sophisticated corporate legal counsel. His courtroom prowess and strategic thinking have resulted in numerous high-profile victories.',
      achievements: [
        'Super Lawyers Top 100 (2018-2024)',
        'Best Lawyers in America - Criminal Defense',
        'New York State Bar Association Excellence Award',
        'Former Assistant District Attorney'
      ],
      notableCases: [
        'Successfully defended Fortune 500 CEO in federal fraud case',
        'Won landmark corporate litigation case worth $50M',
        'Achieved dismissal of charges in high-profile criminal case'
      ],
      email: 'james.mitchell@lexprime.com',
      phone: '(555) 123-4567',
      languages: ['English', 'Spanish'],
      successRate: '96%',
      casesWon: '350+'
    },
    {
      id: 'sarah-thompson',
      name: 'Sarah Thompson',
      position: 'Partner',
      specializations: ['Family Law', 'Personal Injury', 'Mediation'],
      image: attorneyFemale1,
      experience: '15+ Years',
      education: 'Yale Law School, JD',
      barAdmissions: ['New York', 'New Jersey'],
      bio: 'Sarah Thompson is a compassionate advocate who combines legal expertise with genuine care for her clients. Her approach to family law emphasizes resolution while protecting her clients\' interests. In personal injury cases, she has secured millions in settlements for injured clients.',
      achievements: [
        'Family Law Specialist Certification',
        'Personal Injury Board Certified',
        'Martindale-Hubbell AV Preeminent Rating',
        'Women Lawyers of Achievement Award'
      ],
      notableCases: [
        'Secured $2.5M settlement in medical malpractice case',
        'Successfully mediated complex custody dispute',
        'Won precedent-setting family law appeal'
      ],
      email: 'sarah.thompson@lexprime.com',
      phone: '(555) 123-4568',
      languages: ['English', 'French'],
      successRate: '94%',
      casesWon: '280+'
    },
    {
      id: 'robert-chen',
      name: 'Robert Chen',
      position: 'Senior Attorney',
      specializations: ['Immigration Law', 'Real Estate Law', 'International Law'],
      image: attorneyMale2,
      experience: '18+ Years',
      education: 'Stanford Law School, JD',
      barAdmissions: ['New York', 'California'],
      bio: 'Robert Chen specializes in complex immigration matters and sophisticated real estate transactions. His multicultural background and language skills make him particularly effective in helping international clients navigate the American legal system.',
      achievements: [
        'Immigration Law Certified Specialist',
        'Real Estate Law Expert Recognition',
        'American Immigration Lawyers Association Member',
        'Outstanding Attorney Award - Asia-Pacific Bar'
      ],
      notableCases: [
        'Successfully defended against complex deportation case',
        'Facilitated $100M+ international real estate acquisition',
        'Won asylum case for political refugee family'
      ],
      email: 'robert.chen@lexprime.com',
      phone: '(555) 123-4569',
      languages: ['English', 'Mandarin', 'Cantonese', 'Spanish'],
      successRate: '97%',
      casesWon: '320+'
    }
  ];

  const teamStats = [
    { icon: Scale, number: '50+', label: 'Expert Attorneys' },
    { icon: Award, number: '25+', label: 'Years Combined Experience' },
    { icon: Users, number: '2500+', label: 'Clients Served' },
    { icon: Clock, number: '24/7', label: 'Emergency Support' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent text-accent-foreground">
              Our Legal Team
            </Badge>
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
              Meet Our Expert Attorneys
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
              Experienced legal professionals dedicated to achieving the best possible 
              outcomes for our clients through expertise, dedication, and personalized service.
            </p>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-12 w-12 text-accent mx-auto mb-4" />
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

      {/* Attorney Profiles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-primary">
              Senior Partners & Associates
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our attorneys bring decades of combined experience across multiple practice areas, 
              ensuring expert representation for every client we serve.
            </p>
          </div>

          <div className="space-y-16">
            {attorneys.map((attorney, index) => (
              <Card key={attorney.id} className="shadow-professional-lg hover:shadow-professional-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-5 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Image */}
                    <div className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                      <div className="aspect-[4/5] overflow-hidden">
                        <img 
                          src={attorney.image} 
                          alt={attorney.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-3 p-8">
                      <div className="mb-6">
                        <h3 className="text-3xl font-playfair font-bold text-primary mb-2">
                          {attorney.name}
                        </h3>
                        <p className="text-accent font-semibold text-lg mb-2">{attorney.position}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {attorney.specializations.map((spec, idx) => (
                            <Badge key={idx} variant="secondary">
                              {spec}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {attorney.bio}
                      </p>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-secondary rounded-lg">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-accent">{attorney.experience}</div>
                          <div className="text-xs text-muted-foreground">Experience</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-accent">{attorney.successRate}</div>
                          <div className="text-xs text-muted-foreground">Success Rate</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-accent">{attorney.casesWon}</div>
                          <div className="text-xs text-muted-foreground">Cases Won</div>
                        </div>
                      </div>

                      {/* Education & Bar */}
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                            <GraduationCap className="h-5 w-5" />
                            Education
                          </h4>
                          <p className="text-sm text-muted-foreground">{attorney.education}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                            <Scale className="h-5 w-5" />
                            Bar Admissions
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {attorney.barAdmissions.join(', ')}
                          </p>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                          <Award className="h-5 w-5" />
                          Achievements & Recognition
                        </h4>
                        <ul className="space-y-2">
                          {attorney.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Star className="h-4 w-4 text-accent fill-current" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Notable Cases */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                          <Briefcase className="h-5 w-5" />
                          Notable Cases
                        </h4>
                        <ul className="space-y-2">
                          {attorney.notableCases.map((case_, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                              {case_}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Languages */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-primary mb-3">Languages</h4>
                        <div className="flex flex-wrap gap-2">
                          {attorney.languages.map((language, idx) => (
                            <Badge key={idx} variant="outline">
                              {language}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Contact & Actions */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t">
                        <div className="flex items-center gap-4">
                          <a 
                            href={`mailto:${attorney.email}`}
                            className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
                          >
                            <Mail className="h-5 w-5 text-primary" />
                          </a>
                          <a 
                            href={`tel:${attorney.phone}`}
                            className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
                          >
                            <Phone className="h-5 w-5 text-primary" />
                          </a>
                          <a 
                            href="#"
                            className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
                          >
                            <Linkedin className="h-5 w-5 text-primary" />
                          </a>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Link to="/contact">
                            <Button className="bg-gradient-primary">
                              <Calendar className="mr-2 h-4 w-4" />
                              Schedule Consultation
                            </Button>
                          </Link>
                          <Button variant="outline">
                            View Full Profile
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Approach */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">Our Approach</Badge>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-primary">
              Collaborative Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our attorneys work collaboratively to ensure every client receives the full benefit 
              of our collective expertise and experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-professional-md text-center">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-accent mx-auto mb-6" />
                <h3 className="text-xl font-playfair font-semibold mb-4 text-primary">
                  Team Collaboration
                </h3>
                <p className="text-muted-foreground">
                  Multiple attorneys collaborate on complex cases to provide comprehensive legal strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-professional-md text-center">
              <CardContent className="p-8">
                <Scale className="h-12 w-12 text-accent mx-auto mb-6" />
                <h3 className="text-xl font-playfair font-semibold mb-4 text-primary">
                  Specialized Expertise
                </h3>
                <p className="text-muted-foreground">
                  Each attorney brings deep specialization in their practice areas for expert representation.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-professional-md text-center">
              <CardContent className="p-8">
                <Clock className="h-12 w-12 text-accent mx-auto mb-6" />
                <h3 className="text-xl font-playfair font-semibold mb-4 text-primary">
                  Dedicated Support
                </h3>
                <p className="text-muted-foreground">
                  Continuous communication and support throughout your legal matter from start to finish.
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
            Ready to Work With Our Team?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Schedule a consultation with one of our experienced attorneys and discover 
            how we can help achieve the best possible outcome for your case.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Schedule Consultation
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Phone className="mr-2 h-5 w-5" />
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Attorneys;