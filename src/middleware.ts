import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname

    const isPublicPath = path === "/admin-login" || path == "/admin-signup" || path == "/";

    const token = request.cookies.get("token")?.value || "";
  
   console.log(token)
    
    if (!token) {
        return NextResponse.redirect(new URL("/admin-login", request.nextUrl));
    }

    

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