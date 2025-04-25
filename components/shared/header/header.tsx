import Link from "next/link";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";

import Menu from "./menu";

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="max-w-7xl lg:mx-auto p-5 md:px-10 w-full flex justify-between items-center">
        <div className="flex justify-start items-center">
          <Link href="/" className="flex justify-start items-center">
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME} logo`}
              width={48}
              height={48}
              priority={true}
            />
          </Link>
          <span className="hidden lg:block font-bold text-2xl ml-3">
            {APP_NAME}
          </span>
        </div>
        <div className="space-x-2">
          <Menu />
        </div>
      </div>
    </header>
  );
}
