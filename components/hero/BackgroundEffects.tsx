"use client";

export default function BackgroundEffects() {
  return (
    <>
      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-[140px]" />

      <div className="absolute right-10 top-40 h-96 w-96 rounded-full bg-violet-500/15 blur-[180px]" />

      <div className="absolute bottom-10 left-1/2 h-80 w-80 rounded-full bg-cyan-500/10 blur-[160px]" />
    </>
  );
}