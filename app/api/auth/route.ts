import { NextResponse } from "next/server";
import getAxiosInstance from "../Index";
import type { Login } from "@/app/types/Auth";
export async function POST(request: Request) {
  const body: Login = await request.json();

  const axiosInstance = await getAxiosInstance();
  const data = await axiosInstance.post("/auth/login", body);

  const response = NextResponse.json({ message: "Login successful" });

  response.cookies.set("token", data.data.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24,
    path: "/",
  });

  return response;
}
