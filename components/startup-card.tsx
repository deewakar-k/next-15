import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export const StartupCard = ({ post }) => {
  return (
    <li className="border border-white py-6 px-5 hover:bg-neutral-900/80">
      <div className="flex justify-between">
        <p>{formatDate(post?.createdAt)}</p>
        <div className="flex items-center gap-1.5">
          <EyeIcon className="size-4" />
          <span>{post?.views}</span>
        </div>
      </div>

      <div className="flex justify-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`user/${post?.author?.id}`}>
            <p className="font-medium">{post?.author?.name}</p>
          </Link>
          <Link href={`startup/${post?.author?._id}`}>
            <h3 className="font-semibold text-lg">{post?.title}</h3>
          </Link>
        </div>

        <Link href={`user/${post?.author?.id}`}>
          <Image
            src={post?.author?.image!}
            alt={post?.author?.name!}
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>

      <Link href={`startup/${post?.author?.id}`}>
        <p>{post?.description}</p>

        <img src={post?.image} alt="placeholder" />
      </Link>

      <div className="flex justify-between gap-3 mt-5">
        <Link href={`/?query=${post?.category?.toLowerCase()}`}>
          <p className="font-medium text-sm text-white/60">{post?.category}</p>
        </Link>
        <Button asChild>
          <Link
            href={`/startup/${post?.id}`}
            className="p-2 rounded-full border border-white/20"
          >
            Details
          </Link>
        </Button>
      </div>
    </li>
  );
};
