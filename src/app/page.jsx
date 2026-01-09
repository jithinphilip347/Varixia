import HomeAbout from "@/components/home/HomeAbout";
import HomeBanner from "@/components/home/HomeBanner";
import HomeBlog from "@/components/home/HomeBlog";
import HomeContact from "@/components/home/HomeContact";
import HomeService from "@/components/home/HomeService";
import HomeWork from "@/components/home/HomeWork";
import blogApi from "@/libs/blogApi";

const { getBlogs } = blogApi();



export default async function Home() {
  const blogs = await getBlogs();
  return (
    <div>
      <HomeBanner />
      <HomeAbout />
      <HomeService />
      <HomeWork />
      <HomeBlog blogs={blogs}/>
      <HomeContact />
    </div>
  );
}
