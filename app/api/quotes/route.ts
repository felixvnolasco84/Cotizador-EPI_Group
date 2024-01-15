import { NextResponse } from "next/server";
import prisma from "@/utils/ConnectionPool";

export const POST = async (req: any) => {

  console.log(req);
  try {
    const body = await req.json();
    const quote = await prisma.quote.create({
      data: { ...body },
    });
    return new NextResponse(JSON.stringify(quote));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" })
    );
  }
};