"use server";

import { revalidateTag } from "next/cache";


export const getAllSkills = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER!}/skills`,
      {
        method: "GET",
        next: {
          tags: ["SKILLS"],
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