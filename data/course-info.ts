import image1 from "../assets/images/course-images/image1.png";
import image2 from "../assets/images/course-images/image2.png";
import image3 from "../assets/images/course-images/image3.png";
import image4 from "../assets/images/course-images/image4.png";
import note from "../assets/images/course-images/note.png";

interface Course {
  id: string;
  code: string;
  title: string;
  lecturer: string;
  textbooks: Resource[];
  slides: Resource[];
  class_notes: Resource[];
  past_questions: Resource[];
}

interface Resource {
  name: string;
  image: object;
  size: string;
  link: string;
}

const courses: Course[] = [
  {
    id: "1",
    code: "CPE512",
    title: "Digital Signal Processing",
    lecturer: "Engr. Peter Peters",
    textbooks: [
      {
        name: "Digital Signal Processing.",
        image: image1,
        size: "12 MB",
        link: "https://example.com/cs_overview.pdf",
      },
      {
        name: "Digital Signal Processing.",
        image: image2,
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Digital Signal Processing.",
        image: image2,
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Digital Signal Processing.",
        image: image2,
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Digital Signal Processing.",
        image: image2,
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
    ],
    class_notes: [
      {
        name: "Full semester classnote",
        image: note,
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
      {
        name: "Lecturers note 2010",
        image: note,
        size: "3 MB",
        link: "https://example.com/week2_notes.pdf",
      },
      {
        name: "Hydraulic pumps notes",
        image: note,
        size: "3 MB",
        link: "https://example.com/week2_notes.pdf",
      },
      {
        name: "Population counting note",
        image: note,
        size: "3 MB",
        link: "https://example.com/week2_notes.pdf",
      },
    ],
    slides: [
      {
        name: "Full semester classnote",
        image: note,
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
      {
        name: "Full semester classnote",
        image: note,
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
      {
        name: "Full semester classnote",
        image: note,
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
    ],
    past_questions: [
      {
        name: "Full semester classnote",
        image: note,
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
      {
        name: "Full semester classnote",
        image: note,
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
      {
        name: "Full semester classnote",
        image: note,
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
    ],
  },
  {
    id: "2",
    code: "CPE503",
    title: "Computer Networks",
    lecturer: "Engr. Peter Peters",
    textbooks: [
      {
        name: "Digital Signal Processing.",
        image: image1,
        size: "12 MB",
        link: "https://example.com/cs_overview.pdf",
      },
      {
        name: "Digital Signal Processing.",
        image: image2,
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Digital Signal Processing.",
        image: image2,
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Digital Signal Processing.",
        image: image2,
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Digital Signal Processing.",
        image: image2,
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
    ],
    class_notes: [
      {
        name: "Full semester classnote",
        image: note,
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
      {
        name: "Lecturers note 2010",
        image: note,
        size: "3 MB",
        link: "https://example.com/week2_notes.pdf",
      },
      {
        name: "Hydraulic pumps notes",
        image: note,
        size: "3 MB",
        link: "https://example.com/week2_notes.pdf",
      },
      {
        name: "Population counting note",
        image: note,
        size: "3 MB",
        link: "https://example.com/week2_notes.pdf",
      },
    ],
    slides: [
      {
        name: "Full semester classnote",
        image: note,
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
      {
        name: "Full semester classnote",
        image: note,
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
      {
        name: "Full semester classnote",
        image: note,
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
    ],
    past_questions: [
      {
        name: "Full semester classnote",
        image: note,
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
      {
        name: "Full semester classnote",
        image: note,
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
      {
        name: "Full semester classnote",
        image: note,
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
    ],
  },
  {
    id: "3",
    code: "CPE501",
    title: "Digital Signal Processing",
    lecturer: "Engr. Peter Peters",
    textbooks: [
      {
        name: "Digital Signal Processing.",
        image: image1,
        size: "12 MB",
        link: "https://example.com/cs_overview.pdf",
      },
      {
        name: "Digital Signal Processing.",
        image: image2,
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Digital Signal Processing.",
        image: image2,
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Digital Signal Processing.",
        image: image2,
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Digital Signal Processing.",
        image: image2,
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
    ],
    class_notes: [
      {
        name: "Full semester classnote",
        image: note,
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
      {
        name: "Lecturers note 2010",
        image: note,
        size: "3 MB",
        link: "https://example.com/week2_notes.pdf",
      },
      {
        name: "Hydraulic pumps notes",
        image: note,
        size: "3 MB",
        link: "https://example.com/week2_notes.pdf",
      },
      {
        name: "Population counting note",
        image: note,
        size: "3 MB",
        link: "https://example.com/week2_notes.pdf",
      },
    ],
    slides: [
      {
        name: "Full semester classnote",
        image: note,
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
      {
        name: "Full semester classnote",
        image: note,
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
      {
        name: "Full semester classnote",
        image: note,
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
    ],
    past_questions: [
      {
        name: "Full semester classnote",
        image: note,
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
      {
        name: "Full semester classnote",
        image: note,
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
      {
        name: "Full semester classnote",
        image: note,
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
    ],
  },
  // Add more courses here...
];

export default courses;
