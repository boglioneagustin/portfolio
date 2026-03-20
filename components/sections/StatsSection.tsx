import Container from "@/components/layout/Container";
import StatCard from "@/components/ui/StatCard";
import { stats } from "@/lib/data";

export default function StatsSection() {
  return (
    <section className="pt-20 sm:pt-24">
      <Container>
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={index === 0 ? "reveal-up" : index === 1 ? "reveal-up reveal-delay-1" : "reveal-up reveal-delay-2"}
            >
              <StatCard stat={stat} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

