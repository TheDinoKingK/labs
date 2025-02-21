import React, { useState } from "react";

/**
 * Creates an anchor Instance thats styled to link to another page in the website from the homepage
 *
 * hrefLink is where you input the actual url or directory the page is located
 * hoverColor works by inputting a "hover:text-[color]-[shade]" format as per tailwind syntax
 * @title the display text describes the page you're going to
 * @returns
 */

export default function HomePageLink({
  title,
  hrefLink,
  hoverColor,
}: {
  title: string;
  hrefLink: string;
  hoverColor: string;
}) {
  return (
    <li>
      <a
        href={hrefLink}
        className={`leading-tight text-5xl text-white font-pally wght-medium text-nowrap
                    drop-shadow-[0_5px_6px_rgba(0,0,0,0.60)] transition-all duration-200 ease-out-expo-eased 
                    hover:text-[3.35rem] hover:drop-shadow-[0_7px_5px_rgba(0,0,0,0.75)] hover:tracking-wider ${hoverColor}`}
      >
        •{title}
      </a>
    </li>
  );
}
