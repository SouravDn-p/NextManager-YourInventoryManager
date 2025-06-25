import Link from "next/link";
import {
  Package,
  Users,
  ShoppingCart,
  TrendingUp,
  Plus,
  ArrowUpRight,
  Star,
  Zap,
  Shield,
  BarChart3,
} from "lucide-react";

// Inline Button Component with Dark Theme
const Button = ({
  children,
  className = "",
  variant = "default",
  size = "default",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform hover:scale-105";

  const variants = {
    default:
      "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl",
    outline:
      "border border-gray-600 bg-gray-800/50 text-gray-200 hover:bg-gray-700/50 backdrop-blur-sm",
    ghost: "hover:bg-gray-800/50 text-gray-300 hover:text-white",
    success:
      "bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 shadow-lg hover:shadow-xl",
  };

  const sizes = {
    default: "h-11 px-6 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-12 rounded-xl px-8",
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

// Inline Card Components with Dark Theme
const Card = ({ children, className = "", variant = "default", ...props }) => {
  const variants = {
    default:
      "rounded-2xl border border-gray-700/50 bg-gray-900/50 text-gray-100 shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all duration-300",
    gradient:
      "rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/30 text-gray-100 shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all duration-300",
    glass:
      "rounded-2xl bg-gray-900/30 border border-gray-700/30 text-gray-100 shadow-xl backdrop-blur-xl hover:shadow-2xl transition-all duration-300",
  };

  return (
    <div className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = "", ...props }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
    {children}
  </div>
);

const CardTitle = ({ children, className = "", ...props }) => (
  <h3
    className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
    {...props}
  >
    {children}
  </h3>
);

const CardDescription = ({ children, className = "", ...props }) => (
  <p className={`text-sm text-gray-400 ${className}`} {...props}>
    {children}
  </p>
);

const CardContent = ({ children, className = "", ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

const Badge = ({ children, className = "", variant = "default" }) => {
  const variants = {
    default: "bg-blue-500/20 text-blue-300 border border-blue-500/30",
    secondary: "bg-purple-500/20 text-purple-300 border border-purple-500/30",
    success: "bg-green-500/20 text-green-300 border border-green-500/30",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default function HomePage() {
  const stats = [
    {
      title: "Total Products",
      value: "1,234",
      description: "+20.1% from last month",
      icon: Package,
      color: "text-blue-400",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
      glowColor: "shadow-blue-500/20",
    },
    {
      title: "Active Users",
      value: "573",
      description: "+180.1% from last month",
      icon: Users,
      color: "text-purple-400",
      bgGradient: "from-purple-500/20 to-pink-500/20",
      glowColor: "shadow-purple-500/20",
    },
    {
      title: "Sales",
      value: "$12,234",
      description: "+19% from last month",
      icon: ShoppingCart,
      color: "text-green-400",
      bgGradient: "from-green-500/20 to-emerald-500/20",
      glowColor: "shadow-green-500/20",
    },
    {
      title: "Revenue",
      value: "$45,231",
      description: "+201 since last hour",
      icon: TrendingUp,
      color: "text-orange-400",
      bgGradient: "from-orange-500/20 to-red-500/20",
      glowColor: "shadow-orange-500/20",
    },
  ];

  const recentProducts = [
    {
      id: 1,
      name: "Wireless Headphones",
      stock: 45,
      price: "$99.99",
      status: "In Stock",
      trend: "up",
    },
    {
      id: 2,
      name: "Smart Watch",
      stock: 23,
      price: "$199.99",
      status: "Low Stock",
      trend: "down",
    },
    {
      id: 3,
      name: "Laptop Stand",
      stock: 67,
      price: "$49.99",
      status: "In Stock",
      trend: "up",
    },
    {
      id: 4,
      name: "USB-C Cable",
      stock: 156,
      price: "$19.99",
      status: "In Stock",
      trend: "up",
    },
  ];

  const features = [
    {
      title: "Smart Analytics",
      description:
        "Get real-time insights into your inventory performance with advanced analytics and reporting.",
      icon: BarChart3,
      color: "text-blue-400",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Automated Alerts",
      description:
        "Never run out of stock with intelligent alerts and automated reorder suggestions.",
      icon: Zap,
      color: "text-yellow-400",
      bgGradient: "from-yellow-500/20 to-orange-500/20",
    },
    {
      title: "Secure & Reliable",
      description:
        "Enterprise-grade security with 99.9% uptime guarantee and automatic backups.",
      icon: Shield,
      color: "text-green-400",
      bgGradient: "from-green-500/20 to-emerald-500/20",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-sm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-6 animate-pulse">
              <Star className="mr-1 h-3 w-3" />
              New Features Available
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Welcome to InventoryPro
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transform your inventory management with our cutting-edge platform
              designed for modern businesses
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link href="/products">
              <Button size="lg" className="group">
                <Package className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Explore Products
                <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="lg" variant="outline" className="group">
                <BarChart3 className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                View Dashboard
              </Button>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  variant="glass"
                  className={`text-center hover:shadow-2xl ${stat.glowColor} shadow-xl group cursor-pointer`}
                >
                  <CardContent className="p-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${stat.bgGradient} mx-auto mb-3 w-fit group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400">{stat.title}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto py-16 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Dashboard Overview */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Dashboard Overview
                </h2>
                <p className="mt-2 text-gray-400">
                  Monitor your inventory performance in real-time
                </p>
              </div>
              <Link href="/products/add">
                <Button variant="success" className="mt-4 md:mt-0">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Product
                </Button>
              </Link>
            </div>

            {/* Recent Products */}
            <Card variant="gradient" className="mb-12">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Package className="mr-2 h-6 w-6 text-blue-400" />
                      Recent Products
                    </CardTitle>
                    <CardDescription>
                      Latest items in your inventory
                    </CardDescription>
                  </div>
                  <Link href="/products">
                    <Button variant="outline" size="sm">
                      View All
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentProducts.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center justify-between p-4 border border-gray-700/50 rounded-xl hover:bg-gray-800/30 transition-all duration-300 group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center border border-gray-600/50">
                          <Package className="h-6 w-6 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="font-medium text-white group-hover:text-blue-300 transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-sm text-gray-400">
                            {product.stock} units in stock
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="font-medium text-green-400">
                            {product.price}
                          </p>
                          <Badge
                            variant={
                              product.status === "In Stock"
                                ? "success"
                                : "secondary"
                            }
                          >
                            {product.status}
                          </Badge>
                        </div>
                        <Link href={`/products/${product.id}`}>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
                Powerful Features
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Everything you need to manage your inventory efficiently and
                scale your business
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={index}
                    variant="glass"
                    className="text-center hover:shadow-2xl transition-all duration-500 group"
                  >
                    <CardHeader>
                      <div
                        className={`p-4 rounded-2xl bg-gradient-to-r ${feature.bgGradient} mx-auto mb-4 w-fit group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className={`h-8 w-8 ${feature.color}`} />
                      </div>
                      <CardTitle className="group-hover:text-blue-300 transition-colors">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-400 leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <Card variant="gradient" className="p-12">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  Ready to Transform Your Inventory?
                </h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Join thousands of businesses already using InventoryPro to
                  streamline their operations and boost productivity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/register">
                    <Button size="lg" variant="success">
                      <Plus className="mr-2 h-5 w-5" />
                      Get Started Free
                    </Button>
                  </Link>
                  <Link href="/products">
                    <Button size="lg" variant="outline">
                      <Package className="mr-2 h-5 w-5" />
                      Explore Features
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
}
