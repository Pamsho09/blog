import BlogMain from "@/components/home/BlogMain";
import CardPost from "@/components/home/CardPost";
import LastVideo from "@/components/home/LastVideo";
import TextAnimation from "@/components/home/TextAnimation";
import TiktokMain from "@/components/home/TiktokMain";
import TwitchMain from "@/components/home/TwitchMain";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";

export default async function Home() {
  const listText = [
    "Creador de contenido",
    "Software developer",
    "Fullstack developer",
  ];

  const host = "localhost";
  const isLive = await isInStream();

  return (
    <>
      <div className="w-full h-16 md:hidden"></div>
      <TwitchMain isLive={isLive} host={host} />
      <section className="w-full mb-4 flex-col-reverse  md:flex-row  justify-center md:items-center flex  items-start gap-10">
        <BlogMain />
        <LastVideo />
      </section>
    </>
  );
}

async function isInStream() {
  const channelName = "pamsho_";
  let res = await fetch(`https://www.twitch.tv/${channelName}`);
  return (await res.text()).includes("isLiveBroadcast");
}
