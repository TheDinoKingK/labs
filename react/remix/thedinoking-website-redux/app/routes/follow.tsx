import type { MetaFunction } from "@remix-run/node";
import LinktreeBtn from "~/components/LinktreeBtn";
import { followLinks } from "~/components/LinktreeData";
import { SiBluesky } from "react-icons/si";

export const meta: MetaFunction = () => {
  return [
    { title: "Linktree - The Dino King" },
    {
      name: "description",
      content: "Provides links to connect with me socially",
    },
    { className: "bg-gray-950" },
  ];
};

export default function Follow() {
  return (
    <div className="flex justify-center min-h-screen min-w-screen">
      <div className="grid grid-cols-4 gap-4 place-content-center">
        {/* const followBtns = followLinks.map */}
        <LinktreeBtn
          webName="Bluesky"
          summary="keep yourself updated on my life! :D"
          hrefLink="https://bsky.app/profile/thedinoking.com"
          brandIcon={<SiBluesky />}
          brandColor="bg-[#0285FF]"
          hoverColor="hover:bg-[#0495FF]"
        />
      </div>
    </div>
  );
}
