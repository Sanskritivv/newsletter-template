import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  Users,
  Calendar,
  Clock,
  CheckCircle,
  Target,
  TrendingUp,
  Share2,
  Mail,
  Video,
  Gift,
  Lightbulb,
  Rocket,
  Building,
  Star,
  Quote,
  Eye,
  Zap,
  Award,
  BarChart,
  MapPin,
  Users2,
  Briefcase,
} from "lucide-react"

export default function KickstartDiaryNewsletter() {
  return (
    <div className="max-w-4xl mx-auto bg-white">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 text-center">
        <p className="text-sm font-medium">🚀 Uncover Startup Secrets Weekly – Exclusive Case Studies & Insights</p>
      </div>

      {/* Header with Gradient */}
      <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

        <div className="relative p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                <Rocket className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Kickstart Diary</h1>
                <p className="text-purple-100 text-lg">Insider Access to Startup Success Stories</p>
              </div>
            </div>
            <div className="text-right">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-sm px-4 py-2 mb-2">
                Issue #47 • June 15, 2025
              </Badge>
              <p className="text-purple-100 text-sm">Weekly Delivery</p>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold">8K+</div>
              <div className="text-purple-100 text-sm">Founders & Entrepreneurs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">Weekly</div>
              <div className="text-purple-100 text-sm">Case Studies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-purple-100 text-sm">Actionable</div>
            </div>
          </div>
        </div>
      </div>

      {/* Greeting Section */}
      <div className="p-8 bg-gradient-to-r from-purple-50 to-blue-50 border-b-2 border-purple-100">
        <div className="flex items-start gap-4">
          <div className="bg-purple-500 p-3 rounded-full">
            <Mail className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Hello [First Name] 👋</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Welcome to this week's edition of Kickstart Diary—your insider access to the real strategies, pivotal
              decisions, and growth hacks that turned fledgling startups into industry leaders. Let's dive into the
              untold stories behind billion-dollar companies.
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-12">
        {/* Featured Case Study */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Building className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Featured Case Study</h3>
              <p className="text-gray-600">From air mattresses to $113 billion empire</p>
            </div>
          </div>

          <Card className="border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardTitle className="text-2xl text-blue-800 flex items-center gap-3">
                <Building className="h-7 w-7" />
                Airbnb's Path to Disruption: The Untold Story
              </CardTitle>
              <p className="text-blue-600 font-medium">
                How three founders turned an air mattress rental into a $113 billion hospitality giant
              </p>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Background & Early Challenges:</strong> In 2007, Brian Chesky, Joe Gebbia, and Nathan
                  Blecharczyk needed rent money. They launched "AirBed & Breakfast" by renting air mattresses during a
                  local conference—validating demand in a stagnant hospitality market.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Target className="h-5 w-5 text-blue-600" />
                  Key Milestones:
                </h4>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Critical Pivot</h5>
                      <p className="text-gray-600 text-sm">
                        Facing low sign-ups, they redesigned the site with professional photography and streamlined the
                        host onboarding process—boosting listings by 300% in three months.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Growth Strategy</h5>
                      <p className="text-gray-600 text-sm">
                        Targeted city-specific events (e.g., the 2008 Democratic National Convention) to hit market
                        timing exactly, capturing demand while hotels sold out.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Key Insight</h5>
                      <p className="text-gray-600 text-sm">
                        Iterate quickly on user feedback. Early operations were manual: the founders themselves took
                        photos, improved copy, and even hosted the first guests to build trust.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-green-800 mb-1">The Takeaway</h5>
                    <p className="text-green-700 text-sm">
                      Manual, hands-on execution often precedes VC interest. The founders' willingness to do unscalable
                      things early on built the foundation for massive scale later.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Quick Highlights */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-yellow-100 p-2 rounded-lg">
              <Zap className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Quick Highlights</h3>
              <p className="text-gray-600">Essential insights from the case study</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-orange-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="h-5 w-5 text-orange-600" />
                  Founder Resilience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Chesky slept on founders' couches and personally recruited hosts—showing that scrappy, hands-on
                  execution often precedes VC interest.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  Market Timing Excellence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Launching in San Francisco during a major tech conference led to a 50% week-over-week sign-up surge.
                  Identify one "event window" to concentrate early marketing efforts.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-green-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Target className="h-5 w-5 text-green-600" />
                  Hyper-Focused MVP
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 leading-relaxed">
                  The first MVP had only three pages and no payment gateway—proof that showing value (a bed to sleep on)
                  is better than building full features upfront.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Founder Quote */}
        <section className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-indigo-100 p-2 rounded-lg">
              <Quote className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Founder Quote & Anecdote</h3>
          </div>

          <Card className="bg-white border-2 border-indigo-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/placeholder.svg?height=64&width=64&text=BC" />
                  <AvatarFallback className="bg-indigo-500 text-white text-lg">BC</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <blockquote className="text-xl italic text-gray-800 leading-relaxed mb-4">
                    "When nobody was listing, I literally called hosts to ask for feedback. That three-hour call taught
                    me more than any pitch deck ever could."
                  </blockquote>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-indigo-600">— Brian Chesky</span>
                    <Badge variant="outline" className="text-xs">
                      Co-founder of Airbnb
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    This quote exemplifies the hands-on approach that made Airbnb successful—direct founder involvement
                    in understanding user pain points.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Actionable Takeaways */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-green-100 p-2 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Actionable Takeaways</h3>
              <p className="text-gray-600">Apply these strategies to your startup</p>
            </div>
          </div>

          <Card className="border-2 border-green-200">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <MapPin className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Validate Demand Locally</h4>
                    <p className="text-sm text-gray-600">
                      Instead of broad marketing, test a neighborhood or event-specific subset—gather real-time
                      feedback.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Users2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Leverage Manual Processes First</h4>
                    <p className="text-sm text-gray-600">
                      Personal involvement (in photography, customer calls, or operations) uncovers product-market fit
                      faster than automated dashboards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Star className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Optimize for Trust Early</h4>
                    <p className="text-sm text-gray-600">
                      High-quality visuals and direct host-guest communication overcame initial trust barriers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Zap className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Iterate in Sprints</h4>
                    <p className="text-sm text-gray-600">
                      Release minimal features, learn, then refine. Airbnb's first iteration had no payments—just a
                      proof-of-concept to book a mattress.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Pool Early Momentum</h4>
                    <p className="text-sm text-gray-600">
                      Identify one "in" (e.g., a local event) to concentrate outreach and create referral-driven growth.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Community Spotlight */}
        <section className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-teal-100 p-2 rounded-lg">
              <Award className="h-6 w-6 text-teal-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Community Spotlight</h3>
              <p className="text-gray-600">🎓 Startup Snapshot: CampusClean</p>
            </div>
          </div>

          <Card className="bg-white border-2 border-teal-200">
            <CardHeader className="bg-gradient-to-r from-teal-50 to-cyan-50">
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="h-5 w-5 text-teal-600" />
                <Badge className="bg-teal-100 text-teal-800">Student Startup</Badge>
              </div>
              <CardTitle className="text-xl text-teal-800">CampusClean</CardTitle>
              <p className="text-teal-600">Founder: Ananya Sharma (IIT Bombay)</p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-blue-800 mb-1">Idea</h5>
                    <p className="text-sm text-gray-600">Low-cost laundry subscription for student hostels</p>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-orange-800 mb-1">Pivot</h5>
                    <p className="text-sm text-gray-600">
                      Added locker drop-off system at hostel entrances due to security restrictions
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-green-800 mb-1">Result</h5>
                    <p className="text-sm text-gray-600">200 subscribers in 4 weeks via hostel council partnerships</p>
                  </div>
                </div>

                <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                  <div className="flex items-start gap-3">
                    <Eye className="h-5 w-5 text-teal-600 mt-0.5" />
                    <div>
                      <h5 className="font-semibold text-teal-800 mb-1">Why It Matters</h5>
                      <p className="text-teal-700 text-sm">
                        CampusClean's locker system solved a logistical deadlock. When founders talk with end users
                        on-site, they spot roadblocks no survey can capture.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Mini Challenge */}
        <section className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-orange-100 p-2 rounded-lg">
              <Target className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Mini Challenge</h3>
              <p className="text-gray-600">"Identify Your Pivot Point"</p>
            </div>
          </div>

          <Card className="bg-white border-2 border-orange-200">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h4 className="text-xl font-bold mb-2">Identify Your Pivot Point</h4>
                  <p className="text-gray-600">
                    Sketch your current startup or side-project model—list 3 core assumptions and identify your biggest
                    risk.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-xl">
                    <Gift className="h-8 w-8 mx-auto mb-1" />
                    <div className="text-lg font-bold">₹500</div>
                    <p className="text-xs opacity-90">Gift Voucher</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold mb-3 flex items-center gap-2">
                    <Target className="h-4 w-4 text-orange-600" />
                    Objective:
                  </h5>
                  <p className="text-sm text-gray-600 mb-4">
                    Sketch your current startup or side-project model—list 3 core assumptions (e.g., "Users will sign up
                    without incentives").
                  </p>

                  <h5 className="font-semibold mb-3 flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-orange-600" />
                    Task:
                  </h5>
                  <p className="text-sm text-gray-600">
                    Place yourself in a low-growth scenario. Which single assumption, if proven wrong, would force you
                    to pivot first?
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2 flex items-center gap-2">
                    <Mail className="h-4 w-4 text-orange-600" />
                    Submit:
                  </h5>
                  <p className="text-sm text-gray-600 mb-3">
                    Reply with your one assumption and proposed alternative strategy. Best answer featured next week!
                  </p>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">Submit Your Answer</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Upcoming Events */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-indigo-100 p-2 rounded-lg">
              <Video className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Upcoming Webinar & Events</h3>
              <p className="text-gray-600">Don't miss these exclusive sessions</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-indigo-200 hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-indigo-800">Scaling from Zero to First 1K Users</CardTitle>
                  <Badge className="bg-indigo-100 text-indigo-800">Live Webinar</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48&text=PM" />
                    <AvatarFallback className="bg-indigo-500 text-white">PM</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold">Priya Menon</h4>
                    <p className="text-sm text-gray-600">Co-founder, EduGrow</p>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>June 25, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>7:00 PM IST</span>
                  </div>
                </div>

                <div className="bg-indigo-50 p-3 rounded-lg mb-4">
                  <p className="text-sm text-gray-700">
                    Learn guerrilla marketing tactics on a shoestring budget from a founder who scaled to 10K users in 6
                    months.
                  </p>
                </div>

                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">RSVP "RSVP 1K"</Button>
                <p className="text-xs text-center text-gray-500 mt-2">Reply by June 23</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-purple-800">Leveraging Lean Pivots</CardTitle>
                  <Badge className="bg-purple-100 text-purple-800">Virtual Roundtable</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Panel Discussion</h4>
                    <p className="text-sm text-gray-600">QuickCare, FoodLoop, TechTutor founders</p>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>July 3, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>5:00 PM IST</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>60 min discussion + 30 min Q&A</span>
                  </div>
                </div>

                <div className="bg-purple-50 p-3 rounded-lg mb-4">
                  <p className="text-sm text-gray-700">
                    Real stories of successful pivots from three founders who changed direction and found product-market
                    fit.
                  </p>
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700">RSVP "RSVP LEAN"</Button>
                <p className="text-xs text-center text-gray-500 mt-2">Reply by July 1</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Subscriber Tip */}
        <section className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-100 p-2 rounded-lg">
              <Lightbulb className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Subscriber Tip</h3>
          </div>

          <Card className="bg-white border-2 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <BarChart className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-green-800 mb-3">Pro Tip: The Assumption Tracker</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Use a simple two-column tracker: one column for "Key Assumption," another for "Validation Plan."
                    Every week, mark "Validated" or "Refuted." This habit forces clarity on when to persevere vs. pivot.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action & Share */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-2xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Spread the Startup Knowledge! 🚀</h3>
            <p className="text-lg text-purple-100 mb-6">
              Know a friend who's building a startup? Forward this email so they can get free premium insights—no spam,
              ever.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Share2 className="h-8 w-8 mx-auto mb-3 text-white" />
                  <h4 className="font-bold mb-2">Share with Friends</h4>
                  <p className="text-sm text-purple-100 mb-4">Help other founders access exclusive case studies</p>
                  <Button variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                    Forward Email
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 mx-auto mb-3 text-white" />
                  <h4 className="font-bold mb-2">Not Subscribed Yet?</h4>
                  <p className="text-sm text-purple-100 mb-4">Join 8,000+ founders and entrepreneurs</p>
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
                  <Rocket className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Kickstart Diary</h4>
                  <p className="text-gray-400">Startup success stories</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Empowering 8,000+ founders and entrepreneurs with exclusive case studies and actionable insights from
                successful startups.
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
                    Case Studies
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    Community
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    Submit Your Story
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-bold mb-4">Connect</h5>
              <div className="space-y-2 text-gray-300">
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
                    Discord Community
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
              <span>8,000+ subscribers</span>
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
            <p className="text-gray-400 text-sm">© 2025 Kickstart Diary. All rights reserved.</p>
            <p className="text-gray-500 text-xs mt-2">
              You're receiving this because you subscribed at kickstartdiary.com
            </p>
            <p className="text-gray-500 text-xs mt-1">To unsubscribe, reply "UNSUBSCRIBE."</p>
          </div>
        </div>
      </div>
    </div>
  )
}
