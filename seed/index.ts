import { db } from "@/db";
import { authors, startups } from "@/db/schema";

async function main() {
  const [newAuthor] = await db
    .insert(authors)
    .values({
      name: "dazai",
      image:
        "https://i.pinimg.com/736x/cb/ad/3d/cbad3d660e3e06d6c66126eb38b946e5.jpg",
    })
    .returning({ id: authors.id });

  await db.insert(startups).values({
    title: "ayanami rei",
    slug: "ayanami-rei",
    authorId: newAuthor.id,
    description: "this is description",
    image:
      "https://i.pinimg.com/736x/8b/51/fe/8b51fea82261e306b69574a6274481de.jpg",
    category: "anime",
    createdAt: new Date(),
  });

  console.log("Seed successful!");
}

main().catch((e) => console.error(e));
