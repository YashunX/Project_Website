'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="bg-white/90 backdrop-blur-sm h-[60px] fixed w-full top-0 left-0 z-[1000] shadow-[0_2px_5px_rgba(0,0,0,0.1)]">
      <div className="max-w-[1000px] mx-auto px-5 h-full flex justify-between items-center">
        <a href="#" className="text-2xl text-[#005aaa] no-underline font-bold">
          安藤・生亀プロジェクト2025
        </a>

        <button
          className={`md:hidden bg-transparent border-0 p-2 cursor-pointer z-[1100] relative w-[35px] h-[35px] ${
            isMobile ? 'block' : 'hidden'
          }`}
          onClick={toggleMenu}
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
        >
          <span className="absolute w-[1px] h-[1px] p-0 m-[-1px] overflow-hidden clip-[rect(0,0,0,0)] whitespace-nowrap border-0">
            メニュー
          </span>
          <span
            className={`absolute left-1/2 top-1/2 w-[25px] h-[3px] bg-[#333] -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-[-2px]' : 'translate-y-[-8px]'
            }`}
          />
          <span
            className={`absolute left-1/2 top-1/2 w-[25px] h-[3px] bg-[#333] -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${
              isMenuOpen ? '-rotate-45 translate-y-[-2px]' : 'translate-y-[2px]'
            }`}
          />
        </button>

        <nav
          id="primary-navigation"
          className={`md:static md:translate-x-0 md:bg-transparent md:w-auto md:h-auto md:pt-0 fixed top-[60px] right-0 w-full h-[calc(100vh-60px)] bg-white/98 transition-transform duration-300 ease-in-out pt-[30px] ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          data-visible={isMenuOpen}
        >
          <ul className="flex md:flex-row flex-col md:items-center items-center md:gap-[30px] gap-[40px] list-none m-0 p-0">
            <li>
              <a
                href="#concept"
                onClick={closeMenu}
                className="no-underline text-[#333] font-bold relative py-[5px] transition-colors duration-300 hover:text-[#005aaa] after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#005aaa] after:bottom-0 after:left-0 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                コンセプト
              </a>
            </li>
            <li>
              <a
                href="#features"
                onClick={closeMenu}
                className="no-underline text-[#333] font-bold relative py-[5px] transition-colors duration-300 hover:text-[#005aaa] after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#005aaa] after:bottom-0 after:left-0 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                ゲームの特徴
              </a>
            </li>
            <li>
              <a
                href="#progress"
                onClick={closeMenu}
                className="no-underline text-[#333] font-bold relative py-[5px] transition-colors duration-300 hover:text-[#005aaa] after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#005aaa] after:bottom-0 after:left-0 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                開発進捗
              </a>
            </li>
            <li>
              <a
                href="#team"
                onClick={closeMenu}
                className="no-underline text-[#333] font-bold relative py-[5px] transition-colors duration-300 hover:text-[#005aaa] after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#005aaa] after:bottom-0 after:left-0 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                メンバー紹介
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
