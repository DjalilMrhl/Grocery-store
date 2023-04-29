import React from "react";
import "./Home.scss";
import Banner from "../../Components/Home/Banner/Banner";
import { Categories, Menu } from "../../Components";


function Home() {

  return (
    <main className="home" id="home">
      <div className="home--container">
        <Banner/>
        <Categories/>
        <Menu/>
      </div>
    </main>
  );
}

export default Home;
