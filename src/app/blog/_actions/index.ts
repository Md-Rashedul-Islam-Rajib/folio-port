export const getAllBlogs = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER!}/blogs`, {
      method: "GET",
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
      console.error("Fetch error:", err.message);
    }
    return { data: [] }; 
  }
};

export const getSingleBlog = async (id: string) => {
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
