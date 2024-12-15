"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import WALNUTBANANABREAD from "./../../public/Banana-and-Walnut-Cake5.jpg";
import HERO from "./../../public/bananabreadhero.png";
import CHOCOBANANABREAD from "./../../public/chocolatechipbananabread.jpg";
import JUSTBANANABREAD from "./../../public/justbananabread.png";

const product = [
  {
    name: "just banana bread",
    image: JUSTBANANABREAD,
    blurb:
      "Our homemade banana bread is a moist, flavorful treat made with overripe bananas for natural sweetness and a hint of cinnamon.",
    slice: 4,
    loaf: 15,
    sliceUrl: "https://buy.stripe.com/4gw9D3eIw0Ba9tmbIJ",
    loafUrl: "https://buy.stripe.com/9AQeXncAo3Nm9tmdQQ",
  },
  {
    name: "choco banana bread",
    image: CHOCOBANANABREAD,
    blurb:
      "Indulge in the perfect blend of rich, gooey chocolate chips and naturally sweet banana in our decadent chocolate chip banana bread.",
    slice: 5,
    loaf: 17,
    sliceUrl: "https://buy.stripe.com/3cs9D3fMA1FecFycMO",
    loafUrl: "https://buy.stripe.com/7sIdTj0RGcjScFy9AE",
  },
  {
    name: "walnut banana bread",
    image: WALNUTBANANABREAD,
    blurb:
      "Indulge in the rich, nutty goodness of our Walnut Banana Bread, where perfectly ripe bananas meet the crunch of toasted walnuts in every bite.",
    slice: 5,
    loaf: 17,
    sliceUrl: "https://buy.stripe.com/28o2aBfMA5Vu5d6147",
    loafUrl: "https://buy.stripe.com/00g3eFdEsgA8axqfZ3",
  },
];

export default function Home() {
  type size = "slice" | "loaf";

  const [sizeBanana, setSizeBanana] = useState<size>("slice");
  const [sizeChoco, setSizeChoco] = useState<size>("slice");
  const [sizeWalnut, setSizeWalnut] = useState<size>("slice");

  function getSizeValue(productName: string) {
    switch (productName) {
      case "just banana bread": {
        return sizeBanana!;
      }
      case "choco banana bread": {
        return sizeChoco!;
      }
      case "walnut banana bread": {
        return sizeWalnut!;
      }
      default: {
        return "slice";
      }
    }
  }

  return (
    <div>
      <div className="h-screen">
        <div className="absolute top-0 rigth-0 z-10">
          <Image src={HERO} alt="..." className="z-10 h-screen object-cover" />
        </div>
        <div className="relative flex justify-center h-full items-center z-50">
          <div>
            <Link
              href={"www.bananabread.au"}
              className="text-white text-4xl sm:text-5xl font-Poppins"
            >
              bananabread.au
            </Link>
            <div className="flex justify-center">
              <Link
                href="/#shop"
                className="rounded-sm text-2xl font-Poppins py-1.5 px-2.5 bg-white mt-4"
              >
                shop now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        id="shop"
        className="sm:h-screen flex justify-center items-center w-screen py-16 sm:px-16"
      >
        <div className="w-full">
          <div className=" text-center">
            <h2 className="text-4xl font-Poppins">
              Only the Highest Quality Ingredients
            </h2>
            <p className="font-Poppins mt-8 text-lg font-light">
              banana bread mixed, baked and delivered straight to you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 w-full mt-20 font-Poppins">
            {product.map((product, idx) => {
              return (
                <div className="p-2" key={idx}>
                  <Image
                    src={product.image}
                    alt="..."
                    className="object-cover w-full h-96"
                  />
                  <h2 className="text-2xl mt-4 mb-1">{product.name}</h2>
                  <p className="mb-4">{product.blurb}</p>
                  <div className="flex w-full">
                    <div>
                      <select
                        name="size"
                        id="size"
                        value={getSizeValue(product.name)}
                        onChange={(e) => {
                          switch (product.name) {
                            case "just banana bread": {
                              setSizeBanana(e.target.value as size);
                              break;
                            }
                            case "choco banana bread": {
                              setSizeChoco(e.target.value as size);
                              break;
                            }
                            case "walnut banana bread": {
                              setSizeWalnut(e.target.value as size);
                              break;
                            }
                          }
                        }}
                        className="border px-4 py-1"
                      >
                        <option value="slice">slice</option>
                        <option value="loaf">loaf</option>
                      </select>
                    </div>
                    <p className="ml-auto text-xl mr-2">
                      price: ${product[getSizeValue(product.name)]}
                    </p>
                  </div>

                  <div className="flex w-full mt-4">
                    <button
                      className="bg-black text-white py-1 px-2 ml-auto mr-2"
                      onClick={() => {
                        window.open(
                          product[`${getSizeValue(product.name)}Url`],
                          "_blank"
                        );
                      }}
                    >
                      buy now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-black text-white font-Poppins px-16 py-16">
        <p className="font-semibold text-xl">bananabread.au</p>
        <p>an initiative by owen and cat.</p>
        <p className="mt-4">0410 776 128</p>
        <p className="mt-4">© Copyright (2024)</p>
      </div>
    </div>
  );
}
