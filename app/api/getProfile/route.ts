'use server'
import { NextRequest, NextResponse } from "next/server";

export async function GET(request : NextRequest) {
    const token = request.cookies.get("access_token");
    console.log("🚀 ~ GET ~ token:", token)
    return NextResponse.json({token})
}