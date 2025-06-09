import {NextRequest, NextResponse} from "next/server";
import {commonConstants} from "@/constant/common";
import {publicRoutes} from "@/constant/page";
import { jwtVerify } from 'jose';

export async function middleware(req: NextRequest, res: NextResponse) {
    const accessToken = req.cookies.get(commonConstants.ACCESS_TOKEN)?.value || '';
    const currentPathname = req.nextUrl.pathname;
    const isPublicRoute = publicRoutes.includes(currentPathname);

    // No accessToken
    if (!accessToken) {
        // allow public routes to pass through
        if (isPublicRoute) {
            return NextResponse.next();
        }
        // no accessToken, accessing private route
        else {
            return NextResponse.redirect(new URL('/login', req.url));
        }
    }

    // Have accessToken
    try {
        // Verify token
        await jwtVerify(accessToken, new TextEncoder().encode(process.env.NEXT_PUBLIC_SECRET_KEY));
        if (isPublicRoute) {
            return NextResponse.redirect(new URL('/', req.url));
        } else {
            return NextResponse.next();
        }
    } catch (err) {
        console.log('error', err);
        // Invalid/expired → redirect
        return NextResponse.redirect(new URL('/login', req.url));
    }
}

export const config = {
    matcher: ['/', '/login', '/register', '/habits/:path*'],
};