import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logos/logo.png"
        alt="Purvex Tech Studio"
        width={240}
        height={70}
        priority
        className="h-[140px] w-auto object-contain lg:h-[146px]"
      />
    </Link>
  );
}