import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Server,
  Cloud,
  Code,
  Database,
  Settings,
  DollarSign,
  GitBranch,
  BarChart,
  CheckCircle,
  Cpu,
  Network,
  Share2,
  Mail,
  FileCode,
  Layers,
  Globe,
  Trophy,
} from "lucide-react"

export default function DevsOnCloudNewsletter() {
  return (
    <div className="max-w-4xl mx-auto bg-white">
      {/* Header with Gradient */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

        <div className="relative p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                <Cloud className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Devs On Cloud</h1>
                <p className="text-blue-100 text-lg">
                  Master Cloud Architecture & DevOps – Weekly Insights for Engineers
                </p>
              </div>
            </div>
            <div className="text-right">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-sm px-4 py-2 mb-2">
                Issue #47 • June 15, 2025
              </Badge>
              <p className="text-blue-100 text-sm">Every Friday</p>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold">4,200+</div>
              <div className="text-blue-100 text-sm">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">89%</div>
              <div className="text-blue-100 text-sm">Open Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">47</div>
              <div className="text-blue-100 text-sm">Issues Published</div>
            </div>
          </div>
        </div>
      </div>

      {/* Greeting Section */}
      <div className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-b-2 border-blue-100">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500 p-3 rounded-full">
            <Mail className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Hello [First Name] 👋</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Welcome to this week's Devs On Cloud—your essential digest of cloud infrastructure, DevOps best practices,
              and production deployment strategies. Delivered every Friday to 4,200+ cloud engineers and DevOps
              professionals—no spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-12">
        {/* Featured Tutorial */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Server className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Featured Tutorial</h3>
              <p className="text-gray-600">Production-Ready Kubernetes Deployment</p>
            </div>
          </div>

          <Card className="border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardTitle className="text-2xl text-blue-800 flex items-center gap-3">
                <Cpu className="h-7 w-7" />
                Production-Ready Kubernetes Deployment
              </CardTitle>
              <p className="text-blue-600 font-medium">
                Dive deep into production-grade Kubernetes setups used by Netflix and Spotify
              </p>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Overview:</strong> Understand how to configure high-availability control planes, implement
                  Blue/Green rollouts, and enforce resource quotas to prevent noisy neighbors.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Network className="h-5 w-5 text-blue-600" />
                  Core Sections:
                </h4>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Cluster Topology & Control Plane HA</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                        <li>Use five-node etcd clusters with multi-zone replicas</li>
                        <li>
                          Configure kube-apiserver and kube-controller-manager behind a load balancer for zero-downtime
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Blue/Green Deployment Patterns</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                        <li>Create separate "blue" and "green" namespaces</li>
                        <li>Switch service endpoints via immutable Service objects—eliminate DNS propagation delays</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Monitoring & Alerting</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                        <li>Deploy Prometheus Operator with node-exporter sidecars</li>
                        <li>Define SLO-driven alerts (e.g., P95 latency, pod restarts)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Disaster Recovery</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                        <li>Take periodic etcd snapshots to S3 with velero</li>
                        <li>Automate restore drills: schedule quarterly cluster failovers into a "warm" DR region</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-green-800 mb-1">Key Takeaway</h5>
                    <p className="text-green-700 text-sm">
                      Production readiness isn't just about uptime—it's enforcing guardrails (quotas, RBAC),
                      observability (SLOs, dashboards), and scripted DR drills to catch issues before they happen.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Quick Tips */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-green-100 p-2 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Quick Tips</h3>
              <p className="text-gray-600">Essential practices for cloud engineers</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Database className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Terraform State Locking</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Always enable DynamoDB state locking when using Terraform with AWS to prevent concurrent apply
                      conflicts.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-indigo-100 p-2 rounded-lg">
                    <GitBranch className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Immutable Docker Tags</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      In your CI/CD pipeline, tag images with the Git commit SHA (e.g., myapp:abc1234) rather than
                      latest—ensures reproducible rollbacks.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Layers className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Namespace Resource Quotas</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Define ResourceQuota objects per namespace—limit CPU to 10 cores and RAM to 32 GiB to avoid "noisy
                      neighbor" issues across teams.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <BarChart className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">CI/CD Canary Analysis</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Integrate automated canary analysis (e.g., Flagger + Prometheus) to compare baseline vs. canary
                      metrics for 5 minutes before promoting.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 md:col-span-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <DollarSign className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Cost Alert Automation</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Use AWS Budgets with SNS to trigger Slack notifications when monthly spend exceeds 80% of budgeted
                      costs—catch runaway resources early.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tool Spotlight */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-indigo-100 p-2 rounded-lg">
              <Settings className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Tool Spotlight</h3>
              <p className="text-gray-600">Essential tools for modern cloud infrastructure</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Cloud className="h-5 w-5 text-blue-600" />
                  Terraform Cloud
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Manage remote state, policy checks, and team permissions from a single SaaS dashboard. Built-in
                  Sentinel policies let you enforce tagging and instance-type rules before any apply.
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Globe className="h-3 w-3" />
                  <a href="#" className="text-blue-600 hover:underline">
                    terraform.io/cloud
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-green-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <GitBranch className="h-5 w-5 text-green-600" />
                  Flux CD
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Lightweight GitOps operator for Kubernetes—automatically reconcile your cluster to Git commits. Use
                  Kustomize overlays per environment for staging vs. production.
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Globe className="h-3 w-3" />
                  <a href="#" className="text-green-600 hover:underline">
                    fluxcd.io
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-purple-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <BarChart className="h-5 w-5 text-purple-600" />
                  Grafana Loki
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Scalable, cost-efficient log aggregation that indexes only metadata. Pair with Tempo for distributed
                  tracing to get end-to-end observability across microservices.
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Globe className="h-3 w-3" />
                  <a href="#" className="text-purple-600 hover:underline">
                    grafana.com/loki
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Mini Challenge */}
        <section className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-orange-100 p-2 rounded-lg">
              <Code className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Mini Challenge</h3>
              <p className="text-gray-600">"Automate a Blue/Green Rollout"</p>
            </div>
          </div>

          <Card className="bg-white border-2 border-orange-200">
            <CardContent className="p-6">
              <div className="flex items-start mb-6">
                <div>
                  <h4 className="text-xl font-bold mb-2">Automate a Blue/Green Rollout</h4>
                  <p className="text-gray-600">
                    In your Kubernetes cluster, configure two namespaces (blue, green) and a single Service to switch
                    traffic with zero downtime.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold mb-3 flex items-center gap-2">
                    <FileCode className="h-4 w-4 text-orange-600" />
                    Deliverable:
                  </h5>
                  <p className="text-sm text-gray-600">
                    Submit a short YAML snippet showing the Deployment and Service objects before/after the switch.
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2 flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-orange-600" />
                    Share Your Solution:
                  </h5>
                  <p className="text-sm text-gray-600 mb-3">
                    The most elegant, comment-driven YAML gets featured in next week's issue.
                  </p>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">Submit Your Solution</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action & Share */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Spread the Knowledge! 🚀</h3>
            <p className="text-lg text-blue-100 mb-6">
              Know a fellow cloud enthusiast? Forward this email so they can subscribe free—no spam, unsubscribe
              anytime.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Share2 className="h-8 w-8 mx-auto mb-3 text-white" />
                  <h4 className="font-bold mb-2">Share with Colleagues</h4>
                  <p className="text-sm text-blue-100 mb-4">Help others master cloud architecture & DevOps</p>
                  <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                    Forward Email
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 mx-auto mb-3 text-white" />
                  <h4 className="font-bold mb-2">Not Subscribed Yet?</h4>
                  <p className="text-sm text-blue-100 mb-4">Join 4,200+ cloud engineers</p>
                  <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
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
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Cloud className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Devs On Cloud</h4>
                  <p className="text-gray-400">Weekly insights</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Empowering 4,200+ cloud engineers and DevOps professionals with actionable insights and best practices.
              </p>
            </div>

            <div>
              <h5 className="font-bold mb-4">Resources</h5>
              <div className="space-y-2 text-gray-300">
                <div>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Archive
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Kubernetes Guides
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    AWS Best Practices
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Community Forum
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-bold mb-4">Connect</h5>
              <div className="space-y-2 text-gray-300">
                <div>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Discord Community
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Twitter
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    LinkedIn
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Separator className="bg-gray-700 mb-6" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>4,200+ subscribers</span>
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
            <p className="text-gray-400 text-sm">© 2025 Devs On Cloud. All rights reserved.</p>
            <p className="text-gray-500 text-xs mt-2">
              You're receiving this because you subscribed at devsoncloud.com
            </p>
            <p className="text-gray-500 text-xs mt-1">To unsubscribe, reply "UNSUBSCRIBE."</p>
          </div>
        </div>
      </div>
    </div>
  )
}
