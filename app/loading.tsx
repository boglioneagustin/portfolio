import Container from "@/components/layout/Container";

export default function Loading() {
  return (
    <main className="min-h-[55vh] pb-10 pt-8 sm:pt-12">
      <Container>
        <div className="mx-auto h-9 w-44 animate-pulse rounded-full bg-[#ecece8]" />
        <div className="mx-auto mt-8 h-16 w-full max-w-[760px] animate-pulse rounded-[20px] bg-[#ecece8] sm:h-24" />
        <div className="mx-auto mt-5 h-6 w-full max-w-[540px] animate-pulse rounded-xl bg-[#ecece8]" />
        <div className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-2">
          <div className="aspect-[6/5] animate-pulse rounded-[28px] bg-[#e6e6e3]" />
          <div className="aspect-[6/5] animate-pulse rounded-[28px] bg-[#e6e6e3]" />
        </div>
      </Container>
    </main>
  );
}
