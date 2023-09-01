function MainNav({
  items: routes,
}: {
  items: {
    name: string
    path: string
  }[]
}) {
  return (

    <nav className=' hidden sm:flex sm:w-[50%] md:w-[30%] justify-end'>
      <ul className='flex-1 space-x-4 flex  justify-center'>
        {routes.map((route, index) => (
          <li
            className={`box-border 
            hover:font-extrabold 
            cursor-pointer  
            text-sm
            font-medium
            md:text-lg
            lg:text-xl 
            hover:bg-clip-text 
            hover:text-transparent 
            animate-gradient
            tracking-normal
            transition-[font-size,font-weight,background-color,background-clip,text-color,background-size,background-position,background-image,background-origin,background-repeat,background-attachment,background-origin,background]            
            hover:bg-gradient-to-tr  hover:from-violet-500  hover:to-orange-300 rounded`}
            key={index}>

            {route.name}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MainNav
