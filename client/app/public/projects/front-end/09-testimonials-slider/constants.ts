export interface DataItem {
  id: number;
  body: string;
  name: string;
  title: string;
  pic: string;
}

export const data: DataItem[] = [
  {
    id: 1,
    body: `I've been interested in coding for a while but never taken the jump, until now. 
          I couldn't recommend this course enough. I'm now in the job of my dreams and so 
          excited about the future.`,
    name: "Tanya Sinclair",
    title: "UX Engineer",
    pic: "/frontend-projects/09/image-tanya.jpg",
  },
  {
    id: 2,
    body: `If you want to lay the best foundation possible I'd recommend taking this course. 
          The depth the instructors go into is incredible. I now feel so confident about 
          starting up as a professional developer.`,
    name: "John Tarkpor",
    title: "Junior Front-end Developer",
    pic: "/frontend-projects/09/image-john.jpg",
  },
  {
    id: 3,
    body: `This course has completely changed my perspective on web development. 
          The instructors are knowledgeable and the community is amazing.`,
    name: "Jane Doe",
    title: "Full Stack Developer",
    pic: "/frontend-projects/09/pic3.jpg",
},
{
    id: 4,
    body: `I've learned more in this course than I did in my four years of computer science degree. 
          The content is relevant and up-to-date.`,
    name: "Alice Smith",
    title: "Back-end Developer",
    pic: "/frontend-projects/09/pic1.jpg",
},
{
    id: 5,
    body: `The practical approach of this course is what makes it stand out. 
          I've been able to apply what I learned immediately in my job.`,
    name: "Bob Johnson",
    title: "Front-end Developer",
    pic: "/frontend-projects/09/pic2.jpg",
},
];
