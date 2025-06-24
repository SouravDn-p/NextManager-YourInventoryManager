import Link from "next/link";
import { Package, Users, ShoppingCart, TrendingUp, Plus } from "lucide-react";

// Inline Button Component
const Button = ({
  children,
  className = "",
  variant = "default",
  size = "default",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 bg-white hover:bg-gray-50",
    ghost: "hover:bg-gray-100",
  };

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

// Inline Card Components
const Card = ({ children, className = "", ...props }) => (
  <div
    className={`rounded-lg border bg-white text-gray-900 shadow-sm ${className}`}
    {...props}
  >
    {children}
  </div>
);

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
  <p className={`text-sm text-gray-600 ${className}`} {...props}>
    {children}
  </p>
);

const CardContent = ({ children, className = "", ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

export default function HomePage() {
  const stats = [
    {
      title: "Total Products",
      value: "1,234",
      description: "+20.1% from last month",
      icon: Package,
    },
    {
      title: "Active Users",
      value: "573",
      description: "+180.1% from last month",
      icon: Users,
    },
    {
      title: "Sales",
      value: "$12,234",
      description: "+19% from last month",
      icon: ShoppingCart,
    },
    {
      title: "Revenue",
      value: "$45,231",
      description: "+201 since last hour",
      icon: TrendingUp,
    },
  ];

  const recentProducts = [
    { id: 1, name: "Wireless Headphones", stock: 45, price: "$99.99" },
    { id: 2, name: "Smart Watch", stock: 23, price: "$199.99" },
    { id: 3, name: "Laptop Stand", stock: 67, price: "$49.99" },
    { id: 4, name: "USB-C Cable", stock: 156, price: "$19.99" },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to InventoryPro
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Streamline your inventory management with our powerful platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Package className="mr-2 h-5 w-5" />
                View Products
              </Button>
            </Link>
            <Link href="/register">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Dashboard Overview
              </h2>
              <p className="mt-2 text-gray-600">
                Here's what's happening with your inventory today.
              </p>
            </div>
            <Link href="/products">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Product
              </Button>
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {stat.title}
                    </CardTitle>
                    <Icon className="h-4 w-4 text-gray-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className="text-xs text-gray-500">{stat.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Recent Products */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Recent Products</CardTitle>
              <CardDescription>
                Latest items added to your inventory
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div>
                      <h3 className="font-medium">{product.name}</h3>
                      <p className="text-sm text-gray-500">
                        Stock: {product.stock} units
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{product.price}</p>
                      <Link href={`/products/${product.id}`}>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Features Section */}
          <section className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Package className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Product Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Easily manage your product catalog with detailed information,
                  images, and categorization.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Analytics & Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get insights into your inventory performance with detailed
                  analytics and custom reports.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Team Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Work together with your team using role-based access and
                  real-time collaboration features.
                </CardDescription>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
}
