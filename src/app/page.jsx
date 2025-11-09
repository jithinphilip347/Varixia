import HomeAbout from "@/components/home/HomeAbout";
import HomeBanner from "@/components/home/HomeBanner";
import HomeContact from "@/components/home/HomeContact";
import HomeGallery from "@/components/home/HomeGallery";
import HomeService from "@/components/home/HomeService";
import HomeWork from "@/components/home/HomeWork";

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <HomeAbout />
      {/* <HomeGallery /> */}
      <HomeService />
      <HomeWork />
      <HomeContact />
      
    </div>
  );
}
