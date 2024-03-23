import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CoursecontentCard from "../../_components/coursecontent-card";
import courseinfo from "../../../data/course-info";

export default function Page() {
  return (
    <div>
      {courseinfo.map((course) => (
        <>
          <h1 className="font-bold text-4xl mb-2">
            {course.code}:({course.title})
          </h1>
          <h2 className="font-normal text-sm mb-9">
            2024 Lecturer:{course.lecturer}
          </h2>
          <Tabs defaultValue="Textbooks" className="w-full">
            <TabsList>
              <TabsTrigger value="Textbooks">Textbooks</TabsTrigger>
              <TabsTrigger value="Classnotes">Classnotes</TabsTrigger>
              <TabsTrigger value="Slides">Slides</TabsTrigger>
              <TabsTrigger value="Past Questions">Past Questions</TabsTrigger>
            </TabsList>
            <TabsContent value="Textbooks">
              <div className="grid grid-cols-1 sm:grids-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  pt-4 ">
                {course.textbooks.map((item) => (
                  <CoursecontentCard
                    name={item.name}
                    image={item.image}
                    size={item.size}
                    link={item.link}
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="Classnotes">
              <div className="grid grid-cols-1 sm:grids-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  pt-4 ">
                {course.class_notes.map((item) => (
                  <CoursecontentCard
                    name={item.name}
                    image={item.image}
                    size={item.size}
                    link={item.link}
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="Slides">
              <div className="grid grid-cols-1 sm:grids-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  pt-4 ">
                {course.slides.map((item) => (
                  <CoursecontentCard
                    name={item.name}
                    image={item.image}
                    size={item.size}
                    link={item.link}
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="Past Questions">
              <div className="grid grid-cols-1 sm:grids-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  pt-4 ">
                {course.past_questions.map((item) => (
                  <CoursecontentCard
                    name={item.name}
                    image={item.image}
                    size={item.size}
                    link={item.link}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </>
      ))}
    </div>
  );
}
