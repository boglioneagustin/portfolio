import type { Stat } from "@/lib/data";

type StatCardProps = {
  stat: Stat;
};

export default function StatCard({ stat }: StatCardProps) {
  return (
    <article className="card-lift rounded-[24px] bg-white px-6 py-14 text-center shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
      <p className="text-[56px] font-semibold leading-none text-[#ec4f29]">{stat.value}</p>
      <p className="mt-4 text-lg font-medium leading-tight text-[#3f3f3f]">{stat.label}</p>
    </article>
  );
}
