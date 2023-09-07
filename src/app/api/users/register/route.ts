import { UserService } from "@/services/UserService";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const { email, password, name } = await req.json();
  const userService = new UserService();
  const { user, error } = await userService.createUser({
    email,
    password,
    name,
  });

  if (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
  return NextResponse.json(user, { status: 201 });
}
