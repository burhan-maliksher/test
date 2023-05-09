// export async function GET() {
//   return new Response("hello api");
// }

import { NextRequest, NextResponse } from "next/server";

// export async function GET(request: Request) {
//   return new Response("hello api");
// }

// export const GET = async () => {
//   return new Response("hello api by mb");
// };

// import { NextRequest, NextResponse } from "next/server";

// export async function GET(request: NextRequest) {
//   const url = request.nextUrl;
//   if (url.searchParams.has("name")) {
//     const name = url.searchParams.get("name");
//     return new NextResponse("Hello, from: " + name);
//   } else {
//     return new NextResponse('Please send your name in search parameter "name"');
//   }
// }

export async function GET(request: NextRequest) {
  // return new NextResponse("hello response by api");
  const url = request.nextUrl;
  if (url.searchParams.has("name")) {
    const name = url.searchParams.get("name");
    // return new NextResponse(`hello from ${name}`);
    return NextResponse.json({ message: `hello from ${name}` });
  } else {
    return new NextResponse("Please send your name in search params");
  }
}
