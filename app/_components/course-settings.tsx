import React, { useState } from "react";
import CourseContent from "../../data/course-info";
import { Edit2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MdOutlineDeleteForever } from "react-icons/md";
import { Check } from "lucide-react";

const CourseSettings = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [courses, setCourses] = useState(CourseContent);

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const deleteCourse = (code: string) => {
    setCourses(courses.filter((course) => course.code !== code));
  };

  return (
    <div>
      <div className="py-8">
        {!isEditing && (
          <Button
            variant={"outline"}
            className="rounded-[20px] text-primary border-primary flex flex-row gap-3"
            onClick={toggleEditMode}
          >
            <Edit2Icon size={13} />
            Edit Course List
          </Button>
        )}
      </div>
      <div className="flex flex-row gap-11">
        <div className="max-w-[355px]">
          <h3 className="text-base font-medium mb-4">First Semester</h3>
          <div>
            <Table>
              <TableHeader>
                <TableRow className="bg-[#820B8A12] border-white">
                  <TableHead className="text-primary">Code</TableHead>
                  <TableHead className="text-primary">Title</TableHead>
                  <TableHead className="text-primary">Credit</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="bg-[#F5F5F5]">
                {courses.map((course) => (
                  <TableRow key={course.code} className="border-white">
                    <TableCell>{course.code}</TableCell>
                    <TableCell>{course.title}</TableCell>
                    <TableCell>{course.credit_load}</TableCell>
                    {isEditing && (
                      <TableCell className="bg-white">
                        <Button
                          className="border-white"
                          variant={"outline"}
                          onClick={() => deleteCourse(course.code)}
                        >
                          <MdOutlineDeleteForever size={16} color="red" />
                        </Button>
                      </TableCell>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        <div className="max-w-[355px]">
          <h3 className="text-base font-medium mb-4">Second Semester</h3>
          <div>
            <Table>
              <TableHeader>
                <TableRow className="bg-[#820B8A12] border-white">
                  <TableHead className="text-primary">Code</TableHead>
                  <TableHead className="text-primary">Title</TableHead>
                  <TableHead className="text-primary">Credit</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="bg-[#F5F5F5]">
                {courses.map((course) => (
                  <TableRow key={course.code} className="border-white">
                    <TableCell>{course.code}</TableCell>
                    <TableCell>{course.title}</TableCell>
                    <TableCell>{course.credit_load}</TableCell>
                    {isEditing && (
                      <TableCell className="bg-white">
                        <Button
                          className="border-white"
                          variant={"outline"}
                          onClick={() => deleteCourse(course.code)}
                        >
                          <MdOutlineDeleteForever size={16} color="red" />
                        </Button>
                      </TableCell>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      {isEditing && (
        <div className="py-8">
          <Button
            variant={"default"}
            className="rounded-[20px] text-white bg-primary flex flex-row gap-3"
            onClick={toggleEditMode}
          >
            <Check size={13} />
            Save Changes
          </Button>
        </div>
      )}
    </div>
  );
};

export default CourseSettings;