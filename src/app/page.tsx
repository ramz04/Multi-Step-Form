import Image from 'next/image'
import bg_sidebar_mobile from "./assets/images/bg-sidebar-mobile.svg"
import bg_sidebar_desktop from "./assets/images/bg-sidebar-desktop.svg"

export default function Home() {
  return (
    <main className=" bg-Pastelblue ">
      <div>
        <Image src={bg_sidebar_mobile} alt='Sidebar' className='w-full h-full'/>
      </div>
    </main>
  )
}
