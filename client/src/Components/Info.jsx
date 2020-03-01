import React from "react";

import "../css-files/Shops.css";

const Info = () => {
  return (
    <div className="main">
      {/* If logged in, then show <Header />, else, don't */}
  
      <h1 className="ShopsHeading">Info</h1>
      <h2>What is ethical or sustainable fashion?</h2>
      <p>
        It takes into account the full lifecycle of the product — from the
        design, sourcing, and production processes — and looks at everyone and
        everything being affected by it, from the environment, to the workers
        and communities where it’s produced, to the consumers who purchase it.
        <ul>
          <li>
            <strong>Water usage:</strong> The demands for fresh water for
            drinking and agriculture is surpassing what’s available. Yes, the
            Earth is covered in water, but most of it is unusable salt water or
            has been polluted. As a result, some brands are now looking to see
            how they can cut back on how much water they're using.
          </li>
          <br />
          <li>
            <strong>Hazardous chemicals:</strong> Dyes and finishes from the
            production processes are dangerous for the workers, plus they get
            into the community water sources. These chemicals may not affect the
            consumers, but they’re a problem for the people who make clothing
            and those who live in areas where it’s produced.
          </li>
          <br />
          <li>
            <strong>Short lifecycle:</strong> Stores are constantly launching
            new designs and consumers are regularly updating their wardrobes.
            The biggest goal in sustainable fashion is to buy less and use
            things longer.
          </li>
          <br />
          <li>
            <strong>Waste:</strong> On top of having a short lifecycle, there
            needs to be a way to create less trash by making products useful
            again once they’ve run their course. One way is to repair garments
            (i.e. mending holes in jeans and replacing worn soles of shoes)
            while another opportunity comes from using recycled materials in
            apparel.
          </li>
          <br />
          <li>
            <strong>Agriculture:</strong> Natural fibers like cotton are often
            grown using pesticides and treatments that are harmful to the
            farmers, workers, and wildlife in the area. There are now more
            options for organic cotton, linen, and other fibers available, which
            also use less water than the conventional growing methods. Plus,
            brands are looking at being organic throughout the production
            process – not just the growing of the crop, which is only the first
            step.
          </li>
          <br />
        </ul>
        <h3>What are the most sustainable fabrics?</h3> 
        <ul>
          <li>The most sustainable
        fabric is one that’s previously been used; anything new that has been
        produced  has a negative impact on the environment.</li><br/>
        <li>Next comes fabrics made with recycled material. Most
        commonly you’ll find polyester made from recycled water bottles. Just
        make sure you’re looking for specific details, like "100% recycled
        polyester" (some brands might market it as “made with partially recycled
        materials” when it’s really only a small portion).</li><br/>
        <li>Lastly, fabrics made
        with sustainable fibers are better than conventional ones, like organic
        fibers that use less chemicals and water, or Tencel that’s safer for
        workers and has less waste.</li>
        </ul>   
        
        <h3>Is sustainable fashion affordable? </h3>
        <p>Yes!
        Buying something used is more sustainable than anything new, so it’s
        automatically going to cost you less. Just be cautious that you don’t
        use the cost-savings as an excuse to buy more since that'll take away
        from it being a sustainable purchase.</p> 
        <p>That being said, if you’re going
        to buy new sustainable fashion from brands that follow ethical practices
        and give fair wages, use organic fibers, or create more durable items,
        you may end up paying more – but these garments are meant to last
        longer. </p>
        <h3>What brands are ethical?</h3> 
        <p>Different brands focus on combating
        various issues in the fashion industry – some just one, while others are
        tackling multiple.</p> 
      </p>
      
    </div>
  );
};

export default Info;
