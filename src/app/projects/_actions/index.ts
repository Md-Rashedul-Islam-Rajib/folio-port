export const getAllProjects = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER!}/projects`, {
      method: "GET",
      cache: "no-store",
      next: {
        tags: ["PROJECTS"],
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
export const getSingleProject = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER!}/projects/${id}`, {
      method: "GET",
      cache: "no-store",
      next: {
        tags: ["PROJECTS"],
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
