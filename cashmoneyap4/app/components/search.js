import Image from "next/image"
import logo from "../../public/chatgpt.png"
import sicon from "../../public/search.png"

export default function Search(){
    return(
        <div className=" xl:-mt-10 md:mb-14 flex justify-center">
            
          <input className="z-10 outline-none text-lg px-4 lg:px-6 text-white md:text-2xl xl:text-4xl font-Roboto rounded-l-full h-12 w-60 lg:w-[900px] xl:h-20 xl:w-[1200px] bg-[#940242]">
          </input>
            <button className="z-10 outline-none text-lg px-4 lg:px-6 text-white md:text-2xl xl:text-4xl font-Roboto rounded-r-full h-12 w-20 lg:w-[100px] xl:h-20 xl:w-[200px] bg-[#940242]">
                <Image className="w-6 ml-6 xl:w-12 xl:ml-16" src={sicon}></Image>
            </button>

            <div className="box z-0 opacity-50">
                <div className="">
          <Image className="w-12 md:w-32" src={logo}></Image>
                </div>
                <div>
          <Image className="w-12 md:w-32" src={logo}></Image>
                </div>
                <div>
          <Image className="w-12 md:w-32" src={logo}></Image>
                </div>
                <div>
          <Image className="w-12 md:w-32" src={logo}></Image>
                </div>
                <div>
          <Image className="w-12 md:w-32" src={logo}></Image>
                </div>
                <div>
          <Image className="w-12 md:w-32" src={logo}></Image>
                </div>
                <div>
          <Image className="w-12 md:w-32" src={logo}></Image>
                </div>
                <div>
          <Image className="w-12 md:w-32" src={logo}></Image>
                </div>
                <div>
          <Image className="w-12 md:w-32" src={logo}></Image>
                </div>
                <div>
          <Image className="w-12 md:w-32" src={logo}></Image>
                </div>
        </div>

        </div>
        
    )
}