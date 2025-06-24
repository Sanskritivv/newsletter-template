import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Code,
  Calendar,
  Trophy,
  Zap,
  CheckCircle,
  Mail,
  Share2,
  Play,
  Target,
  Lightbulb,
  TrendingUp,
  Eye,
  Clock,
  Award,
  Cpu,
  Database,
  Link,
  X,
} from "lucide-react"

export default function RapidPythonPlaybookV2() {
  return (
    <div className="max-w-4xl mx-auto bg-white">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 text-white p-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-white/10 rounded-full -translate-y-16"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-white/10 rounded-full translate-y-12"></div>
        <div className="relative">
          <p className="text-sm font-semibold tracking-wide">
            🐍 Master Python with Daily Challenges – Join 10,000+ Developers
          </p>
        </div>
      </div>

      {/* Header & Intro */}
      <div className="bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-violet-500/20 to-transparent rounded-full translate-y-40 -translate-x-40"></div>
        </div>

        <div className="relative p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-violet-600 p-3 sm:p-4 rounded-2xl shadow-lg">
                <Code className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Rapid Python Playbook
                </h1>
                <p className="text-blue-200 text-base sm:text-lg font-medium">Issue #007</p>
              </div>
            </div>
            <div className="text-left sm:text-right mt-2 sm:mt-0">
              <Badge
                variant="secondary"
                className="bg-white/20 backdrop-blur-sm text-white border-white/30 text-sm px-3 py-1 sm:px-4 sm:py-2 mb-2"
              >
                <Calendar className="h-4 w-4 mr-2" />
                June 15, 2025
              </Badge>
              <p className="text-blue-200 text-sm">Weekly Edition</p>
            </div>
          </div>

          {/* Newsletter Summary */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-violet-600 p-3 rounded-xl">
                <Eye className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 flex items-center gap-2">
                  What's Inside This Issue
                  <span className="text-xl sm:text-2xl">📋</span>
                </h2>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 text-blue-100">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-sm sm:text-base">Python Generators Deep Dive</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-sm sm:text-base">Prime Number Challenge</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-sm sm:text-base">5 Essential Generator Tips</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className="text-sm sm:text-base">Next Week: Decorators</span>
                  </div>
                </div>
                <p className="text-blue-200 text-sm mt-3 sm:mt-4">
                  📖 Reading time: ~5 minutes | 💡 Skill level: Intermediate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-8 space-y-8 sm:space-y-12">
        {/* Featured Topic */}
        <section>
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="bg-gradient-to-br from-emerald-100 to-teal-200 p-3 rounded-xl">
              <Zap className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Topic</h3>
              <p className="text-gray-600 text-base sm:text-lg">≈120 words of focused learning</p>
            </div>
          </div>

          <Card className="border-2 border-emerald-300 hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-emerald-50 via-teal-50 to-green-50 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/30 rounded-full -translate-y-16 translate-x-16"></div>
              <CardTitle className="text-2xl sm:text-3xl text-emerald-800 flex items-center gap-3 relative">
                <Cpu className="h-7 w-7 sm:h-8 sm:w-8" />
                Python Generators 101: Unlock Lazy Evaluation
              </CardTitle>
              <p className="text-emerald-600 font-semibold text-base sm:text-lg">
                Memory-efficient data processing with yield keyword
              </p>
            </CardHeader>
            <CardContent className="p-4 sm:p-8 space-y-6 sm:space-y-8">
              <div>
                <h4 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6 flex items-center gap-3">
                  <Eye className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />
                  Why Use Generators?
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-emerald-50 rounded-xl">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed">
                      Generators let you produce items on the fly instead of building a full list in memory—perfect for
                      large data streams.
                    </p>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-teal-50 rounded-xl">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-teal-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed">
                      They use the{" "}
                      <code className="bg-emerald-100 px-2 py-1 rounded-lg text-sm font-mono font-semibold">yield</code>{" "}
                      keyword to pause and resume function execution, making code more memory-efficient.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6 flex items-center gap-3">
                  <Code className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />
                  Quick Overview:
                </h4>
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-emerald-300 p-4 sm:p-6 rounded-2xl font-mono text-sm overflow-x-auto shadow-2xl">
                  <div className="text-emerald-400 mb-2"># Fibonacci Generator Example</div>
                  <div className="space-y-1">
                    <div>
                      <span className="text-teal-400">def</span>{" "}
                      <span className="text-emerald-300">fibonacci_generator</span>
                      <span className="text-white">():</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-white">a, b = </span>
                      <span className="text-emerald-200">0</span>
                      <span className="text-white">, </span>
                      <span className="text-emerald-200">1</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-teal-400">while</span> <span className="text-emerald-200">True</span>
                      <span className="text-white">:</span>
                    </div>
                    <div className="ml-8">
                      <span className="text-teal-400">yield</span> <span className="text-white">a</span>
                    </div>
                    <div className="ml-8">
                      <span className="text-white">a, b = b, a + b</span>
                    </div>
                    <div className="mt-4 text-emerald-400"># First 10 Fibonacci numbers</div>
                    <div>
                      <span className="text-white">fib = fibonacci_generator()</span>
                    </div>
                    <div>
                      <span className="text-teal-400">print</span>
                      <span className="text-white">([</span>
                      <span className="text-teal-400">next</span>
                      <span className="text-white">(fib) </span>
                      <span className="text-teal-400">for</span>
                      <span className="text-white"> _ </span>
                      <span className="text-teal-400">in</span>
                      <span className="text-white"> </span>
                      <span className="text-teal-400">range</span>
                      <span className="text-white">(</span>
                      <span className="text-emerald-200">10</span>
                      <span className="text-white">)])</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-100 p-4 sm:p-6 rounded-2xl border-l-4 border-emerald-500">
                <div className="flex items-start gap-4">
                  <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-emerald-800 mb-2 text-base sm:text-lg">Key Insight</h5>
                    <p className="text-emerald-700 leading-relaxed">
                      In just a few lines, you can generate an infinite sequence of Fibonacci numbers, consuming memory
                      only as needed.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Question of the Day (formerly Practice Challenge) */}
        <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 p-4 sm:p-8 rounded-3xl border-2 border-amber-200">
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <div className="bg-gradient-to-br from-amber-100 to-orange-200 p-3 rounded-xl">
              <Trophy className="h-6 w-6 sm:h-7 sm:w-7 text-amber-600" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Question of the Day</h3>
              <p className="text-gray-600 text-base sm:text-lg">≤60 words • Test your Python skills</p>
            </div>
          </div>

          <Card className="bg-white border-2 border-amber-300 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-100">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl sm:text-2xl text-amber-800 flex items-center gap-3">
                  <Target className="h-6 w-6 sm:h-7 sm:w-7" />
                  "Prime Number Generator"
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-4 sm:p-8">
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-amber-50 p-4 sm:p-6 rounded-xl">
                  <h4 className="font-bold mb-2 sm:mb-3 flex items-center gap-3 text-base sm:text-lg">
                    <Play className="h-4 w-4 sm:h-5 sm:w-5 text-amber-600" />
                    Objective:
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Write a generator function{" "}
                    <code className="bg-amber-100 px-2 py-1 rounded-lg text-sm font-mono font-semibold">
                      prime_generator(n)
                    </code>{" "}
                    that yields prime numbers up to n.
                  </p>
                </div>

                <div className="bg-orange-50 p-4 sm:p-6 rounded-xl">
                  <h4 className="font-bold mb-3 sm:mb-4 flex items-center gap-3 text-base sm:text-lg">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600" />
                    Constraints:
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Should use <code className="bg-orange-100 px-2 py-1 rounded text-sm font-mono">yield</code> —do
                        not precompute all primes in a list.
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Aim for O(n√n) time using a simple divisibility check per candidate.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Quick Tips */}
        <section>
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="bg-gradient-to-br from-purple-100 to-violet-200 p-3 rounded-xl">
              <Lightbulb className="h-6 w-6 sm:h-7 sm:w-7 text-purple-600" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Quick Tips</h3>
              <p className="text-gray-600 text-base sm:text-lg">≤5 bullets • Essential Python generator practices</p>
            </div>
          </div>

          <div className="grid gap-4 sm:gap-6">
            {[
              {
                title: "1. Lazy vs. Eager",
                tip: "Use generators for streams or large datasets to reduce memory footprint.",
                icon: Database,
                bgColor: "from-blue-50 to-blue-100",
                borderColor: "border-blue-300",
                iconColor: "text-blue-600",
                iconBg: "bg-blue-100",
              },
              {
                title: "2. Statefulness",
                tip: "Remember that a generator maintains its local variables between yields—ideal for maintaining counters or running sums.",
                icon: TrendingUp,
                bgColor: "from-emerald-50 to-emerald-100",
                borderColor: "border-emerald-300",
                iconColor: "text-emerald-600",
                iconBg: "bg-emerald-100",
              },
              {
                title: "3. Generator Expressions",
                tip: "For one-line generators, use (x*x for x in range(10)) instead of a list comprehension to save memory.",
                icon: Code,
                bgColor: "from-purple-50 to-purple-100",
                borderColor: "border-purple-300",
                iconColor: "text-purple-600",
                iconBg: "bg-purple-100",
              },
              {
                title: "4. Chaining Generators",
                tip: "Combine small generators (filter(), map()) to build pipelines without creating intermediate lists.",
                icon: Link,
                bgColor: "from-amber-50 to-amber-100",
                borderColor: "border-amber-300",
                iconColor: "text-amber-600",
                iconBg: "bg-amber-100",
              },
              {
                title: "5. Closing Generators",
                tip: "If you need to free up resources early, call generator.close()—especially relevant when wrapping file-reading generators.",
                icon: X,
                bgColor: "from-red-50 to-red-100",
                borderColor: "border-red-300",
                iconColor: "text-red-600",
                iconBg: "bg-red-100",
              },
            ].map((tip, index) => (
              <Card key={index} className={`hover:shadow-lg transition-all duration-300 border-2 ${tip.borderColor}`}>
                <CardContent className={`p-4 sm:p-6 bg-gradient-to-r ${tip.bgColor}`}>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className={`${tip.iconBg} p-2 sm:p-3 rounded-xl flex-shrink-0`}>
                      <tip.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${tip.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold mb-1 sm:mb-2 text-base sm:text-lg text-gray-900">{tip.title}</h4>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{tip.tip}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Upcoming Topic Sneak Peek */}
        <section>
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="bg-gradient-to-br from-pink-100 to-rose-200 p-3 rounded-xl">
              <Calendar className="h-6 w-6 sm:h-7 sm:w-7 text-pink-600" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Upcoming Topic Sneak Peek</h3>
              <p className="text-gray-600 text-base sm:text-lg">≈60 words • Next week's featured content</p>
            </div>
          </div>

          <Card className="border-2 border-pink-300 hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-pink-50 via-rose-50 to-pink-100 relative">
              <div className="absolute top-0 right-0 w-40 h-40 bg-pink-200/30 rounded-full -translate-y-20 translate-x-20"></div>
              <CardTitle className="text-xl sm:text-2xl text-pink-800 flex items-center gap-3 relative">
                <Award className="h-6 w-6 sm:h-7 sm:w-7" />
                Next Week: Decorators Demystified
              </CardTitle>
              <p className="text-pink-600 font-semibold">
                Master function decorators for professional Python development
              </p>
            </CardHeader>
            <CardContent className="p-4 sm:p-8">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3 p-3 sm:p-4 bg-pink-50 rounded-xl">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    Learn how to write and apply function decorators for logging, access control, and memoization.
                  </span>
                </div>
                <div className="flex items-start gap-3 p-3 sm:p-4 bg-rose-50 rounded-xl">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    See a concise example that wraps any function with execution-time measurement in under 10 lines.
                  </span>
                </div>
                <div className="flex items-start gap-3 p-3 sm:p-4 bg-pink-50 rounded-xl">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    Understand when to choose @staticmethod vs. custom decorators for class methods.
                  </span>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-pink-100 to-rose-200 rounded-xl border-2 border-pink-200">
                <p className="text-pink-700 font-semibold text-center flex items-center justify-center gap-2">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
                  Coming June 22, 2025 • Don't miss it!
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Join & Subscribe */}
        <section className="bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 text-white p-4 sm:p-8 rounded-3xl relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 -translate-x-32"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 translate-x-24"></div>
          </div>

          <div className="relative text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Join & Subscribe</h3>
            <p className="text-base sm:text-xl text-indigo-100 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
              Not a subscriber yet? Reply "SUBSCRIBE" or email subscribe@rapidpythonplaybook.com—no spam, ever. Already
              getting value? Forward this email to a friend who codes in Python.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-8 max-w-4xl mx-auto">
              <Card className="bg-white/15 backdrop-blur-sm border-white/30 border-2">
                <CardContent className="p-4 sm:p-8 text-center">
                  <Mail className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 text-white" />
                  <h4 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-indigo-200">Subscribe Free</h4>
                  <p className="text-indigo-100 mb-4 sm:mb-6 leading-relaxed">
                    Reply "SUBSCRIBE" or email subscribe@rapidpythonplaybook.com
                  </p>
                  <Button
                    variant="secondary"
                    className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold px-4 py-2 sm:px-6 sm:py-3 w-full"
                  >
                    Subscribe Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/15 backdrop-blur-sm border-white/30 border-2">
                <CardContent className="p-4 sm:p-8 text-center">
                  <Share2 className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 text-white" />
                  <h4 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-indigo-200">Share with Friends</h4>
                  <p className="text-indigo-100 mb-4 sm:mb-6 leading-relaxed">
                    Forward this email to a friend who codes in Python
                  </p>
                  <Button
                    variant="secondary"
                    className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold px-4 py-2 sm:px-6 sm:py-3 w-full"
                  >
                    Forward Email
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 sm:mt-8 text-center">
              <p className="text-indigo-100">No spam, ever. Unsubscribe anytime.</p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer & Unsubscribe */}
      <div className="bg-gray-900 text-white p-4 sm:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-indigo-600 to-violet-600 p-3 rounded-xl">
                  <Code className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold">Rapid Python Playbook</h4>
                  <p className="text-indigo-300">Weekly Python mastery</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Empowering 10,000+ developers with concise code snippets, hands-on practice, and expert Python insights.
              </p>
            </div>

            <div>
              <h5 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">Quick Links</h5>
              <div className="space-y-2 sm:space-y-3 text-gray-300">
                <div>
                  <a href="#" className="hover:text-indigo-400 transition-colors">
                    Privacy Policy
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-indigo-400 transition-colors">
                    Terms of Service
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-indigo-400 transition-colors">
                    Contact Us
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-indigo-400 transition-colors">
                    Archive
                  </a>
                </div>
              </div>
            </div>

            <div className="sm:col-span-2 md:col-span-1">
              <h5 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">Connect</h5>
              <div className="space-y-2 sm:space-y-3 text-gray-300">
                <div>
                  <a href="#" className="hover:text-indigo-400 transition-colors">
                    GitHub
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-indigo-400 transition-colors">
                    Twitter
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-indigo-400 transition-colors">
                    LinkedIn
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-indigo-400 transition-colors">
                    Newsletter Archive
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Separator className="bg-gray-800 mb-6 sm:mb-8" />

          <div className="text-center space-y-3 sm:space-y-4">
            <p className="text-gray-400">© 2025 Rapid Python Playbook. All rights reserved.</p>
            <p className="text-gray-500 text-sm">
              You're receiving this because you signed up at rapidpythonplaybook.com.
            </p>
            <p className="text-gray-500 text-sm">To unsubscribe, reply "UNSUBSCRIBE."</p>
          </div>
        </div>
      </div>
    </div>
  )
}
