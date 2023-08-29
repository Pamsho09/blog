import localFont from 'next/font/local'

export const Satoshi = localFont({
  src: '../assets/fonts/Satoshi-Variable.ttf',
  preload: true,
  display: 'swap',
  variable: '--font-sans',
})