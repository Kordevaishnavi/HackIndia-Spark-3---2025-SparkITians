"use client";
import React, { useState, useEffect } from "react";

const techStack = [
  {
    techName: "React.js",
    molecularWeight: "Node.js",
    categoryUsage: "Firebase Auth API",
    database: "MongoDB",
  },
  {
    techName: "Next.js",
    molecularWeight: "Express.js",
    categoryUsage: "Stripe API",
    database: "PostgreSQL",
  },
  {
    techName: "Vue.js",
    molecularWeight: "Django",
    categoryUsage: "Twilio API",
    database: "MySQL",
  },
  {
    techName: "Angular",
    molecularWeight: "Flask",
    categoryUsage: "Google Maps API",
    database: "Firebase Firestore",
  },
  {
    techName: "Svelte",
    molecularWeight: "Spring Boot",
    categoryUsage: "OpenAI API",
    database: "Supabase",
  },
  {
    techName: "Solid.js",
    molecularWeight: "Ruby on Rails",
    categoryUsage: "PayPal API",
    database: "SQLite",
  },
  {
    techName: "Qwik",
    molecularWeight: "ASP.NET Core",
    categoryUsage: "GitHub API",
    database: "OracleDB",
  },
  {
    techName: "Preact",
    molecularWeight: "Laravel",
    categoryUsage: "Weather API",
    database: "Redis",
  },
  {
    techName: "Alpine.js",
    molecularWeight: "FastAPI",
    categoryUsage: "Telegram Bot API",
    database: "MariaDB",
  },
  {
    techName: "Lit",
    molecularWeight: "Koa.js",
    categoryUsage: "Spotify API",
    database: "DynamoDB",
  },
];

const TableOne = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTechStack, setFilteredTechStack] = useState(techStack);

  useEffect(() => {
    const filteredData = techStack.filter((tech) =>
      tech.techName.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredTechStack(filteredData);
  }, [searchQuery]);

  return (
    <div className="rounded-lg border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-[#181818] dark:bg-[#181818] sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Tech Stack
      </h4>

      <input
        type="search"
        placeholder="Search technology"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border-gray-300 text-gray-700 placeholder-gray-400 dark:border-gray-600 dark:placeholder-gray-500 text-md mb-4 w-full rounded-lg border bg-white px-4 py-3 shadow-sm outline-none focus:border-primary focus:ring-primary dark:bg-[#181818] dark:text-white"
      />
      <div className="flex flex-col">
        <div className="grid grid-cols-4 rounded-lg bg-gray-2 dark:bg-[#121212] sm:grid-cols-4">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Technology Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Backend Technology
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              API Used
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Database
            </h5>
          </div>
        </div>

        {filteredTechStack.map((tech, key) => (
          <div
            className={`grid grid-cols-4 sm:grid-cols-4 ${
              key === filteredTechStack.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{tech.techName}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{tech.molecularWeight}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{tech.categoryUsage}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{tech.database}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
