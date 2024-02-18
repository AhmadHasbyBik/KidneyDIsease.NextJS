// components
import Layout from '@/components/Layout';
// sections
import HomeHero from '@/sections/home/HomeHero';
import HomeBenefit from '@/sections/home/HomeBenefit';
import HomeStepper from '@/sections/home/HomeStepper';
import HomeSolution from '@/sections/home/HomeSolution';

export default function Home() {
  return (
    <Layout>
      <HomeHero />

      <HomeBenefit />

      <HomeStepper />

      <HomeSolution />

    </Layout>
  )
}
