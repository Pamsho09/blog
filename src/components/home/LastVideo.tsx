import Image from "next/image";
import React from "react";

async function LastVideo() {
  const listVideos = await getLatestYoutubeVideos();
  const LastVideo = listVideos[listVideos.length - 1];
  console.log(LastVideo);
  return (
    <aside className="w-full md:w-3/12 flex-col flex   gap-4 ml-0" style={{
        marginLeft: 0,
    }}>
      <h3 className="text-xl font-bold">Ultimo video</h3>
      <a
        className="flex justify-center items-center bg-gradient-to-tr pr-[1px] pb-[1px]  from-violet-500  to-orange-300 rounded-[0px]"
        href={"https://youtu.be/" + LastVideo.snippet.resourceId.videoId}
        target="_blank"
      >
        <Image
          src={LastVideo.snippet.thumbnails.standard.url}
          width={LastVideo.snippet.thumbnails.standard.width}
          height={LastVideo.snippet.thumbnails.standard.height}
          className=" w-full"
          alt="Last video"
        />
      </a>
    </aside>
  );
}

const getLatestYoutubeVideos = (): Promise<Item[]> =>
  fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLgng5bcXfs100P351rmVz47UllChnUICJ&maxResults=10&key=${process.env.YOUTUBE_API_KEY}`
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
