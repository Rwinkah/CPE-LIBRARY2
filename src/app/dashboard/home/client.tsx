"use client"
import { Button } from "@/components/ui/button"
import DashboardLayout from "../dashboardLayout"
import { Separator } from "@/components/ui/seperator"
import { useState } from "react"
import { tree } from "next/dist/build/templates/app-page"
import CourseCard from "./courseCard"
import CourseData from "@/data/coursedata" 
import TabLib from "./tablib"
import TabNote from "./tabnote"



export default function DashHome() {
    const [courseActive, setCourseActive] = useState(true)
    const [libActive, setLibActive] = useState(false)
    const [noteActive, setNoteActive] = useState(false)
    return (
        <>
            <DashboardLayout activePage="home">
                <div className="pl-[56px] ">
                    <h1 className="font-bold text-4xl">Overview</h1>
                    <div className="flex mt-[24px]">
                        <Button onClick={() => { setCourseActive(true); setLibActive(false);  setNoteActive(false)}} className="ml-0 pl-0">Courses</Button>
                        <Button onClick={() => { setCourseActive(false); setLibActive(true);  setNoteActive(false)}}>My Library</Button>
                        <Button onClick={() => { setCourseActive(false); setLibActive(false);  setNoteActive(true)}}>My notes</Button>
                    </div>
                    <div className="flex">
                        <Separator orientation="horizontal" className={`my-4 w-[58px] ${courseActive ? "bg-[#820B8A]" : "bg-[#CFCFCF]"}`} />
                        <Separator orientation="horizontal" className='w-[29px] my-4 bg-[#CFCFCF]' />
                        <Separator orientation="horizontal" className={`my-4 w-[72px] ${libActive ? "bg-[#820B8A]" : "bg-[#CFCFCF]"}`} />
                        <Separator orientation="horizontal" className='w-[32px] my-4 bg-[#CFCFCF]' />
                        <Separator orientation="horizontal" className={`my-4 w-[62px] ${noteActive ? "bg-[#820B8A]": "bg-[#CFCFCF]"}`}/>
                        <Separator orientation="horizontal" className="my-4 bg-[#CFCFCF] w-[77%]"/>
                    </div>

                    {courseActive &&
                        <div className="grid grid-cols-4 gap-6 overflow-y-auto h-[30rem] pt-4 ">
                          {CourseData.map(item => (
                            <CourseCard
                                key={item.title}
                                title={item.title}
                                desc={item.desc}
                                hours={item.hours}
                                docs={item.materials}
                            />
                        ))}
                    </div>  
                    }
                    {libActive &&
                        <TabLib />
                    }
                    {noteActive &&
                        <TabNote />
                    }


                </div>
            </DashboardLayout>
        </>
    )
}