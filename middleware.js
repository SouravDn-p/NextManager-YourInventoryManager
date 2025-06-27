// import { NextResponse } from "next/server";
// import { getToken } from "next-auth/jwt";

// const adminOnlyRoutes = ["/products/add", "/products/edit"];
// const authRequiredRoutes = ["/dashboard", "/profile", ...adminOnlyRoutes];

// export async function middleware(req) {
//   console.log("process.env.NEXTAUTH_SECRET", process.env.NEXTAUTH_SECRET);
//   const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
//   console.log("token", token);

//   // Not authenticated
//   if (!token) {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

//   const { pathname } = req.nextUrl;

//   // Admin-only routes
//   if (adminOnlyRoutes.includes(pathname)) {
//     if (token.role !== "admin") {
//       return NextResponse.redirect(new URL("/unauthorized", req.url));
//     }
//   }

//   // Authenticated routes (users or admins)
//   if (authRequiredRoutes.includes(pathname)) {
//     return NextResponse.next();
//   }

//   return NextResponse.next(); // allow everything else
// }

// export const config = {
//   matcher: ["/dashboard", "/profile", "/products/add", "/products/edit"],
// };

// middleware.js
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const adminOnlyRoutes = ["/products/add", "/products/edit"];
const authRequiredRoutes = ["/dashboard", "/profile", ...adminOnlyRoutes];

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // Redirect to login if not authenticated on protected pages
  if (authRequiredRoutes.some((route) => pathname.startsWith(route)) && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Admin-only routes check
  if (adminOnlyRoutes.some((route) => pathname.startsWith(route))) {
    if (token?.role !== "admin") {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*", "/products/add", "/products/edit"],
};
