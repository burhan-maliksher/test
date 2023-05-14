import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const res = await request.json();
  console.log(res);

  //   if (res.name) {
  //     return NextResponse.json({
  //       // From:"mb"
  //       // res.name  value is sended by postman in body as json
  //       From: res.name,
  //       Message: "salam",
  //       RequestType: "POST",
  //     });
  //   } else {
  //     return NextResponse.json({
  //       Message: "Please send data in body as json from postman",
  //     });
  //   }
}
