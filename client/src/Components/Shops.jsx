import React from "react";
import Header from "./Header";
import "../shops.css";

const Shops = () => {
  return (
    <>
      <Header />
      <div className="main">
        <img src="https://lsco.scene7.com/is/image/lsco/levis/clothing/295020142-front-pdp.jpg?$thumb_desktop$"></img>{" "}
        <br />
        <a href="https://www.levi.com/US/en_US/" target="_blank">
          Levis
        </a>{" "}
        <p>
          From growing the cotton to dyeing and finishing, it takes over 2,000
          gallons of water just to make one pair of jeans. Levi’s focuses on the
          finishing processes to remove water wherever possible
        </p>
        <img src="https://www.alternativeapparel.com/media/catalog/product/0/1/01970E1ECOATL0_2.jpg"></img>
        <br />
        <a href="https://www.alternativeapparel.com/" target="_blank">
          Alternative Apparel
        </a>{" "}
        <p>
          For casual closet staples like T-shirts, hoodies, leggings, and more,
          Alternative Apparel focuses on using organic cotton and recycled
          materials.
        </p>
        <img src="https://static.wearpact.com/img/product/women/wtw-frn-1-1582139939.jpg"></img>
        <br />
        <a href="https://wearpact.com/" target="_blank">
          Pact
        </a>
        <p>
          This certified B Corp goes to great lengths to make sure their entire
          supply chain, from the growing and harvesting of the organic cotton to
          the final sewing and all the processes in between, are as clean and
          responsible as possible.
        </p>
        <img src="https://media.thereformation.com/image/upload/q_auto:eco/c_scale,w_auto:breakpoints_100_2560_9_20:632/v1/prod/product_images/ruskin-top/avocado/5e52cb0c8130bc5051f985ad/original.jpg"></img>
        <br />
        <a href="https://www.thereformation.com/">Reformation</a>
        <p>
          Made in USA, uses sustainable fabrics, purchases carbon offsets, pays
          living wages, plus size line
        </p>
        <img src="https://www.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dwa62bca57/images/hi-res/gray.jpg?sw=800&sh=800&ox=0&oy=0&oimg=https%3A%2F%2Fwww.patagonia.com%2Fdw%2Fimage%2Fv2%2FBDJB_PRD%2Fon%2Fdemandware.static%2F-%2FSites-patagonia-master%2Fdefault%2Fdw86926441%2Fimages%2Fhi-res%2F56540_NENA_RP1.png%3Fsw%3D800%26sh%3D800%26q%3D95&sfrm=png&q=95"></img><br/>
        <a href="https://www.patagonia.com/home/">Patagonia</a>
        <p>
          Fair Trade Certified collections, organic cotton, environmental
          sustainability
        </p>
        <a href="https://www.thredup.com/">Thred Up</a>
        <p>
          Vintage and secondhand apparel. Local operations, responsible
          recycling, inclusive sizing
        </p>
      </div>
    </>
  );
};

export default Shops;
