"use client";
import dynamic from "next/dynamic";
import React from "react";

import CTACard from "@/components/dashboard/components/CTACard";
import { CodeIcon, MessageCircle, SparkleIcon, SearchIcon } from "lucide-react";

const DashboardCardMap = dynamic(
  () => import("@/components/dashboard/components/DashboardCardMap"),
  {
    ssr: false,
  },
);

const DashboardCardChat = dynamic(
  () => import("@/components/dashboard/components/DashboardCardChat"),
  {
    ssr: false,
  },
);

const Index: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CTACard subtitle="Explore suitable Tech-Stacks for your project ideas" title="Project Tech-Stacks">
          <CodeIcon />
        </CTACard>
        <CTACard
          subtitle="Generate ideas for your next project"
          title="Ai Powered Idea Creator"
        >
          <SparkleIcon />
        </CTACard>
        <CTACard
          subtitle="Search for existing research papers"
          title="Existing Research Papers"
        >
          <SearchIcon />
        </CTACard>
        <CTACard
          subtitle="Chat with your team members"
          title="Team Research"
        >
          <MessageCircle />
        </CTACard>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <DashboardCardChat />
        <DashboardCardMap />
      </div>
    </>
  );
};

export default Index;
