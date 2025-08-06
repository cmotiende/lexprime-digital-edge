import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Search,
  Calendar,
  User,
  ArrowRight,
  Clock,
  BookOpen,
  Filter,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const categories = [
    'All',
    'Criminal Law',
    'Family Law', 
    'Corporate Law',
    'Personal Injury',
    'Real Estate',
    'Immigration',
    'Legal News'
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Understanding Your Rights During Police Questioning',
      excerpt: 'Learn about your constitutional rights and how to protect yourself during police encounters. Know what to say, what not to say, and when to request an attorney.',
      content: 'When you are stopped or questioned by police, it is crucial to understand your constitutional rights...',
      category: 'Criminal Law',
      author: 'James Mitchell',
      date: '2024-01-15',
      readTime: '5 min read',
      featured: true,
      tags: ['Miranda Rights', 'Police Encounters', 'Constitutional Law']
    },
    {
      id: 2,
      title: 'Business Formation: LLC vs Corporation',
      excerpt: 'A comprehensive guide to choosing the right business structure for your company. Explore the benefits and drawbacks of different entity types.',
      content: 'Choosing the right business structure is one of the most important decisions for new entrepreneurs...',
      category: 'Corporate Law',
      author: 'Sarah Thompson',
      date: '2024-01-10',
      readTime: '8 min read',
      featured: false,
      tags: ['Business Formation', 'LLC', 'Corporation', 'Entity Selection']
    },
    {
      id: 3,
      title: 'Child Custody Modifications: When and How',
      excerpt: 'Understanding when you can request changes to existing custody arrangements and the legal process involved in custody modifications.',
      content: 'Child custody arrangements are not set in stone. As circumstances change...',
      category: 'Family Law',
      author: 'Sarah Thompson',
      date: '2024-01-05',
      readTime: '6 min read',
      featured: false,
      tags: ['Child Custody', 'Family Court', 'Modification']
    },
    {
      id: 4,
      title: 'Maximizing Your Personal Injury Settlement',
      excerpt: 'Key strategies to ensure you receive fair compensation for your injuries. Learn what factors affect settlement amounts and how to strengthen your case.',
      content: 'Personal injury settlements can vary dramatically based on several key factors...',
      category: 'Personal Injury',
      author: 'James Mitchell',
      date: '2023-12-28',
      readTime: '7 min read',
      featured: true,
      tags: ['Personal Injury', 'Settlement', 'Compensation']
    },
    {
      id: 5,
      title: 'Real Estate Closing Process: A Step-by-Step Guide',
      excerpt: 'Navigate the complex real estate closing process with confidence. Understand each step from contract to keys.',
      content: 'The real estate closing process can seem overwhelming for first-time buyers...',
      category: 'Real Estate',
      author: 'Robert Chen',
      date: '2023-12-20',
      readTime: '10 min read',
      featured: false,
      tags: ['Real Estate', 'Closing', 'Property Purchase']
    },
    {
      id: 6,
      title: 'Immigration Law Changes: What You Need to Know',
      excerpt: 'Recent updates to immigration laws and how they might affect your case. Stay informed about policy changes and their implications.',
      content: 'Immigration law is constantly evolving, with new policies and procedures...',
      category: 'Immigration',
      author: 'Robert Chen',
      date: '2023-12-15',
      readTime: '9 min read',
      featured: false,
      tags: ['Immigration', 'Policy Changes', 'Legal Updates']
    },
    {
      id: 7,
      title: 'Protecting Your Business: Employment Law Compliance',
      excerpt: 'Essential employment law compliance tips for business owners. Avoid costly lawsuits and create a positive workplace.',
      content: 'Employment law compliance is crucial for businesses of all sizes...',
      category: 'Corporate Law',
      author: 'James Mitchell',
      date: '2023-12-10',
      readTime: '8 min read',
      featured: false,
      tags: ['Employment Law', 'Compliance', 'HR Policies']
    },
    {
      id: 8,
      title: 'Estate Planning Essentials for Young Families',
      excerpt: 'Why estate planning is important for young families and the essential documents you need to protect your loved ones.',
      content: 'Many young families postpone estate planning, thinking it is not urgent...',
      category: 'Legal News',
      author: 'Sarah Thompson',
      date: '2023-12-05',
      readTime: '6 min read',
      featured: false,
      tags: ['Estate Planning', 'Wills', 'Family Protection']
    },
    {
      id: 9,
      title: 'DUI Defense: Common Myths and Facts',
      excerpt: 'Debunking common myths about DUI charges and explaining the facts about DUI defense strategies.',
      content: 'There are many misconceptions about DUI charges and the defense process...',
      category: 'Criminal Law',
      author: 'James Mitchell',
      date: '2023-11-30',
      readTime: '7 min read',
      featured: true,
      tags: ['DUI', 'Criminal Defense', 'Legal Myths']
    }
  ];

  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent text-accent-foreground">
              Legal Insights & Resources
            </Badge>
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
              Legal Blog & Resources
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
              Stay informed with the latest legal insights, news, and expert analysis 
              from our experienced attorneys.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-primary/10 text-primary">Featured Article</Badge>
              <h2 className="text-2xl font-playfair font-bold text-primary">Editor's Pick</h2>
            </div>
            
            <Card className="shadow-professional-lg hover:shadow-professional-xl transition-all duration-300 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <Badge variant="secondary" className="mb-4">
                      {featuredPost.category}
                    </Badge>
                    <h3 className="text-2xl md:text-3xl font-playfair font-bold text-primary mb-4">
                      {featuredPost.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <Button className="bg-gradient-primary">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="lg:col-span-1">
                    <div className="flex flex-wrap gap-2">
                      {featuredPost.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Search and Filter */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles, tags, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    size="sm"
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-gradient-primary" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-playfair font-bold text-primary">
              {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
            </h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <BookOpen className="h-4 w-4" />
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </div>
          </div>

          {paginatedPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedPosts.map((post) => (
                <Card key={post.id} className="shadow-professional-md hover:shadow-professional-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-4">
                      {post.category}
                    </Badge>
                    <h3 className="text-lg font-playfair font-semibold mb-3 text-primary group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-3 mb-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{post.tags.length - 2}
                        </Badge>
                      )}
                    </div>

                    <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Read More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">No Articles Found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search criteria or browse different categories.
              </p>
              <Button onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}>
                Clear Filters
              </Button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-12">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>
              
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    size="sm"
                    variant={currentPage === page ? "default" : "outline"}
                    onClick={() => setCurrentPage(page)}
                    className={currentPage === page ? "bg-gradient-primary" : ""}
                  >
                    {page}
                  </Button>
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
              >
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <Card className="shadow-professional-lg max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-playfair font-bold text-primary mb-4">
                Stay Informed
              </h3>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter for the latest legal insights, news, and updates 
                delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1"
                />
                <Button className="bg-gradient-primary">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                We respect your privacy and will never share your information.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Need Legal Advice?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            While our blog provides valuable insights, every legal situation is unique. 
            Contact our experienced attorneys for personalized legal advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Schedule Consultation
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

export default Blog;