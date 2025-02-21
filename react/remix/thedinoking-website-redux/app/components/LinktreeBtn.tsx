import React, { useState } from "react";
// import { followLink } from "./LinktreeData";

/**
 * Creates an anchor instance thats styled like a rounded square button, this is a template that links to a specific social media profile or something
 * @webName name of the website your link is hosted on
 * @summary simple description of the link and what I use it for
 * @hrefLink the actual link you use
 * @brandIcon the website icon, formatted as react component & inputted like so:```<BskyLogo/>```
 * @brandColor the brand's primary color used as the button background, usually in ```bg-[color hex code]```
 * @hoverColor the brighter background color, will likely deprecate for a dynamic brightness adjustment
 * @returns
 */

// TODO: Fix tooltip pop up so it actually works and prints out the webName & summary variables in a tooltip.

export default function LinktreeBtn({
  webName,
  summary,
  hrefLink,
  brandIcon,
  brandColor,
  hoverColor,
}: {
  webName: string;
  summary: string;
  hrefLink: string;
  brandIcon: any; // Make sure it's updated to have an actual type to rule against with
  brandColor: string;
  hoverColor: string;
}) {
  return (
    <div className="max-w-lg mx-auto">
      <div className="linkBtn flex relative">
        <a
          href={hrefLink}
          className={`text-white text-[5rem] ${brandColor} rounded-[1.2rem] p-3.5 text-center inline-flex items-center me-2 drop-shadow-[0_5px_6px_rgba(0,0,0,0.60)] transition-all duration-200 ease-out-expo-eased
                      hover:scale-110 ${hoverColor} hover:drop-shadow-[0_7px_5px_rgba(0,0,0,0.75)] `}
        >
          {brandIcon}
        </a>
      </div>
    </div>
  );
}
