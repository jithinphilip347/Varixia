import HomeAbout from "@/components/home/HomeAbout";
import HomeBanner from "@/components/home/HomeBanner";
import HomeBlog from "@/components/home/HomeBlog";
import HomeContact from "@/components/home/HomeContact";
import HomeService from "@/components/home/HomeService";
import HomeWork from "@/components/home/HomeWork";

export const metadata = {
  verification: {
    google: "qLW6AghHvA83FQP13m740qPwopRIDSlv6L94EelVggg",
  },
};

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <HomeAbout />
      <HomeService />
      <HomeWork />
      <HomeBlog />
      <HomeContact />
    </div>
  );
}
