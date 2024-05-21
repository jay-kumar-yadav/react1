import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-100 flex items-center px-32 gap-5'>
        <div className="cardcontainer w-1/2 h-[50vh]">
            <div className="card relative w-full h-full rounded-xl flex items-center justify-center bg-[#004D43]">
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full' > Rating 5.0 on clutch</button>
            </div>
        </div>
        <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
          <div className="card  relative w-1/2 h-full rounded-xl flex items-center justify-center  bg-[#212121]">
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <button className='absolute left-5 bottom-10 px-1 py-1 border-2 rounded-full' >Business Bootcamp Alumini</button>
          </div>
          <div className="card relative w-1/2 h-full rounded-xl  flex items-center justify-center bg-[#212121]">
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <button className='absolute left-5 bottom-7 px-1 py-1 border-2 rounded-full' >Business Bootcamp Alumini</button>
          </div>
        </div>
    </div>
  )
}

export default Cards