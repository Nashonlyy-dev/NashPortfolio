// Local Assets (Bundled by Vite/Next.js)
import foodShortImg from "../assets/Gemini_Generated_Image_85bl3j85bl3j85bl.png";
import ochiImg from "../assets/Screenshot 2025-10-15 104702.png";
import k72Img from "../assets/Screenshot 2025-10-22 100258.png";

// External Assets (Loaded directly from URL)
const reviewFlowImg = "https://i.ibb.co/VWc2Vd7D/rewiew.png"; 
const applePencilImg = "https://i.ibb.co/b5TyDxm1/apple-pencil.png";

export const caseStudies = [
  {
    name: "ReviewFlow",
    title: "ReviewFlow: Self-Healing Review Engine",
    mainImg: reviewFlowImg,
    screenshots: "",
    github: "https://github.com/Nashonlyy-dev/vault3d",
    live: "https://review-flow-phi.vercel.app/",
    description: `
🛡️ ReviewFlow is a production-grade SaaS that transforms messy Google Reviews into premium, AI-curated social proof.

Built to bypass regional banking restrictions and strict serverless timeouts, I engineered a "Fortress" architecture. It features a custom borderless crypto payment bridge and a resilient background scraping engine that auto-retries on network failures, ensuring reliable data syncs anywhere in the world.

Key Highlights:
• Self-Healing Background Sync using Inngest to bypass 10s serverless timeouts
• Borderless Crypto Payments via custom NOWPayments (USDT) + Stripe integration
• AI Review Curation to automatically extract and highlight the best customer quotes
• Hardened Security with timing-safe webhook signatures and fail-closed logic
• Automated Scraper Pipelines utilizing Apify and Supabase PostgreSQL

Tech Used:
Next.js (App Router), Supabase, Inngest, Apify, NOWPayments API, Stripe, and Tailwind CSS.
`,
  },
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
🍔 FoodShort is a modern full-stack food delivery web app built with the MERN stack.

This project focused on complex state management and role-based access control. I implemented a seamless ordering flow, real-time status updates, and a robust backend to handle high-concurrency requests.

Key Highlights:
• Full-stack CRUD operations with MongoDB
• Secure JWT Authentication & Authorization
• Responsive design with Tailwind CSS
• Integrated payment simulation
• Real-time database updates

Tech Used:
React, Node.js, Express, MongoDB, and Tailwind CSS.
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

This project was a deep dive into advanced CSS and high-end animations. I focused on recreating the smooth, "liquid" feeling of premium agency websites, using Framer Motion to handle complex entry and exit animations.

Key Highlights:
• High-performance GSAP and Framer Motion animations
• Modern, minimal aesthetic focusing on typography
• Optimized for all screen sizes
• Custom hooks for scroll-based triggers

Tech Used:
React, Next.js, Framer Motion, and Tailwind CSS.
`,
  },
  {
    name: "K-72",
    title: "K-72 Project Case Study",
    mainImg: k72Img,
    screenshots: "",
    description: `
**K-72** is a futuristic design and concept project that showcases motion-driven interfaces and real-time 3D elements.

It serves as an experimental playground where I tested early iterations of my 3D rendering pipeline and custom physics engines within a web browser.

Tech Used:
Three.js, React, and CSS Modules.
`,
  },
];

export function getCaseStudyByName(name) {
  return caseStudies.find((p) => p.name.toLowerCase() === name.toLowerCase());
}
