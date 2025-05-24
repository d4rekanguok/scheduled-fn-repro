import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const protectedRoutes = ["/a", "/b", "/c"];
    if (!protectedRoutes.some((route) => pathname.startsWith(route))) {
        return NextResponse.redirect(new URL(pathname, request.url));
    }

    return NextResponse.redirect(
        new URL(`/gate?redirect=${pathname}`, request.url)
    );
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)s
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         * - fonts
         * - assets
         * gate
         */
        "/((?!api|_next/static|_next/image|fonts|assets|gate|favicon.ico|sitemap.xml|robots.txt).*)",
    ],
};
