import { SearchForm } from "@/components/search-form";
import { StartupCard } from "@/components/startup-card";
import { getStartups } from "@/lib/queries";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = await getStartups();

  console.log("posts: ", posts);

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
            posts.map((post) => <StartupCard key={post.id} post={post} />)
          ) : (
            <p>no startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
