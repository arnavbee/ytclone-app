import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "@/components/VideoCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <div>
    <VideoCard 
    title={"The Weeknd Playlist | 2 Hour Playlist"}
    image={"../video.jpg"}
    author={"Abel Tesfaye"}
    timeStamp={"4 years ago"}
    views={"24M views"}></VideoCard>
   </div>
  );
}
