"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const login = async () => {
    await signIn("credentials", {
      ...user,
      callbackUrl: "/kitchen/admin",
    });
  };
  return (
    <div className=" w-full grid place-items-center flex-1">
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col space-y-4">
          <Input
            placeholder="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />

          <Input
          type="password"
            placeholder="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </CardContent>
        <CardFooter>
          <Button onClick={login} variant={"outline"}>
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Login;
