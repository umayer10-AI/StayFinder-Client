import { NextRequest, NextResponse } from "next/server";
import { serverSession } from "./lib/sessoin";

export async function proxy(request: NextRequest) {

    const user = await serverSession()

    if(!user){
        return NextResponse.redirect(new URL('/login', request.url))
    }
}

export const config = {
  matcher: ['/browse:path+', '/chart', '/dashboard:path+'],
}