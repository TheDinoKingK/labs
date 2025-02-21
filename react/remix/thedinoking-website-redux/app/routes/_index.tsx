import type { MetaFunction } from "@remix-run/node";
import HomePageNavList from "~/components/HomePageNavList";

export const meta: MetaFunction = () => {
  return [
    { title: "The Dino King - Home" },
    { name: "description", content: "My Site's landing page" },
    { className: "bg-gray-950" },
  ];
};

export default function Index() {
  return (
    <div className="flex justify-center transition-all duration-200">
      {/* <HomePageHeaders /> */}
      {/* <HomePagePFPView /> */}
      <HomePageNavList />
    </div>
  );
}

// silly old code idk what it was anymore
{
  /* <h1 className="text-9xl text-white font-pally wght-bold">'ello!<br/>I'm the dino king</h1>
        <p className="text-8xl text-white font-pally wght-medium">a silly guy with<br/>many hobbies</p>
        <button className="rounded ms-2 mt-5 p-2 bg-rose-600 text-4xl text-white font-pally wght-bold drop-shadow-lg
                          transition-all ease-in-out hover:bg-rose-700 hover:text-sky-50">follow me</button>
        <button className="rounded ms-3 mt-5 p-2 bg-green-500 text-4xl text-white font-pally wght-bold drop-shadow-lg">who am i</button>
        <button className="rounded ms-3 mt-5 p-2 bg-blue-400 text-4xl text-white font-pally wght-bold drop-shadow-lg">what i make</button>
        <button className="rounded ms-3 mt-5 p-2 bg-slate-500 text-4xl text-white font-pally wght-bold drop-shadow-lg">how i make it</button> */
}
