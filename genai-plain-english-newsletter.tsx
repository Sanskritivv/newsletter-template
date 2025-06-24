import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  Users,
  Calendar,
  Clock,
  Brain,
  Lightbulb,
  MessageCircle,
  Share2,
  Mail,
  Video,
  AlertTriangle,
  Zap,
  Target,
  HelpCircle,
  BookOpen,
  Eye,
  Cpu,
  Network,
} from "lucide-react"

export default function GenAIPlainEnglishNewsletter() {
  return (
    <div className="max-w-4xl mx-auto bg-white">
      {/* Header with Gradient */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

        <div className="relative p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                <Brain className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">GenAI in Plain English</h1>
                <p className="text-emerald-100 text-lg">AI Explained Simply—No Jargon, Just Clarity</p>
              </div>
            </div>
            <div className="text-right">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-sm px-4 py-2 mb-2">
                Issue #47 • June 15, 2025
              </Badge>
              <p className="text-emerald-100 text-sm">Every Friday</p>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold">5,000+</div>
              <div className="text-emerald-100 text-sm">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">5 Min</div>
              <div className="text-emerald-100 text-sm">Read Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">Zero</div>
              <div className="text-emerald-100 text-sm">Jargon</div>
            </div>
          </div>
        </div>
      </div>

      {/* Greeting Section */}
      <div className="p-8 bg-gradient-to-r from-emerald-50 to-teal-50 border-b-2 border-emerald-100">
        <div className="flex items-start gap-4">
          <div className="bg-emerald-500 p-3 rounded-full">
            <Mail className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Hello [First Name] 👋</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Welcome to your weekly dose of GenAI made simple. Every Friday, we break down one AI concept into plain
              English—no complexity, no buzzwords—just clear explanations you can read in under five minutes. Join
              5,000+ subscribers learning without the fluff.
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-12">
        {/* This Week's Topic */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-emerald-100 p-2 rounded-lg">
              <Brain className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">This Week's Topic</h3>
              <p className="text-gray-600">Demystifying LLM Reasoning</p>
            </div>
          </div>

          <Card className="border-2 border-emerald-200 hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50">
              <CardTitle className="text-2xl text-emerald-800 flex items-center gap-3">
                <Cpu className="h-7 w-7" />
                Demystifying LLM Reasoning
              </CardTitle>
              <p className="text-emerald-600 font-medium">Understanding how AI thinks (and why it sometimes doesn't)</p>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div>
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-emerald-600" />
                  What Are LLMs?
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Large language models (LLMs) are AI systems trained on massive text collections. They predict the next
                  word in a sentence by using patterns learned during training.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-600" />
                  Why They Struggle with Common Sense
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  LLMs lack real-world experience. They know statistics over words, not meaning. So when you ask, "Can
                  you fry an ice cube?", it may confidently answer "Yes" because it sees "fry" and "ice cube" often in
                  proximity—yet it misses the obvious physical reality.
                </p>
              </div>

              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-emerald-600 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-emerald-800 mb-1">Key Insight</h5>
                    <p className="text-emerald-700 text-sm">
                      Think of LLMs like autocomplete on steroids. They're excellent at language patterns but don't
                      truly "understand" like humans do.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Plain-English Explanation Blocks */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-teal-100 p-2 rounded-lg">
              <BookOpen className="h-6 w-6 text-teal-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Plain-English Explanations</h3>
              <p className="text-gray-600">Breaking down the technical concepts</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Network className="h-5 w-5 text-blue-600" />
                  Tokens & Context Windows
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Tokens are word-pieces (e.g., "play", "ing") LLMs use to build sentences. A context window is how many
                  tokens the model "remembers" at once—like a short-term memory. Too many words, and older tokens fall
                  out of view.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-green-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Target className="h-5 w-5 text-green-600" />
                  Training via Next-Word Prediction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 leading-relaxed">
                  During training, an LLM sees: "The cat sat on the ___." It learns to predict "mat" by adjusting its
                  internal parameters. Over billions of examples, it becomes skilled at guessing which words come next.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-purple-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Eye className="h-5 w-5 text-purple-600" />
                  Attention Mechanism Simplified
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Attention lets the model "weigh" certain tokens more heavily. If you ask, "Who wrote 'Pride and
                  Prejudice'?", it links "wrote" and "Pride and Prejudice" to "Austen" by assigning higher attention
                  scores, like highlighting key clues in a text.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Use-Case Spotlight */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-cyan-100 p-2 rounded-lg">
              <Zap className="h-6 w-6 text-cyan-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Use-Case Spotlight</h3>
              <p className="text-gray-600">Real-world applications explained</p>
            </div>
          </div>

          <Card className="border-2 border-cyan-200 hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-cyan-50 to-blue-50">
              <CardTitle className="text-xl text-cyan-800 flex items-center gap-3">
                <MessageCircle className="h-6 w-6" />
                Chatbots That Sound Human
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Ever wondered why AI chatbots sometimes "hallucinate" facts? They generate text by sampling tokens that
                seem statistically likely, not by consulting a knowledge base. When you ask, "What's the capital of
                Mars?", the bot will still try to produce a plausible answer—because it's designed to keep the
                conversation flowing, not to fact-check interplanetary geography.
              </p>
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-amber-800 mb-1">Takeaway</h5>
                    <p className="text-amber-700 text-sm">Always double-check AI outputs against a trusted source.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Misconception Buster */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-red-100 p-2 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Misconception Buster</h3>
              <p className="text-gray-600">Setting the record straight</p>
            </div>
          </div>

          <Card className="border-2 border-red-200 bg-gradient-to-r from-red-50 to-pink-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-red-800 mb-3">"AI Understands Everything"—False</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Many assume that a model trained on terabytes of text "knows" facts like a human. In reality, it's
                    pattern matching over words. If you ask it to solve a brand-new logic puzzle, it might confidently
                    mislead you because it has no true "reasoning" capabilities—just statistical associations.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Quick Tips */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-yellow-100 p-2 rounded-lg">
              <Lightbulb className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Quick Tips</h3>
              <p className="text-gray-600">Practical advice for better AI interactions</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: Target,
                title: "Ask Clear, Specific Questions",
                tip: "Ambiguous prompts produce unpredictable answers—frame your query like you're talking to a friend, not a search engine.",
                color: "blue",
              },
              {
                icon: Network,
                title: "Limit Context Length",
                tip: "When experimenting in a notebook, keep inputs under 1,000 tokens to see how forgetting older tokens changes model responses.",
                color: "green",
              },
              {
                icon: Brain,
                title: 'Use "Chain of Thought" Prompts',
                tip: 'Tell the model to "think step by step" before answering; this often produces more coherent reasoning.',
                color: "purple",
              },
              {
                icon: AlertTriangle,
                title: "Beware of Overconfidence",
                tip: "If the bot gives a confident answer to a nonsensical prompt, test it with a known fact to gauge reliability.",
                color: "orange",
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
              </div>
            ))}
          </div>
        </section>

        {/* Community Corner */}
        <section className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-emerald-100 p-2 rounded-lg">
              <Users className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Community Corner</h3>
              <p className="text-gray-600">Your questions answered</p>
            </div>
          </div>

          <Card className="bg-white border-2 border-emerald-200">
            <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50">
              <CardTitle className="text-xl text-emerald-800 flex items-center gap-3">
                <HelpCircle className="h-6 w-6" />
                Your Question of the Week
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mb-4">
                <h4 className="font-bold text-blue-800 mb-2">"Why can't AI tell real jokes?"</h4>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Answer:</strong> Humor often relies on shared experiences, timing, and double meanings—subtle
                  cues LLMs haven't truly learned. They might string together word patterns that look like jokes but
                  lack genuine punchlines.
                </p>

                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                  <div className="flex items-start gap-3">
                    <MessageCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <div>
                      <h5 className="font-semibold text-emerald-800 mb-1">Have a Question?</h5>
                      <p className="text-emerald-700 text-sm">
                        Reply to this email with your most confusing AI query. We'll choose one each week and explain it
                        in plain English.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Upcoming Live Q&A */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-indigo-100 p-2 rounded-lg">
              <Video className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Upcoming Live Q&A</h3>
              <p className="text-gray-600">Join our interactive session</p>
            </div>
          </div>

          <Card className="border-2 border-indigo-200 hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl text-indigo-800 mb-2">
                    GenAI in Plain English: Live Office Hours
                  </CardTitle>
                  <div className="flex items-center gap-4 text-indigo-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>June 30, 2025</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>7:00 PM IST</span>
                    </div>
                  </div>
                </div>
                <Badge className="bg-red-100 text-red-800">Limited to 200</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder.svg?height=48&width=48&text=JD" />
                      <AvatarFallback className="bg-indigo-500 text-white">JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold">John Doe</h4>
                      <p className="text-sm text-gray-600">Founder & AI Educator</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h5 className="font-semibold">Format:</h5>
                    <p className="text-sm text-gray-600">
                      30-minute Q&A—bring any burning AI questions, from "How do embeddings work?" to "Why do models
                      drift over time?"
                    </p>
                  </div>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-indigo-600">200</div>
                    <p className="text-sm text-gray-600">Seats Available</p>
                  </div>
                  <div className="space-y-3">
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700">RSVP "RSVP LIVE"</Button>
                    <p className="text-xs text-center text-gray-500">
                      Reply by June 28 to receive the Zoom link (limited to first 200 respondents)
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action & Share */}
        <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 rounded-2xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Enjoy this issue? 🚀</h3>
            <p className="text-lg text-emerald-100 mb-6">
              Forward it to a friend who's baffled by AI—let's demystify GenAI together. No spam, unsubscribe anytime.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Share2 className="h-8 w-8 mx-auto mb-3 text-white" />
                  <h4 className="font-bold mb-2">Share with Friends</h4>
                  <p className="text-sm text-emerald-100 mb-4">Help others understand AI without the jargon</p>
                  <Button variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100">
                    Forward Email
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 mx-auto mb-3 text-white" />
                  <h4 className="font-bold mb-2">Not Subscribed Yet?</h4>
                  <p className="text-sm text-emerald-100 mb-4">Join 5,000+ learners</p>
                  <Button variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100">
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
                <div className="bg-emerald-600 p-2 rounded-lg">
                  <Brain className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">GenAI in Plain English</h4>
                  <p className="text-gray-400">AI made simple</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Demystifying AI for 5,000+ subscribers with clear, jargon-free explanations delivered every Friday.
              </p>
            </div>

            <div>
              <h5 className="font-bold mb-4">Resources</h5>
              <div className="space-y-2 text-gray-300">
                <div>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Archive
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    AI Glossary
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Beginner's Guide
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Community Forum
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-bold mb-4">Connect</h5>
              <div className="space-y-2 text-gray-300">
                <div>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Twitter
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    LinkedIn
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Contact Us
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Submit Question
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Separator className="bg-gray-700 mb-6" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>5,000+ subscribers</span>
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
            <p className="text-gray-400 text-sm">© 2025 GenAI in Plain English. All rights reserved.</p>
            <p className="text-gray-500 text-xs mt-2">
              You're receiving this because you signed up at genaiplainenglish.com
            </p>
            <p className="text-gray-500 text-xs mt-1">To unsubscribe, reply "UNSUBSCRIBE."</p>
          </div>
        </div>
      </div>
    </div>
  )
}
