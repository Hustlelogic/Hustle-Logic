import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Star, Users, Zap, Target, Trophy, Calendar, BookOpen, Instagram, Youtube, Linkedin, Video } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-leader.jpg";
import tariqPortrait from "@/assets/founder-tariq.jpg";
import groupMentorship from "@/assets/group-mentorship-new.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-gold-text bg-clip-text text-transparent">
              HUSTLE LOGIC
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/about" className="text-foreground hover:text-accent transition-colors">About</Link>
              <Link to="/services" className="text-foreground hover:text-accent transition-colors">Services</Link>
              <Link to="/testimonials" className="text-foreground hover:text-accent transition-colors">Results</Link>
              <Link to="/content" className="text-foreground hover:text-accent transition-colors">Content</Link>
            </div>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                onClick={() => window.open("https://calendly.com/hustlelogicllc/30min", "_blank")}
              >
                Book Consultation
              </Button>
              <Link to="/auth">
                <Button className="bg-gradient-red text-foreground hover:shadow-red">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-fade"></div>
        </div>
        
        <div className="relative z-10 w-full">
          <div className="container mx-auto px-6 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
              {/* Left Column - Main Content */}
              <div className="space-y-8">
                <div>
                  <span className="inline-block px-4 py-2 bg-foreground/10 border border-foreground/20 rounded-full text-sm font-medium text-foreground/80 backdrop-blur-sm mb-6">
                    FOR MEN WHO DEMAND MORE
                  </span>
                  
                  <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-[0.9] tracking-tight mb-8">
                    <span className="block text-foreground">STOP</span>
                    <span className="block bg-gradient-red-text bg-clip-text text-transparent">BEING</span>
                    <span className="block bg-gradient-gold-text bg-clip-text text-transparent">ORDINARY</span>
                  </h1>
                </div>
                
                <div className="space-y-6">
                  <p className="text-xl md:text-2xl font-light text-foreground/90 leading-tight">
                    Most men settle for average lives, average results, average everything.
                  </p>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    You're here because you know you are meant for more. Successor Tariq will show you exactly how to BECOME UNSTOPPABLE
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-red text-foreground hover:shadow-red transform hover:scale-105 transition-all duration-300 text-lg px-8 py-4 font-semibold"
                    onClick={() => window.open("https://calendly.com/hustlelogicllc/30min", "_blank")}
                  >
                    BECOME UNSTOPPABLE
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="lg" className="text-foreground/80 hover:text-foreground hover:bg-foreground/5 justify-start">
                    → Watch Tariq's Story
                  </Button>
                </div>
              </div>
              
              {/* Right Column - Stats & Social Proof */}
              <div className="space-y-8">
                <div className="bg-foreground/5 backdrop-blur-sm border border-foreground/10 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Projections</h3>
                  <div className="grid grid-cols-1 gap-6">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Men Transformed</span>
                      <span className="text-2xl font-bold text-foreground">500+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Success Rate</span>
                      <span className="text-2xl font-bold text-foreground">95%</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-foreground/5 backdrop-blur-sm border border-foreground/10 rounded-2xl p-8">
                  <blockquote className="text-lg text-foreground/90 mb-4">
                    "Tariq didn't just change my mindset—he changed my entire life trajectory."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center mr-3">
                      <span className="text-background font-bold text-sm">MJ</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">Marcus Johnson</p>
                      <p className="text-muted-foreground text-xs">Mentee</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">The Mission</h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            My mission is to empower young men, ages 14 to 30, to become confident and capable leaders in both life and work. 
            We serve those navigating early adulthood, career building, and identity formation through mentoring, skill-building programs, and leadership development. 
            Our goal is to equip the next generation of men with the <span className="text-accent font-semibold">mindset and tools to thrive</span> in every area of life.
          </p>
        </div>
      </section>

      {/* About Riq */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">About Tariq</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Tariq believes every man carries within him the seed of greatness, but too often it gets 
                  buried under fear, doubt, or lack of direction. His journey wasn't always smooth—he faced 
                  the same challenges that hold most men back.
                </p>
                <p>
                  Through years of applying timeless principles of success, developing unshakeable mindset, 
                  and building systems that create results, Tariq transformed not just his own life, but 
                  discovered his true calling: guiding other men to step fully into their role as 
                  <span className="text-accent font-semibold"> leaders, builders, and visionaries</span>.
                </p>
                <p>
                  Today, through mentorship, strategy, and brotherhood, Hustle Logic by Successor Tariq awakens that potential 
                  in men who refuse to settle for less than they deserve.
                </p>
              </div>
              <Button className="mt-8 bg-gradient-gold text-accent-foreground hover:shadow-gold">
                Learn My Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src={tariqPortrait} 
                alt="Tariq - Mentor and Leader" 
                className="rounded-2xl shadow-powerful w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold">
                <Trophy className="h-12 w-12 text-accent-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Mentorship & Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose your path to transformation. Every service is designed to elevate your life and 
              unlock your potential.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1:1 Mentorship */}
            <Card className="p-8 bg-card border-border hover:border-accent transition-all duration-300 hover:shadow-powerful">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">1:1 Mentorship</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Private, personalized coaching sessions where Tariq works directly with you to align 
                  your vision, eliminate limiting beliefs, and create an actionable plan for success.
                </p>
              </div>
                  <Button 
                    className="w-full bg-gradient-red text-foreground hover:shadow-red"
                    onClick={() => window.open("https://calendly.com/hustlelogicllc/30min", "_blank")}
                  >
                    Apply Now
                  </Button>
            </Card>

            {/* Group Mentorship */}
            <Card className="p-8 bg-card border-border hover:border-accent transition-all duration-300 hover:shadow-powerful">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Group Programs</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Brotherhood-focused experiences where men come together to learn and grow as a community. 
                  Build accountability, confidence, and leadership skills.
                </p>
              </div>
                  <Button 
                    className="w-full bg-gradient-red text-foreground hover:shadow-red"
                    onClick={() => window.open("https://calendly.com/hustlelogicllc/30min", "_blank")}
                  >
                    Join Brotherhood
                  </Button>
            </Card>

            {/* Workshops */}
            <Card className="p-8 bg-card border-border hover:border-accent transition-all duration-300 hover:shadow-powerful">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Workshops</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Live and virtual events delivering deep teachings on mindset mastery, financial growth, 
                  lifestyle design, and leadership that transform lives.
                </p>
              </div>
                  <Button 
                    className="w-full bg-gradient-red text-foreground hover:shadow-red"
                    onClick={() => window.open("https://calendly.com/hustlelogicllc/30min", "_blank")}
                  >
                    View Events
                  </Button>
            </Card>

            {/* Success Blueprint */}
            <Card className="p-8 bg-card border-border hover:border-accent transition-all duration-300 hover:shadow-powerful">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Success Blueprint</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A one-time, high-impact session where you walk away with a personalized roadmap 
                  to achieving your goals and taking immediate action.
                </p>
              </div>
                  <Button 
                    className="w-full bg-gradient-red text-foreground hover:shadow-red"
                    onClick={() => window.open("https://calendly.com/hustlelogicllc/30min", "_blank")}
                  >
                    Book Session
                  </Button>
            </Card>

            {/* Digital Resources */}
            <Card className="p-8 bg-card border-border hover:border-accent transition-all duration-300 hover:shadow-powerful">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Digital Courses</h3>
                <p className="text-muted-foreground leading-relaxed">
                  On-demand trainings, eBooks, and tools that allow you to learn success principles 
                  at your own pace with guided self-education.
                </p>
              </div>
              <Button className="w-full bg-gradient-gold text-accent-foreground hover:shadow-gold">
                Access Library
              </Button>
            </Card>

            {/* Featured Service */}
            <Card className="p-8 bg-gradient-hero border-accent hover:shadow-gold transition-all duration-300 lg:col-span-1">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="h-10 w-10 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Elite Mastermind</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  The ultimate brotherhood experience for high-achieving men ready to dominate every area of life.
                </p>
                <Button 
                  className="bg-gradient-red text-foreground hover:shadow-red"
                  onClick={() => window.open("https://calendly.com/hustlelogicllc/30min", "_blank")}
                >
                  Apply to Elite
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Real Results</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how men have transformed their lives through Hustle Logic by Successor Tariq mentorship
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card border-border">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "Tariq didn't just change my mindset—he changed my entire life trajectory. From struggling 
                entrepreneur to 7-figure business owner in 18 months."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mr-4">
                  <span className="text-accent-foreground font-bold">MJ</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Marcus Johnson</p>
                  <p className="text-sm text-muted-foreground">Mentee</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "The brotherhood aspect changed everything. Having men who hold you accountable while 
                supporting your vision is invaluable. I finally found my tribe."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mr-4">
                  <span className="text-accent-foreground font-bold">DR</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">David Rodriguez</p>
                  <p className="text-sm text-muted-foreground">Real Estate Investor</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "Tariq's approach is different. He doesn't just give you motivation—he gives you a system. 
                My income doubled, my relationships improved, and I finally have clarity."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mr-4">
                  <span className="text-accent-foreground font-bold">AT</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Alex Thompson</p>
                  <p className="text-sm text-muted-foreground">Sales Director</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Content Hub */}
      <section id="content" className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Daily Fuel</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Consistent wisdom, strategies, and insights for men serious about growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src={groupMentorship} 
                alt="Group mentorship session" 
                className="rounded-2xl shadow-powerful w-full"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">Never Stop Growing</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Weekly insights, strategies, and resources for the modern man on a mission to level up.
            </p>
            <div className="mb-8">
              <p className="text-lg font-semibold text-primary mb-2">📖 Hustle Logic Ebook Coming Soon</p>
              <p className="text-muted-foreground">Get ready for the ultimate guide to transforming your mindset and building unstoppable momentum.</p>
            </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span className="text-foreground">Weekly Success Principles</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span className="text-foreground">Mindset Mastery Videos</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span className="text-foreground">Exclusive Interviews</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span className="text-foreground">Success Case Studies</span>
                </div>
              </div>
              <Button className="bg-gradient-gold text-accent-foreground hover:shadow-gold">
                Access Content Hub
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-foreground">
            Your Time Is <span className="bg-gradient-red-text bg-clip-text text-transparent">Now</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            The life you envision is waiting to be built. Successor Tariq will guide you there. 
            Stop settling. Start building. Become the successor of your own vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-gradient-red text-foreground hover:shadow-red transform hover:scale-105 transition-all duration-300 text-lg px-12 py-6">
              Join The Brotherhood
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-12 py-6">
              Join the Brotherhood
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-3xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-4">
                SUCCESSOR TARIQ
              </div>
              <p className="text-muted-foreground mb-6 max-w-lg">
                Empowering men with the tools, mindset, and frameworks to design a life of 
                clarity, confidence, and achievement.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/successor_riq?igsh=b3pnYWI0dnUwOWg2" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center cursor-pointer hover:bg-accent/80 transition-colors">
                  <Instagram className="h-5 w-5 text-accent-foreground" />
                </a>
                <a href="https://www.tiktok.com/@strapped5.7?_t=ZT-8zrPZhccFun&_r=1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center cursor-pointer hover:bg-accent/80 transition-colors">
                  <Video className="h-5 w-5 text-accent-foreground" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center cursor-pointer hover:bg-accent/80 transition-colors">
                  <Youtube className="h-5 w-5 text-accent-foreground" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center cursor-pointer hover:bg-accent/80 transition-colors">
                  <Linkedin className="h-5 w-5 text-accent-foreground" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/services" className="hover:text-accent transition-colors">1:1 Mentorship</Link></li>
                <li><Link to="/services" className="hover:text-accent transition-colors">Group Programs</Link></li>
                <li><Link to="/services" className="hover:text-accent transition-colors">Workshops</Link></li>
                <li><Link to="/services" className="hover:text-accent transition-colors">Success Blueprint</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/content" className="hover:text-accent transition-colors">Content Hub</Link></li>
                <li><Link to="/testimonials" className="hover:text-accent transition-colors">Success Stories</Link></li>
                <li><Link to="/content" className="hover:text-accent transition-colors">Free Resources</Link></li>
                <li><Link to="/about" className="hover:text-accent transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Hustle Logic by Successor Tariq. All rights reserved. Transform your life.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
