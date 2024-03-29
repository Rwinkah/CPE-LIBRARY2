interface Course {
  code: string;
  title: string;
  lecturer: string;
  credit_load: number;
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
    code: "CPE512",
    title: "Digital Signal Processing",
    lecturer: "Prof. Apeh",
    credit_load: 3,
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
    code: "CPE556",
    title: "Computer Graphics",
    lecturer: "Dr Isi",
    credit_load: 3,
    textbooks: [
      {
        name: "Computer Graphics.",
        image: "/course-images/image1.png",
        size: "12 MB",
        link: "https://example.com/cs_overview.pdf",
      },
      {
        name: "Computer Graphics.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Computer Graphics.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Computer Graphics.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Computer Graphics.",
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
    code: "CPE522",
    title: "Digital System Design with VHDL",
    lecturer: "Prof Apeh",
    credit_load: 3,
    textbooks: [
      {
        name: "VHDL.",
        image: "/course-images/image1.png",
        size: "12 MB",
        link: "https://example.com/cs_overview.pdf",
      },
      {
        name: "VHDL.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "VHDL.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "VHDL.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "VHDL.",
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
  {
    code: "CPE501",
    title: "Project",
    lecturer: "Panel",
    credit_load: 3,
    textbooks: [
      {
        name: "Project.",
        image: "/course-images/image1.png",
        size: "12 MB",
        link: "https://example.com/cs_overview.pdf",
      },
      {
        name: "Project.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Project.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Project.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Project.",
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
  //cyberpreneurship
  {
    code: "CPE513",
    title: "Cyberpreneurship",
    lecturer: "Engr. Peter Peters",
    credit_load: 3,
    textbooks: [
      {
        name: "Cyberpreneurship.",
        image: "/course-images/image1.png",
        size: "12 MB",
        link: "https://example.com/cs_overview.pdf",
      },
      {
        name: "Cyberpreneurship.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Cyberpreneurship.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Cyberpreneurship.",
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
    code: "CPE515",
    title: "Computer Security Techniques",
    lecturer: "DR Prudence",
    credit_load: 3,
    textbooks: [
      {
        name: "Computer Security Techniques.",
        image: "/course-images/image1.png",
        size: "12 MB",
        link: "https://example.com/cs_overview.pdf",
      },
      {
        name: "Computer Security Techniques.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Computer Security Techniques.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Computer Security Techniques.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Computer Security Techniques.",
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
    code: "CPE557",
    title: "Engineering Law",
    lecturer: "Miss Theodore",
    credit_load: 3,
    textbooks: [
      {
        name: "Engineering Law.",
        image: "/course-images/image1.png",
        size: "12 MB",
        link: "https://example.com/cs_overview.pdf",
      },
      {
        name: "Engineering Law.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Engineering Law.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Engineering Law.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Engineering Law.",
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
    code: "CPE575",
    title: "Microprogramming",
    lecturer: "Prof Apeh",
    credit_load: 3,
    textbooks: [
      {
        name: "Microprogramming.",
        image: "/course-images/image1.png",
        size: "12 MB",
        link: "https://example.com/cs_overview.pdf",
      },
      {
        name: "Microprogramming.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Microprogramming.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Microprogramming.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Microprogramming.",
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
    code: "CPE591",
    title: "Reliability and Maintenance",
    lecturer: "Engr Sylvester",
    credit_load: 3,
    textbooks: [
      {
        name: "Reliability and Maintenance.",
        image: "/course-images/image1.png",
        size: "12 MB",
        link: "https://example.com/cs_overview.pdf",
      },
      {
        name: "Reliability and Maintenance.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Reliability and Maintenance.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Reliability and Maintenance.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Reliability and Maintenance.",
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
    code: "CPE593",
    title: "Artificial Neural Network and Machine Learning",
    lecturer: "Dr Dele",
    credit_load: 3,
    textbooks: [
      {
        name: "Artificial Neural Network and Machine Learning.",
        image: "/course-images/image1.png",
        size: "12 MB",
        link: "https://example.com/cs_overview.pdf",
      },
      {
        name: "Artificial Neural Network and Machine Learning.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Artificial Neural Network and Machine Learning.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Artificial Neural Network and Machine Learning.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Artificial Neural Network and Machine Learning.",
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
    code: "PRE571",
    title: "Engineering Management and Economics1",
    lecturer: "Dr Francis",
    credit_load: 3,
    textbooks: [
      {
        name: "Engineering Management and Economics1.",
        image: "/course-images/image1.png",
        size: "12 MB",
        link: "https://example.com/cs_overview.pdf",
      },
      {
        name: "Engineering Management and Economics1.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Engineering Management and Economics1.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Engineering Management and Economics1.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Engineering Management and Economics1.",
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
    code: "CPE502",
    title: "Project2",
    lecturer: "PANEL",
    credit_load: 3,
    textbooks: [
      {
        name: "Project2.",
        image: "/course-images/image1.png",
        size: "12 MB",
        link: "https://example.com/cs_overview.pdf",
      },
      {
        name: "Project2.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Project2.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Project2.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Project2.",
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
    code: "PRE572",
    title: "Engineering Management and Economics2",
    lecturer: "Dr Francis",
    credit_load: 3,
    textbooks: [
      {
        name: "Engineering Management and Economics2.",
        image: "/course-images/image1.png",
        size: "12 MB",
        link: "https://example.com/cs_overview.pdf",
      },
      {
        name: "Engineering Management and Economics2.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Engineering Management and Economics2.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Engineering Management and Economics2.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Engineering Management and Economics2.",
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
    code: "CPE514",
    title: "Design and Installation of ICT and Electrical Services",
    lecturer: "Engr James",
    credit_load: 3,
    textbooks: [
      {
        name: "Design and Installation of ICT and Electrical Services.",
        image: "/course-images/image1.png",
        size: "12 MB",
        link: "https://example.com/cs_overview.pdf",
      },
      {
        name: "Design and Installation of ICT and Electrical Services.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Design and Installation of ICT and Electrical Services.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Design and Installation of ICT and Electrical Services.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Design and Installation of ICT and Electrical Services.",
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
    code: "CPE516",
    title: "Computer Security Techniques2",
    lecturer: "Dr Prudence",
    credit_load: 3,
    textbooks: [
      {
        name: "Computer Security Techniques2.",
        image: "/course-images/image1.png",
        size: "12 MB",
        link: "https://example.com/cs_overview.pdf",
      },
      {
        name: "Computer Security Techniques2.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Computer Security Techniques2.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Computer Security Techniques2.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Computer Security Techniques2.",
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
    code: "CPE524",
    title: "Fuzzy Logic and Expert Systems",
    lecturer: "Dr Prudence",
    credit_load: 3,
    textbooks: [
      {
        name: "Fuzzy Logic and Expert Systems.",
        image: "/course-images/image1.png",
        size: "12 MB",
        link: "https://example.com/cs_overview.pdf",
      },
      {
        name: "Fuzzy Logic and Expert Systems.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Fuzzy Logic and Expert Systems.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Fuzzy Logic and Expert Systems.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Fuzzy Logic and Expert Systems.",
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
    code: "CPE526",
    title: "Robotics and Automation",
    lecturer: "Dr Dele",
    credit_load: 3,
    textbooks: [
      {
        name: "Robotics and Automation.",
        image: "/course-images/image1.png",
        size: "12 MB",
        link: "https://example.com/cs_overview.pdf",
      },
      {
        name: "Robotics and Automation.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Robotics and Automation.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Robotics and Automation.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Robotics and Automation.",
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
    code: "CPE544",
    title: "Digital Image Processing",
    lecturer: "Dr Iruansi",
    credit_load: 3,
    textbooks: [
      {
        name: "Digital Image Processing.",
        image: "/course-images/image1.png",
        size: "12 MB",
        link: "https://example.com/cs_overview.pdf",
      },
      {
        name: "Digital Image Processing.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Digital Image Processing.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Digital Image Processing.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Digital Image Processing.",
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
    code: "CPE572",
    title: "Digital Computer Networks",
    lecturer: "Dr Iruansi",
    credit_load: 3,
    textbooks: [
      {
        name: "Digital Computer Networks.",
        image: "/course-images/image1.png",
        size: "12 MB",
        link: "https://example.com/cs_overview.pdf",
      },
      {
        name: "Digital Computer Networks.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Digital Computer Networks.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Digital Computer Networks.",
        image: "/course-images/image2.png",
        size: "10 MB",
        link: "https://example.com/python_programming.pdf",
      },
      {
        name: "Digital Computer Networks.",
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
];

export default courses;
