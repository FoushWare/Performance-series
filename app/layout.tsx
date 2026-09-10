import { Tajawal } from 'next/font/google'
import type { Metadata } from 'next'

const tajawal = Tajawal({
  weight: ['400', '700'],
  subsets: ['arabic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Frontend Optimization Playground',
  description: 'Learn frontend optimization through before/after examples',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://picsum.photos" />
      </head>
      <body style={{ 
        margin: 0, 
        fontFamily: tajawal.style.fontFamily, 
        background: '#0f172a', 
        color: '#f1f5f9',
        minHeight: '100vh'
      }}>
        {children}
      </body>
    </html>
  )
}
