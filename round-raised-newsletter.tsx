import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import {
  TrendingUp,
  Users,
  Calendar,
  Trophy,
  DollarSign,
  CheckCircle,
  Star,
  Mail,
  Share2,
  Target,
  Lightbulb,
  Building2,
  PieChart,
  Clock,
  Award,
  Briefcase,
  BarChart3,
  MapPin,
  Eye,
  MessageCircle,
  ExternalLink,
  Rocket,
  Globe,
} from "lucide-react"

export default function RoundRaisedNewsletter() {
  return (
    <div className="max-w-4xl mx-auto bg-white">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 text-white p-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-white/10 rounded-full -translate-y-16"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-white/10 rounded-full translate-y-12"></div>
        <div className="relative">
          <p className="text-sm font-semibold tracking-wide">
            🚀 Track Funding Rounds & Pitch Strategies—Weekly Insights for Founders
          </p>
        </div>
      </div>

      {/* Header & Intro */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-green-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-500/20 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full translate-y-40 -translate-x-40"></div>
        </div>

        <div className="relative p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-green-500 to-blue-600 p-4 rounded-2xl shadow-lg">
                <TrendingUp className="h-10 w-10" />
              </div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                  Round Raised
                </h1>
                <p className="text-green-200 text-lg font-medium">Issue #47</p>
              </div>
            </div>
            <div className="text-right">
              <Badge
                variant="secondary"
                className="bg-white/20 backdrop-blur-sm text-white border-white/30 text-sm px-4 py-2 mb-2"
              >
                <Calendar className="h-4 w-4 mr-2" />
                June 15, 2025
              </Badge>
              <p className="text-green-200 text-sm">Weekly Edition</p>
            </div>
          </div>

          {/* Greeting */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-green-500 to-blue-600 p-3 rounded-xl">
                <Mail className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
                  Hello [First Name]
                  <span className="text-2xl">👋</span>
                </h2>
                <p className="text-green-100 leading-relaxed">
                  Welcome to this week's Round Raised—your essential digest of startup funding rounds, investor
                  insights, and pitch opportunities, delivered free every Friday to 3,500+ founders. No spam,
                  unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-12">
        {/* Featured Deep Dive */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-gradient-to-br from-orange-100 to-red-100 p-3 rounded-xl">
              <Trophy className="h-7 w-7 text-orange-600" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">Featured Deep Dive</h3>
              <p className="text-gray-600 text-lg">≈150 words • 7 min read</p>
            </div>
          </div>

          <Card className="border-2 border-orange-200 hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-orange-50 via-red-50 to-pink-50 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200/30 rounded-full -translate-y-16 translate-x-16"></div>
              <CardTitle className="text-3xl text-orange-800 flex items-center gap-3 relative">
                <Award className="h-8 w-8" />
                Shark Tank Success Stories & Strategies
              </CardTitle>
              <p className="text-orange-600 font-semibold text-lg">
                Learn from entrepreneurs who secured deals and apply their tactics
              </p>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-2xl border-l-4 border-blue-500">
                <div className="flex items-start gap-4">
                  <Eye className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-blue-800 mb-2 text-lg">Why It Matters</h5>
                    <p className="text-blue-700 leading-relaxed">
                      Entrepreneurs who secure deals on Shark Tank often share core tactics—clear valuation asks,
                      concise traction metrics, and storytelling that resonates with investors. Analyzing past winners
                      reveals repeatable patterns you can apply to your own pitch deck.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-xl mb-6 flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  Key Takeaways:
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Anchor Your Ask</h5>
                      <p className="text-gray-700 leading-relaxed">
                        Lead with a specific number (e.g., "We're seeking $200K for 10% equity") to frame negotiations.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Show Real Traction</h5>
                      <p className="text-gray-700 leading-relaxed">
                        Highlight month-over-month revenue growth or user retention—Sharks respond to concrete proof
                        over projections.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl">
                    <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Tell a Relatable Story</h5>
                      <p className="text-gray-700 leading-relaxed">
                        Narrate why you started this venture—personal anecdotes build empathy and trust.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-2xl border-2 border-orange-300">
                <h4 className="font-bold mb-3 flex items-center gap-3 text-lg">
                  <Target className="h-5 w-5 text-orange-700" />
                  Action Step:
                </h4>
                <p className="text-orange-700 leading-relaxed">
                  Before your next pitch, write down your "why" in one sentence, list three traction metrics, and
                  rehearse your valuation ask in under 45 seconds.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Funding Round Highlights */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-3 rounded-xl">
              <DollarSign className="h-7 w-7 text-green-600" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">Funding Round Highlights</h3>
              <p className="text-gray-600 text-lg">Recent Deals to Know</p>
            </div>
          </div>

          <div className="grid gap-4">
            {[
              {
                company: "EduGrowth",
                sector: "EdTech",
                amount: "$3M Series A",
                investor: "VentureVault",
                description: "planning to expand into three new college markets",
                color: "blue",
              },
              {
                company: "GreenPlate",
                sector: "Sustainable Food",
                amount: "$1M Seed",
                investor: "Angel Syndicate India",
                description: "will launch pilot in Delhi NCR",
                color: "green",
              },
              {
                company: "SyncHealth",
                sector: "Telemedicine",
                amount: "$2.5M Seed",
                investor: "HealthBridge Capital",
                description: "focus on AI-driven diagnostics",
                color: "purple",
              },
              {
                company: "ByteFit",
                sector: "Fitness App",
                amount: "$750K Pre-seed",
                investor: "TechSpark Ventures",
                description: "aiming for rapid user acquisition in Tier 2 cities",
                color: "orange",
              },
              {
                company: "AquaSense",
                sector: "AgriTech",
                amount: "$1.2M Seed",
                investor: "AgriCore Investors",
                description: "developing IoT sensors for smallholder farms",
                color: "emerald",
              },
            ].map((deal, index) => (
              <Card
                key={index}
                className={`hover:shadow-lg transition-all duration-300 border-l-4 border-${deal.color}-500`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-bold text-lg">{deal.company}</h4>
                        <Badge
                          variant="outline"
                          className={`bg-${deal.color}-50 text-${deal.color}-700 border-${deal.color}-200`}
                        >
                          {deal.sector}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`font-bold text-${deal.color}-600 text-lg`}>{deal.amount}</span>
                        <span className="text-gray-500">led by</span>
                        <span className="font-semibold text-gray-700">{deal.investor}</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{deal.description}</p>
                    </div>
                    <div className={`bg-${deal.color}-100 p-2 rounded-lg ml-4`}>
                      <Building2 className={`h-5 w-5 text-${deal.color}-600`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Investor Spotlight */}
        <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8 rounded-3xl border-2 border-indigo-200">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-3 rounded-xl">
              <Users className="h-7 w-7 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">Investor Spotlight</h3>
              <p className="text-gray-600 text-lg">≈100 words</p>
            </div>
          </div>

          <Card className="bg-white border-2 border-indigo-200 shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-start gap-6 mb-6">
                <Avatar className="h-20 w-20 shadow-lg">
                  <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white font-bold text-xl">
                    PS
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Meet Priya Sharma</h4>
                  <p className="text-indigo-600 font-semibold mb-3">Angel Investor & Mentor</p>
                  <p className="text-gray-700 leading-relaxed">
                    Priya co-founded Nexus Capital in 2018 and has since invested in over 30 early-stage startups across
                    fintech and consumer tech.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h5 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Eye className="h-5 w-5 text-indigo-600" />
                    What She Looks For:
                  </h5>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-4 bg-indigo-50 rounded-xl">
                      <CheckCircle className="h-5 w-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h6 className="font-semibold mb-1">Founders with Domain Expertise</h6>
                        <p className="text-gray-700 text-sm">
                          "I back teams whose founders have lived the problem they're solving."
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-xl">
                      <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h6 className="font-semibold mb-1">Scalable Models</h6>
                        <p className="text-gray-700 text-sm">
                          Prioritizes startups with clear unit economics and a path to profitability within 18 months.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-xl border-2 border-indigo-300">
                  <h5 className="font-bold mb-3 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-indigo-700" />
                    Founder Tip from Priya:
                  </h5>
                  <p className="text-indigo-700 leading-relaxed italic">
                    "Always articulate your customer acquisition cost (CAC) vs. customer lifetime value (LTV) in one
                    slide—investors zero in on those ratios in the first five minutes."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Quick Stats */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-3 rounded-xl">
              <BarChart3 className="h-7 w-7 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">Quick Stats</h3>
              <p className="text-gray-600 text-lg">≈60 words • This week's funding overview</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200">
              <CardContent className="p-6 text-center">
                <DollarSign className="h-12 w-12 text-emerald-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-emerald-700 mb-1">$8.45M</div>
                <p className="text-emerald-600 font-medium">Total Weekly Funding</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
              <CardContent className="p-6 text-center">
                <Building2 className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-blue-700 mb-1">12</div>
                <p className="text-blue-600 font-medium">New Funding Rounds</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200">
              <CardContent className="p-6 text-center">
                <Trophy className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-purple-700 mb-1">EdTech</div>
                <p className="text-purple-600 font-medium">Top Sector ($3M)</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200">
              <CardContent className="p-6 text-center">
                <PieChart className="h-12 w-12 text-orange-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-orange-700 mb-1">$704K</div>
                <p className="text-orange-600 font-medium">Average Deal Size</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-200 md:col-span-2">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="h-6 w-6 text-teal-600" />
                  <h4 className="font-bold text-lg">Geographic Focus</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Mumbai/NCR</span>
                    <div className="flex items-center gap-2">
                      <Progress value={40} className="w-24" />
                      <span className="font-semibold text-teal-600">40%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Bengaluru</span>
                    <div className="flex items-center gap-2">
                      <Progress value={30} className="w-24" />
                      <span className="font-semibold text-teal-600">30%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Tier 2 Cities</span>
                    <div className="flex items-center gap-2">
                      <Progress value={30} className="w-24" />
                      <span className="font-semibold text-teal-600">30%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Upcoming Pitch Opportunities */}
        <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-8 rounded-3xl border-2 border-amber-200">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-3 rounded-xl">
              <Calendar className="h-7 w-7 text-amber-600" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">Upcoming Pitch Opportunities</h3>
              <p className="text-gray-600 text-lg">≤5 items • Don't miss these deadlines</p>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-white border-2 border-amber-300 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-amber-800 mb-2">FounderFest Virtual Pitch</h4>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-amber-600" />
                        <span className="text-sm font-medium">July 10, 2025</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-red-600" />
                        <span className="text-sm font-medium text-red-600">Deadline: June 25</span>
                      </div>
                    </div>
                    <Badge className="bg-amber-100 text-amber-800 mb-3">Pre-seed fintech and SaaS startups</Badge>
                    <p className="text-gray-700 leading-relaxed">
                      Winners connect with a pool of 50+ angel investors—prize pool worth $100K in convertible notes.
                    </p>
                  </div>
                  <div className="bg-amber-100 p-3 rounded-lg ml-4">
                    <Rocket className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-green-300 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-green-800 mb-2">AngelCore Pitch Day (Bengaluru)</h4>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium">July 15, 2025</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-red-600" />
                        <span className="text-sm font-medium text-red-600">Applications close: July 1</span>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800 mb-3">Agritech and CleanTech</Badge>
                    <p className="text-gray-700 leading-relaxed">
                      Up to $500K in angel commitments—plus 3 months of free co-working at FounderHub.
                    </p>
                  </div>
                  <div className="bg-green-100 p-3 rounded-lg ml-4">
                    <Globe className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-blue-300 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-blue-800 mb-2">SeedSpark Demo Day (Delhi)</h4>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-blue-600" />
                        <span className="text-sm font-medium">July 20, 2025</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-red-600" />
                        <span className="text-sm font-medium text-red-600">Apply by: July 5</span>
                      </div>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800 mb-3">Consumer Health & Wellness</Badge>
                    <p className="text-gray-700 leading-relaxed">
                      Attendance by 10+ VC firms, on-spot term sheet opportunities.
                    </p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-lg ml-4">
                    <Briefcase className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Founder Tips */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-gradient-to-br from-purple-100 to-indigo-100 p-3 rounded-xl">
              <Lightbulb className="h-7 w-7 text-purple-600" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">Founder Tips</h3>
              <p className="text-gray-600 text-lg">≤5 bullets • Essential fundraising advice</p>
            </div>
          </div>

          <div className="grid gap-4">
            {[
              {
                title: "Keep Your Cap Table Simple",
                tip: "Early investors dislike complex equity structures—avoid excessive SAFEs or convertible notes without clear terms.",
                icon: PieChart,
                color: "blue",
              },
              {
                title: "Showcase Milestones, Not Just Projections",
                tip: "Display actual user growth or revenue achieved—speculative forecasts are less convincing than demonstrable results.",
                icon: TrendingUp,
                color: "green",
              },
              {
                title: "Build Investor Relationships Early",
                tip: "Network at local meetups or online forums; investors often back founders they know and trust.",
                icon: Users,
                color: "purple",
              },
              {
                title: "Leverage One-Page Teasers",
                tip: "A concise one-pager with problem, solution, market size, team, and ask can open doors faster than a 20-slide deck.",
                icon: ExternalLink,
                color: "orange",
              },
              {
                title: "Prepare for Due Diligence",
                tip: "Keep financials and cap table up to date—any discrepancy slows down closing.",
                icon: CheckCircle,
                color: "emerald",
              },
            ].map((tip, index) => (
              <Card
                key={index}
                className={`hover:shadow-lg transition-all duration-300 border-l-4 border-${tip.color}-500`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`bg-${tip.color}-100 p-3 rounded-xl flex-shrink-0`}>
                      <tip.icon className={`h-6 w-6 text-${tip.color}-600`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold mb-2 text-lg text-gray-900">{tip.title}</h4>
                      <p className="text-gray-700 leading-relaxed">{tip.tip}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Community Corner */}
        <section className="bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 p-8 rounded-3xl border-2 border-rose-200">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-gradient-to-br from-rose-100 to-pink-100 p-3 rounded-xl">
              <MessageCircle className="h-7 w-7 text-rose-600" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">Community Corner</h3>
              <p className="text-gray-600 text-lg">≈80 words • Founder spotlight and community poll</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-white border-2 border-rose-200 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-rose-50 to-pink-50">
                <CardTitle className="flex items-center gap-3">
                  <Star className="h-6 w-6 text-rose-600" />
                  Founder Spotlight
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="h-12 w-12 shadow-lg">
                    <AvatarFallback className="bg-gradient-to-br from-rose-500 to-pink-500 text-white font-bold">
                      AV
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg">Arjun Verma</h4>
                    <p className="text-rose-600 font-medium">Co-founder, EcoShelf</p>
                    <div className="flex items-center gap-2 mt-1">
                      <DollarSign className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-semibold text-green-600">Raised: $500K pre-seed</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-rose-50 p-4 rounded-xl">
                    <h5 className="font-semibold mb-2">Approach:</h5>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Arjun used a simple Google Form to validate demand among 200 households before pitching—investors
                      appreciated the lean testing.
                    </p>
                  </div>

                  <div className="bg-pink-50 p-4 rounded-xl">
                    <h5 className="font-semibold mb-2">Lesson Learned:</h5>
                    <p className="text-gray-700 text-sm leading-relaxed italic">
                      "Don't skip validating your MVP with real customers. We pivoted three times in six months, which
                      built credibility."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-purple-200 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50">
                <CardTitle className="flex items-center gap-3">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                  Community Poll
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4 text-lg">Which fundraising stage are you targeting next?</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="font-medium">Pre-seed</span>
                    <div className="flex items-center gap-2">
                      <Progress value={35} className="w-20" />
                      <span className="text-sm font-semibold text-purple-600">35%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="font-medium">Seed</span>
                    <div className="flex items-center gap-2">
                      <Progress value={40} className="w-20" />
                      <span className="text-sm font-semibold text-blue-600">40%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="font-medium">Series A</span>
                    <div className="flex items-center gap-2">
                      <Progress value={20} className="w-20" />
                      <span className="text-sm font-semibold text-green-600">20%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <span className="font-medium">Series B+</span>
                    <div className="flex items-center gap-2">
                      <Progress value={5} className="w-20" />
                      <span className="text-sm font-semibold text-orange-600">5%</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4 text-center">Reply with your choice—results in next issue!</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action & Share */}
        <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white p-8 rounded-3xl relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 -translate-x-32"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 translate-x-24"></div>
          </div>

          <div className="relative text-center">
            <h3 className="text-3xl font-bold mb-4">Join & Subscribe</h3>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Know a fellow founder? Forward this issue so they can subscribe free—no spam, unsubscribe anytime. Not on
              our list yet? Reply "SUBSCRIBE" or email subscribe@roundraised.com to join 3,500+ entrepreneurs.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-white/15 backdrop-blur-sm border-white/30 border-2">
                <CardContent className="p-8 text-center">
                  <Mail className="h-12 w-12 mx-auto mb-4 text-white" />
                  <h4 className="font-bold text-xl mb-3">Subscribe Free</h4>
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    Reply "SUBSCRIBE" or email subscribe@roundraised.com
                  </p>
                  <Button
                    variant="secondary"
                    className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6 py-3"
                  >
                    Subscribe Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/15 backdrop-blur-sm border-white/30 border-2">
                <CardContent className="p-8 text-center">
                  <Share2 className="h-12 w-12 mx-auto mb-4 text-white" />
                  <h4 className="font-bold text-xl mb-3">Share with Founders</h4>
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    Forward this email to fellow entrepreneurs in your network
                  </p>
                  <Button
                    variant="secondary"
                    className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6 py-3"
                  >
                    Forward Email
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <p className="text-blue-100">No spam, ever. Unsubscribe anytime.</p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer & Unsubscribe */}
      <div className="bg-gray-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-green-600 to-blue-600 p-3 rounded-xl">
                  <TrendingUp className="h-7 w-7" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold">Round Raised</h4>
                  <p className="text-gray-400">Weekly funding insights</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Essential digest of startup funding rounds, investor insights, and pitch opportunities for 3,500+
                founders.
              </p>
            </div>

            <div>
              <h5 className="font-bold mb-4 text-lg">Quick Links</h5>
              <div className="space-y-3 text-gray-300">
                <div>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Privacy Policy
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Terms of Service
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Contact Us
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Archive
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-bold mb-4 text-lg">Connect</h5>
              <div className="space-y-3 text-gray-300">
                <div>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    LinkedIn
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Twitter
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Founder Community
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Investor Network
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Separator className="bg-gray-700 mb-8" />

          <div className="text-center space-y-4">
            <p className="text-gray-400">© 2025 Round Raised. All rights reserved.</p>
            <p className="text-gray-500 text-sm">You're receiving this because you subscribed at roundraised.com.</p>
            <p className="text-gray-500 text-sm">To unsubscribe, reply "UNSUBSCRIBE."</p>
          </div>
        </div>
      </div>
    </div>
  )
}
