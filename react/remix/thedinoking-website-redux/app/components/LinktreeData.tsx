import React, { useState } from "react";
import { SiBluesky, SiGithub, SiKofi, SiYoutube } from "react-icons/si";

// export interface followLink {
//   id: number;
//   webName: string;
//   summary: string;
//   hrefLink: string;
//   brandIcon: any; // Make sure it's updated to have an actual type to rule against with
//   brandColor: string;
//   hoverColor: string;
// }

export const followLinks = [
  {
    id: 1,
    webName: "Bluesky",
    summary: "keep yourself updated on my life! :D",
    hrefLink: "https://bsky.app/profile/thedinoking.com",
    brandIcon: <SiBluesky />,
    brandColor: "bg-[#0285FF]",
    hoverColor: "hover:bg-[#0495FF]",
  },
  {
    id: 2,
    webName: "Youtube",
    summary: "The original channel",
    hrefLink: "https://www.youtube.com/@TheDinoKingK",
    brandIcon: <SiYoutube />,
    brandColor: "bg-[#FF0000]",
    hoverColor: "hover:bg-[#FF0044]",
  },
  {
    id: 3,
    webName: "Github",
    summary: "The home of all my code & software!",
    hrefLink: "https://github.com/thedinokingk",
    brandIcon: <SiGithub />,
    brandColor: "bg-[#181717]",
    hoverColor: "hover:bg-[#212020]",
  },
  {
    id: 4,
    webName: "Ko-Fi",
    summary: "You can support me here!",
    hrefLink: "https://ko-fi.com/thedinoking",
    brandIcon: <SiKofi />,
    brandColor: "bg-[#FF5E5B]",
    hoverColor: "hover:bg-[#FF205B]",
  },
];
