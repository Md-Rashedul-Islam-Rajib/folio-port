"use server";




export const getAllSkills = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER!}/skills`, {
      method: "GET",
      cache: "no-store",
      next: {
        tags: ["SKILLS"],
      },
    });

    const data = await res.json();
    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
};

export const getAllProjects = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER!}/projects`,
      {
        method: "GET",
        next: {
          tags: ["PROJECTS"],
        },
      }
    );

    const data = await res.json();
    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
};
export const getAllBlogs = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER!}/blogs`,
      {
        method: "GET",
        next: {
          tags: ["BLOGS"],
        },
      }
    );

    const data = await res.json();
    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
};