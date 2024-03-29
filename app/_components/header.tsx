"use client"
import Image from "next/image"
import RespContainer from "./resp_container"
import book from "@/assets/images/bookIcon.png"

export default function header() {
    return (
        <RespContainer hide={false} class_full="hidden">
            <Image src={book} alt="LOGO" />
            <h1>Header</h1>
        </RespContainer>
    )
}