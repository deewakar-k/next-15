import Form from "next/form";
import { SearchIcon } from "lucide-react";
import { SearchFormReset } from "./search-form-reset";

export const SearchForm = ({ query }: { query?: string }) => {
  return (
    <>
      <Form action="/" scroll={false} className="max-w-md w-full">
        <div className="flex items-center w-full bg-[#27272A] rounded-full">
          <input
            name="query"
            defaultValue={query}
            placeholder="search startups"
            className="flex-1 h-10 pl-4 pr-2 font-medium bg-transparent placeholder:text-gray-400 focus:outline-none"
          />

          <div className="flex gap-2 items-center">
            {query && <SearchFormReset />}

            <button type="submit" className="pr-4">
              <SearchIcon className="size-4" />
            </button>
          </div>
        </div>
      </Form>
    </>
  );
};
