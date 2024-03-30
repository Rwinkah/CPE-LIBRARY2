"use client"
import Image from "next/image"
import RespContainer from "./resp_container"
import book from "@/assets/images/bookIcon.png"

export default function Header() {
    return (
        <RespContainer hide={false} class_full="hidden" class_sm="flex mb-20">
            <Image src={book} alt="LOGO" width={45} height={45}/>
            <h1 className="pl-4 font-normal text-2xl pt-2">CPE E-LIBRARY</h1>
        </RespContainer>
    )
}