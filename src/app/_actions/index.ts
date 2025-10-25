"use server";

// Fallback data to use when the server response is missing or empty
const FALLBACK_SKILLS = [
  {
    id: "a24eaadf-4566-44fb-ae1e-81a7eec3ccb7",
    name: "TypeScript",
    icon: [
      "https://res.cloudinary.com/dbe3ewhey/image/upload/v1753802446/1753802446859-rashedul-islam-rajib.webp",
    ],
    category: "Frontend",
  },
  {
    id: "7fd11074-89ef-41e1-b10d-f9bf6efb4704",
    name: "Docker",
    icon: [
      "https://res.cloudinary.com/dbe3ewhey/image/upload/v1753802498/1753802498451-rashedul-islam-rajib.png",
    ],
    category: "Tools",
  },
];

const FALLBACK_PROJECTS = [
  {
    id: "8df57a7d-868d-4b55-911e-041115656361",
    title: "SwiftCart",
    description:
      "A modern Next.js e-commerce platform featuring product browsing, cart management, and secure checkout.",
    techStack: ["Mongoose", "MongoDB", "Express", "NextJs"],
    liveUrl: "https://swift-cart-mocha.vercel.app",
    frontendGithubRepoLink: "https://github.com/Md-Rashedul-Islam-Rajib/SwiftCart",
    backendGithubRepoLink: "https://github.com/Md-Rashedul-Islam-Rajib/SwiftCart-APIs",
    imageUrl: [
      "https://res.cloudinary.com/dbe3ewhey/image/upload/v1753943306/1753943307716-rashedul-islam-rajib.webp",
    ],
    createdAt: "2025-07-31T06:28:27.348Z",
  },
];

const FALLBACK_BLOGS = [
  {
    id: "blog-fallback-1",
    title: "Building resilient frontends",
    slug: "resilient-frontends",
    excerpt: "How to make your frontend show useful content when APIs fail.",
    coverImage: "https://res.cloudinary.com/dbe3ewhey/image/upload/v1753943306/blog1.webp",
    createdAt: new Date().toISOString(),
  },
];

export const getAllSkills = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER!}/skills`, {
      method: "GET",
      cache: "no-store",
      next: { tags: ["SKILLS"] },
    });

    if (!res.ok) {
      console.error("Failed to fetch skills:", res.statusText);
      return { data: FALLBACK_SKILLS };
    }

    const data = await res.json();
    return {
      data: Array.isArray(data?.data) && data.data.length ? data.data : FALLBACK_SKILLS,
    };
  } catch (err) {
    if (err instanceof Error) {
      console.error("Fetch error:", err.message);
    }
    return { data: FALLBACK_SKILLS };
  }
};

export const getAllProjects = async () => {
  try {
    const res = await fetch(`https://folio-apis.vercel.app/projects`, {
      method: "GET",
      cache: "no-store",
      next: {
        tags: ["PROJECTS"],
      },
    });

    if (!res.ok) {
      console.error("Failed to fetch projects:", res.statusText);
      return { data: FALLBACK_PROJECTS };
    }

    const data = await res.json();
    return {
      data: Array.isArray(data?.data) && data.data.length ? data.data : FALLBACK_PROJECTS,
    };
  } catch (err) {
    if (err instanceof Error) {
      console.error("getAllProjects error:", err.message);
    }
    return { data: FALLBACK_PROJECTS };
  }
};

export const getAllBlogs = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER!}/blogs`, {
      method: "GET",
      cache: "no-store",
      next: {
        tags: ["BLOGS"],
      },
    });

    if (!res.ok) {
      console.error("Failed to fetch blogs:", res.statusText);
      return { data: FALLBACK_BLOGS };
    }

    const data = await res.json();
    return {
      data: Array.isArray(data?.data) && data.data.length ? data.data : FALLBACK_BLOGS,
    };
  } catch (err) {
    if (err instanceof Error) {
      console.error("getAllBlogs error:", err.message);
    }
    return { data: FALLBACK_BLOGS };
  }
};
