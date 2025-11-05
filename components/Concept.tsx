'use client'

import { useEffect, useRef, useState } from 'react'

export default function Concept() {
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

  return (
    <section id="concept" className="py-20">
      <div
        ref={sectionRef}
        className={`max-w-[1000px] mx-auto px-5 transition-all duration-[800ms] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
        }`}
      >
        <h3 className="text-center text-[2.5rem] md:text-[2rem] mb-[50px] text-[#005aaa] relative pb-[15px] after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-[3px] after:bg-[#005aaa]">
          未来をシミュレーションしよう
        </h3>
        <div className="flex md:flex-col items-center gap-10">
          <div className="flex-1">
            <p className="mb-4 leading-[1.8]">
              本プロジェクトへようこそ！<br />
              私たちは、ネットワーク情報学部の新入生である皆さんをターゲットに、これから始まる4年間の学びと生活を追体験できるシミュレーションゲームを開発しています。
            </p>
            <p className="leading-[1.8]">
              あなたが選ぶ講義、サークル、アルバイト...<br />
              一つひとつの選択が、あなただけの物語を紡ぎ、未来のエンディングを形作ります。このゲームを通じて、充実した大学生活を送るためのヒントを見つけてください。
            </p>
          </div>
          <div className="flex-1">
            <img
              src="/images/game_image.png"
              alt="ゲーム画面イメージ"
              className="max-w-full rounded-[10px] shadow-[0_10px_20px_rgba(0,0,0,0.1)]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
