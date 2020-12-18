import React, { useState, useEffect } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { fetchColors } from "../api/fetchColors";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    // async function getColors() {
    //   const res = await fetchColors();
    //   console.log(res);
    //   setColorList(res.data);
    // }

    // getColors();
    fetchColors().then((res) => {
      setColorList(res.data);
    });
  }, []);

  if (!colorList) {
    return <h2>Getting color data...</h2>
  }

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
