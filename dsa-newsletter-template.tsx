import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  Users,
  Trophy,
  Code,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Clock,
  Target,
  Zap,
  BookOpen,
  TrendingUp,
  Eye,
} from "lucide-react"

export default function EnhancedNewsletterTemplate() {
  return (
    <div className="max-w-5xl mx-auto bg-white">
      {/* Enhanced Header with Gradient */}
      <div className="bg-gradient-to-r from-green-600 via-green-700 to-emerald-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                <Code className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Krack The DSA</h1>
                <p className="text-green-100 text-lg">Master algorithms weekly</p>
              </div>
            </div>
            <div className="text-right">
              <div className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl font-bold text-lg shadow-lg">
                Issue #47 • Week of Jan 15, 2025
              </div>
              <p className="text-green-100 text-sm mt-2">5,247 subscribers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Welcome Message */}
      <div className="p-8 bg-gradient-to-r from-green-50 to-emerald-50 border-b-2 border-green-100">
        <div className="flex items-start gap-4">
          <div className="bg-green-500 p-3 rounded-full">
            <Zap className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              🚀 This Week: Binary Search Trees & Graph Algorithms
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Master the most interview-critical data structures with hands-on examples, optimization techniques, and
              real-world applications. This week's focus will help you tackle 73% of tree-based interview questions.
            </p>
            <div className="flex items-center gap-6 mt-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                <span>15 min read</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Target className="h-4 w-4" />
                <span>3 algorithms covered</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <BookOpen className="h-4 w-4" />
                <span>5 code examples</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-12">
        {/* Enhanced Content Blocks */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <Code className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Featured Algorithm Deep Dive</h3>
                <p className="text-gray-600">Master these interview favorites</p>
              </div>
            </div>
            <Badge className="bg-green-100 text-green-800 px-3 py-1">1 Algorithm</Badge>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-green-200">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-green-100 text-green-800 font-semibold">BST • Medium</Badge>
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-500">1.2K views</span>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-green-600 transition-colors">
                  Binary Search Tree Validation
                </CardTitle>
                <p className="text-gray-600">
                  Learn the optimal approach to validate BSTs using in-order traversal bounds checking.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-green-400 text-sm font-mono">C++</span>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span>Time: O(n)</span>
                      <span>•</span>
                      <span>Space: O(h)</span>
                    </div>
                  </div>
                  <div className="font-mono text-sm text-gray-300 space-y-1">
                    <div className="text-green-400">{"bool isValidBST(TreeNode* root) {"}</div>
                    <div className="ml-4 text-blue-300">{"return validate(root, LONG_MIN, LONG_MAX);"}</div>
                    <div className="text-green-400">{"}"}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <Avatar className="h-6 w-6 border-2 border-white">
                        <AvatarImage src="/placeholder.svg?height=24&width=24&text=G" />
                        <AvatarFallback className="text-xs bg-blue-500 text-white">G</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-6 w-6 border-2 border-white">
                        <AvatarImage src="/placeholder.svg?height=24&width=24&text=A" />
                        <AvatarFallback className="text-xs bg-red-500 text-white">A</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-6 w-6 border-2 border-white">
                        <AvatarImage src="/placeholder.svg?height=24&width=24&text=M" />
                        <AvatarFallback className="text-xs bg-green-500 text-white">M</AvatarFallback>
                      </Avatar>
                    </div>
                    <span className="text-sm text-gray-600">Asked at Google, Amazon, Microsoft</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    73% frequency
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Enhanced Week Challenge */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-100 rounded-2xl"></div>
          <div className="relative p-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Trophy className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Daily Challenge</h3>
                  <p className="text-gray-600">Test your skills and earn rewards</p>
                </div>
              </div>
              <Badge className="bg-purple-100 text-purple-800 px-3 py-1">Ends in 3 days</Badge>
            </div>

            <Card className="bg-white shadow-xl border-0">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold mb-4">Serialize and Deserialize Binary Tree</h4>
                    <div className="flex gap-3 mb-4">
                      <Badge className="bg-red-100 text-red-800 font-semibold">Hard</Badge>
                      <Badge variant="outline">Trees</Badge>
                      <Badge variant="outline">Design</Badge>
                      <Badge variant="outline">Recursion</Badge>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Design an algorithm to serialize and deserialize a binary tree. Serialization is the process of
                  converting a tree to a string, and deserialization reconstructs the tree from the string. Your
                  solution should handle all edge cases including null nodes.
                </p>

                <div className="bg-gray-50 p-6 rounded-xl mb-6">
                  <h5 className="font-bold mb-3 text-lg">Example:</h5>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Input Tree:</p>
                      <div className="font-mono text-sm bg-white p-3 rounded border">
                        {"    1"}
                        <br />
                        {"   / \\"}
                        <br />
                        {"  2   3"}
                        <br />
                        {"     / \\"}
                        <br />
                        {"    4   5"}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Serialized:</p>
                      <div className="font-mono text-sm bg-white p-3 rounded border">
                        {'"1,2,null,null,3,4,null,null,5,null,null"'}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-gray-500" />
                      <span className="text-gray-700">
                        <strong>234</strong> participants
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">
                        <strong>67%</strong> success rate
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Progress value={67} className="w-24" />
                    </div>
                  </div>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8"
                  >
                    Solve Challenge <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Step-by-Step Solution Overview */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Step-by-Step Solution Overview</h3>
                <p className="text-gray-600">Breaking down yesterday's challenge approach</p>
              </div>
            </div>
            <Badge className="bg-blue-100 text-blue-800 px-3 py-1">Previous Challenge</Badge>
          </div>

          <Card className="border-2 border-blue-200 shadow-lg mb-6">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-3">
                <Badge className="bg-blue-100 text-blue-800 font-semibold">Arrays • Medium</Badge>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-green-600">Solved by 89% participants</span>
                </div>
              </div>
              <CardTitle className="text-xl text-blue-700">Two Sum Problem</CardTitle>
              <p className="text-gray-700">
                Given an array of integers and a target sum, return indices of two numbers that add up to the target.
              </p>
            </CardHeader>
          </Card>

          <div className="grid gap-6">
            <Card className="border-l-4 border-blue-500">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold mb-2">Understand the Problem</h4>
                    <p className="text-gray-700">
                      We need to find two numbers in an array that sum to a target value. The brute force approach would
                      be O(n²), but we can optimize using a hash map for O(n) time complexity.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-green-500">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold mb-2">Choose the Right Data Structure</h4>
                    <p className="text-gray-700">
                      Use a hash map to store numbers we've seen and their indices. For each number, check if (target -
                      current_number) exists in our hash map.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-yellow-500">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold mb-2">Implement the Algorithm</h4>
                    <p className="text-gray-700">
                      Iterate through the array once. For each element, calculate the complement (target - current). If
                      complement exists in hash map, return both indices. Otherwise, add current element to hash map.
                    </p>
                    <div className="bg-gray-900 text-green-400 p-3 rounded mt-3 font-mono text-sm">
                      <div>{"def twoSum(nums, target):"}</div>
                      <div className="ml-4">{"seen = {}"}</div>
                      <div className="ml-4">{"for i, num in enumerate(nums):"}</div>
                      <div className="ml-8">{"complement = target - num"}</div>
                      <div className="ml-8">{"if complement in seen:"}</div>
                      <div className="ml-12">{"return [seen[complement], i]"}</div>
                      <div className="ml-8">{"seen[num] = i"}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-purple-500">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold mb-2">Analyze Complexity & Edge Cases</h4>
                    <p className="text-gray-700">
                      Time: O(n), Space: O(n). Edge cases: duplicate numbers, no solution exists, negative numbers.
                      Always validate assumptions and handle edge cases in interviews.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-0">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-800">💡 Key Takeaway</h4>
                  <p className="text-gray-800 text-lg leading-relaxed">
                    The Two Sum problem demonstrates the power of trading space for time complexity. By using a hash
                    map, we reduced the time from O(n²) to O(n) with only O(n) extra space. This pattern appears in many
                    interview problems!
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <div className="flex items-center gap-2 text-sm text-blue-700">
                      <Users className="h-4 w-4" />
                      <span>234 participants completed this challenge</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Quick Code Snippets (now under Step-by-Step Solution) */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Code className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Quick Code Snippets</h3>
                <p className="text-gray-600">Copy-paste ready templates for common algorithms</p>
              </div>
            </div>
            <Badge className="bg-purple-100 text-purple-800 px-3 py-1">1 Template</Badge>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    Binary Tree Level Order Traversal
                  </CardTitle>
                  <Badge variant="outline" className="text-xs">
                    Python
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-lg relative group">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-white"
                  >
                    Copy
                  </Button>
                  <div className="font-mono text-sm space-y-1">
                    <div className="text-green-400">{"def levelOrder(root):"}</div>
                    <div className="ml-4 text-blue-300">{"if not root: return []"}</div>
                    <div className="ml-4 text-purple-300">{"queue, result = [root], []"}</div>
                    <div className="ml-4 text-yellow-300">{"while queue:"}</div>
                    <div className="ml-8 text-gray-300">{"level = [node.val for node in queue]"}</div>
                    <div className="ml-8 text-gray-300">{"result.append(level)"}</div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                  <span>Time: O(n) • Space: O(w)</span>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    <span>89% usage</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Enhanced Other Newsletter Subscribe Block */}
        <section className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white p-8 rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-3">Love DSA? Explore More!</h3>
              <p className="text-xl text-white/90">
                Expand your programming knowledge with our specialized newsletters
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-white/95 backdrop-blur-sm text-gray-900 hover:bg-white transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <Code className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">System Design Weekly</h4>
                      <p className="text-gray-600">Master scalable architectures</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Learn how to design large-scale distributed systems with real-world examples from Netflix, Uber, and
                    other tech giants. Cover load balancing, databases, caching, and more.
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>📊 2.1K subscribers</span>
                      <span>⭐ 4.9/5 rating</span>
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                    Subscribe Free
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur-sm text-gray-900 hover:bg-white transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-orange-100 p-3 rounded-xl">
                      <MessageCircle className="h-8 w-8 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">Interview Prep Pro</h4>
                      <p className="text-gray-600">Behavioral + technical mastery</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Complete interview preparation covering behavioral questions, salary negotiation, offer evaluation,
                    and insider tips from hiring managers at top tech companies.
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>👥 1.8K subscribers</span>
                      <span>💰 +$50K avg increase</span>
                    </div>
                  </div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold">
                    Subscribe Free
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
                <div className="bg-green-600 p-2 rounded-lg">
                  <Code className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Krack The DSA</h4>
                  <p className="text-gray-400">Master algorithms weekly</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Join 5,247+ developers mastering data structures and algorithms through practical examples and expert
                guidance.
              </p>
            </div>

            <div>
              <h5 className="font-bold mb-4">Quick Links</h5>
              <div className="space-y-2 text-gray-300">
                <div>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Archive
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Community
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Challenges
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Success Stories
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-bold mb-4">Connect</h5>
              <div className="space-y-2 text-gray-300">
                <div>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Discord Community
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Twitter
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    LinkedIn
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Separator className="bg-gray-700 mb-6" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>5,247 subscribers</span>
              <span>•</span>
              <span>No spam, unsubscribe anytime</span>
              <span>•</span>
              <span>Weekly delivery</span>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                Update Preferences
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                Unsubscribe
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                View Online
              </Button>
            </div>
          </div>

          <div className="text-center mt-6 pt-6 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              © 2025 Krack The DSA. All rights reserved. |
              <a href="#" className="text-green-400 hover:underline ml-1">
                Privacy Policy
              </a>{" "}
              |
              <a href="#" className="text-green-400 hover:underline ml-1">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
