"use client";

import {
  Bot,
  Globe2,
  Workflow,
  SearchCheck,
  BriefcaseBusiness,
  Sparkles,
} from "lucide-react";

const icons = [
  {
    Icon: Globe2,
    className: "top-10 left-8 bg-blue-600",
  },
  {
    Icon: Bot,
    className: "top-24 right-8 bg-violet-600",
  },
  {
    Icon: Workflow,
    className: "bottom-12 left-10 bg-cyan-600",
  },
  {
    Icon: SearchCheck,
    className: "bottom-20 right-8 bg-green-600",
  },
  {
    Icon: BriefcaseBusiness,
    className: "left-1/2 top-2 -translate-x-1/2 bg-orange-500",
  },
  {
    Icon: Sparkles,
    className: "left-1/2 bottom-2 -translate-x-1/2 bg-pink-500",
  },
];

export default function FloatingIcons() {
  return (
    <>
      {icons.map(({ Icon, className }, index) => (
        <div
          key={index}
          className={`absolute ${className} rounded-full p-4 shadow-2xl animate-pulse`}
        >
          <Icon className="h-7 w-7 text-white" />
        </div>
      ))}
    </>
  );
}