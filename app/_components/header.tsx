"use client"
import Image from "next/image"
import RespContainer from "./resp_container"
import { BookIcon } from "lucide-react"

export default function header() {
    return (
        <RespContainer hide={false} class_full="hidden">
            <img src={BookIcon} alt="LOGO" />
            <h1>Header</h1>
        </RespContainer>
    )
}