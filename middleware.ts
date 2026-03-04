import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''
  // Strip port for local dev
  const domain = host.split(':')[0]

  // Must clone and set on the REQUEST headers so that
  // server components can read it via headers() — not response headers
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-domain', domain)

  return NextResponse.next({
    request: { headers: requestHeaders },
  })
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon|images).*)', '/'],
}
