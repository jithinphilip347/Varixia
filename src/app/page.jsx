import HomeAbout from "@/components/home/HomeAbout";
import HomeBanner from "@/components/home/HomeBanner";
import HomeContact from "@/components/home/HomeContact";
import HomeService from "@/components/home/HomeService";
import HomeWork from "@/components/home/HomeWork";

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <HomeAbout />
      <HomeService />
      <HomeWork />
      <HomeContact />
      
    </div>
  );
}
