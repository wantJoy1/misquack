import Image from "next/image";
import Post from "./post";
import ShowAccount from "./showAccount";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Post />
      <ShowAccount />
    </main>
  );
}
