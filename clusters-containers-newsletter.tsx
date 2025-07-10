import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Trophy,
  CheckCircle,
  Target,
  Zap,
  TrendingUp,
  Share2,
  Settings,
  Lightbulb,
  Mail,
  Rocket,
  Globe,
  Layers,
  Server,
  Container,
  Cloud,
  Shield,
  Database,
  Network,
  Cpu,
  HardDrive,
  Activity,
  Code2,
  ArrowRight,
} from "lucide-react"

export default function ClustersContainersNewsletter() {
  return (
    <div className="max-w-4xl mx-auto bg-white">
      {/* Enhanced Header with Gradient */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

        <div className="relative p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                <Container className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Clusters & Containers Weekly</h1>
                <p className="text-blue-100 text-lg">
                  Master Container Orchestration – Weekly Insights for DevOps & Cloud Engineers
                </p>
              </div>
            </div>
            <div className="text-right">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-sm px-4 py-2 mb-2">
                Issue #47 • June 15, 2025
              </Badge>
              <p className="text-blue-100 text-sm">Weekly Delivery</p>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold">20K+</div>
              <div className="text-blue-100 text-sm">Cloud Engineers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">73%</div>
              <div className="text-blue-100 text-sm">Efficiency Boost</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-blue-100 text-sm">Actionable</div>
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
              Welcome to this week's Clusters & Containers Weekly—your concise guide to Kubernetes, Docker, and
              cloud-native best practices. Join 20,000+ engineers mastering container orchestration with these
              bite-sized, actionable insights delivered straight to your inbox.
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-12">
        {/* This Week's Deep Dive */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Server className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">This Week's Deep Dive</h3>
              <p className="text-gray-600">Multi-Cluster Kubernetes Management</p>
            </div>
          </div>

          <Card className="border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardTitle className="text-2xl text-blue-800 flex items-center gap-3">
                <Cloud className="h-8 w-8" />
                Multi-Cluster Kubernetes Management
              </CardTitle>
              <p className="text-blue-600 font-medium">
                Unify clusters across AWS, GCP, and on-prem without sacrificing flexibility
              </p>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Overview:</strong> Managing a single Kubernetes cluster is one thing—handling multiple
                  clusters across AWS, GCP, and on-prem introduces new challenges. This week, learn how to unify your
                  clusters under a single control plane without sacrificing flexibility or security.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Target className="h-5 w-5 text-blue-600" />
                  What You'll Learn:
                </h4>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Cluster Federation Techniques</h5>
                      <p className="text-gray-600 text-sm">
                        Use Kubernetes operators (e.g., KubeFed) to synchronize workloads and policies across clusters.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">GitOps Workflows</h5>
                      <p className="text-gray-600 text-sm">
                        Automate multi-cluster deployments via Git repositories—describe multi-cluster changes in YAML
                        and let GitOps tools reconcile your state.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Centralized Observability</h5>
                      <p className="text-gray-600 text-sm">
                        Configure Prometheus and Grafana to scrape metrics from all clusters, set up cross-cluster
                        dashboards, and trigger alerts uniformly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="h-5 w-5 text-green-600" />
                    <h5 className="font-semibold text-green-800">Key Technique</h5>
                  </div>
                  <p className="text-green-700 text-sm">Cluster federation with Kubernetes operators</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    <h5 className="font-semibold text-blue-800">Results</h5>
                  </div>
                  <p className="text-blue-700 text-sm">
                    73% reduction in operational overhead by eliminating manual sync steps
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Kubernetes Updates */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-indigo-100 p-2 rounded-lg">
              <Settings className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Kubernetes Updates</h3>
              <p className="text-gray-600">Latest features and API changes</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-green-100 text-green-800">v1.27 Release</Badge>
                </div>
                <CardTitle className="text-lg">Release Highlights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Server-Side Apply GA</p>
                      <p className="text-xs text-gray-600">
                        Declarative object management with field ownership tracking
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">CRI Expansions</p>
                      <p className="text-xs text-gray-600">Improved stability for containerd and CRI-O</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Pod Security Admission</p>
                      <p className="text-xs text-gray-600">Built-in policies for namespace isolation</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-blue-100 text-blue-800">API Changes</Badge>
                </div>
                <CardTitle className="text-lg">Version Updates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Ingress v1 GA</p>
                      <p className="text-xs text-gray-600">Deprecates networking.k8s.io/v1beta1</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Storage Enhancements</p>
                      <p className="text-xs text-gray-600">CSI ephemeral inline volumes reach beta</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-purple-100 text-purple-800">Roadmap</Badge>
                </div>
                <CardTitle className="text-lg">Future Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Rocket className="h-4 w-4 text-purple-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Workload Identity v1</p>
                      <p className="text-xs text-gray-600">Built-in ServiceAccount to Cloud IAM binding</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Rocket className="h-4 w-4 text-purple-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Topology-Aware Scheduling</p>
                      <p className="text-xs text-gray-600">Improved pod placement across zones</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Docker Techniques */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-cyan-100 p-2 rounded-lg">
              <Container className="h-6 w-6 text-cyan-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Docker Techniques</h3>
              <p className="text-gray-600">Optimize your container builds and security</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-cyan-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Layers className="h-5 w-5 text-cyan-600" />
                  Multi-Stage Builds
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Separate "build" and "runtime" stages to strip out compilers and SDKs. Achieve lean final images
                  (under 100 MB) by copying only binaries and minimal configs.
                </p>
                <div className="bg-gray-900 p-3 rounded text-xs font-mono text-green-400">
                  <div>FROM node:16 AS builder</div>
                  <div>COPY . .</div>
                  <div>RUN npm run build</div>
                  <div className="mt-2">FROM node:16-alpine</div>
                  <div>COPY --from=builder /app/dist .</div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Zap className="h-5 w-5 text-blue-600" />
                  BuildKit Caching
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Use inline caching with --cache-to and --cache-from flags to speed up CI pipelines. Leverage remote
                  cache registries for cross-pipeline reuse.
                </p>
                <div className="bg-gray-900 p-3 rounded text-xs font-mono text-blue-400">
                  <div>docker buildx build \</div>
                  <div> --cache-from=type=registry,ref=myapp:cache \</div>
                  <div> --cache-to=type=registry,ref=myapp:cache</div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-red-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Shield className="h-5 w-5 text-red-600" />
                  Runtime Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Run containers with non-root user and drop capabilities. Integrate Docker Bench for Security in your
                  pipeline to detect misconfigurations automatically.
                </p>
                <div className="bg-gray-900 p-3 rounded text-xs font-mono text-red-400">
                  <div>USER 1001</div>
                  <div>RUN adduser --disabled-password app</div>
                  <div>--cap-drop=ALL --cap-add=NET_BIND_SERVICE</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Performance Insights */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-green-100 p-2 rounded-lg">
              <Activity className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Performance Insights</h3>
              <p className="text-gray-600">Optimize your cluster performance</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  HPA Tuning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Adjust CPU/memory thresholds to avoid thrashing—set targetCPUUtilizationPercentage to 60% for bursty
                  workloads. Combine with custom metrics for intelligent autoscaling.
                </p>
                <div className="bg-yellow-50 p-2 rounded text-xs">
                  <span className="font-semibold">Tip:</span> Use request latency metrics for better scaling decisions
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-600" />
                  Pod Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Define topologySpreadConstraints to evenly spread pods across Availability Zones. Prevent
                  "hot-spotting" by targeting zones with lower resource pressure.
                </p>
                <div className="bg-blue-50 p-2 rounded text-xs">
                  <span className="font-semibold">Best Practice:</span> Use node-affinity for zone distribution
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-purple-600" />
                  QoS Classes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Assign requests and limits diligently. Aim for Guaranteed QoS for critical services, Burstable for
                  non-critical, and BestEffort only for low-priority tasks.
                </p>
                <div className="bg-purple-50 p-2 rounded text-xs">
                  <span className="font-semibold">Warning:</span> Pods with no limits can evict others unpredictably
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
              <p className="text-gray-600">Essential practices for daily operations</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: Code2,
                title: "YAML DRY Practices",
                tip: "Use kustomize or Helm's values.yaml to avoid copy-pasting manifests across environments.",
                color: "blue",
              },
              {
                icon: Network,
                title: "Namespace Segmentation",
                tip: "Isolate dev, staging, and prod in separate namespaces—apply network policies per namespace for micro-segmentation.",
                color: "green",
              },
              {
                icon: Database,
                title: "Etcd Backup Frequency",
                tip: "Schedule daily snapshots of etcd to S3 (or GCS) to ensure you can recover control plane state rapidly.",
                color: "purple",
              },
              {
                icon: Settings,
                title: "Automate Node Upgrades",
                tip: "Use kubectl cordon + drain with maxUnavailable: 1 to gracefully upgrade clusters with zero downtime.",
                color: "orange",
              },
              {
                icon: HardDrive,
                title: "Registry Mirroring",
                tip: "Mirror Docker Hub to a private registry (e.g., Harbor) to reduce pull latency and avoid rate limits.",
                color: "red",
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

        {/* Mini Challenge */}
        <section className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-orange-100 p-2 rounded-lg">
              <Trophy className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Mini Challenge</h3>
              <p className="text-gray-600">Build a Cross-Cluster Rollout Plan</p>
            </div>
          </div>

          <Card className="bg-white border-2 border-orange-200">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h4 className="text-xl font-bold mb-2">Cross-Cluster Deployment Strategy</h4>
                  <p className="text-gray-600">
                    Draft a step-by-step plan to deploy version 2.0 of your app to three clusters (AWS, GCP, on-prem)
                    using GitOps
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-1 gap-6">
                <div>
                  <h5 className="font-semibold mb-3 flex items-center gap-2">
                    <Target className="h-4 w-4 text-orange-600" />
                    Requirements:
                  </h5>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span className="text-sm">Outline which Git branches map to which clusters</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span className="text-sm">Handle environment-specific tweaks (secrets, config)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span className="text-sm">Define rollback strategy</span>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2 flex items-center gap-2">
                    <Mail className="h-4 w-4 text-orange-600" />
                    How to Submit:
                  </h5>
                  <p className="text-sm text-gray-600 mb-3">
                    Reply with your YAML snippets and pipeline sequence. The clearest, most reusable plan wins community
                    kudos!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action & Share */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Spread the Container Knowledge! 🚀</h3>
            <p className="text-lg text-blue-100 mb-6">
              Know a peer tackling multi-cluster complexity? Forward this email so they can subscribe free—no spam,
              unsubscribe anytime.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Share2 className="h-8 w-8 mx-auto mb-3 text-white" />
                  <h4 className="font-bold mb-2">Share with Peers</h4>
                  <p className="text-sm text-blue-100 mb-4">Help others master container orchestration</p>
                  <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                    Forward Email
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 mx-auto mb-3 text-white" />
                  <h4 className="font-bold mb-2">Join Our Community</h4>
                  <p className="text-sm text-blue-100 mb-4">Reply "SUBSCRIBE" to join 20,000+ cloud engineers</p>
                  <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
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
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Container className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Clusters & Containers</h4>
                  <p className="text-gray-400">Weekly insights</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Empowering 20,000+ DevOps and cloud engineers to master container orchestration with actionable insights
                and best practices.
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
                    Docker Best Practices
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
                    Slack Community
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
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Separator className="bg-gray-700 mb-6" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>20,000+ subscribers</span>
              <span>•</span>
              <span>Weekly delivery</span>
              <span>•</span>
              <span>No spam guarantee</span>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                Update Preferences
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                Unsubscribe
              </Button>
            </div>
          </div>

          <div className="text-center mt-6 pt-6 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              © 2025 Clusters & Containers Weekly. All rights reserved. |
              <a href="#" className="text-blue-400 hover:underline ml-1">
                Privacy Policy
              </a>{" "}
              |
              <a href="#" className="text-blue-400 hover:underline ml-1">
                Terms of Service
              </a>{" "}
              |
              <a href="#" className="text-blue-400 hover:underline ml-1">
                Contact Us
              </a>
            </p>
            <p className="text-gray-500 text-xs mt-2">
              You're receiving this because you subscribed at clusterscontainers.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
