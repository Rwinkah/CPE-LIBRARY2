"use client"
import book from '@/assets/images/bookIcon.png'
import Image from 'next/image';
import home from '@/assets/images/Home.png'
import { Button } from './button';
import SelectOption from '@/app/dashboard/selectItem';
import { GearIcon } from '@radix-ui/react-icons';
import {BellIcon} from '@radix-ui/react-icons';
import lightBook from '@/assets/images/lightBook.png'
import { SelectScrollable } from './selectScroll';
import { useState } from 'react';
import { Bell } from 'lucide-react';
import Link from 'next/link';

interface sidebarProp {
  activePage: string
}


export default function Sidebar({activePage}: sidebarProp) {
    const [open, setOpen] = useState(false)

  return (
      <div className="w-[14%] h-[100VH] bg-black">
        <div id="Dashboardlogo" className="">
            <div id='logo' className="flex mt-[26px] ml-[29px]">
                <Image className="" src={book} alt="logo" />
                <h6 className=" mt-2 ml-[4px] font-light text-white text-[16px]"><span className="font-medium text-[#820B8A] text-[16px]">CPE</span> E-Library</h6>
              </div>
          </div>
          <div className='ml-[19px] mt-[65px] flex flex-col gap-2'>
              <Link href='/dashboard/home'>
                  <Button
                  className={`justify-start flex gap-[12px] flex-wrap rounded-3xl w-[158px] h-[40px] text-white ${activePage === 'home'? "bg-[#820B8A]" : ""}`}>
                  <Image className=''alt='home' src={home}  width="20" height="20" />Home
              </Button>           
              </Link>

              <div>
                  <SelectScrollable />
              </div>
              <Link href='/dashboard/settings'>
                <Button
                  className={`pl-2 justify-start flex gap-[12px] flex-wrap rounded-3xl w-[158px] h-[40px] text-white ${activePage === 'settings'? "bg-[#820B8A]" : ""}`}>
                  <GearIcon  width="20" height="20" />Settings
                </Button>
              </Link>

              <Button
                  className=' pl-2 justify-start flex gap-[12px]  flex-wrap rounded-3xl w-[158px] h-[40px]  bg-[] text-white'>
                  <div>
                    <BellIcon width="20" height="20"/>
                  </div>
                  Notifications
              </Button>
              <Button
                  className='mt-[170%] pl-2 justify-start flex gap-[12px] flex-wrap rounded-3xl w-[158px] h-[40px]  bg-[] text-white'>
                  <div>
                    <BellIcon width="20" height="20"/>
                  </div>
                  Log out
              </Button>

          </div>
         

        </div>
  );
}
