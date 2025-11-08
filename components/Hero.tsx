'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const textToType = '4年後の君は、どんな姿に？'

  useEffect(() => {
    let index = 0
    const type = () => {
      if (index < textToType.length) {
        setDisplayText(textToType.substring(0, index + 1))
        index++
        setTimeout(type, 150)
      }
    }
    type()
  }, [])

  return (
    <section className="relative h-screen flex justify-center items-center text-center text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-[2]">
        <video
          src="/nsgame_demo1.mov"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full md:object-cover object-contain"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-[1]" />
      
      <div className="pt-[60px]">
        <div className="mb-4">
          <p className="text-[1.5rem] mb-2">安藤・生亀プロジェクト2025</p>
          <h1 className="text-[4rem] md:text-[3rem] font-bold mb-4" style={{ fontFamily: "'Playwrite HU', cursive" }}>Re:Path</h1>
        </div>
        <h2 className="text-[3.5rem] md:text-[2.5rem] font-bold my-0 mb-[10px] min-h-[5rem]">
          {displayText}
        </h2>
        <p className="text-[1.2rem]">
          専修大学 ネットワーク情報学部 新入生向け大学生活シミュレーション
        </p>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center text-white animate-bounce-custom">
        <span className="text-[0.9rem] block tracking-wider">スクロール</span>
        <div className="w-[10px] h-[10px] border-[2px] border-white border-t-0 border-r-[2px] border-b-[2px] border-l-0 rotate-45 mx-auto mt-[5px]" />
      </div>
    </section>
  )
}
