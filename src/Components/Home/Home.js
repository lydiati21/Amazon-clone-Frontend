import React from "react";
import "../Home/Home.css";
import Product from "../Product/Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="7678"
            title="The Mountain Men's DJ Jahman T-Shirt"
            price={20.95}
            rating={5}
            image="https://m.media-amazon.com/images/I/813kB7twYTL._AC_UX679_.jpg"
          />
          <Product
            id="54646"
            title="G128 Ethiopia Lion Ethiopian Lion Flag | 3x5 Ft | LiteWeave Pro Series Printed 150D Polyester | Country Flag, Indoor/Outdoor, Vibrant Colors, Thicker and More Durable Than 100D 75D Polyester"
            price={17.95}
            rating={6}
            image="https://m.media-amazon.com/images/I/71pcUraxm0L.__AC_SY300_SX300_QL70_FMwebp_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="767hj6"
            title="Modway Revive Contemporary Modern Fabric Upholstered Sofa In Teal"
            price={435.92}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/A1VK53rFNwL._CLa%7C1334,750%7C91YqnvjR3ZL.png,81oiXDB-jQL.png,61zhn-hXdAL.png,51dvMnF+2KL.png,51y8WgvQ4JL.png,61LJ8Axbb7L.png,51sHxZJgXCL.png,31Ks0v49KNL.png%7C0,0,1334,750+0,0,1334,750+0,0,1334,750+0,0,1334,750+0,0,1334,750+0,0,1334,750+0,0,1334,750+0,0,1334,750+0,0,1334,750_.png"
          />
        </div>
      </div>
      <div className="home__row">
        <Product
          id="001C"
          title="SAFAVIEH Natural Fiber Round Collection 3' Round Ivory NF363B Handmade Boho Charm Farmhouse Jute Area Rug"
          price={89}
          rating={3}
          image="https://m.media-amazon.com/images/I/A1NPALhmkBL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
        />
        <Product
          id="aLs4567"
          title="Teff Love: Adventures in Vegan Ethiopian Cooking"
          price={24.95}
          rating={6}
          image="https://m.media-amazon.com/images/I/61JnEpCvDqL._SX442_BO1,204,203,200_.jpg"
        />
        <Product
          id="34025t"
          title="Hide & Drink, Leather Toiletry Bag w/Handles, Hygiene Organizer, Travel Dopp, Bathroom, Shaving, Storage, Travel & Grooming Essentials, Handmade Includes 101 Year Warranty (Bourbon Brown)"
          price={69}
          rating={4}
          image="https://m.media-amazon.com/images/I/61z+GBkmZoL._AC_SY300_SX300_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="aLs4567"
          title=" Flagship HD+ Business Laptop, 16GB DDR4 RAM, 1TB PCIe SSD, Intel Quad Core i3-1125G4(Beat i5-1035G4), Bluetooth, HDMI, Webcam, Windows 11, Silver, w/GM Accessories"
          price={599}
          rating={4}
          image="https://m.media-amazon.com/images/I/61DF0nkzgxL._AC_UY218_.jpg"
        />
        <Product
          id="34025t"
          title="Columbia Women's Crestwood Waterproof, Pebble/Oxygen, 8"
          price={70}
          rating={4}
          image="https://m.media-amazon.com/images/I/61dOCwKsbPS._AC_UY535_.jpg"
        />
      </div>
      <div className="home__row">
        <div className="home__row">
          <Product
            id="001C"
            title="Cyclysio 35 Inches Nightstand with Reversible Lift Top, Large Night Stand with LED Lights, Tall Bedside Table with Charging Station, High End Side Table for Bedroom, Sofa Side, Living Room, Black"
            price={139}
            rating={3}
            image="https://m.media-amazon.com/images/I/710ZMBONLVL._AC_SX522_.jpg"
          />
          <Product
            id="aLs45"
            title="Peepers by PeeperSpecs Women's Grandview Square Blue Light Blocking Reading Glasses"
            price={29}
            rating={6}
            image="https://m.media-amazon.com/images/I/41wgHaVTyfL._AC_UX679_.jpg"
          />
          <Product
            id="eilsb5f"
            title="MIUOPUR Makeup Organizer for Vanity, Large Capacity Desk Organizer with Drawers for Cosmetics, Lipsticks, Jewelry, Nail Care, Skincare, Ideal for Bedroom and Bathroom Countertops - Large Green)"
            price={29}
            rating={4}
            image="https://m.media-amazon.com/images/I/61guM5K-Q8L._AC_SX522_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
