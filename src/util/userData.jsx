const user = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    password: "alice123",
    totalCoursesEnrolled: 3,
    totalCoursesCompleted: 2,
    enrolledCourses: [
      {
        courseName: "React Basics",
        courseUrl: "https://www.youtube.com/playlist?list=PLabc123react",
        channelName: "CodeWithHarry",
        thumbnailUrl: "https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg",
      },
      {
        courseName: "UI/UX Design",
        courseUrl: "https://www.youtube.com/playlist?list=PLabc123uiux",
        channelName: "DesignCourse",
        thumbnailUrl: "https://i.ytimg.com/vi/3Y1NAZRMpC8/hqdefault.jpg",
      },
      {
        courseName: "JavaScript Advanced",
        courseUrl: "https://www.youtube.com/playlist?list=PLabc123jsadv",
        channelName: "Programming with Mosh",
        thumbnailUrl: "https://i.ytimg.com/vi/Bv_5Zv5c-Ts/hqdefault.jpg",
      },
    ],
    completedCourses: [
      {
        courseName: "React Basics",
        courseUrl: "https://www.youtube.com/playlist?list=PLabc123react",
        channelName: "CodeWithHarry",
        thumbnailUrl: "https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg",
      },
      {
        courseName: "UI/UX Design",
        courseUrl: "https://www.youtube.com/playlist?list=PLabc123uiux",
        channelName: "DesignCourse",
        thumbnailUrl: "https://i.ytimg.com/vi/3Y1NAZRMpC8/hqdefault.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    password: "bob456",
    totalCoursesEnrolled: 4,
    totalCoursesCompleted: 4,
    enrolledCourses: [
      {
        courseName: "Python for Beginners",
        courseUrl: "https://www.youtube.com/playlist?list=PLxyz123python",
        channelName: "Telusko",
        thumbnailUrl: "https://i.ytimg.com/vi/_uQrJ0TkZlc/hqdefault.jpg",
      },
      {
        courseName: "Django Web Dev",
        courseUrl: "https://www.youtube.com/playlist?list=PLxyz123django",
        channelName: "ProgrammingKnowledge",
        thumbnailUrl: "https://i.ytimg.com/vi/F5mRW0jo-U4/hqdefault.jpg",
      },
      {
        courseName: "SQL Mastery",
        courseUrl: "https://www.youtube.com/playlist?list=PLxyz123sql",
        channelName: "MySQL School",
        thumbnailUrl: "https://i.ytimg.com/vi/HXV3zeQKqGY/hqdefault.jpg",
      },
      {
        courseName: "Data Science",
        courseUrl: "https://www.youtube.com/playlist?list=PLxyz123ds",
        channelName: "Krish Naik",
        thumbnailUrl: "https://i.ytimg.com/vi/w8wGej-WN64/hqdefault.jpg",
      },
    ],
    completedCourses: [
      {
        courseName: "Python for Beginners",
        courseUrl: "https://www.youtube.com/playlist?list=PLxyz123python",
        channelName: "Telusko",
        thumbnailUrl: "https://i.ytimg.com/vi/_uQrJ0TkZlc/hqdefault.jpg",
      },
      {
        courseName: "Django Web Dev",
        courseUrl: "https://www.youtube.com/playlist?list=PLxyz123django",
        channelName: "ProgrammingKnowledge",
        thumbnailUrl: "https://i.ytimg.com/vi/F5mRW0jo-U4/hqdefault.jpg",
      },
      {
        courseName: "SQL Mastery",
        courseUrl: "https://www.youtube.com/playlist?list=PLxyz123sql",
        channelName: "MySQL School",
        thumbnailUrl: "https://i.ytimg.com/vi/HXV3zeQKqGY/hqdefault.jpg",
      },
      {
        courseName: "Data Science",
        courseUrl: "https://www.youtube.com/playlist?list=PLxyz123ds",
        channelName: "Krish Naik",
        thumbnailUrl: "https://i.ytimg.com/vi/KzZkVGCY5LI/hqdefault.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Charlie Lee",
    email: "charlie@example.com",
    password: "charlie789",
    totalCoursesEnrolled: 2,
    totalCoursesCompleted: 1,
    enrolledCourses: [
      {
        courseName: "HTML & CSS",
        courseUrl: "https://www.youtube.com/playlist?list=PLhtmlcss123",
        channelName: "freeCodeCamp",
        thumbnailUrl: "https://i.ytimg.com/vi/mU6anWqZJcc/hqdefault.jpg",
      },
      {
        courseName: "Responsive Web Design",
        courseUrl: "https://www.youtube.com/playlist?list=PLresponsive123",
        channelName: "Traversy Media",
        thumbnailUrl: "https://i.ytimg.com/vi/srvUrASNj0s/hqdefault.jpg",
      },
    ],
    completedCourses: [
      {
        courseName: "HTML & CSS",
        courseUrl: "https://www.youtube.com/playlist?list=PLhtmlcss123",
        channelName: "freeCodeCamp",
        thumbnailUrl: "https://i.ytimg.com/vi/mU6anWqZJcc/hqdefault.jpg",
      },
    ],
  },
  {
    id: 4,
    name: "Diana Patel",
    email: "diana@example.com",
    password: "diana1234",
    totalCoursesEnrolled: 5,
    totalCoursesCompleted: 3,
    enrolledCourses: [
      {
        courseName: "Java Basics",
        courseUrl: "https://www.youtube.com/playlist?list=PLjava123",
        channelName: "Telusko",
        thumbnailUrl: "https://i.ytimg.com/vi/eIrMbAQSU34/hqdefault.jpg",
      },
      {
        courseName: "Spring Boot",
        courseUrl: "https://www.youtube.com/playlist?list=PLspring123",
        channelName: "CodeAcademy",
        thumbnailUrl: "https://i.ytimg.com/vi/35EQXmHKZYs/hqdefault.jpg",
      },
      {
        courseName: "System Design",
        courseUrl: "https://www.youtube.com/playlist?list=PLsysdesign123",
        channelName: "Tech Dummies",
        thumbnailUrl: "https://i.ytimg.com/vi/tEyt1wS69NQ/hqdefault.jpg",
      },
      {
        courseName: "DevOps Essentials",
        courseUrl: "https://www.youtube.com/playlist?list=PLdevops123",
        channelName: "Simplilearn",
        thumbnailUrl: "https://i.ytimg.com/vi/0yWAtQ6HkjY/hqdefault.jpg",
      },
      {
        courseName: "Git & GitHub",
        courseUrl: "https://www.youtube.com/playlist?list=PLgit123",
        channelName: "Geeky Shows",
        thumbnailUrl: "https://i.ytimg.com/vi/apGV9Kg7ics/hqdefault.jpg",
      },
    ],
    completedCourses: [
      {
        courseName: "Java Basics",
        courseUrl: "https://www.youtube.com/playlist?list=PLjava123",
        channelName: "Telusko",
        thumbnailUrl: "https://i.ytimg.com/vi/eIrMbAQSU34/hqdefault.jpg",
      },
      {
        courseName: "Spring Boot",
        courseUrl: "https://www.youtube.com/playlist?list=PLspring123",
        channelName: "CodeAcademy",
        thumbnailUrl: "https://i.ytimg.com/vi/35EQXmHKZYs/hqdefault.jpg",
      },
      {
        courseName: "Git & GitHub",
        courseUrl: "https://www.youtube.com/playlist?list=PLgit123",
        channelName: "Geeky Shows",
        thumbnailUrl: "https://i.ytimg.com/vi/apGV9Kg7ics/hqdefault.jpg",
      },
    ],
  },
  {
    id: 5,
    name: "Ethan Brown",
    email: "ethan@example.com",
    password: "ethan5678",
    totalCoursesEnrolled: 1,
    totalCoursesCompleted: 0,
    enrolledCourses: [
      {
        courseName: "Machine Learning Fundamentals",
        courseUrl: "https://www.youtube.com/playlist?list=PLml123",
        channelName: "StatQuest",
        thumbnailUrl: "https://i.ytimg.com/vi/aircAruvnKk/hqdefault.jpg",
      },
    ],
    completedCourses: [],
  },
];

export default user;
