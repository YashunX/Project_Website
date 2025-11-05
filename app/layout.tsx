import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '安藤・生亀プロジェクト2025',
  description: '専修大学 ネットワーク情報学部 新入生向け大学生活シミュレーション',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="scroll-smooth" style={{ scrollPaddingTop: '60px' }}>
      <body className="font-['Helvetica_Neue','Arial','Hiragino_Sans','Meiryo',sans-serif] m-0 text-[#333] bg-white leading-[1.8]">
        {children}
      </body>
    </html>
  )
}