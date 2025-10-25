"use server";




export const getAllSkills = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER!}/skills`, {
      method: "GET",
      cache: "no-store",
      next: { tags: ["SKILLS"] },
    });

    if (!res.ok) {
      console.error("Failed to fetch skills:", res.statusText);
      return { data: [] };
    }

    const data = await res.json();
    return {
      data: Array.isArray(data?.data)
        ? data.data
        : [
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
            {
              id: "b8f267fc-28d1-49cc-ac3e-b5201e418236",
              name: "Redis",
              icon: [
                "https://res.cloudinary.com/dbe3ewhey/image/upload/v1753802711/1753802711352-rashedul-islam-rajib.png",
              ],
              category: "Tools",
            },
            {
              id: "ca2de2ce-6fb2-420b-8ce4-777a65090c15",
              name: "Cloudinary",
              icon: [
                "https://res.cloudinary.com/dbe3ewhey/image/upload/v1753802738/1753802739696-rashedul-islam-rajib.jpg",
              ],
              category: "Backend",
            },
            {
              id: "c8b0d793-4527-4b70-a7fe-310bebee6100",
              name: "Axios",
              icon: [
                "https://res.cloudinary.com/dbe3ewhey/image/upload/v1753802783/1753802783305-rashedul-islam-rajib.png",
              ],
              category: "Tools",
            },
            {
              id: "de3bf58a-4b35-474f-a214-7e775c47f484",
              name: "Shadcn UI",
              icon: [
                "https://res.cloudinary.com/dbe3ewhey/image/upload/v1753802803/1753802804005-rashedul-islam-rajib.png",
              ],
              category: "Frontend",
            },
            {
              id: "2b8b25a6-820a-4190-a29e-9f42dd81385b",
              name: "Render",
              icon: [
                "https://res.cloudinary.com/dbe3ewhey/image/upload/v1753802846/1753802846080-rashedul-islam-rajib.png",
              ],
              category: "Tools",
            },
            {
              id: "06848444-4868-475e-8256-1ababdcf8231",
              name: "Vercel",
              icon: [
                "https://res.cloudinary.com/dbe3ewhey/image/upload/v1753802871/1753802871940-rashedul-islam-rajib.png",
              ],
              category: "Tools",
            },
            {
              id: "da246414-14cd-439b-b876-0a2933418eee",
              name: "Postman",
              icon: [
                "https://res.cloudinary.com/dbe3ewhey/image/upload/v1753802892/1753802893182-rashedul-islam-rajib.png",
              ],
              category: "Tools",
            },
            {
              id: "c979c335-6661-456e-b0bf-ed07d78cc180",
              name: "Git ",
              icon: [
                "https://res.cloudinary.com/dbe3ewhey/image/upload/v1753802916/1753802916023-rashedul-islam-rajib.png",
              ],
              category: "Tools",
            },
            {
              id: "7d3611f1-7970-4f42-a885-f0d014c6939d",
              name: "Drizzle ORM",
              icon: [
                "https://res.cloudinary.com/dbe3ewhey/image/upload/v1753802937/1753802937536-rashedul-islam-rajib.png",
              ],
              category: "Backend",
            },
            {
              id: "693032c1-d847-4af5-918e-fcdb79a45aa0",
              name: "Prisma ORM",
              icon: [
                "https://res.cloudinary.com/dbe3ewhey/image/upload/v1753802962/1753802962573-rashedul-islam-rajib.jpg",
              ],
              category: "Backend",
            },
            {
              id: "8778b6f3-071b-4023-9352-583dad516839",
              name: "Mongoose ODM",
              icon: [
                "https://res.cloudinary.com/dbe3ewhey/image/upload/v1753803000/1753803000570-rashedul-islam-rajib.png",
              ],
              category: "Backend",
            },
            {
              id: "8743facf-a7fe-43a4-846a-4536dd352926",
              name: "PostgreSQL",
              icon: [
                "https://res.cloudinary.com/dbe3ewhey/image/upload/v1753803320/1753803320731-rashedul-islam-rajib.png",
              ],
              category: "Backend",
            },
            {
              id: "1901b6db-3b6a-4c4c-92b1-935ca8894814",
              name: "Mongo DB",
              icon: [
                "https://res.cloudinary.com/dbe3ewhey/image/upload/v1753803341/1753803341942-rashedul-islam-rajib.png",
              ],
              category: "Backend",
            },
            {
              id: "a6e6e78e-61a3-4576-9444-97bdedc85ad1",
              name: "REST Api",
              icon: [
                "https://res.cloudinary.com/dbe3ewhey/image/upload/v1753803360/1753803360666-rashedul-islam-rajib.jpg",
              ],
              category: "Backend",
            },
            {
              id: "208890db-a41a-43c3-b6c7-ba15a085167e",
              name: "Express Js",
              icon: [
                "https://res.cloudinary.com/dbe3ewhey/image/upload/v1753803383/1753803383295-rashedul-islam-rajib.png",
              ],
              category: "Backend",
            },
            {
              id: "4ef20555-89f1-458a-8b09-4524c05d7e06",
              name: "Node Js",
              icon: [
                "https://res.cloudinary.com/dbe3ewhey/image/upload/v1753803401/1753803402665-rashedul-islam-rajib.png",
              ],
              category: "Backend",
            },
            {
              id: "ba8b23a6-2c64-49d7-b910-9796ce3f7abc",
              name: "Zustand",
              icon: [
                "https://res.cloudinary.com/dbe3ewhey/image/upload/v1753803440/1753803440843-rashedul-islam-rajib.jpg",
              ],
              category: "Backend",
            },
            {
              id: "ee94756f-cebb-46dd-a73d-f5aaa976e898",
              name: "Redux",
              icon: [
                "https://res.cloudinary.com/dbe3ewhey/image/upload/v1753803568/1753803568802-rashedul-islam-rajib.png",
              ],
              category: "Frontend",
            },
            {
              id: "314cef26-8d68-417f-a2fd-78d8a0b23762",
              name: "Next JS",
              icon: [
                "https://res.cloudinary.com/dbe3ewhey/image/upload/v1753803595/1753803595700-rashedul-islam-rajib.jpg",
              ],
              category: "Frontend",
            },
            {
              id: "5c21a7ee-b233-45cf-8f11-d45b9514f444",
              name: "Tailwind CSS",
              icon: [
                "https://res.cloudinary.com/dbe3ewhey/image/upload/v1753803618/1753803619125-rashedul-islam-rajib.png",
              ],
              category: "Frontend",
            },
            {
              id: "9691dec4-25b4-4a2e-bd84-ec9384308b30",
              name: "React",
              icon: [
                "https://res.cloudinary.com/dbe3ewhey/image/upload/v1753803692/1753803692117-rashedul-islam-rajib.png",
              ],
              category: "Frontend",
            },
            {
              id: "1bd825eb-ebfa-432a-8637-e002adf49e12",
              name: "CSS",
              icon: [
                "https://res.cloudinary.com/dbe3ewhey/image/upload/v1753803716/1753803717327-rashedul-islam-rajib.png",
              ],
              category: "Frontend",
            },
            {
              id: "06cc5889-53d6-417c-9bd7-8a8b20173ee7",
              name: "HTML",
              icon: [
                "https://res.cloudinary.com/dbe3ewhey/image/upload/v1753803738/1753803739268-rashedul-islam-rajib.png",
              ],
              category: "Frontend",
            },
            {
              id: "10595098-24ed-4148-9c0b-11684ade21a4",
              name: "JavaScript",
              icon: [
                "https://res.cloudinary.com/dbe3ewhey/image/upload/v1753803759/1753803760609-rashedul-islam-rajib.png",
              ],
              category: "Frontend",
            },
          ],
    };
  } catch (err) {
    if (err instanceof Error) {
      console.error("Fetch error:", err.message);
    }
    return { data: [] };
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
      return { data: [] };
    }

    const data = await res.json();
    return {
      data: Array.isArray(data?.data)
        ? data.data
        : [
            {
              id: "8df57a7d-868d-4b55-911e-041115656361",
              title: "SwiftCart",
              description:
                "A modern Next.js e-commerce platform featuring product browsing, cart management, and secure checkout. Built with performance and user experience in mind with following features.\n\n• Tools for acknowledging and rewarding employees' achievements.\n\n• Mechanisms for collecting employee opinions and suggestions.\n\n• Channels for facilitating internal communication.\n\n• Programs to incentivize and motivate employees\n\n• Initiatives to enhance workplace culture.",
              techStack: [
                "Mongoose",
                "MongoDB",
                "Express",
                "NextJs",
                "Cloudinary",
                "SSL-Commerce",
                "NodeJs",
                "Framer Motion",
                "ShadCN",
                "TypeScript",
                "Tailwind CSS",
                "CSS",
                "HTML",
              ],
              liveUrl: "https://swift-cart-mocha.vercel.app",
              frontendGithubRepoLink:
                "https://github.com/Md-Rashedul-Islam-Rajib/SwiftCart",
              backendGithubRepoLink:
                "https://github.com/Md-Rashedul-Islam-Rajib/SwiftCart-APIs",
              imageUrl: [
                "https://res.cloudinary.com/dbe3ewhey/image/upload/v1753943306/1753943307716-rashedul-islam-rajib.webp",
              ],
              createdAt: "2025-07-31T06:28:27.348Z",
            },
            {
              id: "e29370e8-534b-49e9-979c-7924da92e036",
              title: "ThinkGreenly",
              description:
                "A next.js powered community platform for sharing and voting on sustainable ideas and collaboration. It  bridges technology and environmental consciousness! ThinkGreenly is a full-stack platform designed where you can share on sustainable practices, connect eco-conscious communities, track personal carbon footprints and many more ideas with following features\n\n• The site boasts a sleek and modern design, enhancing user experience with intuitive navigation and\nvisually appealing elements\n• Detailed listings and descriptions of room services available, ensuring guests can easily find and select\ntheir desired amenities.\n• The website is optimized for various devices, providing seamless accessibility and functionality whether\naccessed from a desktop, tablet, or smartphone.",
              techStack: [
                "Prisma",
                "PostgreSQL",
                "Express",
                "NextJs",
                "Cloudinary",
                "SSL-Commerce",
                "NodeJs",
                "Framer Motion",
                "ShadCN",
                "TypeScript",
                "Tailwind CSS",
                "CSS",
                "HTML",
              ],
              liveUrl: "https://think-greenly-one.vercel.app",
              frontendGithubRepoLink:
                "https://github.com/Md-Rashedul-Islam-Rajib/ThinkGreenly",
              backendGithubRepoLink:
                "https://github.com/Md-Rashedul-Islam-Rajib/ThinkGreenly-apis",
              imageUrl: [
                "https://res.cloudinary.com/dbe3ewhey/image/upload/v1753943559/1753943560067-rashedul-islam-rajib.webp",
              ],
              createdAt: "2025-07-31T06:32:39.881Z",
            },
          ],
    };
  } catch (err) {
    if (err instanceof Error) {
      console.error("getAllProjects error:", err.message);
    }
    return { data: [] };
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
      return { data: [] };
    }

    const data = await res.json();
    return {
      data: Array.isArray(data?.data) ? data.data : [],
    };
  } catch (err) {
    if (err instanceof Error) {
      console.error("getAllBlogs error:", err.message);
    }
    return { data: [] };
  }
};
