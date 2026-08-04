"use client";

import Image from "next/image";

const outerIcons = [
  { src: "/icons/tech/react.svg", angle: 0, name: "React" },
  { src: "/icons/tech/nextjs.svg", angle: 90, name: "Next.js" },
  { src: "/icons/tech/nodejs.svg", angle: 180, name: "Node.js" },
  { src: "/icons/tech/cloudflare.svg", angle: 270, name: "Cloudflare" },
];

const innerIcons = [
  { src: "/icons/tech/openai.svg", angle: 45, name: "OpenAI" },
  { src: "/icons/tech/tailwind.svg", angle: 135, name: "Tailwind CSS" },
  { src: "/icons/tech/shopify.png", angle: 225, name: "Shopify" },
  { src: "/icons/tech/vercel.svg", angle: 315, name: "Vercel" },
];

export default function FloatingIcons() {
  return (
    <>
      <div className="orbit hidden lg:block">
        {outerIcons.map((logo) => (
          <div
            key={logo.src}
            className="absolute"
            style={{
              transform: `rotate(${logo.angle}deg) translateX(260px)`,
              willChange: "transform",
            }}
          >
            <div className="glow float flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/20 bg-white/10 backdrop-blur-xl">
              <Image
                src={logo.src}
                alt={logo.name}
                width={34}
                height={34}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="orbit-reverse hidden lg:block">
        {innerIcons.map((logo) => (
          <div
            key={logo.src}
            className="absolute"
            style={{
              transform: `rotate(${logo.angle}deg) translateX(180px)`,
              willChange: "transform",
            }}
          >
            <div className="glow float flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#0b1220]/80 backdrop-blur-xl">
              <Image
                src={logo.src}
                alt={logo.name}
                width={28}
                height={28}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}