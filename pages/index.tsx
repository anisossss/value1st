import type {NextPage} from 'next';
import {Hero} from '@/components/hero';
import {Trusted} from '@/components/trusted';
import {Box} from '@/components/styles/box';
import {Features1} from '@/components/features1';
import {Features2} from '@/components/features2';
import {Features3} from '@/components/features3';
import {Testimonials} from '@/components/tesminonials';
import {Statistics} from '@/components/statistics';
import {Trial} from '@/components/trial';
// import { Meta } from '../components/seo/index';

const Home: NextPage = () => {
  return (
    <>
      {/* <Meta
        title=  "VALUE1ST"
        description="Value1st"
        ogUrl="https://valu&st.net"
        thumbnail="https://i.postimg.cc"
        keywords="marketing"
      ></Meta> */}
      <Box as="main">
        <Hero />
        <Trusted />
        <Features1 />
        <Features2 />
        <Features3 />
        <Testimonials />
        <Statistics />
        <Trial />
      </Box>
    </>
  );
};

export default Home;
