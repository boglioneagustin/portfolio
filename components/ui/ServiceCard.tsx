import type { Service } from "@/lib/data";
import { HiOutlineBolt, HiOutlineCodeBracket, HiOutlineCpuChip, HiOutlineSignal } from "react-icons/hi2";

type ServiceCardProps = {
  service: Service;
};

const iconByType = {
  workflow: HiOutlineBolt,
  code: HiOutlineCodeBracket,
  ai: HiOutlineCpuChip,
  integration: HiOutlineSignal,
} as const;

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconByType[service.icon];

  return (
    <article className="card-lift min-h-[250px] rounded-[28px] bg-white px-5 py-6 shadow-[0_8px_22px_rgba(0,0,0,0.02)] sm:min-h-[295px] sm:px-[30px] sm:py-[30px]">
      <div className="flex items-start gap-4 sm:gap-6">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f1f1ef] text-[26px] text-[#f2552c] sm:h-16 sm:w-16 sm:text-[30px]">
          <Icon aria-hidden="true" />
        </div>
        <h3 className="max-w-[290px] text-[20px] font-medium leading-[1.3] tracking-[0] text-[#27272a] sm:text-[24px]">
          {service.title}
        </h3>
      </div>
      <p className="mt-6 max-w-[520px] text-[18px] font-normal leading-[1.35] tracking-[0] text-[#27272a] sm:mt-8 sm:text-[24px] sm:leading-[1.3]">
        {service.description}
      </p>
    </article>
  );
}
