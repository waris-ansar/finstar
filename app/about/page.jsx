import Content from '../contents/about.mdx';
import MdWrapper from "../../components/MdWrapper";
import Advantages from "../../components/Advantages";
import Banner from "../../components/Banner";

const Page = () => (
  <>
    <MdWrapper title="About Us">
      <Content />
    </MdWrapper>
    <Advantages />
    <Banner />
  </>
);

export default Page;
