import React, { useState } from "react";
import HomePageLink from "~/components/HomePageLink";

export default function HomePageNavList() {
  return (
    <ul
      className="container rounded-lg select-none max-w-72 mt-5 p-6 bg-neutral-950/35
                    transition-all duration-200 ease-out-expo-eased backdrop-blur-md drop-shadow-[0_7px_12px_rgba(0,0,0,0.75)]"
    >
      <HomePageLink
        title="About"
        hrefLink="/about"
        hoverColor="hover:text-rose-600"
      />
      <HomePageLink
        title="Follow"
        hrefLink="/follow"
        hoverColor="hover:text-green-500"
      />
      <HomePageLink
        title="Projects"
        hrefLink="/projects"
        hoverColor="hover:text-amber-400"
      />
      <HomePageLink
        title="Setup"
        hrefLink="/tech"
        hoverColor="hover:text-sky-400"
      />
    </ul>
  );
}
