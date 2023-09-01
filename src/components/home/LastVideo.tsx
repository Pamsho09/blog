import { config } from "@/lib/config";
import Image from "next/image";
import React from "react";

const LastVideo = async () => {
  const listVideos = await getLatestYoutubeVideos();
  console.log(listVideos);
  const lastVideo = {
    kind: "youtube#playlistItem",
    etag: "FOmwT53F3KxFNXtXxHuj5bAyk8M",
    id: "UExnbmc1YmNYZnMxMDBQMzUxcm1WejQ3VWxsQ2huVUlDSi4wOTA3OTZBNzVEMTUzOTMy",
    snippet: {
      publishedAt: "2023-08-29T03:31:58Z",
      channelId: "UCulkBMcVUrTxmWIhlevaUiw",
      title: "Cómo Dominaría la Programación si Pudiera Empezar de Nuevo 💻🔥",
      description:
        "Trazando un nuevo rumbo en mi viaje de programación. 💻💡 Si tuviera la oportunidad de empezar de nuevo, estos son los pasos que seguiría para convertirme en un maestro del código. 🚀👨‍💻 \n#programacion ón #DesarrolloDeSoftware #Aprendizaje #ConsejosDeProgramación #Reinicio #CódigoCreativo",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/oqfyuJxx6Do/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/oqfyuJxx6Do/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/oqfyuJxx6Do/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/oqfyuJxx6Do/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/oqfyuJxx6Do/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Pamsho",
      playlistId: "PLgng5bcXfs100P351rmVz47UllChnUICJ",
      position: 4,
      resourceId: {
        kind: "youtube#video",
        videoId: "oqfyuJxx6Do",
      },
      videoOwnerChannelTitle: "Pamsho",
      videoOwnerChannelId: "UCulkBMcVUrTxmWIhlevaUiw",
    },
  };
  console.log(LastVideo);
  return (
    <aside
      className="w-full md:w-3/12 flex-col flex   gap-4 ml-0"
      style={{
        marginLeft: 0,
      }}
    >
      <h3 className="text-xl font-bold">Ultimo video</h3>
      <a
        className="flex justify-center items-center bg-gradient-to-tr pr-[1px] pb-[1px]  from-violet-500  to-orange-300 rounded-[0px]"
        href={"https://youtu.be/" + lastVideo.snippet.resourceId.videoId}
        target="_blank"
      >
        <Image
          src={lastVideo.snippet.thumbnails.standard.url}
          width={lastVideo.snippet.thumbnails.standard.width}
          height={lastVideo.snippet.thumbnails.standard.height}
          className=" w-full"
          alt="Last video"
        />
      </a>
    </aside>
  );
};

const getLatestYoutubeVideos = (): Promise<Item[]> =>
  fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLgng5bcXfs100P351rmVz47UllChnUICJ&maxResults=10&key=${config.youtubeKeyApi}`
  )
    .then((res) => res.json())
    .then((videos) => videos.items);

export default LastVideo;

export interface Item {
  etag: string;
  id: string;
  kind: string;
  snippet: Snippet;
}

export interface Snippet {
  channelId: string;
  channelTitle: string;
  description: string;
  playlistId: string;
  position: number;
  publishedAt: Date;
  resourceId: ResourceID;
  thumbnails: Thumbnails;
  title: string;
  videoOwnerChannelId: string;
  videoOwnerChannelTitle: string;
}

export interface ResourceID {
  kind: string;
  videoId: string;
}

export interface Thumbnails {
  default: Default;
  high: Default;
  maxres: Default;
  medium: Default;
  standard: Default;
}

export interface Default {
  height: number;
  url: string;
  width: number;
}

export interface PageInfo {
  resultsPerPage: number;
  totalResults: number;
}
