interface Props {
  badge: string;
  title: string;
  description: string;
}

export default function SectionHeading({
  badge,
  title,
  description,
}: Props) {
  return (
    <div className="mx-auto mb-20 max-w-3xl text-center">

      <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
        {badge}
      </span>

      <h2 className="mt-7 text-5xl font-black leading-tight text-white lg:text-6xl">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-400">
        {description}
      </p>

    </div>
  );
}