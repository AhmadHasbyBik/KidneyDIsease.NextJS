// components
import Layout from "@/components/Layout";
// sections
import PredictImage from "@/sections/predict/PredictImage";
import PredictBenefit from "@/sections/predict/PredictBenefit";

export default function PredictPage() {
  return (
    <Layout>
      <PredictImage />
      <PredictBenefit />
    </Layout>
  );
}
