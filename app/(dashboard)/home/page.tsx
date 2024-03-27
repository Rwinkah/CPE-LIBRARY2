import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseData from "@/data/coursedata";
import CourseCard from "@/app/_components/course-card";
import TabLib from "@/app/_components/tablib";
import TabNote from "@/app/_components/tabnote";

export const metadata: Metadata = {
  title: "Home",
  openGraph: { title: "Home" },
  twitter: { title: "Home" },
};

export default function Dashboard() {
  return (
    <>
      <h1 className="font-bold text-4xl mb-6">Overview</h1>
      <Tabs defaultValue="courses" className="w-full">
        <TabsList>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="my_library">My Library</TabsTrigger>
          <TabsTrigger value="my_notes"> My notes</TabsTrigger>
        </TabsList>
        <TabsContent value="courses">
          <div className="grid grid-cols-1 sm:grids-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  pt-4 ">
            {CourseData.map((item) => (
              <CourseCard
                key={item.title}
                title={item.title}
                desc={item.desc}
                hours={item.hours}
                docs={item.materials}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="my_library">
          <TabLib />
        </TabsContent>
        <TabsContent value="my_notes">
          <TabNote />
        </TabsContent>
      </Tabs>
    </>
  );
}
