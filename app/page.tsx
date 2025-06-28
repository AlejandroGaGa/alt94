import MainBanner from "./components/Home/MainBanner";
import Informative from "./components/Home/Informative";

const metadata = {
  title: "alt94",
  description: "La casa de tus sueños",
}

export default function Home() {
  return (
    <div>
      <MainBanner />
      <Informative />
    </div>
  );
}
