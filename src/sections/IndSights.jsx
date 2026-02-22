import brush from "../assets/orangebrush.png";
import img1 from "../assets/card1.png";
import InsightCard from "../components/InsightCard"

function Indsights() {
  return (
    <section className="w-full py-28 bg-[#FFEDE4]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Brush Header */}
        <div className="flex justify-center mb-16">
          <div className="relative w-[350px] h-[90px] flex items-center justify-center">
            <img
              src={brush}
              alt=""
              className="absolute inset-0 w-full h-full object-contain"
            />
            <h2 className="relative text-white text-[32px] font-bold">
              INDsights
            </h2>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">

          <InsightCard
            image={img1}
            title="Lorem Ipsum blog Title"
            description="Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title "
          />

          <InsightCard
            image={img1}
            title="Lorem Ipsum blog Title"
            description="Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title "
          />

          <InsightCard
            image={img1}
            title="Lorem Ipsum blog Title"
            description="Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title "
          />

        </div>

      </div>
    </section>
  );
}

export default Indsights;
