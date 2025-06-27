"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Users,
  Target,
  Heart,
  Zap,
  CheckCircle,
  Star,
  Phone,
  Link,
  UserCheck,
  Building,
  GraduationCap,
  Eye,
  MessageSquare,
} from "lucide-react"

export default function ManchWebsite() {
  const [isVisible, setIsVisible] = useState(false)
  const [showAbout, setShowAbout] = useState(false)
  const [showSolutions, setShowSolutions] = useState(false)
  const [showCulture, setShowCulture] = useState(false)
  const [showHowItWorks, setShowHowItWorks] = useState(false)
  const [showGetStarted, setShowGetStarted] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const coreValues = [
    { name: "Integrity", description: "Acting with honesty and moral principles", strength: 92 },
    { name: "Empathy", description: "Understanding and sharing others' feelings", strength: 88 },
    { name: "Innovation", description: "Embracing creative solutions and new ideas", strength: 85 },
    { name: "Collaboration", description: "Working together towards common goals", strength: 94 },
    { name: "Accountability", description: "Taking responsibility for actions and outcomes", strength: 89 },
    { name: "Growth", description: "Continuous learning and development", strength: 91 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-white to-secondary">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div
              className={`text-2xl font-bold transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <span className="text-gradient">Manch</span>
            </div>
            <div
              className={`hidden md:flex space-x-8 transition-all duration-700 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"}`}
            >
              <button
                onClick={() => setShowAbout(true)}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                About
              </button>
              <button
                onClick={() => setShowSolutions(true)}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Solutions
              </button>
              <button
                onClick={() => setShowHowItWorks(true)}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                How It Works
              </button>
              <button
                onClick={() => setShowCulture(true)}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Culture
              </button>
            </div>
            <Button
              onClick={() => setShowGetStarted(true)}
              className={`bg-primary hover:bg-primary/90 text-white transition-all duration-700 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <div
                className={`transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  <span className="text-gradient">Culture, Defined by Values.</span>
                  <br />
                  <span className="text-primary">Powered by Manch.</span>
                </h1>
              </div>

              <div
                className={`transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  A cultural intelligence platform for teams and individuals to align, grow, and thrive—through human
                  values.
                </p>
              </div>

              <div
                className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 delay-900 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                <Button
                  onClick={() => setShowCulture(true)}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-2xl"
                >
                  Explore Culture
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  onClick={() => setShowGetStarted(true)}
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-2xl"
                >
                  Get Started
                </Button>
              </div>
            </div>

            {/* Right Column - Value Cloud Visualization */}
            <div
              className={`transition-all duration-1000 delay-1100 ${isVisible ? "animate-slide-in-right opacity-100" : "translate-x-20 opacity-0"}`}
            >
              <div className="relative">
                {/* Background Gradient with Parallax */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent-coral/10 to-primary/20 rounded-3xl blur-3xl animate-parallax-shift"></div>

                {/* Value Cloud */}
                <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 card-shadow-lg overflow-hidden">
                  {/* Shine overlay */}
                  <div className="absolute inset-0 shine-effect opacity-30 rounded-3xl"></div>

                  <h3 className="text-2xl font-bold text-primary mb-6 text-center relative z-10">Your Culture DNA</h3>

                  {/* Interactive Value Bubbles */}
                  <div className="grid grid-cols-2 gap-4 relative z-10">
                    {coreValues.map((value, index) => (
                      <div
                        key={value.name}
                        className={`bg-white rounded-2xl p-4 card-shadow hover:card-shadow-lg transition-all duration-500 cursor-pointer group relative overflow-hidden`}
                        style={{
                          animationDelay: `${index * 0.2}s`,
                          transform: `translateY(${Math.sin(Date.now() * 0.001 + index) * 2}px)`,
                        }}
                      >
                        {/* Individual shine effect for each bubble */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine transition-opacity duration-300"></div>

                        <div className="flex items-center justify-between mb-2 relative z-10">
                          <h4 className="font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                            {value.name}
                          </h4>
                          <div className="text-sm font-bold text-accent">{value.strength}%</div>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full mb-2 relative z-10">
                          <div
                            className="h-2 bg-gradient-to-r from-accent to-accent-coral rounded-full transition-all duration-1000 relative overflow-hidden"
                            style={{ width: `${value.strength}%` }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground group-hover:text-primary/70 transition-colors duration-300 relative z-10">
                          {value.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Culture Score */}
                  <div className="mt-6 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-accent-coral text-white px-6 py-3 rounded-2xl font-semibold relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine transition-opacity duration-300"></div>
                      <Star className="h-5 w-5 relative z-10" />
                      <span className="relative z-10">Culture Alignment: 89%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Where Human Values Shape Culture</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Move beyond traditional metrics. Build teams that thrive through authentic value alignment and cultural
              intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Hiring & Team Building",
                description: "Move beyond resumes. Hire for culture, not just capability.",
                color: "from-accent to-accent-coral",
              },
              {
                icon: Target,
                title: "Value Mapping & Role Fit",
                description: "Help people do work that aligns with who they are.",
                color: "from-primary to-accent",
              },
              {
                icon: Heart,
                title: "Team Dynamics",
                description: "Know who thrives together—and why.",
                color: "from-accent-coral to-accent",
              },
            ].map((solution, index) => (
              <div
                key={solution.title}
                className={`bg-white rounded-3xl p-8 card-shadow hover:card-shadow-lg transition-all duration-300 group cursor-pointer ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onClick={() => setShowSolutions(true)}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <solution.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{solution.description}</p>
                <div className="flex items-center text-accent font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Culture That Lasts?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join forward-thinking companies that are building stronger, more aligned teams through human values.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setShowGetStarted(true)}
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-2xl"
            >
              Start Your Culture Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={() => setShowSolutions(true)}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-2xl"
            >
              Explore Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Modal */}
      {showHowItWorks && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto card-shadow-lg">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-4xl font-bold text-gradient mb-2">How It Works</h2>
                  <p className="text-muted-foreground text-lg">Simple, powerful, transformative</p>
                </div>
                <button
                  onClick={() => setShowHowItWorks(false)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="space-y-16">
                {/* For Businesses */}
                <div>
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-accent rounded-2xl px-6 py-3 text-white mb-4">
                      <Building className="h-6 w-6" />
                      <span className="text-xl font-bold">For Businesses</span>
                    </div>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                      Transform your organizational culture through comprehensive value assessment and alignment
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Step 1 */}
                    <div className="text-center">
                      <div className="relative mb-6">
                        <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                          <Phone className="h-10 w-10 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-coral rounded-full flex items-center justify-center text-white font-bold text-sm">
                          1
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-4">Introductory Call</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We start with a comprehensive consultation to understand your organizational challenges, culture
                        goals, and specific pain points. Our experts assess your current state and design a customized
                        approach.
                      </p>
                      <div className="mt-4 p-4 bg-primary/5 rounded-2xl">
                        <p className="text-sm text-primary font-medium">Duration: 45-60 minutes</p>
                        <p className="text-sm text-muted-foreground">Key stakeholders + leadership team</p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="text-center">
                      <div className="relative mb-6">
                        <div className="w-20 h-20 bg-gradient-to-r from-accent to-accent-coral rounded-full flex items-center justify-center mx-auto mb-4">
                          <Link className="h-10 w-10 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-coral rounded-full flex items-center justify-center text-white font-bold text-sm">
                          2
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-4">Firm-Wide Assessment</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Every team member receives a personalized assessment link. Our interactive evaluation measures
                        core values, behavioral tendencies, and cultural preferences through scenario-based questions.
                      </p>
                      <div className="mt-4 p-4 bg-accent/5 rounded-2xl">
                        <p className="text-sm text-accent font-medium">15-20 minutes per person</p>
                        <p className="text-sm text-muted-foreground">Comprehensive value profiling</p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="text-center">
                      <div className="relative mb-6">
                        <div className="w-20 h-20 bg-gradient-to-r from-accent-coral to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                          <UserCheck className="h-10 w-10 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-coral rounded-full flex items-center justify-center text-white font-bold text-sm">
                          3
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-4">Peer Validation</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Colleagues assess each other on values and situational responses, creating a 360-degree view.
                        This peer validation ensures authentic insights and reveals gaps between self-perception and
                        team perception.
                      </p>
                      <div className="mt-4 p-4 bg-accent-coral/5 rounded-2xl">
                        <p className="text-sm text-accent-coral font-medium">Multi-perspective analysis</p>
                        <p className="text-sm text-muted-foreground">Authentic culture mapping</p>
                      </div>
                    </div>
                  </div>

                  {/* Business Results */}
                  <div className="mt-12 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8">
                    <h4 className="text-2xl font-bold text-primary mb-6 text-center">What You Get</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        {[
                          "Comprehensive culture dashboard with real-time insights",
                          "Team compatibility matrices and collaboration recommendations",
                          "Individual value profiles and role-fit analysis",
                          "Hiring recommendations based on cultural alignment",
                        ].map((result, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                            <p className="text-muted-foreground">{result}</p>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-4">
                        {[
                          "Organizational alignment scores across all levels",
                          "Culture evolution tracking and trend analysis",
                          "Actionable recommendations for culture improvement",
                          "Ongoing support and quarterly culture health checks",
                        ].map((result, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                            <p className="text-muted-foreground">{result}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* For Students & Job Seekers */}
                <div>
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-accent to-accent-coral rounded-2xl px-6 py-3 text-white mb-4">
                      <GraduationCap className="h-6 w-6" />
                      <span className="text-xl font-bold">For Students & Job Seekers</span>
                    </div>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                      Build your value-based profile and join our talent pool of purpose-driven professionals
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Step 1 */}
                    <div className="text-center">
                      <div className="relative mb-6">
                        <div className="w-20 h-20 bg-gradient-to-r from-accent to-accent-coral rounded-full flex items-center justify-center mx-auto mb-4">
                          <Target className="h-10 w-10 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                          1
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-4">Personal Assessment</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Complete our comprehensive values assessment that explores your core beliefs, work preferences,
                        and behavioral patterns. Discover what truly drives you and how you show up in professional
                        settings.
                      </p>
                      <div className="mt-4 p-4 bg-accent/5 rounded-2xl">
                        <p className="text-sm text-accent font-medium">20-25 minutes</p>
                        <p className="text-sm text-muted-foreground">Deep value exploration</p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="text-center">
                      <div className="relative mb-6">
                        <div className="w-20 h-20 bg-gradient-to-r from-accent-coral to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                          <MessageSquare className="h-10 w-10 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                          2
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-4">Peer Validation Network</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Share your assessment with 10 people who know you well—friends, colleagues, mentors, or family.
                        They provide feedback on how they see your values in action, creating an authentic 360-degree
                        profile.
                      </p>
                      <div className="mt-4 p-4 bg-accent-coral/5 rounded-2xl">
                        <p className="text-sm text-accent-coral font-medium">10 peer assessments</p>
                        <p className="text-sm text-muted-foreground">Authentic validation process</p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="text-center">
                      <div className="relative mb-6">
                        <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                          <Eye className="h-10 w-10 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                          3
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-4">Talent Pool Visibility</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Join our curated talent pool where companies search for candidates based on value alignment, not
                        just skills. Get matched with organizations that share your values and vision for meaningful
                        work.
                      </p>
                      <div className="mt-4 p-4 bg-primary/5 rounded-2xl">
                        <p className="text-sm text-primary font-medium">Value-based matching</p>
                        <p className="text-sm text-muted-foreground">Purpose-driven opportunities</p>
                      </div>
                    </div>
                  </div>

                  {/* Student/Job Seeker Results */}
                  <div className="mt-12 bg-gradient-to-r from-accent/5 to-accent-coral/5 rounded-3xl p-8">
                    <h4 className="text-2xl font-bold text-primary mb-6 text-center">Your Value Profile Includes</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        {[
                          "Comprehensive personal values report with insights",
                          "Peer validation summary showing alignment gaps",
                          "Career recommendations based on value fit",
                          "Access to value-aligned job opportunities",
                        ].map((result, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                            <p className="text-muted-foreground">{result}</p>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-4">
                        {[
                          "Professional profile highlighting your authentic self",
                          "Company culture compatibility scores",
                          "Networking opportunities with like-minded professionals",
                          "Ongoing career guidance and value-based coaching",
                        ].map((result, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                            <p className="text-muted-foreground">{result}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-16 text-center">
                <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-8 text-white">
                  <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
                  <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
                    Whether you're building a team or building your career, Manch helps you find authentic alignment
                    through shared values.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={() => {
                        setShowHowItWorks(false)
                        setShowGetStarted(true)
                      }}
                      className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-2xl font-semibold"
                    >
                      Get Started Today
                    </Button>
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-2xl font-semibold bg-transparent"
                    >
                      Schedule a Call
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <Button
                  onClick={() => setShowHowItWorks(false)}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-2xl"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* About Modal */}
      {showAbout && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto card-shadow-lg">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-4xl font-bold text-gradient mb-2">About Manch</h2>
                  <p className="text-muted-foreground text-lg">Where Human Values Shape Culture</p>
                </div>
                <button
                  onClick={() => setShowAbout(false)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    To humanize how companies build teams, make decisions, and grow—through real, lived values. We
                    believe that authentic culture isn't built through perks or policies, but through the alignment of
                    human values at every level of an organization.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-primary mb-6">Our Core Values</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        name: "Authenticity",
                        description: "We believe in genuine human connection over superficial metrics",
                        icon: Heart,
                      },
                      {
                        name: "Intelligence",
                        description: "We use data and insights to understand the complexity of human culture",
                        icon: Zap,
                      },
                      {
                        name: "Growth",
                        description: "We're committed to continuous learning and evolution in how we serve teams",
                        icon: Target,
                      },
                      {
                        name: "Impact",
                        description: "We measure success by the positive change we create in workplace culture",
                        icon: CheckCircle,
                      },
                    ].map((value) => (
                      <div key={value.name} className="bg-secondary rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-accent to-accent-coral rounded-xl flex items-center justify-center">
                            <value.icon className="h-5 w-5 text-white" />
                          </div>
                          <h4 className="text-xl font-bold text-primary">{value.name}</h4>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <Button
                  onClick={() => setShowAbout(false)}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-2xl"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Solutions Modal */}
      {showSolutions && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto card-shadow-lg">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-4xl font-bold text-gradient mb-2">Solutions</h2>
                  <p className="text-muted-foreground text-lg">Building purpose-driven teams through value alignment</p>
                </div>
                <button
                  onClick={() => setShowSolutions(false)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="space-y-12">
                {/* Hiring & Team Building */}
                <div className="bg-gradient-to-r from-accent/5 to-accent-coral/5 rounded-3xl p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-accent to-accent-coral rounded-2xl flex items-center justify-center">
                          <Users className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-primary">Hiring & Team Building</h3>
                      </div>
                      <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                        Move beyond resumes. Hire for culture, not just capability. Build teams where values align and
                        people thrive together.
                      </p>
                      <div className="space-y-4">
                        {[
                          "Rate and assess human values like integrity, empathy, and humility",
                          "Match candidates with teams where culture fit goes beyond technical skills",
                          "Replace gut-feel hiring with data-backed value alignment",
                        ].map((feature, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                            <p className="text-muted-foreground">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 card-shadow">
                      <h4 className="font-semibold text-primary mb-4">Value Assessment Preview</h4>
                      <div className="space-y-3">
                        {[
                          { name: "Integrity", score: 92, color: "bg-green-500" },
                          { name: "Empathy", score: 88, color: "bg-blue-500" },
                          { name: "Innovation", score: 85, color: "bg-purple-500" },
                          { name: "Collaboration", score: 94, color: "bg-accent" },
                        ].map((value) => (
                          <div key={value.name} className="flex items-center justify-between">
                            <span className="text-sm font-medium text-primary">{value.name}</span>
                            <div className="flex items-center gap-2">
                              <div className="w-20 h-2 bg-gray-200 rounded-full">
                                <div
                                  className={`h-2 ${value.color} rounded-full transition-all duration-1000`}
                                  style={{ width: `${value.score}%` }}
                                ></div>
                              </div>
                              <span className="text-sm font-bold text-accent">{value.score}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Value Mapping & Role Fit */}
                <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="bg-white rounded-2xl p-6 card-shadow">
                      <h4 className="font-semibold text-primary mb-4">Role-Value Alignment</h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-secondary rounded-xl">
                          <div>
                            <span className="font-medium text-primary">Leadership Role</span>
                            <p className="text-sm text-muted-foreground">Cultural Fit: 94%</p>
                          </div>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-4 w-4 ${star <= 4 ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="bg-green-50 rounded-xl p-3">
                          <h5 className="text-green-700 font-medium mb-2">Strengths</h5>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded-lg text-xs">
                              Strategic Thinking
                            </span>
                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded-lg text-xs">Mentorship</span>
                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded-lg text-xs">Innovation</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center">
                          <Target className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-primary">Value Mapping & Role Fit</h3>
                      </div>
                      <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                        Help people do work that aligns with who they are. Discover natural strengths and identify
                        potential blockers through deep value analysis.
                      </p>
                      <div className="space-y-4">
                        {[
                          "Understand individual value profiles across departments and levels",
                          "Identify misalignments between personal values and role expectations",
                          "Discover natural strengths and hidden blockers through value fit analysis",
                        ].map((feature, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                            <p className="text-muted-foreground">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Team Dynamics */}
                <div className="bg-gradient-to-r from-accent-coral/5 to-accent/5 rounded-3xl p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-accent-coral to-accent rounded-2xl flex items-center justify-center">
                          <Heart className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-primary">Team Dynamics & Compatibility</h3>
                      </div>
                      <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                        Know who thrives together—and why. Map how individual values complement or clash within teams to
                        boost collaboration.
                      </p>
                      <div className="space-y-4">
                        {[
                          "Map individual values and see how they complement or clash within teams",
                          "Build compatibility reports to boost collaboration and reduce friction",
                          "Forecast impact of how new team members will affect culture dynamics",
                        ].map((feature, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                            <p className="text-muted-foreground">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 card-shadow">
                      <h4 className="font-semibold text-primary mb-4">Team Compatibility Matrix</h4>
                      <div className="grid grid-cols-4 gap-2 mb-4">
                        {[
                          { name: "Alex", score: 95, color: "bg-green-500" },
                          { name: "Sarah", score: 87, color: "bg-blue-500" },
                          { name: "Mike", score: 72, color: "bg-yellow-500" },
                          { name: "Lisa", score: 91, color: "bg-purple-500" },
                        ].map((member) => (
                          <div key={member.name} className="text-center">
                            <div
                              className={`w-12 h-12 ${member.color} rounded-full flex items-center justify-center mx-auto mb-2`}
                            >
                              <span className="text-white font-bold text-sm">{member.name.slice(0, 2)}</span>
                            </div>
                            <p className="text-xs font-medium text-primary">{member.name}</p>
                            <p className="text-xs text-muted-foreground">{member.score}%</p>
                          </div>
                        ))}
                      </div>
                      <div className="bg-gradient-to-r from-accent/10 to-accent-coral/10 rounded-xl p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-primary">Team Sync Score</span>
                          <span className="text-accent font-bold">89%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                          <div className="w-[89%] h-2 bg-gradient-to-r from-accent to-accent-coral rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-8 text-white">
                  <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Team Culture?</h3>
                  <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
                    Join forward-thinking companies building stronger, more aligned teams through human values.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={() => {
                        setShowSolutions(false)
                        setShowGetStarted(true)
                      }}
                      className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-2xl font-semibold"
                    >
                      Start Your Culture Journey
                    </Button>
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-2xl font-semibold bg-transparent"
                    >
                      Schedule Demo
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <Button
                  onClick={() => setShowSolutions(false)}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-2xl"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Culture Modal */}
      {showCulture && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto card-shadow-lg">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-4xl font-bold text-gradient mb-2">Culture Intelligence</h2>
                  <p className="text-muted-foreground text-lg">Visualize and understand your organizational culture</p>
                </div>
                <button
                  onClick={() => setShowCulture(false)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="space-y-12">
                {/* Culture Heatmap */}
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-6">Most Common Values Across Teams</h3>
                  <div className="bg-gradient-to-br from-secondary to-white rounded-3xl p-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {[
                        { value: "Collaboration", strength: 94, teams: 12 },
                        { value: "Integrity", strength: 92, teams: 11 },
                        { value: "Growth", strength: 91, teams: 10 },
                        { value: "Innovation", strength: 89, teams: 9 },
                        { value: "Empathy", strength: 88, teams: 8 },
                        { value: "Accountability", strength: 85, teams: 7 },
                        { value: "Excellence", strength: 83, teams: 6 },
                        { value: "Adaptability", strength: 81, teams: 5 },
                      ].map((item, index) => (
                        <div
                          key={item.value}
                          className="bg-white rounded-2xl p-6 card-shadow hover:card-shadow-lg transition-all duration-300 text-center group cursor-pointer"
                        >
                          <div className="text-3xl font-bold text-gradient mb-2">{item.strength}%</div>
                          <div className="font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                            {item.value}
                          </div>
                          <div className="text-sm text-muted-foreground">{item.teams} teams</div>
                          <div className="w-full h-2 bg-gray-200 rounded-full mt-3">
                            <div
                              className="h-2 bg-gradient-to-r from-accent to-accent-coral rounded-full transition-all duration-1000"
                              style={{ width: `${item.strength}%`, animationDelay: `${index * 100}ms` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Culture as Data */}
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-6">Culture-as-Data: Organizational Alignment</h3>
                  <div className="bg-white rounded-3xl p-8 card-shadow">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xl font-semibold text-primary mb-4">Alignment Across Levels</h4>
                        <div className="space-y-4">
                          {[
                            { level: "C-Suite", alignment: 92, color: "bg-green-500" },
                            { level: "Senior Management", alignment: 85, color: "bg-blue-500" },
                            { level: "Middle Management", alignment: 78, color: "bg-yellow-500" },
                            { level: "Team Leads", alignment: 82, color: "bg-purple-500" },
                            { level: "Individual Contributors", alignment: 75, color: "bg-accent" },
                          ].map((level) => (
                            <div
                              key={level.level}
                              className="flex items-center justify-between p-3 bg-secondary rounded-xl"
                            >
                              <span className="font-medium text-primary">{level.level}</span>
                              <div className="flex items-center gap-3">
                                <div className="w-24 h-2 bg-gray-200 rounded-full">
                                  <div
                                    className={`h-2 ${level.color} rounded-full transition-all duration-1000`}
                                    style={{ width: `${level.alignment}%` }}
                                  ></div>
                                </div>
                                <span className="text-sm font-bold text-accent w-8">{level.alignment}%</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-primary mb-4">Culture Trends (12 Months)</h4>
                        <div className="bg-gradient-to-r from-accent/10 to-accent-coral/10 rounded-2xl p-6">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-lg font-semibold text-primary">Overall Culture Score</span>
                            <div className="flex items-center gap-2">
                              <span className="text-2xl font-bold text-accent">84%</span>
                              <div className="text-green-600 text-sm font-medium">↗ +12%</div>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Jan 2024</span>
                              <span className="font-medium">72%</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Jun 2024</span>
                              <span className="font-medium">78%</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Dec 2024</span>
                              <span className="font-medium text-accent">84%</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 p-4 bg-blue-50 rounded-2xl">
                          <h5 className="font-semibold text-blue-700 mb-2">Key Insights</h5>
                          <ul className="text-sm text-blue-600 space-y-1">
                            <li>• Collaboration scores increased 18%</li>
                            <li>• Leadership alignment improved significantly</li>
                            <li>• Innovation culture emerging in tech teams</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Culture Quiz Preview */}
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-6">What's Your Culture Code?</h3>
                  <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-8 text-white">
                    <div className="text-center mb-8">
                      <h4 className="text-2xl font-bold mb-4">Discover Your Team's Cultural DNA</h4>
                      <p className="text-xl opacity-90">
                        Take our 5-minute assessment to understand your team's unique value profile
                      </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                      {[
                        { step: "1", title: "Answer Questions", desc: "5 minutes of thoughtful reflection" },
                        { step: "2", title: "Get Your Profile", desc: "Detailed value analysis and insights" },
                        { step: "3", title: "Build Culture", desc: "Actionable recommendations for growth" },
                      ].map((step) => (
                        <div key={step.step} className="text-center">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-xl font-bold">{step.step}</span>
                          </div>
                          <h5 className="text-lg font-semibold mb-2">{step.title}</h5>
                          <p className="opacity-90">{step.desc}</p>
                        </div>
                      ))}
                    </div>
                    <div className="text-center mt-8">
                      <Button
                        onClick={() => setShowGetStarted(true)}
                        className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-2xl font-semibold"
                      >
                        Start Culture Assessment
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <Button
                  onClick={() => setShowCulture(false)}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-2xl"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Get Started Modal */}
      {showGetStarted && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto card-shadow-lg">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-4xl font-bold text-gradient mb-2">Get Started</h2>
                  <p className="text-muted-foreground text-lg">Begin your journey to authentic culture alignment</p>
                </div>
                <button
                  onClick={() => setShowGetStarted(false)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-secondary to-white rounded-3xl p-12 mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-accent to-accent-coral rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-4">Ready to Transform Your Culture?</h3>
                  <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Whether you're a business looking to build stronger teams or an individual seeking value-aligned
                    opportunities, we're here to help you discover authentic cultural alignment.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white rounded-2xl p-6 card-shadow">
                      <Building className="h-12 w-12 text-accent mx-auto mb-4" />
                      <h4 className="text-xl font-bold text-primary mb-2">For Businesses</h4>
                      <p className="text-muted-foreground mb-4">
                        Transform your organizational culture through comprehensive assessment and alignment
                      </p>
                      <Button
                        onClick={() => {
                          setShowGetStarted(false)
                          setShowHowItWorks(true)
                        }}
                        className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl"
                      >
                        Learn How It Works
                      </Button>
                    </div>
                    <div className="bg-white rounded-2xl p-6 card-shadow">
                      <GraduationCap className="h-12 w-12 text-accent-coral mx-auto mb-4" />
                      <h4 className="text-xl font-bold text-primary mb-2">For Individuals</h4>
                      <p className="text-muted-foreground mb-4">
                        Build your value profile and connect with purpose-driven opportunities
                      </p>
                      <Button
                        onClick={() => {
                          setShowGetStarted(false)
                          setShowHowItWorks(true)
                        }}
                        className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl"
                      >
                        Explore Your Path
                      </Button>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-8 card-shadow max-w-md mx-auto">
                    <h4 className="text-xl font-bold text-primary mb-4">Get Early Access</h4>
                    <div className="space-y-4">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      />
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-xl font-semibold">
                        Notify Me When Ready
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">Join 100+ teams already on the waitlist</p>
                  </div>
                </div>

                <div className="mt-8 flex justify-center">
                  <Button
                    onClick={() => setShowGetStarted(false)}
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-2xl"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
