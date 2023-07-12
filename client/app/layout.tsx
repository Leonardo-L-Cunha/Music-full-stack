import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '../scss/main.scss'
import PlayerProvider from '@/context/playerContext'

import styles from './styles.module.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Music App',
  description: 'Music App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.container}>
          <PlayerProvider>
            {children}
          </PlayerProvider>
        </main>
      </body>
    </html>
  )
}
