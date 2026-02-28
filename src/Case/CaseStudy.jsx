import foodShortImg from "../assets/Gemini_Generated_Image_85bl3j85bl3j85bl.png";
import ochiImg from "../assets/Screenshot 2025-10-15 104702.png";
import k72Img from "../assets/Screenshot 2025-10-22 100258.png";

// The new Apple Pencil Image from the link you provided
const applePencilImg = "https://i.ibb.co/b5TyDxm1/apple-pencil.png";

export const caseStudies = [
  {
    name: "Apple-Pencil-3D",
    title: "Apple Pencil 3D Experience",
    mainImg: applePencilImg,
    screenshots: "",
    github: "https://github.com/Nashonlyy-dev/apple-pencil-3d",
    live: "https://apple-pencil-3d.vercel.app/",
    description: `
🍎 Apple Pencil 3D is a premium landing page experience built to push the limits of web-based 3D.

Using React Three Fiber and GSAP, I created a high-fidelity 3D model interaction that responds to the user's scroll. The project focuses on smooth transitions, realistic materials, and immersive storytelling.

Key Highlights:
• Interactive 3D Model with real-time reflections
• Scroll-triggered animations using GSAP ScrollTrigger
• Silk-smooth UI transitions with Framer Motion
• Fully responsive 3D Canvas
• High-performance rendering for 60FPS experience

Tech Used:
React.js, Three.js, React Three Fiber, GSAP, Framer Motion, and Tailwind CSS.
`,
  },
  {
    name: "FoodShort",
    title: "FoodShort App Case Study",
    mainImg: foodShortImg,
    screenshots: "",
    github: "https://github.com/Nashonlyy-dev/Foodshort",
    description: `
🍔 FoodieHub is a modern full-stack food delivery web app built with React, Node.js, Express, and MongoDB.
... [Rest of your description]
`,
  },
  {
    name: "Ochi",
    title: "Ochi App Case Study",
    mainImg: ochiImg,
    screenshots: "",
    github: "https://github.com/Nashonlyy-dev/ochi",
    live: "https://ochi-nine-delta.vercel.app/",
    description: `
👁️ Ochi is a visually striking website redesign built with React, Next.js, and Framer Motion. 
... [Rest of your description]
`,
  },
  {
    name: "K-72",
    title: "K-72 Project Case Study",
    mainImg: k72Img,
    screenshots: "",
    description: `
**K-72** is a futuristic design and concept project that showcases motion-driven interfaces and real-time 3D elements.
`,
  },
];

export function getCaseStudyByName(name) {
  return caseStudies.find((p) => p.name.toLowerCase() === name.toLowerCase());
}
