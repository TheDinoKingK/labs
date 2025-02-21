import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Tech Used - The Dino King" },
    { name: "description", content: "Info-board of what i use both hardware and software to make the content that i do for the nerds out there" },
    { className: 'bg-gray-950' }
  ];
};

export default function Tech() {
    return (
        <div className="flex justify-center">
            <ul className="container">
                <h1 className="font-pally wght-bold text-8xl">IDK MAN I JUST USE LIKE A CRAPPY ASUS PREBUILT FROM 2020 WITH A 32GB RAM UPGRADE ALONG WITH A BUNCH OF WACKO SOFTWARE- btw did I mention I hate adobe?</h1>
            </ul>
        </div>
    );
}
