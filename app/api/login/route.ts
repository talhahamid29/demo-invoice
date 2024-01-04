import { db } from "../../../lib/db";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";  

export async function POST(req:Request) {
  try {
    const { email, password } = await req.json();

    // Check if the user with the given email exists
    const existingUser = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (!existingUser) {
      return NextResponse.json({
        message: "User not found",
        status: false,
      });
    }

    // Check if the provided password matches the stored password
    if (existingUser.password !== password) {
      return NextResponse.json({
        message: "Incorrect password",
        status: false,
      });
    }


    const token = generateToken(existingUser);

    const response=NextResponse.json({
      user: existingUser,
      message: `${email} && ${password}`,
      token,
      status: true,
    });
    
    response.cookies.set("token",token,{httpOnly:true})

    return response;
  
  } 
  catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Failed to perform login",
      status: false,
    });
  }
}


function generateToken(user: any): string {
  const payload = {
    userId: user.id,
    userEmail: user.email,
  };

  const secretKey = 'my_secure_secret_key';
  const token = jwt.sign(payload, secretKey, { expiresIn: '1h' }); 
  return token;
}