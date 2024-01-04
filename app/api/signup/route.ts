import { db } from "../../../lib/db";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
  try {
    const body =await req.json();
  const { firstname, lastname, email, password } = body ;


  const newUser= await db.user.create({
      data:{
        firstname,
        lastname,
        email,
        password
      }
  })
    return NextResponse.json({user:newUser,message:"User created successfully"},{status:201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Failed to create user!!!",
      status: false,
    });
  }
}
