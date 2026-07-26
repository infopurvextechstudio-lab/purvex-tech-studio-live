"use client";

import Image from "next/image";

const outerIcons = [
  { src: "/icons/tech/react.svg", angle: 0 },
  { src: "/icons/tech/nextjs.svg", angle: 90 },
  { src: "/icons/tech/nodejs.svg", angle: 180 },
  { src: "/icons/tech/cloudflare.svg", angle: 270 },
];

const innerIcons = [
  { src: "/icons/tech/openai.svg", angle: 45 },
  { src: "/icons/tech/tailwind.svg", angle: 135 },
  { src: "/icons/tech/shopify.svg", angle: 225 },
  { src: "/icons/tech/vercel.svg", angle: 315 },
];

export default function FloatingIcons() {
  return (
    <>
      {/* OUTER RING */}

      <div className="orbit">

        {outerIcons.map((logo) => (

          <div
            key={logo.src}
            className="absolute"
            style={{
              transform: `rotate(${logo.angle}deg) translateX(260px)`,
            }}
          >
            <div className="glow float flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/20 bg-white/10 backdrop-blur-xl">

              <Image
                src={logo.src}
                alt=""
                width={34}
                height={34}
              />

            </div>
          </div>

        ))}

      </div>

      {/* INNER RING */}

      <div className="orbit-reverse">

        {innerIcons.map((logo) => (

          <div
            key={logo.src}
            className="absolute"
            style={{
              transform: `rotate(${logo.angle}deg) translateX(180px)`,
            }}
          >
            <div className="glow float flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#0b1220]/80 backdrop-blur-xl">

              <Image
                src={logo.src}
                alt=""
                width={28}
                height={28}
              />

            </div>
          </div>

        ))}

      </div>
    </>
  );
}