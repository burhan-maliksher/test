import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  //here we are destructuring params and declerating its type as paramerter object having name of string type
  { params }: { params: { name: string } }
) {
  return NextResponse.json({
    From: params.name,
    Message: "its a dyanimc api",
    RequestType: "GET",
  });
}
