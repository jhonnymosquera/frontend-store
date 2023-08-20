import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
	const pathName = request.nextUrl.pathname;

	if (pathName === '/') {
		return NextResponse.redirect(new URL('/tienda', request.url));
	}
}

export const config = {
	matcher: '/',
};
