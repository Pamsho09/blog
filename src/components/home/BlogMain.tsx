import React from 'react'
import CardPost from './CardPost';

function BlogMain() {
    const articles = [
        {
          title: "Como crear un bot de discord",
          description:
            "En este articulo aprenderas a crear un bot de discord con discord.js",
          date: new Date(),
        },
        {
          title: "Como crear un bot de discord",
          description:
            "En este articulo aprenderas a crear un bot de discord con discord.js",
          date: new Date(),
        },
        {
          title: "Como crear un bot de discord",
          description:
            "En este articulo aprenderas a crear un bot de discord con discord.js",
          date: new Date(),
        },
      ];
  return (
    <article className="w-full md:8/12 flex-col flex flex-1 items-start gap-4">
    <h3 className="text-xl font-bold">Ultimos articulos</h3>
    <div className="flex flex-col md:grid md:grid-cols-3 gap-4  w-full m-0">
      {articles.map((article, index) => (
        <CardPost key={index} {...article} />
      ))}
    </div>
    <div className="w-full flex justify-end">
      <p className=" font-extrabold cursor-pointer   text-sm underline bg-clip-text  border-b-2 text-transparent border-gradient-to-tr  animate-gradient bg-gradient-to-tr from-violet-500 to-orange-300 ">
        Leer mas articulos...
      </p>
    </div>
  </article>
  )
}

export default BlogMain