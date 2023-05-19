import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const redirectTo = request.cookies.get('redirectTo')?.value
  const redirectURL = redirectTo ?? new URL('/', request.url)

  return NextResponse.redirect(redirectURL, {
    headers: {
      'Set-Cookie': `token=; Path=/; max-age=0;`,
    },
  })
}