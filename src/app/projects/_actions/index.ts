const FALLBACK_PROJECTS = [
  {
    id: "8df57a7d-868d-4b55-911e-041115656361",
    title: "SwiftCart",
    description:
      "A modern Next.js e-commerce platform featuring product browsing, cart management, and secure checkout.",
    techStack: ["Mongoose", "MongoDB", "Express", "NextJs"],
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
];

export const getAllProjects = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER!}/projects`, {
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
      data:
        Array.isArray(data?.data) && data.data.length
          ? data.data
          : FALLBACK_PROJECTS,
    };
  } catch (err) {
    if (err instanceof Error) {
      console.error("getAllProjects error:", err.message);
    }
    return { data: FALLBACK_PROJECTS };
  }
};
export const getSingleProject = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER!}/projects/${id}`,
      {
        method: "GET",
        cache: "no-store",
        next: {
          tags: ["PROJECTS"],
        },
      }
    );

    if (!res.ok) {
      console.error(`Failed to fetch project ${id}:`, res.statusText);
      return null;
    }

    const data = await res.json();
    return data ?? null;
  } catch (err) {
    if (err instanceof Error) {
      console.error("getSingleProject error:", err.message);
    }
    return null;
  }
};
