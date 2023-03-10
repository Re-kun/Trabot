import React from "react";

const CardBlog = (props) => {
    const  {image, title, description} = props;
    return(
        <> 
            <div className="flex flex-col items-center mb-9 ">
                <div className="w-60 mm:w-72 md:w-60 xl:w-80 h-72 lg:rounded-t-xl rounded-t-lg bg-cover" style={{backgroundImage: `url(${image})`}}></div>
                <div className="bg-[#087A85] lg:rounded-b-lg w-60 rounded-b-lg mm:w-72 md:w-60 xl:w-80 mx-auto p-5 text-white" >
                   <h1 className="font-semibold text-lg">{title}</h1>
                   <p className="text-[10px] mt-3 text-slate-300">{description}</p>
                </div>
            </div>       
        </>
    )
}

export default CardBlog;
