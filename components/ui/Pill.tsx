type PillProps = {
  label: string;
  active?: boolean;
};

export default function Pill({ label, active = false }: PillProps) {
  return (
    <button
      type="button"
      className={`pill-interactive rounded-full px-5 py-2 text-sm font-medium ${
        active
          ? "bg-[#f0efec] text-[#151515] shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
          : "bg-[#f7f7f5] text-[#4e4e4e] hover:bg-white"
      }`}
    >
      {label}
    </button>
  );
}
