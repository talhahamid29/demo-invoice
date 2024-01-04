import Link from "next/link";
import { featuredPostsData } from "./featuredPostsData";
import Image from "next/image";

export default function FeaturedPosts() {
  return (
    <div className="space-y-10">
      <h1 className="text-gray-900 inline-block font-bold text-lg border-b-4 border-red-500">
        Featured Posts
      </h1>
      <div className="space-y-4">
        {featuredPostsData.map((post, index) => (
          <div
            key={index}
            className="grid grid-cols-3 gap-4 px-2 rounded-lg h-[120px]"
          >
            <div className="col-span-1">
              <div className="card-zoom bg-red-100 w-full h-full rounded-lg">
                <div className="card-zoom-image">
                  <Link href={post.imageLink}>
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      className="w-full h-full object-cover"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-span-2 flex flex-col justify-start items-start space-y-4">
              <Link href={post.titleLink}>
                <h1 className="text-gray-800 hover:text-red-600 hover:underline text-md font-bold">
                  {post.title}
                </h1>
              </Link>

              <div className="text-gray-600 text-sm font-normal">
                <i className="bi bi-person pr-1"></i>
                <Link href={post.author.authorLink}>
                  {post.author.firstName}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
