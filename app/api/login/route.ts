'use server'
import { NextRequest, NextResponse } from "next/server";

export async function POST(request : NextRequest) {
    const req  = await request.json() ;
    const {token , refresh} = req
    const response = NextResponse.json({success : 'true'})
    response.cookies.set('access_token' , token , {httpOnly : true})
    response.cookies.set('refresh_token' , refresh , {httpOnly : true})
    return response
}