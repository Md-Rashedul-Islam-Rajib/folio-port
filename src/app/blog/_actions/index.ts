export const getAllBlogs = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER!}/blogs`, {
      method: "GET",
      next: {
        tags: ["BLOGS"],
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
export const getSingleBlog = async (id:string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER!}/blogs/${id}`, {
      method: "GET",
      next: {
        tags: ["BLOGS"],
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