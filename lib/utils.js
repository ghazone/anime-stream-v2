import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const slugify = (str = "kosong Coy") => {
  str = str.replace(/^\s+|\s+$/g, ""); // trim leading/trailing white space
  str = str.toLowerCase(); // convert string to lowercase
  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove any non-alphanumeric characters
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/-+/g, "-"); // remove consecutive hyphens
  return str;
};

export const episodeFetcher = async (slug) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_API}/anime/gogoanime/info/${slug}`;
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data.episodes;
  } catch (error) {
    const data = {
      error: error.message,
    };
    return data;
  }
};

export const episodeDetails = async ({ id }) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_API}/anime/gogoanime/watch/${id}`;
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data.sources;
  } catch (error) {
    const data = {
      error: error.message,
    };
    return data;
  }
};

export const anilistFetcher = async (params = "trending") => {
  const url = `${process.env.NEXT_PUBLIC_BASE_API}/meta/anilist`;

  try {
    const response = await fetch(`${url}/${params}`);

    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    const data = {
      error: error.message,
    };
    return data;
  }
};
