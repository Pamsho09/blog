import React from "react";
import { Button } from "../ui/button";
import TextAnimation from "./TextAnimation";

function TwitchMain({ isLive, host }: { isLive: boolean; host: string }) {
  return (
    <section className="w-full h-screen flex-col md:flex-row flex flex-1 md:flex' items-stretch space-y-8 mt-8">
      <div className="w-full flex flex-col flex-1 items-stretch space-y-6 md:justify-center">
        <h1 className="font-bold text-5xl md:text-7xl ">Hola soy Pamsho_</h1>
        <TextAnimation />
        <div className="flex flex-col space-y-4 max-w-md">
          <p>
            Aprende en directo. Todos los dias apartir de las 20:30pm (GMT-5) me
            encuentro trasmitiendo en mi canal twitch en donde puedes aprender
            cosas nuevas y divertidas.
          </p>
          <Button asChild variant={isLive ? "destructive" : "secondary"}>
            <a href="https://www.twitch.tv/pamsho_" rel="noref" target="_blank">
              {isLive ? "En vivo" : "Ver canal"}
            </a>
          </Button>
        </div>
      </div>
      <div className="w=full md:w-6/12 ">
        <iframe
          className="w-full h-80"
          id="streamIframe"
          scrolling="no"
          src={`https://player.twitch.tv/?channel=pamsho_&parent=${host}`}
        ></iframe>
      </div>
    </section>
  );
}

export default TwitchMain;
