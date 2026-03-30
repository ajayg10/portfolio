import { Code, Brush, Zap, Map, Database, Cloud } from 'lucide-react';

const profile = {
  name: "Ajay Garg",
  profilePic: null, // will be set in App.jsx with import
  about:
    "I am a passionate developer and creative professional with a deep interest in building exceptional digital experiences. My journey in technology has been guided by curiosity and a relentless pursuit of excellence.",
  skills: [
    { name: "Web Development", icon: Code },
    { name: "UI/UX Design", icon: Brush },
    { name: "JavaScript & React", icon: Zap },
    { name: "Node.js & Backend", icon: Map },
    { name: "Database Management", icon: Database },
    { name: "Cloud Architecture", icon: Cloud },
  ],
  education:
    "3rd-year B.Tech in Computer Science (Cloud Computing specialization)",
  interests:
    "When I'm not coding, you'll find me exploring fantasy literature, playing strategy games, or contributing to open-source projects.",
  resumeUrl: "https://example.com/resume.pdf",
  social: {
    github: "https://github.com/ajayg10",
    linkedin: "https://www.linkedin.com/in/ajay-garg-647838301",
    instagram: "https://instagram.com/ajay.garg10",
    email: "ajaygarg200r@gmail.com",
  },
};

export default profile;
