import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CourseDetails {
  name: string;
  image: any;
  size: string;
  link: string;
}

export default function CourseContent({
  name,
  image,
  size,
  link,
}: CourseDetails) {
  return (
    <Card className="h-[182px] bg-secondary">
      <CardHeader>
        <CardTitle className="text-primary text-2xl font-bold">
          {name}
        </CardTitle>
        <CardDescription className="font-medium"> {size}</CardDescription>
      </CardHeader>
      <CardContent>
        <img src={image} alt="" />
      </CardContent>
      <CardFooter>
        <p className="flex gap-1 text-[13px] font-light text-[#807E7E]">
          {link}
        </p>
      </CardFooter>
    </Card>
  );
}
