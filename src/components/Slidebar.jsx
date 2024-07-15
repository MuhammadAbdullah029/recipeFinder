import {  Cookie, Heart, Home } from "lucide-react"
import { Link } from "react-router-dom"

const Slidebar = () => {

  return (
    <>
        <DesktopSlidebar/>
        <MobileSlidebar/>
    </>
  )
}

export default Slidebar


const DesktopSlidebar = () => {
    return (
      <div className="p-3 md:p-10 border-r min-h-screen w-24 md:w-64 hidden sm:block " >
        <div className="flex flex-col gap-20 sticky top-10 left-0 ">

        <div className="w-full flex justify-center">
            <img src="/public/logo.svg" alt="logo"  className="h-[10vw] md:h-[5vw]" />
        </div>
        <ul className="flex flex-col items-center md:items-start gap-8 ">
            <Link to={"/"} className="flex gap-2" >
                <Home size={"24"}  />
                <span className="font-bold hidden md:block" >Home</span>
            </Link>
            <Link to={"/favorites"} className="flex gap-2" >
                <Heart size={"24"} />
                <span className="font-bold hidden md:block" >Favorites</span>
            </Link>
        </ul>
        </div>
      </div>
    )
  }

  const MobileSlidebar = () => {
    return (
      <div className="flex justify-center gap-10 border-t fixed w-full bottom-0 left-0 bg-white z-10 p-2 sm:hidden " > 
      <Link to={"/"} >
        <Home size={24} className="cursor-pointer"  />
      </Link>
      <Link to={"/favorites"} >
        <Heart size={24} className="cursor-pointer"  />
      </Link>
      </div>
    )
  }