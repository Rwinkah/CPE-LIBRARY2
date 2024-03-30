import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseData from "@/data/course-info";
import CourseCard from "@/app/_components/course-card";
import TabLib from "@/app/_components/tablib";
import TabNote from "@/app/_components/tabnote";

export const metadata: Metadata = {
  title: "Home",
  openGraph: { title: "Home" },
  twitter: { title: "Home" },
};

function generateRandomNumberAsString() {
  const randomNumber = Math.floor(Math.random() * 100);
  return randomNumber.toString(); // Convert the number to a string
}


export default function Dashboard() {
  return (
    <div className="flex-col flex-shrink">
      <h1 className="font-bold text-4xl mb-6">Overview</h1>
      <Tabs defaultValue="courses" className="w-full">
        <TabsList>
          <TabsTrigger value="courses">Courses</TabsTrigger>
        <TabsTrigger value="my_notes"> My notes</TabsTrigger>
        </TabsList>
        <TabsContent value="courses">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4">
            {CourseData.map((item) => (
              <CourseCard
                key={item.title}
                title={item.code}
                desc={item.title}
                hours={generateRandomNumberAsString()}
                docs={generateRandomNumberAsString()}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="my_notes">
       <TabNote />
        </TabsContent>
      </Tabs>
    </div>
  );
}
