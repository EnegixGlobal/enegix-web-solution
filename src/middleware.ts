import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname

    const isPublicPath = path === "/admin-login" || path == "/admin-signup" || path == "/";

    const token = request.cookies.get("token")?.value || "";
  

    if (!token) {
        return NextResponse.redirect(new URL("/", request.nextUrl));
    }

    // If the user is authenticated, allow access to the requested page
    return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/profile/:path*",
    "/profile",
    "/login",
    "/signup",
    "/verifyemail"
  ]
}