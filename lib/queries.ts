import { db } from "@/db";
import { authors, startups } from "@/db/schema";
import { eq } from "drizzle-orm";

export const getStartups = async () => {
  return await db
    .select({
      id: startups.id,
      createdAt: startups.createdAt,
      views: startups.views,
      title: startups.title,
      description: startups.description,
      image: startups.image,
      category: startups.category,
      author: {
        id: authors.id,
        name: authors.name,
        image: authors.image,
      },
    })
    .from(startups)
    .leftJoin(authors, eq(startups.authorId, authors.id));
};
