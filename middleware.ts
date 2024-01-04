import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

interface CustomRequestCookies {
  token?: string;
}

export function middleware(request: NextRequest & { cookies: CustomRequestCookies }) {
  const path = request.nextUrl.pathname;
  const isAuthPath = path === "/auth";

  const token = request.cookies.get('token')?.value || '';


      if(!token && !isAuthPath){
      const authRedirectURL = new URL('/auth', request.nextUrl).href;
      return NextResponse.redirect(authRedirectURL); 
    }
    if (token && isAuthPath) {
      const authRedirectURL = new URL('/dashboards', request.nextUrl).href;
      return NextResponse.redirect(authRedirectURL);  
    }
    if (token && isAuthPath) {
      const authRedirectURL = new URL('/tables', request.nextUrl).href;
      return NextResponse.redirect(authRedirectURL);  
    }
    if (token && isAuthPath) {
      const authRedirectURL = new URL('/forms', request.nextUrl).href;
      return NextResponse.redirect(authRedirectURL);  
    }
    if (token && isAuthPath) {
      const authRedirectURL = new URL('/signup', request.nextUrl).href;
      return NextResponse.redirect(authRedirectURL);  
    } 
    if (token && isAuthPath) {
      const authRedirectURL = new URL('/faq', request.nextUrl).href;
      return NextResponse.redirect(authRedirectURL);  
    }
    if (token && isAuthPath) {
      const authRedirectURL = new URL('/role&permissions', request.nextUrl).href;
      return NextResponse.redirect(authRedirectURL);  
    }
    if (token && isAuthPath) {
      const authRedirectURL = new URL('/editor', request.nextUrl).href;
      return NextResponse.redirect(authRedirectURL);  
    }
    if (token && isAuthPath) {
      const authRedirectURL = new URL('/kanban', request.nextUrl).href;
      return NextResponse.redirect(authRedirectURL);  
    }
    if (token && isAuthPath) {
      const authRedirectURL = new URL('/userprofile', request.nextUrl).href;
      return NextResponse.redirect(authRedirectURL);  
    } 
    if (token && isAuthPath) {
      const authRedirectURL = new URL('/draganddrop', request.nextUrl).href;
      return NextResponse.redirect(authRedirectURL);  
    }
    // if (token && isAuthPath) {
    //   const authRedirectURL = new URL('/invoice', request.nextUrl).href;
    //   return NextResponse.redirect(authRedirectURL);  
    // }
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/auth',
    '/dashboards',
    '/tables',
    '/forms',
    '/signup',
    '/faq',
    '/role&permissions',
    '/editor',
    '/kanban',
    '/userprofile',
    '/draganddrop',
    // '/invoice'
  ]
};
