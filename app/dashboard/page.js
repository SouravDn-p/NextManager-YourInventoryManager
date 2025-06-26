"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import {
  Package,
  TrendingUp,
  AlertTriangle,
  Users,
  DollarSign,
  Eye,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Filter,
  Zap,
  Star,
  Activity,
  Shield,
  Settings,
  BarChart3,
  ShoppingCart,
  Clock,
  CheckCircle,
  Edit,
} from "lucide-react";
import Image from "next/image";

// Enhanced Inline Components with Dark Theme (keep existing components)
const Button = ({
  children,
  className = "",
  variant = "default",
  size = "default",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 transform hover:scale-105";

  const variants = {
    default:
      "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl",
    outline:
      "border border-gray-600 bg-gray-800/50 text-gray-200 hover:bg-gray-700/50 backdrop-blur-sm",
    ghost: "hover:bg-gray-800/50 text-gray-300 hover:text-white",
    gradient:
      "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl",
    admin:
      "bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-700 hover:to-orange-700 shadow-lg hover:shadow-xl",
  };

  const sizes = {
    default: "h-11 px-6 py-2",
    sm: "h-9 rounded-lg px-4",
    lg: "h-12 rounded-xl px-8",
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

const Card = ({ children, className = "", variant = "default", ...props }) => {
  const variants = {
    default:
      "rounded-2xl border border-gray-700/50 bg-gray-900/50 text-gray-100 shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all duration-300",
    gradient:
      "rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/30 text-gray-100 shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all duration-300",
    glass:
      "rounded-2xl bg-gray-900/30 border border-gray-700/30 text-gray-100 shadow-xl backdrop-blur-xl hover:shadow-2xl transition-all duration-300",
    admin:
      "rounded-2xl bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/30 text-gray-100 shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all duration-300",
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
    className={`text-lg font-semibold leading-none tracking-tight ${className}`}
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
    secondary: "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30",
    destructive: "bg-red-500/20 text-red-300 border border-red-500/30",
    success: "bg-green-500/20 text-green-300 border border-green-500/30",
    purple: "bg-purple-500/20 text-purple-300 border border-purple-500/30",
    admin: "bg-red-500/20 text-red-300 border border-red-500/30",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const [timeRange, setTimeRange] = useState("7d");
  console.log("status", status);

  // Loading state
  if (status === "loading") {
    console.log(status)
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-blue-400 text-lg">⏳ Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  // Unauthenticated state
  if (!session) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <Card variant="glass" className="p-8 text-center max-w-md">
          <div className="mb-6">
            <Shield className="h-16 w-16 text-red-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">
              Access Denied
            </h2>
            <p className="text-red-400 text-lg">❌ You are not logged in.</p>
            <p className="text-gray-400 mt-2">
              Please sign in to access your dashboard.
            </p>
          </div>
          <Link href="/login">
            <Button variant="default" className="w-full cursor-pointer">
              Sign In
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

  // Extract user data from session
  const { name, email, role, image } = session.user;
  const isAdmin = role === "admin";

  // Mock data with enhanced styling - adjust based on user role
  const stats = isAdmin
    ? [
        {
          title: "Total Products",
          value: "1,234",
          change: "+12%",
          trend: "up",
          icon: Package,
          color: "text-blue-400",
          bgGradient: "from-blue-500/20 to-cyan-500/20",
          glowColor: "shadow-blue-500/20",
        },
        {
          title: "Total Revenue",
          value: "$45,231",
          change: "+8.2%",
          trend: "up",
          icon: DollarSign,
          color: "text-green-400",
          bgGradient: "from-green-500/20 to-emerald-500/20",
          glowColor: "shadow-green-500/20",
        },
        {
          title: "Active Users",
          value: "573",
          change: "+18%",
          trend: "up",
          icon: Users,
          color: "text-purple-400",
          bgGradient: "from-purple-500/20 to-pink-500/20",
          glowColor: "shadow-purple-500/20",
        },
        {
          title: "Low Stock Items",
          value: "23",
          change: "-4%",
          trend: "down",
          icon: AlertTriangle,
          color: "text-orange-400",
          bgGradient: "from-orange-500/20 to-red-500/20",
          glowColor: "shadow-orange-500/20",
        },
      ]
    : [
        {
          title: "My Products",
          value: "45",
          change: "+3%",
          trend: "up",
          icon: Package,
          color: "text-blue-400",
          bgGradient: "from-blue-500/20 to-cyan-500/20",
          glowColor: "shadow-blue-500/20",
        },
        {
          title: "Orders Processed",
          value: "128",
          change: "+12%",
          trend: "up",
          icon: ShoppingCart,
          color: "text-green-400",
          bgGradient: "from-green-500/20 to-emerald-500/20",
          glowColor: "shadow-green-500/20",
        },
        {
          title: "Tasks Completed",
          value: "89%",
          change: "+5%",
          trend: "up",
          icon: CheckCircle,
          color: "text-purple-400",
          bgGradient: "from-purple-500/20 to-pink-500/20",
          glowColor: "shadow-purple-500/20",
        },
        {
          title: "Efficiency Score",
          value: "94.5%",
          change: "+2%",
          trend: "up",
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
      category: "Electronics",
      stock: 45,
      price: 99.99,
      status: "In Stock",
      lastUpdated: "2 hours ago",
      trend: "up",
    },
    {
      id: 2,
      name: "Smart Watch",
      category: "Electronics",
      stock: 12,
      price: 199.99,
      status: "Low Stock",
      lastUpdated: "4 hours ago",
      trend: "down",
    },
    {
      id: 3,
      name: "Laptop Stand",
      category: "Accessories",
      stock: 67,
      price: 49.99,
      status: "In Stock",
      lastUpdated: "1 day ago",
      trend: "up",
    },
    {
      id: 4,
      name: "USB-C Cable",
      category: "Accessories",
      stock: 0,
      price: 19.99,
      status: "Out of Stock",
      lastUpdated: "2 days ago",
      trend: "down",
    },
  ];

  const recentActivity = isAdmin
    ? [
        {
          id: 1,
          action: "New user registered",
          item: "john.doe@example.com",
          user: "System",
          time: "10 minutes ago",
          type: "user",
        },
        {
          id: 2,
          action: "Product inventory updated",
          item: "Wireless Mouse",
          user: "Jane Smith",
          time: "1 hour ago",
          type: "update",
        },
        {
          id: 3,
          action: "System backup completed",
          item: "Daily Backup",
          user: "System",
          time: "3 hours ago",
          type: "system",
        },
        {
          id: 4,
          action: "Low stock alert triggered",
          item: "Phone Charger",
          user: "System",
          time: "5 hours ago",
          type: "alert",
        },
      ]
    : [
        {
          id: 1,
          action: "Product Added",
          item: "Bluetooth Speaker",
          user: name || "You",
          time: "10 minutes ago",
          type: "add",
        },
        {
          id: 2,
          action: "Stock Updated",
          item: "Wireless Mouse",
          user: name || "You",
          time: "1 hour ago",
          type: "update",
        },
        {
          id: 3,
          action: "Order Processed",
          item: "Order #12345",
          user: name || "You",
          time: "3 hours ago",
          type: "order",
        },
        {
          id: 4,
          action: "Profile Updated",
          item: "Contact Information",
          user: name || "You",
          time: "1 day ago",
          type: "profile",
        },
      ];

  const topCategories = [
    { name: "Electronics", count: 456, percentage: 37, color: "bg-blue-500" },
    { name: "Accessories", count: 234, percentage: 19, color: "bg-purple-500" },
    { name: "Furniture", count: 189, percentage: 15, color: "bg-green-500" },
    { name: "Clothing", count: 167, percentage: 14, color: "bg-yellow-500" },
    { name: "Books", count: 188, percentage: 15, color: "bg-pink-500" },
  ];

  const getStatusVariant = (status) => {
    switch (status) {
      case "In Stock":
        return "success";
      case "Low Stock":
        return "secondary";
      case "Out of Stock":
        return "destructive";
      default:
        return "default";
    }
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case "add":
        return <Plus className="h-4 w-4 text-green-400" />;
      case "update":
        return <Edit className="h-4 w-4 text-blue-400" />;
      case "order":
        return <ShoppingCart className="h-4 w-4 text-purple-400" />;
      case "profile":
        return <Users className="h-4 w-4 text-orange-400" />;
      case "user":
        return <Users className="h-4 w-4 text-green-400" />;
      case "system":
        return <Settings className="h-4 w-4 text-blue-400" />;
      case "alert":
        return <AlertTriangle className="h-4 w-4 text-orange-400" />;
      default:
        return <Package className="h-4 w-4 text-gray-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto py-8 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Header with User Info */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
              <div className="flex items-center space-x-4 mb-2">
                <Image
                  src={image || "/placeholder.svg?height=60&width=60"}
                  alt="User avatar"
                  width={500}
                  height={500}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-600"
                />
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Welcome back, {name || "User"}!
                  </h1>
                  <div className="flex items-center space-x-3 mt-1">
                    <p className="text-gray-400">{email}</p>
                    <Badge
                      variant={isAdmin ? "admin" : "default"}
                      className="text-xs"
                    >
                      <Shield className="mr-1 h-3 w-3" />
                      {role?.toUpperCase() || "USER"}
                    </Badge>
                  </div>
                </div>
              </div>
              <p className="text-gray-400">
                {isAdmin
                  ? "Admin Dashboard - Manage your entire inventory system"
                  : "Your personal inventory dashboard"}
              </p>
            </div>
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-gray-400" />
                <select
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                  className="bg-gray-800/50 border border-gray-600 rounded-lg px-3 py-2 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
                >
                  <option value="7d">Last 7 days</option>
                  <option value="30d">Last 30 days</option>
                  <option value="90d">Last 90 days</option>
                </select>
              </div>
              {isAdmin ? (
                <Link href="/products">
                  <Button variant="admin">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Product
                  </Button>
                </Link>
              ) : (
                <Link href="/products">
                  <Button variant="gradient">
                    <Eye className="mr-2 h-4 w-4" />
                    View Products
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className={`hover:shadow-2xl ${stat.glowColor} shadow-xl group cursor-pointer`}
                >
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-300">
                      {stat.title}
                    </CardTitle>
                    <div
                      className={`p-2 rounded-xl bg-gradient-to-r ${stat.bgGradient} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`h-5 w-5 ${stat.color}`} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="flex items-center text-xs">
                      {stat.trend === "up" ? (
                        <ArrowUpRight className="h-3 w-3 text-green-400 mr-1" />
                      ) : (
                        <ArrowDownRight className="h-3 w-3 text-red-400 mr-1" />
                      )}
                      <span
                        className={
                          stat.trend === "up"
                            ? "text-green-400"
                            : "text-red-400"
                        }
                      >
                        {stat.change}
                      </span>
                      <span className="ml-1 text-gray-400">
                        from last period
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Recent Products */}
            <div className="lg:col-span-2">
              <Card variant="gradient">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center">
                        <Activity className="mr-2 h-5 w-5 text-blue-400" />
                        {isAdmin ? "Recent Products" : "Your Recent Products"}
                      </CardTitle>
                      <CardDescription>
                        {isAdmin
                          ? "Latest updates to the inventory"
                          : "Products you've recently worked with"}
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
                              {product.category}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <p className="font-medium text-green-400">
                              ${product.price}
                            </p>
                            <p className="text-sm text-gray-400">
                              {product.stock} units
                            </p>
                          </div>
                          <Badge variant={getStatusVariant(product.status)}>
                            {product.status}
                          </Badge>
                          <Link href={`/products/${product.id}`}>
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Top Categories or User Tools */}
            <div>
              {isAdmin ? (
                <Card variant="glass">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Star className="mr-2 h-5 w-5 text-yellow-400" />
                      Top Categories
                    </CardTitle>
                    <CardDescription>Products by category</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {topCategories.map((category, index) => (
                        <div key={index} className="group">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-200">
                              {category.name}
                            </span>
                            <span className="text-sm text-gray-400">
                              {category.count}
                            </span>
                          </div>
                          <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                            <div
                              className={`${category.color} h-3 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg`}
                              style={{ width: `${category.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card variant="glass">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Settings className="mr-2 h-5 w-5 text-blue-400" />
                      Quick Actions
                    </CardTitle>
                    <CardDescription>Your most used tools</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Link href="/products" className="block">
                        <Button
                          variant="outline"
                          className="w-full justify-start"
                        >
                          <Package className="mr-2 h-4 w-4" />
                          View Products
                        </Button>
                      </Link>
                      <Link href="/profile" className="block">
                        <Button
                          variant="outline"
                          className="w-full justify-start"
                        >
                          <Users className="mr-2 h-4 w-4" />
                          Update Profile
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                      >
                        <BarChart3 className="mr-2 h-4 w-4" />
                        View Reports
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                      >
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Recent Activity */}
          <Card variant="gradient">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center">
                    <Zap className="mr-2 h-5 w-5 text-yellow-400" />
                    {isAdmin ? "System Activity" : "Your Recent Activity"}
                  </CardTitle>
                  <CardDescription>
                    {isAdmin
                      ? "Latest system events and user actions"
                      : "Your recent actions and updates"}
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center space-x-4 p-4 border border-gray-700/50 rounded-xl hover:bg-gray-800/30 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg bg-gray-800/50">
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-white">
                            {activity.action}
                          </p>
                          <p className="text-sm text-gray-400">
                            {activity.item} by {activity.user}
                          </p>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-3 w-3 mr-1" />
                          {activity.time}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
