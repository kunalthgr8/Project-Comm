import React from "react";
import "./Home.css";
import AdverCard from "../adverCard/AdverCard";
import "react-multi-carousel/lib/styles.css";
import CategCard from "../category/CategCard";
import fam from "../../assets/fam.svg"
const Home = () => {
  return (
    <div className="home">
      <div className="adver-caro">
        <AdverCard />
      </div>
      <div className="categories-home">
        <h1>Categories</h1>
        <div className="cate-sec">
          <CategCard image={fam} type="Medicine" />
          <CategCard image={fam} type="Men" />
          <CategCard image={fam} type="Women" />
          <CategCard image={fam} type="Child" />
          <CategCard image={fam} type="Health Care" />
          <CategCard image={fam} type="Fitness" />

        </div>
      </div>
    </div>
  );
};

export default Home;
