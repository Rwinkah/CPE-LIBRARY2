import CourseContent from "@/app/_components/coursecontent-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Courses from "@/data/course-info";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses",
  openGraph: { title: "Courses" },
  twitter: { title: "Courses" },
};


export default function Page({ params }: { params: { course: string } }) {
  let currentCourse = params.course;
  const courseName = Courses.find((course) => course.code === currentCourse);

  if (!courseName) {
    return <div>Course not found</div>;
  }

  return (
    <div>
      <h1 className="font-bold text-4xl mb-2">
        {currentCourse}:{courseName.title}
      </h1>
      <h2 className="font-normal text-sm mb-9">
        2024 Lecturer: <span className="font-bold">{courseName.lecturer}</span>
      </h2>
      <Tabs defaultValue="Textbooks" className="w-full">
        <TabsList>
          <TabsTrigger value="Textbooks">Textbooks</TabsTrigger>
          <TabsTrigger value="Class Notes">Class Notes</TabsTrigger>
          <TabsTrigger value="Slides">Slides</TabsTrigger>
          <TabsTrigger value="Past Questions">Past Questions</TabsTrigger>
        </TabsList>
        <TabsContent value="Textbooks">
          <div className="grid grid-cols-1 sm:grids-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  pt-4 w-fit">
            {courseName.textbooks.map((item) => (
              <CourseContent
                key={item.name}
                name={item.name}
                image={item.image}
                size={item.size}
                link={item.link}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="Classnotes">
          <div className="grid grid-cols-1 sm:grids-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  pt-4 w-fit">
            {courseName.class_notes.map((item) => (

                <CourseContent
                  key={item.name}
                  name={item.name}
                  image={item.image}
                  size={item.size}
                  link={item.link}
                />


            ))}
          </div>
        </TabsContent>
        <TabsContent value="Slides">
          <div className="grid grid-cols-1 sm:grids-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  pt-4 w-fit">
            {courseName.slides.map((item) => (
              <CourseContent
                key={item.name}
                name={item.name}
                image={item.image}
                size={item.size}
                link={item.link}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="Past Questions">
          <div className="grid grid-cols-1 sm:grids-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  pt-4 w-fit">
            {courseName.past_questions.map((item) => (
              <CourseContent
                key={item.name}
                name={item.name}
                image={item.image}
                size={item.size}
                link={item.link}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
