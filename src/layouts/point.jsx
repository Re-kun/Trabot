import React from "react";

const Point = () => {
    return (
        <>
        <section className="px-5 xs:px-7 font-poppins sm:flex sm:items-center lg:mt-16 ">
            <div className="flex justify-center mt-20 xs:mt-24 sm:mt-20 p-5 md:p-0 sm:w-full">
                <img src="/images/island.png" loading="lazy" alt="island" />
            </div>
            <div className="mt-32 sm:mt-[4.5rem] sm:w-full">
                <p className="text-[#0E7D88] text-[12px] font-semibold md:text-sm lg:text-base">Adventure Point</p>
                <h1 className="text-[#0E3344] text-2xl font-semibold mt-2 md:text-[1.4rem] sm:text-xl xs:text-[1.7rem] lg:text-3xl">The best choice for your vocation</h1>
                <p className="text-[#9E9E9E] mb-5 w-[17rem] xs:w-[24rem] md:w-[24rem] sm:w-[20rem] mt-5 text-[10px]  lg:text-sm lg:w-[30rem]">why should you choose us? because we have a variety of vacation spots 
                    around the world and have collaborated with inns around it so you 
                    don't have to look for lodging anymore</p>
                <ul className="grid grid-cols-2 gap-4 md:mt-10">
                    <li className="flex">
                    <div className="bg-[#097882] h-10 w-10 md:h-12 md:w-12 flex justify-center py-[px] rounded-full">
                        <img src="/icons/map.svg" className="w-5 md:w-6" loading="lazy" alt="map" />
                    </div>
                    <div className="ml-3">
                        <h1 className="text-lg md:text-[1rem] lg:text-xl font-semibold">4,000+</h1>
                        <p className="text-[9px] md:text-[11px] lg:text-[12px]">Destinations</p>
                    </div>
                    </li>
                    <li className="flex">
                    <div className="bg-[#097882] h-10 w-10 md:h-12 md:w-12  rounded-full flex justify-center">
                        <img src="/icons/building.svg" className="w-5" alt="building" loading="lazy" />
                    </div>
                    <div className="ml-3">
                        <h1 className="text-lg md:text-[1rem] lg:text-xl font-semibold">4217+</h1>
                        <p className="text-[9px] md:text-[11px] lg:text-[12px]">Hotel & Logding</p>
                    </div>
                    </li>            
                    <li className="flex mt-5">
                    <div className="bg-[#097882] h-10 w-10 md:h-12 md:w-12  rounded-full flex justify-center">
                        <img src="/icons/user.svg" className="w-5 md:w-6" loading="lazy" alt="user" />
                    </div>
                    <div className="ml-3">
                        <h1 className="text-lg md:text-[1rem] lg:text-xl font-semibold">20M</h1>
                        <p className="text-[9px] md:text-[11px] lg:text-[12px]">Our Adventure</p>
                    </div>
                    </li>           
                    <li className="flex mt-5">
                    <div className="bg-[#097882] h-10 xs:w-10 sm:w-[3.3rem] sm:h-[2.6rem] md:h-[3rem] md:w-12 w-16 mm:w-12 rounded-full flex justify-center">
                        <img src="/icons/ticket.svg" className="w-5 md:w-6" loading="lazy" alt="ticket" />
                    </div>
                    <div className="ml-3">
                        <h1 className="text-xl font-semibold">50%</h1>
                        <p className="text-[9px] md:text-[11px] lg:text-[12px]">Discount For New Adventure</p>
                    </div>
                    </li>
                </ul>
            </div>
        </section>
        </>
    )
}

export default Point
