import React from "react";
import { Col, Row, Card, Icon, CardTitle } from "react-materialize";

import "../shops.css";

const Shops = () => {
  return (
    <>
      <h1 className="ShopsHeading">Shops</h1>

      <div className="main">
        <div class="row" >
          <Col m={5} s={2}>
            <Card 
              actions={[
                <a
                  key="1"
                  href="https://www.levi.com/US/en_US/"
                  target="_blank"
                >
                  Levis
                </a>
              ]}
              closeIcon={<Icon>close</Icon>}
              header={
                <CardTitle 
                  image="https://images.contentstack.io/v3/assets/blt2d702d64bab5cd4d/blt40816146e0957fb2/5e1691b72c85e057da6ae2ef/20_FEB_DP_Sculpt_CD1.jpg?width=1095&format=pjpg&quality=90"
                  alt="Woman in Levis Jeans"
                />
              }
              horizontal
              revealIcon={<Icon>more_vert</Icon>}
            >
              From growing the cotton to dyeing and finishing, it takes over
              2,000 gallons of water just to make one pair of jeans. Levi’s
              focuses on the finishing processes to remove water wherever
              possible
            </Card>
          </Col>

          <Col m={5} s={12}>
            <Card
              actions={[
                <a
                  key="2"
                  href="https://www.alternativeapparel.com/"
                  target="_blank"
                >
                  Alternative Apparel
                </a>
              ]}
              closeIcon={<Icon>close</Icon>}
              header={
                <CardTitle
                  image="https://www.alternativeapparel.com/media/catalog/product/0/1/01970E1ECOATL0_2.jpg"
                  alt="alternative-apparel"
                />
              }
              horizontal
              revealIcon={<Icon>more_vert</Icon>}
            >
              For casual closet staples like T-shirts, hoodies, leggings, and
              more, Alternative Apparel focuses on using organic cotton and
              recycled materials.
            </Card>
          </Col>
        </div>

        <div class="row">
          <Col m={5} s={12}>
            <Card
              actions={[
                <a key="3" href="https://wearpact.com/" target="_blank">
                  Pact
                </a>
              ]}
              closeIcon={<Icon>close</Icon>}
              header={
                <CardTitle
                  image="https://static.wearpact.com/img/product/women/wtw-frn-1-1582139939.jpg"
                  alt="target"
                />
              }
              horizontal
              revealIcon={<Icon>more_vert</Icon>}
            >
              This certified B Corp goes to great lengths to make sure their
              entire supply chain, from the growing and harvesting of the
              organic cotton to the final sewing and all the processes in
              between, are as clean and responsible as possible.
            </Card>
          </Col>
     
          <Col m={5} s={12}>
            <Card
              actions={[
                <a
                  key="4"
                  href="https://www.thereformation.com/"
                  target="_blank"
                >
                  Reformation
                </a>
              ]}
              closeIcon={<Icon>close</Icon>}
              header={
                <CardTitle
                  image="https://media.thereformation.com/image/upload/q_auto:eco/c_scale,w_auto:breakpoints_100_2560_9_20:632/v1/prod/product_images/ruskin-top/avocado/5e52cb0c8130bc5051f985ad/original.jpg"
                  alt="thereformation"
                />
              }
              horizontal
              revealIcon={<Icon>more_vert</Icon>}
            >
              Made in USA, uses sustainable fabrics, purchases carbon offsets,
              pays living wages, plus size line
            </Card>
          </Col>
          </div>

          <div class="row">
          <Col m={5} s={12}>
            <Card
              actions={[
                <a
                  key="5"
                  href="https://www.patagonia.com/home/"
                  target="_blank"
                >
                  Patagonia
                </a>
              ]}
              closeIcon={<Icon>close</Icon>}
              header={
                <CardTitle
                  image="https://www.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dwa62bca57/images/hi-res/gray.jpg?sw=800&sh=800&ox=0&oy=0&oimg=https%3A%2F%2Fwww.patagonia.com%2Fdw%2Fimage%2Fv2%2FBDJB_PRD%2Fon%2Fdemandware.static%2F-%2FSites-patagonia-master%2Fdefault%2Fdw86926441%2Fimages%2Fhi-res%2F56540_NENA_RP1.png%3Fsw%3D800%26sh%3D800%26q%3D95&sfrm=png&q=95"
                  alt="patagonia"
                />
              }
              horizontal
              revealIcon={<Icon>more_vert</Icon>}
            >
              Fair Trade Certified collections, organic cotton, environmental
              sustainability
            </Card>
          </Col>
      
          <Col m={5} s={12}>
            <Card
              actions={[
                <a key="6" href="https://www.thredup.com/" target="_blank">
                  {" "}
                  Thred Up
                </a>
              ]}
              closeIcon={<Icon>close</Icon>}
              header={
                <CardTitle image="https://media-s3-us-east-1.ceros.com/thredup/images/2019/11/11/da4444bf8b491fa38177f724e677e362/loveherlooks-tops.jpg?imageOpt=1&fit=bounds&width=520" />
              }
              horizontal
              revealIcon={<Icon>more_vert</Icon>}
            >
              Vintage and secondhand apparel. Local operations, responsible
              recycling, inclusive sizing
            </Card>
          </Col>
          </div>
      </div>
    </div>

  );
};

export default Shops;