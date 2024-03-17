import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import play from '@/assets/images/PlayCircle.png'
import document from '@/assets/images/Document.png'
import Image from "next/image"


interface courseProps {
    title: string,
    desc: string,
    hours?: string,
    docs?: string,
}

export default function CourseCard({title, desc, hours, docs}: courseProps) {
    return (
        <Card className="w-[16.5rem] h-[182px] bg-[#faf1fb]">
            <CardHeader >
                <CardTitle className="text-[#820B8A] text-2xl font-bold">{title}</CardTitle>
                <CardDescription className="font-medium"> {desc}</CardDescription>
            </CardHeader>
            <CardContent>
                <p className=" flex gap-1 text-[13px] font-light text-[#807E7E]">
                    <Image src={play} alt="play"  className="h-[18px] w-[18px]" />
                    {hours ? `${hours} of videos`: 'No videos available'}
                </p>
            </CardContent>
            <CardFooter>
                <p className="flex gap-1 text-[13px] font-light text-[#807E7E]">
                    <Image src={document} alt="doc" className="h-[18px] w-[18px]" />
                    
                    {docs ? `${docs} materials`: 'No materials available'}
                </p>
            </CardFooter>
        </Card>

    )
}