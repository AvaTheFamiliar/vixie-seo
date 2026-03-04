import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Domain detection is now handled by reading the native `host` header
// directly in server components — no middleware injection needed.
// Keeping middleware minimal to avoid any header-forwarding edge cases.
export function middleware(request: NextRequest) {
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon|images).*)'],
}
