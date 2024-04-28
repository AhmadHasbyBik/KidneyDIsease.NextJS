// components
import Layout from "@/components/Layout";
// sections
import PredictImage from "@/sections/predict/PredictImage";
import PredictHero from "@/sections/predict/PredictHero";

export default function PredictPage() {
  return (
    <Layout>
      <PredictHero />
      <PredictImage />
    </Layout>
  );
}
