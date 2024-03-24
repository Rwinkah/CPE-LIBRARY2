"use client";

import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import edit from "@/assets/images/EditIcon.png";
import Image from "next/image";
import { Edit2Icon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CourseContent from "../../data/course-info";

const settingsSchema = z.object({
  email: z.string().email("invalid email"),
  firstName: z.string(),
  lastName: z.string(),
  matNo: z.string(),
  password: z.string(),
  firstSem: z.array(z.string()),
  secSem: z.array(z.string()),
  level: z.number(),
  chPassOld: z.string(),
  chPassNew: z.string(),
  chPassConf: z.string(),
});

interface settingsProp {
  page: number;
}

const courseListFirst = [
  "CPE579",
  "CPE513",
  "CPE563",
  "CPE573",
  "CPE503",
  "CPE511",
  "CPE533",
  "CPE531",
  "CPE537",
];
const courseListSecond = [
  "CPE556",
  "CPE544",
  "CPE524",
  "CPE514",
  "CPE516",
  "CPE503",
  "CPE518",
  "CPE552",
  "CPE528",
];

export function SettingsForm({ page }: settingsProp) {
  const [isChecked, setIsChecked] = useState(false);
  const [firstS, setFirstS] = useState<string[]>([]);
  const [secondS, setSecondS] = useState<string[]>([]);

  function onSubmit(values: z.infer<typeof settingsSchema>) {}

  const handleRemove = (
    index: number,
    setCourse: React.Dispatch<React.SetStateAction<string[]>>,
    course: string[]
  ) => {
    const newCourse = course.filter((_, i) => i !== index);
    setCourse(newCourse);
  };
  function onProceed(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else {
      setStep(1);
    }

    console.log(step);
  }

  const [step, setStep] = useState(1);
  const form = useForm<z.infer<typeof settingsSchema>>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      matNo: "",
    },
  });

  if (page === 1) {
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex mt-[20px]">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm text-[#515151]">
                    {" "}
                    Uniben email address
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="bg-[#F2F2F2] h-[46px] w-[451px] border-[1.5px] focus:outline-none rounded-3xl"
                      placeholder="student-lastname@eng.uniben.edu"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button className="border-[1.5px] h-[46px] flex gap-2 rounded-3xl mt-8 w-[185px] outline-[#820B8A] text-white ml-3 border-white">
              <Image src={edit} alt="edit" />
              Edit information
            </Button>
          </div>
          <div className="flex mt-[20px]">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm"> First name</FormLabel>
                  <FormControl>
                    <Input
                      className="h-[46px] w-[318px] border-[1.5px] focus:outline-none rounded-3xl"
                      placeholder="Osato"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="ml-[12px]">
                  <FormLabel className="text-sm"> Last name</FormLabel>
                  <FormControl>
                    <Input
                      className=" border-[1.5px] h-[46px] w-[318px] focus:outline-none rounded-3xl "
                      placeholder="Osato"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="flex mt-[20px]">
            <FormField
              control={form.control}
              name="matNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm"> Matric number</FormLabel>
                  <FormControl>
                    <Input
                      className=" border-[1.5px] h-[46px] w-[318px] focus:outline-none rounded-3xl"
                      placeholder="Osato"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="level"
              render={({ field }) => (
                <FormItem className="ml-[12px]">
                  <FormLabel className="text-sm"> Level</FormLabel>
                  <FormControl>
                    {/* <select className=" pl-4 w-[318px] h-[48px] focus:outline-none border-grey border rounded-3xl"  name="level">
                                            <option value="100">100</option>
                                            <option value="200">200</option>
                                            <option value="300">300</option>
                                            <option value="400">400</option>
                                            <option value="500">500</option>
                                        </select> */}
                    <Input
                      className=" border-[1.5px] h-[46px] w-[318px] focus:outline-none rounded-3xl "
                      placeholder="level"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
    );
  } else if (page === 2) {
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="s justify-between space-y-4 w-[89%] ">
            <h3 className="text-xl font-bold mt-[20px] mb-2">
              Change password
            </h3>
            <span className="text-base font-normal text-[#515151] mt-2 mb-6">
              You will be logged out of all sessions to protect your account
            </span>
            <FormField
              control={form.control}
              name="chPassOld"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Old password</FormLabel>
                  <FormControl>
                    <Input
                      className="focus:outline-none rounded-3xl "
                      placeholder="*********"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="chPassNew"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> New password</FormLabel>
                  <FormControl>
                    <Input
                      className="focus:outline-none rounded-3xl"
                      placeholder="*********"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="matNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm new password</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-3xl focus:outline-none"
                      placeholder="**********"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button className="border bg-[#820B8A] rounded-3xl w-[100%] text-white h-[46PX]">
              Change Password
            </Button>
          </div>
        </form>
      </Form>
    );
  } else if (page === 3) {
    return (
      <div>
        <div className="py-8">
          <Button
            variant={"outline"}
            className="rounded-[20px] text-primary border-primary flex flex-row gap-3"
          >
            <Edit2Icon size={13} />
            Edit Course List
          </Button>
        </div>
        <div className="flex flex-row gap-11">
          <div className="max-w-[355px]">
            <h3 className="text-base font-medium mb-4">First Semester</h3>
            <div>
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#820B8A12]">
                    <TableHead className="text-primary">Code</TableHead>
                    <TableHead className="text-primary">Title</TableHead>
                    <TableHead className="text-primary">Credit</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="bg-[#F5F5F5]">
                  {CourseContent.map((course) => (
                    <TableRow>
                      <TableCell>{course.code}</TableCell>
                      <TableCell>{course.title}</TableCell>
                      <TableCell>{course.credit_load}</TableCell>
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
                  <TableRow className="bg-[#820B8A12]">
                    <TableHead className="text-primary">Code</TableHead>
                    <TableHead className="text-primary">Title</TableHead>
                    <TableHead className="text-primary">Credit</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="bg-[#F5F5F5]">
                  {CourseContent.map((course) => (
                    <TableRow>
                      <TableCell>{course.code}</TableCell>
                      <TableCell>{course.title}</TableCell>
                      <TableCell>{course.credit_load}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
