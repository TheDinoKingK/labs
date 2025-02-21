import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Contact - The Dino King" },
    {
      name: "description",
      content: "direct contacts so you can reach out to me commercially",
    },
    { className: "bg-gray-950" },
  ];
};

export default function Contact() {
  return (
    <div className="flex justify-center">
      <ul className="container">
        <h1 className="font-pally wght-bold text-8xl">
          There'll probably be like two links / contacts and thats it lol
        </h1>
      </ul>
    </div>
  );
}
