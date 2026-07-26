"use client";

import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo/logo.png"
        alt="Purvex Tech Studio"
        width={360}
        height={100}
        priority
        className="block h-26 w-auto lg:h-30 xl:h-34"
      />
    </Link>
  );
}