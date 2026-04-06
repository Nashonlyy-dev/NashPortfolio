import foodShortImg from "../assets/Gemini_Generated_Image_85bl3j85bl3j85bl.png";
import ochiImg from "../assets/Screenshot 2025-10-15 104702.png";
import k72Img from "../assets/Screenshot 2025-10-22 100258.png";
import reviewFlowImg from "https://i.ibb.co/VWc2Vd7D/rewiew.png"; // Update this path to your actual image

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
    name: "ReviewFlow",
    title: "ReviewFlow: Self-Healing Review Engine",
    mainImg: reviewFlowImg, // Use your imported image here
    screenshots: "",
    github: "https://github.com/Nashonlyy-dev/vault3d", // Assuming it's in your vault3d repo
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
