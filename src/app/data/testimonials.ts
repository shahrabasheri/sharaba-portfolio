export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "I worked with Shahraba in Codecraft, we worked on various fintech and healthcare products, where she consistently showed sharp thinking and strong dedication. She can handle complex problems with clarity, make well-reasoned design decisions, and collaborate effectively across teams. A reliable and thoughtful UX designer who delivers quality work!!",
    name: "Manoj Ravindran",
    title: "UX Lead",
    company: "Codecraft Technologies",
  },
  {
    quote:
      "I had the opportunity to work with her at Codecraft Technologies on multiple projects, and it was always a great experience collaborating with her. She is highly skilled in design tools like Figma and Adobe XD, and her ability to quickly learn and adapt to new tools, processes, and project requirements truly stands out. She brings a strong learning mindset and consistently works on improving her skills. Along with her design capabilities, she collaborates effectively with cross-functional teams, ensuring smooth communication and successful project execution. Her dedication, adaptability, and teamwork make her a valuable asset to any organization, and I would highly recommend her as a talented and reliable design professional.",
    name: "Surbhi Rani",
    title: "Product Designer",
    company: "Codecraft Technologies",
  },
];
