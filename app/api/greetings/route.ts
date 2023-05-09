import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json({
    name: "Mb",
    Message: "Request from Pakistan",
    RequestType: "GET",
  });
}

export async function POST(request: NextRequest) {
  const res = await request.json();
  if (res.name) {
    return NextResponse.json({
      // From:"mb"
      // res.name  value is sended by postman in body as json
      From: res.name,
      Message: "salam",
      RequestType: "POST",
    });
  } else {
    return NextResponse.json({
      Message: "Please send data in body as json from postman",
    });
  }
}

export async function PUT(request: NextRequest) {
  const res = await request.json();
  if (res.name) {
    return NextResponse.json({
      // From:"mb"
      // res.name  value is sended by postman in body as json
      From: res.name,
      Message: "Your data have been updated",
      RequestType: "PUT",
    });
  } else {
    return NextResponse.json({
      Message: "Please send data in body as json from postman",
    });
  }
}

export async function DELETE(request: NextRequest) {
  //   const res = await request.json();
  //   if (res.name) {
  // if(){
  // in delete method their is no need of body as it is not returning anything
  //just pass the id of item in url to be deleted or else pass id=1 as params in url
  return NextResponse.json({
    From: "mb",
    // res.name  value is sended by postman in body as json
    //   From: res.name,
    Message: "Your data have been deleted",
    RequestType: "DELETE",
  });
  //   } else {
  //     return NextResponse.json({
  //       Message: "Please send name in the delete request",
  //     });
  //   }
}
