interface Course {
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
  image: string;
  size: string;
  link: string;
}

const courses: Course[] = [
  {
    code: "CPE502",
    title: "Digital Signal Processing",
    lecturer: "Engr. Peter Peters",
    textbooks: [
      {
        name: "Digital Signal Processing.",
        image: "/course-images/image1.png",
        size: "12 MB",
        link: "https://example.com/cs_overview.pdf",
      },
      {
        name: "Digital Signal Processing.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Digital Signal Processing.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Digital Signal Processing.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Digital Signal Processing.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
    ],
    class_notes: [
      {
        name: "Full semester classnote",
        image: "/course-images/note.png",
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
      {
        name: "Lecturers note 2010",
        image: "/course-images/note.png",
        size: "3 MB",
        link: "https://example.com/week2_notes.pdf",
      },
      {
        name: "Hydraulic pumps notes",
        image: "/course-images/note.png",
        size: "3 MB",
        link: "https://example.com/week2_notes.pdf",
      },
      {
        name: "Population counting note",
        image: "/course-images/note.png",
        size: "3 MB",
        link: "https://example.com/week2_notes.pdf",
      },
    ],
    slides: [
      {
        name: "Full semester classnote",
        image: "/course-images/note.png",
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
      {
        name: "Full semester classnote",
        image: "/course-images/note.png",
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
      {
        name: "Full semester classnote",
        image: "/course-images/note.png",
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
    ],
    past_questions: [
      {
        name: "Full semester classnote",
        image: "/course-images/note.png",
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
      {
        name: "Full semester classnote",
        image: "/course-images/note.png",
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
      {
        name: "Full semester classnote",
        image: "/course-images/note.png",
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
    ],
  },
  {
    code: "CPE504",
    title: "Digital Signal Processing",
    lecturer: "Engr. Peter Peters",
    textbooks: [
      {
        name: "Digital Signal Processing.",
        image: "/course-images/image1.png",
        size: "12 MB",
        link: "https://example.com/cs_overview.pdf",
      },
      {
        name: "Digital Signal Processing.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Digital Signal Processing.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Digital Signal Processing.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Digital Signal Processing.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
    ],
    class_notes: [
      {
        name: "Full semester classnote",
        image: "/course-images/note.png",
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
      {
        name: "Lecturers note 2010",
        image: "/course-images/note.png",
        size: "3 MB",
        link: "https://example.com/week2_notes.pdf",
      },
      {
        name: "Hydraulic pumps notes",
        image: "/course-images/note.png",
        size: "3 MB",
        link: "https://example.com/week2_notes.pdf",
      },
      {
        name: "Population counting note",
        image: "/course-images/note.png",
        size: "3 MB",
        link: "https://example.com/week2_notes.pdf",
      },
    ],
    slides: [
      {
        name: "Full semester classnote",
        image: "/course-images/note.png",
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
      {
        name: "Full semester classnote",
        image: "/course-images/note.png",
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
      {
        name: "Full semester classnote",
        image: "/course-images/note.png",
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
    ],
    past_questions: [
      {
        name: "Full semester classnote",
        image: "/course-images/note.png",
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
      {
        name: "Full semester classnote",
        image: "/course-images/note.png",
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
      {
        name: "Full semester classnote",
        image: "/course-images/note.png",
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
    ],
  },
  {
    code: "CPE503",
    title: "Computer Networks",
    lecturer: "Engr. daniel Peters",
    textbooks: [
      {
        name: "Digital Signal Processing.",
        image: "/course-images/image1.png",
        size: "12 MB",
        link: "https://example.com/cs_overview.pdf",
      },
      {
        name: "Digital Signal Processing.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Digital Signal Processing.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Digital Signal Processing.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Digital Signal Processing.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
    ],
    class_notes: [
      {
        name: "Full semester classnote",
        image: "/course-images/note.png",
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
      {
        name: "Lecturers note 2010",
        image: "/course-images/note.png",
        size: "3 MB",
        link: "https://example.com/week2_notes.pdf",
      },
      {
        name: "Hydraulic pumps notes",
        image: "/course-images/note.png",
        size: "3 MB",
        link: "https://example.com/week2_notes.pdf",
      },
      {
        name: "Population counting note",
        image: "/course-images/note.png",
        size: "3 MB",
        link: "https://example.com/week2_notes.pdf",
      },
    ],
    slides: [
      {
        name: "Full semester classnote",
        image: "/course-images/note.png",
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
      {
        name: "Full semester classnote",
        image: "/course-images/note.png",
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
      {
        name: "Full semester classnote",
        image: "/course-images/note.png",
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
    ],
    past_questions: [
      {
        name: "Full semester classnote",
        image: "/course-images/note.png",
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
      {
        name: "Full semester classnote",
        image: "/course-images/note.png",
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
      {
        name: "Full semester classnote",
        image: "/course-images/note.png",
        size: "14 MB",
        link: "https://example.com/week1_notes.pdf",
      },
    ],
  },
  // Add more courses here...
];

export default courses;
