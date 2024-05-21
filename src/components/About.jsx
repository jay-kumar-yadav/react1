import React from "react";

function About() {
  return (
    <div className="w-full py-20 px-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="text-[4vw] leading-[4.5vw] tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full border-t-[1px] border-[#3f4721] mt-20 pt-10 flex gap-5">
        <div className="w-1/2 ">
          <h1 className="text-5xl">Our approach:</h1>
          <button className=" flex gap-10 items-center px-10 py-6 bg-zinc-900 rounded-full text-white mt-10 uppercase">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[60vh] bg-[#91a158] rounded-3xl bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg')]">
           
        </div>
      </div>
    </div>
  );
}

export default About;
