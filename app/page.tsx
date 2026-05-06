import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <Button variant="destructive" className="p-20 text-5xl rounded-3xl">Test</Button>
    </div>
  );
}
