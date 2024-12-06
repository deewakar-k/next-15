import { SearchForm } from "@/components/search-form";
import { StartupCard } from "@/components/startup-card";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name: "me",
        image:
          "https://i.pinimg.com/736x/cb/ad/3d/cbad3d660e3e06d6c66126eb38b946e5.jpg",
      },
      _id: 1,
      description: "this is description",
      image:
        "https://i.pinimg.com/736x/8b/51/fe/8b51fea82261e306b69574a6274481de.jpg",
      category: "anime",
      title: "ayanami rei",
    },
  ];

  return (
    <>
      <section className="flex flex-col items-center space-y-4">
        <h1 className="heading">
          pitch your startup, <br /> connect with entrepreneurs
        </h1>
        <p className="sub-heading">
          submit ideas, vote on pitches, and get noticed in virtual
          competitions.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">
        <p className="font-semibold text-lg">
          {query ? `search results for "${query}"` : "all startups"}
        </p>

        <ul className="mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5">
          {posts.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p>no startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
