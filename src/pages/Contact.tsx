import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  MessageSquare,
  Send,
  ArrowRight,
  CheckCircle,
  Star,
  Building,
  Car
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    practiceArea: '',
    message: '',
    urgency: 'normal'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent Successfully",
      description: "We'll get back to you within 24 hours. For urgent matters, please call our office directly.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      practiceArea: '',
      message: '',
      urgency: 'normal'
    });
  };

  const practiceAreas = [
    'Criminal Defense',
    'Family Law',
    'Corporate Law',
    'Personal Injury',
    'Real Estate',
    'Immigration',
    'Estate Planning',
    'Employment Law',
    'Other'
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 2:00 PM' },
    { day: 'Sunday', hours: 'By Appointment Only' },
    { day: 'Emergency', hours: '24/7 Available' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent text-accent-foreground">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
              Get Expert Legal Help Today
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
              Schedule your free consultation with our experienced attorneys. 
              We're here to protect your rights and achieve the best possible outcome.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-professional-md text-center group hover:shadow-professional-lg transition-all duration-300">
              <CardContent className="p-8">
                <Phone className="h-12 w-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-playfair font-semibold mb-2 text-primary">
                  Call Us Now
                </h3>
                <p className="text-muted-foreground mb-4">
                  Speak directly with an attorney
                </p>
                <a href="tel:(555)123-4567">
                  <Button className="bg-gradient-primary">
                    (555) 123-4567
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="shadow-professional-md text-center group hover:shadow-professional-lg transition-all duration-300">
              <CardContent className="p-8">
                <Mail className="h-12 w-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-playfair font-semibold mb-2 text-primary">
                  Email Us
                </h3>
                <p className="text-muted-foreground mb-4">
                  Send us your legal questions
                </p>
                <a href="mailto:info@lexprime.com">
                  <Button className="bg-gradient-primary">
                    info@lexprime.com
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="shadow-professional-md text-center group hover:shadow-professional-lg transition-all duration-300">
              <CardContent className="p-8">
                <Calendar className="h-12 w-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-playfair font-semibold mb-2 text-primary">
                  Schedule Online
                </h3>
                <p className="text-muted-foreground mb-4">
                  Book your consultation
                </p>
                <Button className="bg-gradient-primary">
                  Book Appointment
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-3xl font-playfair font-bold text-primary mb-4">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours. 
                  For urgent matters, please call our office directly.
                </p>
              </div>

              <Card className="shadow-professional-lg">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <Label htmlFor="practiceArea">Practice Area</Label>
                        <select
                          id="practiceArea"
                          name="practiceArea"
                          value={formData.practiceArea}
                          onChange={handleInputChange}
                          className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                          <option value="">Select practice area</option>
                          {practiceAreas.map((area) => (
                            <option key={area} value={area}>
                              {area}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Brief description of your legal matter"
                      />
                    </div>

                    <div>
                      <Label htmlFor="urgency">Urgency Level</Label>
                      <select
                        id="urgency"
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                        className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="normal">Normal (3-5 business days)</option>
                        <option value="urgent">Urgent (24-48 hours)</option>
                        <option value="emergency">Emergency (same day)</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please provide details about your legal matter, including relevant dates, parties involved, and any specific questions you have."
                        rows={6}
                      />
                    </div>

                    <div className="bg-secondary p-4 rounded-lg">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                        <div className="text-sm text-muted-foreground">
                          <p className="font-medium text-foreground mb-1">Confidentiality Guaranteed</p>
                          <p>All communications are protected by attorney-client privilege. Your information will be kept strictly confidential.</p>
                        </div>
                      </div>
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-gradient-primary">
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Office Information */}
              <Card className="shadow-professional-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-semibold mb-6 text-primary flex items-center gap-2">
                    <Building className="h-6 w-6" />
                    Office Information
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Main Office</p>
                        <p className="text-sm text-muted-foreground">
                          1234 Legal District Avenue<br />
                          Suite 500, Downtown<br />
                          New York, NY 10001
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <p className="text-sm text-muted-foreground">(555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p className="text-sm text-muted-foreground">info@lexprime.com</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="shadow-professional-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-semibold mb-6 text-primary flex items-center gap-2">
                    <Clock className="h-6 w-6" />
                    Office Hours
                  </h3>
                  
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {schedule.day}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                    <p className="text-sm text-accent font-medium">
                      Emergency consultations available 24/7 for urgent legal matters.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Directions */}
              <Card className="shadow-professional-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-semibold mb-6 text-primary flex items-center gap-2">
                    <Car className="h-6 w-6" />
                    Getting Here
                  </h3>
                  
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <div>
                      <p className="font-medium text-foreground mb-1">By Car</p>
                      <p>Parking available in the building garage. Validated parking for clients.</p>
                    </div>
                    
                    <div>
                      <p className="font-medium text-foreground mb-1">Public Transportation</p>
                      <p>Subway: Lines 4, 5, 6 to Grand Central<br />
                         Bus: M42, M101, M102, M103</p>
                    </div>
                    
                    <div>
                      <p className="font-medium text-foreground mb-1">Accessibility</p>
                      <p>Full wheelchair accessibility with elevator access to all floors.</p>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full mt-4">
                    Get Directions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Client Reviews */}
              <Card className="shadow-professional-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-semibold mb-6 text-primary">
                    What Clients Say
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-accent pl-4">
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-accent fill-current" />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground italic mb-2">
                        "Exceptional service and results. They fought hard for my case and kept me informed every step of the way."
                      </p>
                      <p className="text-xs text-muted-foreground">- Sarah M.</p>
                    </div>

                    <div className="border-l-4 border-accent pl-4">
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-accent fill-current" />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground italic mb-2">
                        "Professional, knowledgeable, and truly cared about my family's situation. Highly recommend."
                      </p>
                      <p className="text-xs text-muted-foreground">- Michael R.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-playfair font-bold text-primary mb-4">
              Visit Our Office
            </h2>
            <p className="text-muted-foreground">
              Located in the heart of the legal district, easily accessible by public transportation.
            </p>
          </div>
          
          <Card className="shadow-professional-lg">
            <CardContent className="p-0">
              <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Interactive map would be embedded here</p>
                  <p className="text-sm text-muted-foreground">1234 Legal District Avenue, Suite 500</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Live Chat CTA */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <MessageSquare className="h-16 w-16 mx-auto mb-6 text-accent" />
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Chat with our legal team now or schedule a free consultation. 
            We're here to help you understand your legal options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Start Live Chat
              <MessageSquare className="ml-2 h-5 w-5" />
            </Button>
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

export default Contact;