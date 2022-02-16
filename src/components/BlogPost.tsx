import Link from "next/link";
import Image from "next/image";

type BlogPostProps = {
  post: {
    title: string;
    imageUrl: string;
    href: string;
    description: string;
    author: {
      name: string;
      imageUrl: string;
    };
    date: string;
  };
};

export function BlogPost({ post }: BlogPostProps) {
  return (
    <div
      key={post.title}
      className="flex flex-col rounded-lg shadow-lg overflow-hidden"
    >
      <div className="flex-shrink-0">
        <Image
          className="object-cover"
          src={post.imageUrl}
          alt={post.title}
          width={400}
          height={200}
          layout="responsive"
        />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <Link href={post.href}>
            <a className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">
                {post.title}
              </p>
              <p className="mt-3 text-base text-gray-500">{post.description}</p>
            </a>
          </Link>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <span className="sr-only">{post.author.name}</span>
            <img alt="" />

            <Image
              className="rounded-full"
              src={post.author.imageUrl}
              alt={post.author.name}
              width={48}
              height={48}
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              {post.author.name}
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time>{post.date}</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
