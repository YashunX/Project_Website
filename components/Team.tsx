'use client'

import { useEffect, useRef, useState } from 'react'

export default function Team() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      {
        rootMargin: '0px',
        threshold: 0.2,
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const members = [
    {
      image: '/images/カワウソ.png',
      name: '菊池 駿也',
      affiliation: 'DS',
      role: 'グラフィック',
    },
    {
      image: '/images/しゅんき_ぱんだ.JPG',
      name: '大井 駿輝',
      affiliation: 'NS',
      role: '開発',
    },
    {
      image: '/images/あまはる_ねこ.png',
      name: '天野 陽希',
      affiliation: 'PC',
      role: 'シナリオ',
    },
    {
      image: '/images/あゆむ_さかな.jpg',
      name: '青山 歩睦',
      affiliation: 'PC',
      role: 'グラフィック',
    },
    {
      image: '/images/ゆとう_いぬ.JPG',
      name: '湯藤 蒼梧',
      affiliation: 'PC',
      role: '開発',
    },
    {
      image: '/images/ゆう_ちんあなご.jpg',
      name: '篠原 悠',
      affiliation: 'MC',
      role: 'シナリオ',
    },
    {
      image: '/images/とね_うーぱー.JPG',
      name: '戸根 晟学',
      affiliation: 'MC',
      role: 'グラフィック',
    },
    {
      image: '/images/しみず_かめ.jpg',
      name: '清水 俊介',
      affiliation: 'IB',
      role: 'シナリオ',
    },
    {
      image: '/images/ほりえ_いぬ.jpg',
      name: '堀江 結人',
      affiliation: 'CD',
      role: '開発',
    },
  ]

  return (
    <section id="team" className="py-20 bg-[#f4f7f9]">
      <div
        ref={sectionRef}
        className={`max-w-[1000px] mx-auto px-5 transition-all duration-[800ms] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
        }`}
      >
        <h3 className="text-center text-[2.5rem] md:text-[2rem] mb-[50px] text-[#005aaa] relative pb-[15px] after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-[3px] after:bg-[#005aaa]">
          メンバー紹介
        </h3>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] md:grid-cols-1 gap-[30px]">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.05)] p-[30px] text-center transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)]"
            >
              <img
                src={member.image}
                alt="写真"
                className="w-[120px] h-[120px] rounded-full object-cover mb-5 mx-auto border-[4px] border-white shadow-[0_0_10px_rgba(0,0,0,0.1)]"
              />
              <h4 className="text-[1.4rem] text-[#005aaa] m-0 mb-[15px] font-bold">{member.name}</h4>
              <div className="text-left text-[0.9rem] text-[#555]">
                <p className="my-[5px] mx-0">
                  <strong className="text-[#333] mr-[5px]">所属：</strong>
                  {member.affiliation}
                </p>
                <p className="my-[5px] mx-0">
                  <strong className="text-[#333] mr-[5px]">担当：</strong>
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
