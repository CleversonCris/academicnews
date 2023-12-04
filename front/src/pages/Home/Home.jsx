import React from 'react'
import NavBar from '../../components/NavBar'
import Main from './Main'
import Video from './Video'
import Benefits from './Benefits'
import SearchInstitution from './SearchInstitution'
import LastNotices from './LastNotices'
import Footer from '../../components/Footer'
import Describe from './Describe'
export default function Home() {
  return (
    <>
      <div className='relative text-white'>
          <img className='h-full absolute object-cover w-full top-0 left-0 z-[-10]' src="/DreamShaper_v6_create_a_library_for_me_with_windows_overlookin_0 1 (1).png" alt="" />
          <NavBar/>
          <Main/>
      </div>
        <Video/>
        <Describe/>
        <Benefits/>
        <SearchInstitution/>
        <LastNotices/>
        <Footer/>
    </>

  )
}
