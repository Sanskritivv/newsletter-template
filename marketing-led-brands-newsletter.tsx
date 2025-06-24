import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  Users,
  Calendar,
  Clock,
  TrendingUp,
  Share2,
  Mail,
  Video,
  Target,
  Lightbulb,
  Award,
  BarChart,
  Instagram,
  Smartphone,
  Eye,
  Play,
  Zap,
  CheckCircle,
  Star,
  Megaphone,
  Camera,
  MousePointer,
  PieChart,
} from "lucide-react"

export default function MarketingLedBrandsNewsletter() {
  return (
    <div className="max-w-4xl mx-auto bg-white">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-3 text-center">
        <p className="text-sm font-medium">🚀 Marketing Tactics That Drive Brand Success – Weekly Edition</p>
      </div>

      {/* Header with Gradient */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

        <div className="relative p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                <Megaphone className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Marketing Led Brands</h1>
                <p className="text-purple-100 text-lg">Cutting-Edge Strategies from Successful Brands</p>
              </div>
            </div>
            <div className="text-right">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-sm px-4 py-2 mb-2">
                Issue #42 • June 15, 2025
              </Badge>
              <p className="text-purple-100 text-sm">Weekly Edition</p>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold">10K+</div>
              <div className="text-purple-100 text-sm">College Marketers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">Weekly</div>
              <div className="text-purple-100 text-sm">Brand Insights</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-purple-100 text-sm">Actionable</div>
            </div>
          </div>
        </div>
      </div>

      {/* Greeting Section */}
      <div className="p-8 bg-gradient-to-r from-purple-50 to-pink-50 border-b-2 border-purple-100">
        <div className="flex items-start gap-4">
          <div className="bg-purple-500 p-3 rounded-full">
            <Mail className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Hello [First Name] 👋</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Welcome to this week's edition of Marketing Led Brands—where 10,000+ college marketers learn cutting-edge
              strategies from the world's most successful brands.
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-12">
        {/* This Week's Featured Topic */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-pink-100 p-2 rounded-lg">
              <Target className="h-6 w-6 text-pink-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">This Week's Featured Topic</h3>
              <p className="text-gray-600">How Nike Dominates Gen Z Marketing</p>
            </div>
          </div>

          <Card className="border-2 border-pink-200 hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-pink-50 to-purple-50">
              <CardTitle className="text-2xl text-pink-800 flex items-center gap-3">
                <Zap className="h-7 w-7" />
                How Nike Dominates Gen Z Marketing
              </CardTitle>
              <p className="text-pink-600 font-medium">
                Authentic storytelling and campus ambassadors drive 43% engagement increase
              </p>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div>
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Eye className="h-5 w-5 text-pink-600" />
                  Background:
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Nike's campus campaigns leverage authentic storytelling—partnering directly with student athletes and
                  micro-influencers to build cultural credibility. Rather than broad celebrity endorsements, they focus
                  on relatable campus ambassadors who understand Gen Z sentiment.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-pink-600" />
                  Key Strategy:
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Influencer collaborations with student athletes drove a{" "}
                  <span className="font-bold text-pink-600">43% increase in campus engagement</span>. By tapping social
                  media authenticity—TikTok challenges, Instagram Live workouts, and peer-led giveaways—Nike turns every
                  college into its own marketing hub.
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-green-800 mb-1">Takeaway</h5>
                    <p className="text-green-700 text-sm">
                      Identify on-campus "micro-celebrities" who resonate with your target demographic. A single
                      relatable post from a peer influencer can outperform a generic ad campaign in both reach and
                      trust.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Bite-Size Insight Blocks */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-100 p-2 rounded-lg">
              <BarChart className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Bite-Size Insight Blocks</h3>
              <p className="text-gray-600">Essential tactics across key marketing areas</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-purple-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Target className="h-5 w-5 text-purple-600" />
                  Brand Strategy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">Positioning</p>
                      <p className="text-xs text-gray-600">
                        Craft a student-centric value proposition ("Gear built by students for students"). Emphasize
                        shared identity over generic "athlete" messaging.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">Campus Events</p>
                      <p className="text-xs text-gray-600">
                        Host pop-up events (e.g., weekend 3-on-3 tournaments) co-branded with local college clubs—boosts
                        word-of-mouth and organic reach.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-pink-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Instagram className="h-5 w-5 text-pink-600" />
                  Social Media
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">TikTok Challenges</p>
                      <p className="text-xs text-gray-600">
                        Launch a "Campus Sneaker Style" challenge—encourage students to post OOTD videos tagging the
                        brand. Use a branded hashtag to track reach.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">Instagram Reels</p>
                      <p className="text-xs text-gray-600">
                        Behind-the-scenes "design your own sneaker" reels featuring student designers or fashion club
                        members adds authenticity.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <PieChart className="h-5 w-5 text-blue-600" />
                  Analytics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">Engagement Tracking</p>
                      <p className="text-xs text-gray-600">
                        Use UTM parameters on every campus-specific link. Compare click-through rates from
                        micro-influencer posts vs. paid ads to allocate budget more effectively.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">Sentiment Analysis</p>
                      <p className="text-xs text-gray-600">
                        Monitor comments on student influencer posts; identify common pain points (e.g., sizing, color
                        preferences) to feed back into product iterations.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-orange-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="h-5 w-5 text-orange-600" />
                  Influencer Marketing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">Micro- vs. Macro</p>
                      <p className="text-xs text-gray-600">
                        Focus on 10–15 micro-influencers (2K–10K followers) per campus rather than a single
                        macro-influencer. This diversifies reach and builds peer trust.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">Performance Bonus</p>
                      <p className="text-xs text-gray-600">
                        Offer performance-based incentives (e.g., a "most applications driven" bonus) to keep campus
                        ambassadors engaged long-term.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Community Pulse */}
        <section className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Community Pulse</h3>
              <p className="text-gray-600">+7K Active Subscribers</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-purple-600 mb-2">7,000+</div>
                  <p className="text-gray-600 font-medium">College Marketers</p>
                  <p className="text-sm text-gray-500">Applying these tactics in real time</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Avatar key={i} className="h-8 w-8 border-2 border-white">
                        <AvatarFallback className="bg-purple-500 text-white text-xs">U{i}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <span className="ml-3 text-sm text-gray-600">Sharing wins & feedback</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Top Campus Highlight</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      <strong>University of Delhi's Apparel Club</strong> achieved a{" "}
                      <span className="font-bold text-green-600">25% increase in sign-ups</span> for their spring pop-up
                      by co-hosting with a micro-influencer meet-and-greet.
                    </p>
                    <Badge className="bg-green-100 text-green-800 text-xs">Success Story</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quick Tips */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-yellow-100 p-2 rounded-lg">
              <Lightbulb className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Quick Tips</h3>
              <p className="text-gray-600">Essential practices for campus marketing success</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: Camera,
                title: "Embed UGC Early",
                tip: "Encourage students to post user-generated content (UGC) with a branded challenge—UGC often outperforms produced ads in authenticity.",
                color: "blue",
              },
              {
                icon: Mail,
                title: "Leverage Campus Newsletters",
                tip: "Partner with college e-newsletters or student unions to feature your campaign details—higher open rates than general email blasts.",
                color: "green",
              },
              {
                icon: Smartphone,
                title: "Optimize for Mobile",
                tip: "Ensure all campaign URLs open to mobile-friendly landing pages; >60% of engagement from campus happens on smartphones.",
                color: "purple",
              },
              {
                icon: MousePointer,
                title: "Track Micro-conversions",
                tip: "Count every form fill, RSVP, and hashtag use as a conversion signal—helps refine which tactics truly move the needle.",
                color: "orange",
              },
              {
                icon: TrendingUp,
                title: "Repurpose Top Content",
                tip: "If a micro-influencer post yields high engagement, turn it into an Instagram Story ad with a small spend to amplify reach.",
                color: "pink",
              },
            ].map((tip, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className={`bg-${tip.color}-100 p-2 rounded-lg`}>
                      <tip.icon className={`h-5 w-5 text-${tip.color}-600`} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{tip.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{tip.tip}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Subscriber Success Story */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-teal-100 p-2 rounded-lg">
              <Star className="h-6 w-6 text-teal-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Subscriber Success Story</h3>
              <p className="text-gray-600">Campus Campaign Spotlight</p>
            </div>
          </div>

          <Card className="border-2 border-teal-200 hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-teal-50 to-cyan-50">
              <CardTitle className="text-xl text-teal-800 flex items-center gap-3">
                <Award className="h-6 w-6" />
                IIM Ahmedabad's "Upcycled Fashion Week"
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder.svg?height=48&width=48&text=NV" />
                      <AvatarFallback className="bg-teal-500 text-white">NV</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold">Nisha Verma</h4>
                      <p className="text-sm text-gray-600">Head of Social Media, Fashion Club</p>
                    </div>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-orange-800 mb-1">Challenge</h5>
                    <p className="text-sm text-gray-600">Promote sustainable fashion using on-campus resources only.</p>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold mb-3 flex items-center gap-2">
                    <Target className="h-4 w-4 text-teal-600" />
                    Tactics Used:
                  </h5>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span className="text-sm text-gray-600">
                        Partnered with 5 micro-influencer fashion bloggers on Instagram
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span className="text-sm text-gray-600">Each posted a 30-second DIY upcycled tutorial</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Results
                  </h5>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Views per post</span>
                      <span className="font-bold text-green-600">2K+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Event RSVPs</span>
                      <span className="font-bold text-green-600">350</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Eco-club growth</span>
                      <span className="font-bold text-green-600">+15%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Upcoming Webinars & Events */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-indigo-100 p-2 rounded-lg">
              <Video className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Upcoming Webinars & Events</h3>
              <p className="text-gray-600">Don't miss these exclusive sessions</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-indigo-200 hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-indigo-800">Data-Driven Brand Strategy</CardTitle>
                  <Badge className="bg-indigo-100 text-indigo-800">Webinar</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48&text=AK" />
                    <AvatarFallback className="bg-indigo-500 text-white">AK</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold">Ankit Kumar</h4>
                    <p className="text-sm text-gray-600">CMO, CampusPulse</p>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>June 28, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>7:00 PM IST</span>
                  </div>
                </div>

                <div className="bg-indigo-50 p-3 rounded-lg mb-4">
                  <p className="text-sm text-gray-700">
                    Learn how to set up real-time dashboards for campus campaign KPIs—track UTM tags, CTRs, and student
                    sentiment without a data science team.
                  </p>
                </div>

                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">RSVP "RSVP DATA"</Button>
                <p className="text-xs text-center text-gray-500 mt-2">Reply by June 26</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-purple-800">Building Micro-Influencer Networks</CardTitle>
                  <Badge className="bg-purple-100 text-purple-800">Live Workshop</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48&text=RS" />
                    <AvatarFallback className="bg-purple-500 text-white">RS</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold">Riya Singh</h4>
                    <p className="text-sm text-gray-600">Founder, BrandUp Labs</p>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>July 4, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>6:00 PM IST</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Play className="h-4 w-4" />
                    <span>45-min presentation + 30-min Q&A</span>
                  </div>
                </div>

                <div className="bg-purple-50 p-3 rounded-lg mb-4">
                  <p className="text-sm text-gray-700">
                    Learn outreach scripts, incentive structures, and ROI tracking for building effective
                    micro-influencer networks on campus.
                  </p>
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700">RSVP "RSVP MICRO"</Button>
                <p className="text-xs text-center text-gray-500 mt-2">Reply by July 2</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action & Share */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-2xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Spread the Marketing Knowledge! 🚀</h3>
            <p className="text-lg text-purple-100 mb-6">
              Know a friend in campus marketing? Forward this email so they can subscribe free—no spam, unsubscribe
              anytime.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Share2 className="h-8 w-8 mx-auto mb-3 text-white" />
                  <h4 className="font-bold mb-2">Share with Friends</h4>
                  <p className="text-sm text-purple-100 mb-4">Help other marketers access cutting-edge strategies</p>
                  <Button variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                    Forward Email
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 mx-auto mb-3 text-white" />
                  <h4 className="font-bold mb-2">Not on our list yet?</h4>
                  <p className="text-sm text-purple-100 mb-4">Join 10,000+ college marketers</p>
                  <Button variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                    Reply "SUBSCRIBE"
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-600 p-2 rounded-lg">
                  <Megaphone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Marketing Led Brands</h4>
                  <p className="text-gray-400">Weekly insights</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Empowering 10,000+ college marketers with cutting-edge strategies from the world's most successful
                brands.
              </p>
            </div>

            <div>
              <h5 className="font-bold mb-4">Quick Links</h5>
              <div className="space-y-2 text-gray-300">
                <div>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    Archive
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    Brand Case Studies
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    Campus Marketing
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    Community
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-bold mb-4">Connect</h5>
              <div className="space-y-2 text-gray-300">
                <div>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    Instagram
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    Twitter
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    LinkedIn
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Separator className="bg-gray-700 mb-6" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>10,000+ subscribers</span>
              <span>•</span>
              <span>Weekly delivery</span>
              <span>•</span>
              <span>No spam guarantee</span>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                Terms of Service
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                Contact Us
              </Button>
            </div>
          </div>

          <div className="text-center mt-6 pt-6 border-t border-gray-700">
            <p className="text-gray-400 text-sm">© 2025 Marketing Led Brands. All rights reserved.</p>
            <p className="text-gray-500 text-xs mt-2">
              You're receiving this because you signed up at marketingledbrands.com
            </p>
            <p className="text-gray-500 text-xs mt-1">To unsubscribe, reply "UNSUBSCRIBE."</p>
          </div>
        </div>
      </div>
    </div>
  )
}
