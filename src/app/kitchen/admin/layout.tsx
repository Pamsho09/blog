"use serve";
import { redirect } from "next/navigation";
import React from "react";
import Link from 'next/link'
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { getCurrentUser } from "@/context/auth";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

async function Layout({ children }) {
  const session = await getCurrentUser();

  if (!session) {
    redirect(authOptions?.pages?.signIn as string);
  }
  const routes = [
    'posts',
    'redes',
    'files',
  ]
  return (
    <>
      <Card className="flex-1 flex flex-col">
        <CardHeader>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white-900">Admin</h2>
            <div className="flex items-center space-x-4">
              {routes.map((route) => (
                <Link href={'/kitchen/admin/' + route} key={route}>
                  <span className="text-gray-400 hover:text-gray-500 capitalize">
                    {route}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-1">     {children}</CardContent>
      </Card>
    </>
  );
}

export default Layout;
