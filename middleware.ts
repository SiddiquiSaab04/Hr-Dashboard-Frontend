import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  // If the user is NOT logged in and tries to access a protected route → redirect to login
  if (!token && pathname.startsWith("/pages/home")) {
    return NextResponse.redirect(new URL("/pages/auth", request.url));
  }

  // If the user IS logged in and tries to go to the login page → redirect to home
  if (token && pathname.startsWith("/pages/auth")) {
    return NextResponse.redirect(new URL("/pages/home", request.url));
  }

  return NextResponse.next();
}

// Which routes this middleware runs on
export const config = {
  matcher: ["/pages/home/:path*", "/pages/auth"],
};

