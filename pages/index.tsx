import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import BoxText from '../components/boxtext'
import Header from '../components/header'
import TextArea from '../components/textarea'
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
      <Header />
      <BoxText />
      <TextArea />
    </>
  )
}
