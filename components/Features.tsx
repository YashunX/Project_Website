'use client'

import { useEffect, useRef, useState } from 'react'

export default function Features() {
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

  const features = [
    {
      icon: '📚',
      title: 'マルチシナリオ＆エンディング',
      description: 'あなたの選択が未来を変える！学業、研究、就職など、無数の選択肢によって、あなただけのオリジナルストーリーが展開されます。',
    },
    {
      icon: '🤝',
      title: 'リアルな学生生活体験',
      description: 'サークル活動やアルバイト、友人との交流まで、実際の大学生活をリアルに再現。コミュニケーション能力も試されます。',
    },
    {
      icon: '⏱️',
      title: '時間とお金の管理を学ぶ',
      description: '限られた時間とリソースをどう配分するか。ゲームを通して、将来に役立つタイムマネジメントと計画性を自然に学べます。',
    },
  ]

  return (
    <section id="features" className="py-20 bg-[#f4f7f9]">
      <div
        ref={sectionRef}
        className={`max-w-[1000px] mx-auto px-5 transition-all duration-[800ms] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
        }`}
      >
        <h3 className="text-center text-[2.5rem] md:text-[2rem] mb-[50px] text-[#005aaa] relative pb-[15px] after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-[3px] after:bg-[#005aaa]">
          ゲームの主な特徴
        </h3>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[30px]">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-[30px] text-center rounded-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-[10px] hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)]"
            >
              <div className="text-[3rem] mb-5">{feature.icon}</div>
              <h4 className="text-[1.5rem] text-[#005aaa] mb-[15px]">{feature.title}</h4>
              <p className="m-0">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
