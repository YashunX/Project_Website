'use client'

import { useEffect, useRef, useState } from 'react'

export default function Progress() {
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

  const timelineItems = [
    {
      status: 'completed',
      contents: [
        { title: '企画・コンセプト設計', description: 'ゲームの基本構想とシナリオの骨子を決定しました。' },
      ],
    },
    {
      status: 'in-progress',
      contents: [
        { title: '基本システム開発', description: '一年生部分のゲームを制作しています。' },
        { title: 'UIデザイン', description: '主要キャラクターとUIデザインの制作を進めています。' },
        { title: 'シナリオ実装', description: '今後、詳細なシナリオとイベントを実装していきます。' },
      ],
    },
    {
      status: 'pending',
      contents: [
        { title: '拡張開発（2年次以降）', description: '2年次以降のゲームパートと、各プログラムに対応したミニゲームの制作を予定しています。' },
        { title: 'キャラクターデザイン', description: '主要キャラクターのデザインの制作を予定します。' },
      ],
    },
    {
      status: 'pending',
      contents: [
        { title: '完成・最終調整', description: '全体の動作確認を行い、バグ修正と最終調整を進めます。' },
      ],
    },
  ]

  return (
    <section id="progress" className="py-20">
      <div
        ref={sectionRef}
        className={`max-w-[1000px] mx-auto px-5 transition-all duration-[800ms] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
        }`}
      >
        <h3 className="text-center text-[2.5rem] md:text-[2rem] mb-[50px] text-[#005aaa] relative pb-[15px] after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-[3px] after:bg-[#005aaa]">
          開発進捗（中間報告）
        </h3>
        <div className="relative max-w-[600px] mx-auto">
          <div className="absolute w-[3px] bg-[#e0e0e0] top-0 bottom-0 left-[15px]" />
          {timelineItems.map((item, index) => (
            <div key={index} className="py-[10px] px-10 relative bg-inherit w-full ml-[15px]">
              <div
                className={`absolute w-[15px] h-[15px] -left-[7.5px] top-[22px] bg-white rounded-full z-[1] border-[3px] ${
                  item.status === 'completed' || item.status === 'in-progress'
                    ? 'border-[#005aaa]'
                    : 'border-[#e0e0e0]'
                } ${item.status === 'in-progress' ? 'bg-[#005aaa] animate-pulse-custom' : ''}`}
              />
              <div className="py-[10px] px-5 bg-[#f4f7f9] relative rounded-[6px]">
                {item.contents.map((content, contentIndex) => (
                  <div key={contentIndex} className={contentIndex > 0 ? 'mt-5' : ''}>
                    <h5 className="m-0 mb-[5px] text-[1.2rem]">{content.title}</h5>
                    <p className="m-0 text-[0.9rem]">{content.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
