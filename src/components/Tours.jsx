// import tour1 from "../../images/tour-1.jpeg";
// import tour2 from "../../images/tour-2.jpeg";
// import tour3 from "../../images/tour-3.jpeg";
// import tour4 from "../../images/tour-4.jpeg";

import { tours } from "../data";
import Tour from "./Tour";

import Title from "./Title";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />
      <div className="section-center featured-center">
        {tours.map((tour) => {
          return <Tour {...tour} key={tour.id} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
