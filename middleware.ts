import { NextRequest, NextResponse } from "next/server";

export default function middleware(request : NextRequest){

    const path = request.nextUrl.pathname
    console.log("🚀 ~ middleware ~ path:", path)
    const isPublicPath = path === '/sign-in'
    const token = request.cookies.get('access_token')?.value

    if(isPublicPath && token){
        return NextResponse.redirect(new URL('/' , request.nextUrl))
    }

    if(!isPublicPath && !token){
        return NextResponse.redirect( new URL('/sign-in' , request.nextUrl))
    }

}

export const config = {
    matcher: [
      '/'
    ]
  }