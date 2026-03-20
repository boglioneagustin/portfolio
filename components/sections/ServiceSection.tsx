"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";
import { processSteps, services } from "@/lib/data";

export default function ServiceSection() {
  const [activeProcessIndex, setActiveProcessIndex] = useState(0);
  const processFinished = activeProcessIndex >= processSteps.length - 1;

  return (
    <section className="pt-24 sm:pt-28">
      <Container>
        <div className="process-scroll-zone">
          <div className={`reveal-up process-header-sticky ${processFinished ? "is-covered" : ""}`}>
            <SectionTitle tag="Process" title="How things get built together" />
          </div>
          <ProcessTimeline steps={processSteps} onActiveIndexChange={setActiveProcessIndex} />
        </div>

        <div className="pt-2 sm:pt-4">
          <div className="reveal-up">
            <SectionTitle
              tag="Services"
              title={
                <>
                  End-to-end
                  <br />
                  design services
                </>
              }
            />
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={
                  index === 0
                    ? "reveal-up"
                    : index === 1
                      ? "reveal-up reveal-delay-1"
                      : index === 2
                        ? "reveal-up reveal-delay-2"
                        : "reveal-up reveal-delay-3"
                }
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
