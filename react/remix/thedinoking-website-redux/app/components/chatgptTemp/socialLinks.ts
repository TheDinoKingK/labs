// GENERATED CHATGPT CODE DO NOT ACTUALLY USE

import { IconType } from "react-icons";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import {
  SiBluesky,
  SiMastodon,
  SiKofi,
  SiGithub,
  SiPatreon,
  SiDiscord,
} from "react-icons/si";
import { KoFiIcon } from "../chatgptTemp/KoFiIcon"; // Import custom Ko-fi icon

export interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
  color: string; // Add a color property
}

export const socialLinks: SocialLink[] = [
  {
    name: "YouTube",
    url: "https://youtube.com/@TheDinoKingK",
    icon: FaYoutube,
    color: "bg-[#FF0000]", // YouTube Red
  },
  {
    name: "GitHub",
    url: "https://github.com/your-profile",
    icon: SiGithub,
    color: "bg-[#181717]", // GitHub Black
  },
  {
    name: "Twitter",
    url: "https://twitter.com/your-profile",
    icon: FaTwitter,
    color: "bg-[#1DA1F2]", // Twitter Blue
  },
  {
    name: "Bluesky",
    url: "https://bsky.app/profile/thedinoking.bsky.social",
    icon: SiBluesky,
    color: "bg-[#0285FF]", // Bluesky Blue
  },
  // {
  //   name: "Mastodon",
  //   url: "https://mastodon.social/@TheDinoKingK",
  //   icon: SiMastodon,
  //   color: "bg-[#6364FF]", // Mastodon Purple
  // },
  // {
  //   name: "Discord",
  //   url: "https://discordapp.com/users/549359497974644756",
  //   icon: SiDiscord,
  //   color: "bg-[#5865F2]", // Discord Blue
  // },
  {
    name: "Patreon",
    url: "https://patreon.com/your-profile",
    icon: SiPatreon,
    color: "bg-[#000000]", // Patreon Black
  },
  {
    name: "Ko-fi",
    url: "https://ko-fi.com/your-profile",
    icon: SiKofi,
    color: "bg-[#72A5F2]", // Ko-fi Blue
  },
];
