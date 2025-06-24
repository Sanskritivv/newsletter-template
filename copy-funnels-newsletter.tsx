import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  Users,
  Calendar,
  Trophy,
  CheckCircle,
  Clock,
  Target,
  Zap,
  TrendingUp,
  Share2,
  Mail,
  BarChart,
  LineChart,
  PieChart,
  Lightbulb,
  Gift,
  Video,
  FileText,
  ListChecks,
  MessageCircle,
  Award,
  Edit,
  Layers,
  Percent,
  DollarSign,
  Clipboard,
  Send,
} from "lucide-react"

export default function CopyFunnelsNewsletter() {
  return (
    <div className="max-w-4xl mx-auto bg-white">
      {/* Header with Gradient */}
      <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

        <div className="relative p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                <Edit className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Copy & Funnels Mastery</h1>
                <p className="text-purple-100 text-lg">
                  Your weekly guide to high-converting copy & profitable funnels
                </p>
              </div>
            </div>
            <div className="text-right">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-sm px-4 py-2 mb-2">
                Issue #47 • June 15, 2025
              </Badge>
              <p className="text-purple-100 text-sm">Every Friday</p>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold">10K+</div>
              <div className="text-purple-100 text-sm">Marketers & Founders</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">67%</div>
              <div className="text-purple-100 text-sm">Avg. Conversion Lift</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">Weekly</div>
              <div className="text-purple-100 text-sm">Actionable Tips</div>
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
              Welcome to this week's edition of Copy & Funnels—your concise guide to crafting high-impact copy and
              building revenue-boosting funnels every Friday. No fluff, just actionable insights that you can implement
              right away to see real results.
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-12">
        {/* Featured Topic */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-100 p-2 rounded-lg">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Featured Topic</h3>
              <p className="text-gray-600">High-Converting Sales Pages</p>
            </div>
          </div>

          <Card className="border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardTitle className="text-2xl text-blue-800 flex items-center gap-3">
                <Percent className="h-7 w-7" />
                High-Converting Sales Pages
              </CardTitle>
              <p className="text-blue-600 font-medium">
                Transform casual visitors into loyal buyers with proven psychological triggers
              </p>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Why This Matters:</strong> A well-optimized sales page can turn casual visitors into loyal
                  buyers. Copy & Funnels readers see, on average, a{" "}
                  <span className="font-bold text-blue-600">67% increase in conversion rates</span> when they apply
                  proven psychological triggers, correct layout principles, and persuasive copy formulas.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Layers className="h-5 w-5 text-blue-600" />
                  Core Components:
                </h4>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Headline with "Reason-Why"</h5>
                      <p className="text-gray-600 text-sm">
                        Lead with a bold promise that speaks directly to your avatar's pain point or desire (e.g.,
                        "Double Your Revenue in 30 Days—Here's How").
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Engaging Story Hook</h5>
                      <p className="text-gray-600 text-sm">
                        Briefly share a relatable anecdote or customer success snippet that builds trust in the first
                        150 words.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Social Proof & Metrics</h5>
                      <p className="text-gray-600 text-sm">
                        Include at least three testimonials (text or star ratings) and highlight measurable outcomes
                        (e.g., "Our first 100 customers saw a 3× ROI in under two weeks").
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Bullet-Point Benefits</h5>
                      <p className="text-gray-600 text-sm">
                        List 4–6 concise benefits—make them outcome-oriented (e.g., "Save 10 hours/week on launch prep,"
                        "Increase email open rates by 42%").
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      5
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Clear "Next Step" CTA</h5>
                      <p className="text-gray-600 text-sm">
                        Use a vibrant button above the fold ("Get Instant Access," "Start Your Free Trial"). Repeat a
                        secondary CTA ("Learn More") lower on the page for late-stage skimmers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-yellow-800 mb-1">Pro Tip</h5>
                    <p className="text-yellow-700 text-sm">
                      The most effective sales pages maintain a consistent emotional tone from headline to CTA. If your
                      headline evokes curiosity, your story and benefits should build on that same emotion.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Quick Metrics & Results */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-green-100 p-2 rounded-lg">
              <BarChart className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Quick Metrics & Results</h3>
              <p className="text-gray-600">Data-driven insights for your marketing</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-green-500">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Percent className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">67%</div>
                <p className="text-gray-600 font-medium">Conversion Rate Increase</p>
                <p className="text-xs text-gray-500 mt-1">
                  Average improvement when following this week's sales-page blueprint
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">42%</div>
                <p className="text-gray-600 font-medium">Email Open Rates</p>
                <p className="text-xs text-gray-500 mt-1">
                  Higher when subject lines use "Problem → Promise → Proof" format
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-purple-500">
              <CardContent className="p-6 text-center">
                <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <LineChart className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">89%</div>
                <p className="text-gray-600 font-medium">Sales Funnel Optimization</p>
                <p className="text-xs text-gray-500 mt-1">
                  Revenue lift within 30 days using a three-stage tripwire funnel
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-orange-500">
              <CardContent className="p-6 text-center">
                <div className="bg-orange-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-orange-600 mb-2">+415%</div>
                <p className="text-gray-600 font-medium">ROI on Copywriting</p>
                <p className="text-xs text-gray-500 mt-1">
                  Return on investment for headline and subhead rewrites alone
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-indigo-500">
              <CardContent className="p-6 text-center">
                <div className="bg-indigo-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <PieChart className="h-8 w-8 text-indigo-600" />
                </div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">5%</div>
                <p className="text-gray-600 font-medium">Weekly Benchmarks</p>
                <p className="text-xs text-gray-500 mt-1">
                  Average click-through on the primary offer page for top-performing funnels
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Copy & Funnel Tips */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-yellow-100 p-2 rounded-lg">
              <Lightbulb className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Copy & Funnel Tips</h3>
              <p className="text-gray-600">Actionable techniques to boost your results</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Zap className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Use the "So That" Technique</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      For every feature you write, append "so that [specific outcome]" to connect product specs to
                      real-world benefits. This bridges the gap between what your product does and why it matters.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Layers className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Chunk Your Text</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      <strong>Break long paragraphs</strong> into 2–3 sentence blocks—readers skim. Bold the first 2–3
                      words of each block to draw the eye and guide readers through your content.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <MessageCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Leverage "Pattern Interrupts"</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Mix formatting—short bullet lists, subhead questions, or boxed "Did you know?" callouts—to
                      re-engage skimmers and keep readers moving through your content.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <FileText className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Write at a 6th-Grade Reading Level</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Use simple words and short sentences. A straightforward style often outperforms fancy jargon by
                      23% in engagement. Your readers will thank you with their attention.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 md:col-span-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <Clipboard className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Test Button Copy</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Rather than "Submit," try "Yes, Show Me How" or "Get My Results Now" and run a quick A/B split for
                      48 hours. Small changes to button text can yield surprising conversion improvements.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Community Spotlight */}
        <section className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Trophy className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Community Spotlight</h3>
              <p className="text-gray-600">Celebrating success in our community</p>
            </div>
          </div>

          <Card className="bg-white border-2 border-purple-200">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50">
              <div className="flex items-center gap-2 mb-2">
                <Award className="h-5 w-5 text-purple-600" />
                <Badge className="bg-purple-100 text-purple-800">Marketer of the Week</Badge>
              </div>
              <CardTitle className="text-xl text-purple-800">Priya Desai</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/placeholder.svg?height=64&width=64&text=PD" />
                  <AvatarFallback className="bg-purple-500 text-white text-lg">PD</AvatarFallback>
                </Avatar>
                <div>
                  <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500 mb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <h5 className="font-semibold text-green-800">Achievement</h5>
                    </div>
                    <p className="text-sm text-gray-700">
                      Priya redesigned her e-course sales page using this week's "Reason-Why Headline" formula and saw a{" "}
                      <span className="font-bold text-green-600">74% jump in opt-ins</span> over seven days.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold mb-1 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-purple-600" />
                        Key Tactic
                      </h5>
                      <p className="text-sm text-gray-600">
                        She swapped her generic CTA ("Enroll Now") for "Reserve My Spot for 5 Minutes" and added three
                        one-sentence customer success quotes near the top.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1 flex items-center gap-2">
                        <Lightbulb className="h-4 w-4 text-amber-600" />
                        Takeaway
                      </h5>
                      <p className="text-sm text-gray-600">
                        Even small tweaks—headline, CTA language, and social proof positioning—can compound into major
                        lift.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Funnel Asset Checklist */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-indigo-100 p-2 rounded-lg">
              <ListChecks className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Funnel Asset Checklist</h3>
              <p className="text-gray-600">Essential components for your next launch</p>
            </div>
          </div>

          <Card className="border-2 border-indigo-200">
            <CardHeader className="bg-gradient-to-r from-indigo-50 to-blue-50">
              <CardTitle className="text-xl text-indigo-800">Before you launch:</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Lead-Magnet Lead Page</h5>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Simple opt-in form</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>One sentence on what they'll get</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>One bullet on how it helps</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Clear consent checkbox</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Tripwire Mini-Offer Page</h5>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Short-form sales page</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>3–4 bullet benefits</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Price anchor ("Normally $49, today $7")</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Urgency timer</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Main Offer Sales Page</h5>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Follow this week's blueprint</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Reason-why headline</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Benefits bullets</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Testimonials with metrics</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Repeated CTA</span>
                        </li>
                      </ul>
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
              <p className="text-gray-600">"Rewrite Your Headline"</p>
            </div>
          </div>

          <Card className="bg-white border-2 border-orange-200">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h4 className="text-xl font-bold mb-2">Rewrite Your Headline</h4>
                  <p className="text-gray-600">Apply the "Reason-Why" framework to transform your current headline</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-xl">
                    <Gift className="h-8 w-8 mx-auto mb-1" />
                    <div className="text-lg font-bold">₹500</div>
                    <p className="text-xs opacity-90">Gift Card</p>
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
                    Take your current sales-page headline and apply the "Reason-Why" framework ("Why [X] Will Help You
                    [Outcome]").
                  </p>

                  <h5 className="font-semibold mb-3 flex items-center gap-2">
                    <ListChecks className="h-4 w-4 text-orange-600" />
                    Task:
                  </h5>
                  <p className="text-sm text-gray-600">
                    Draft three variations and choose the one that highlights a quantifiable benefit (e.g., "Why
                    Doubling Your Email List in 30 Days Will 3× Your Revenue").
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2 flex items-center gap-2">
                    <Send className="h-4 w-4 text-orange-600" />
                    How to Submit:
                  </h5>
                  <p className="text-sm text-gray-600 mb-3">
                    Reply with your original and new headline. The most persuasive swap wins a ₹500 gift card and a
                    shoutout in next week's issue.
                  </p>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">Submit Your Entry</Button>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-blue-800 mb-1">Example Transformation</h5>
                    <div className="space-y-2 text-sm">
                      <p className="text-gray-600">
                        <strong>Original:</strong> "Email Marketing Course"
                      </p>
                      <p className="text-blue-600 font-medium">
                        <strong>Transformed:</strong> "Why Our 5-Step Email System Will Double Your Open Rates in 14
                        Days"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Upcoming Live Session */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-indigo-100 p-2 rounded-lg">
              <Video className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Upcoming Live Session</h3>
              <p className="text-gray-600">Don't miss this exclusive webinar</p>
            </div>
          </div>

          <Card className="border-2 border-indigo-200 hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl text-indigo-800 mb-2">Funnel Audit in 30 Minutes</CardTitle>
                  <div className="flex items-center gap-4 text-indigo-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>June 24, 2025</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>7:00 PM IST</span>
                    </div>
                  </div>
                </div>
                <Badge className="bg-red-100 text-red-800">Limited to 50</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder.svg?height=48&width=48&text=AV" />
                      <AvatarFallback className="bg-indigo-500 text-white">AV</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold">Alex Verma</h4>
                      <p className="text-sm text-gray-600">Head of Growth, FunnelForge</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h5 className="font-semibold">Synopsis:</h5>
                    <p className="text-sm text-gray-600">
                      Live walkthrough of three real-world funnels—spot weak copy, optimize CTAs, and boost conversions
                      on the fly.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Users className="h-4 w-4" />
                      <span>Limited to 50 founders</span>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-indigo-600">50</div>
                    <p className="text-sm text-gray-600">Seats Available</p>
                  </div>
                  <div className="space-y-3">
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700">RSVP "AUDIT"</Button>
                    <p className="text-xs text-center text-gray-500">Reply by June 22 to secure your seat</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action & Share */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-2xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Spread the Word! 💜</h3>
            <p className="text-lg text-purple-100 mb-6">
              Know a fellow marketer? Forward this email so they can subscribe free—no spam, unsubscribe anytime.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Share2 className="h-8 w-8 mx-auto mb-3 text-white" />
                  <h4 className="font-bold mb-2">Share with Friends</h4>
                  <p className="text-sm text-purple-100 mb-4">Help others master copywriting and funnels</p>
                  <Button variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                    Forward Email
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 mx-auto mb-3 text-white" />
                  <h4 className="font-bold mb-2">Not Subscribed Yet?</h4>
                  <p className="text-sm text-purple-100 mb-4">Join 10,000+ marketers on this journey</p>
                  <Button variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                    Reply "SUBSCRIBE"
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      {/* Enhanced Footer */}
      <div className="bg-gray-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-600 p-2 rounded-lg">
                  <Edit className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Copy & Funnels</h4>
                  <p className="text-gray-400">Weekly insights</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Empowering 10,000+ marketers and founders to craft high-converting copy and build profitable funnels.
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
                    Copywriting Resources
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    Funnel Templates
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    Success Stories
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-bold mb-4">Connect</h5>
              <div className="space-y-2 text-gray-300">
                <div>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    Facebook Group
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
                Unsubscribe
              </Button>
            </div>
          </div>

          <div className="text-center mt-6 pt-6 border-t border-gray-700">
            <p className="text-gray-400 text-sm">© 2025 Copy & Funnels. All rights reserved.</p>
            <p className="text-gray-500 text-xs mt-2">
              You're receiving this because you signed up at copynfunnels.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
