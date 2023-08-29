import React from "react";
import dayjs from 'dayjs';
function CardPost({
  title,
  description,
  date,
}: {
  title: string;
  description: string;
  date: Date;

}) {
  return (
    <div className="w-full m-0 bg-gradient-to-tr p-[1px]  from-violet-500  to-orange-300 rounded-[0px] ">
      <div className="bg-background p-4 m-0 flex flex-col justify-betwee space-y-2">
        <h4 className="text-lg font-bold ">{title}</h4>
        <p className="text-sm">{description}</p>
        <div className="w-full font-extralight text-sm">
          <span>{dayjs(date).format('DD/MM/YYYY')}</span>
        </div>
      </div>
    </div>
  );
}

export default CardPost;
