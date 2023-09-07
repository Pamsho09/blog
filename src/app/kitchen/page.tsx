'use serve'
import Login from "@/components/kitchen/Login";
import { getCurrentUser } from "@/context/auth";
import { redirect } from "next/navigation"

import React from "react";

async function Index() {
  const session = await getCurrentUser();

  if (session) {
    redirect('/kitchen/admin');
  }

  return (
    <>
      <Login />
    </>
  );
}

export default Index;
