import React from "react";
import Image from "next/image";
import { BsCircleFill } from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./Category.module.css";
import images from "../../img";
import { array2 } from "@/data";

const Category = () => {
  // const CategoryArray = [1, 2, 3, 4, 5, 6];
  return (
    <div className={Style.box_category}>
      <div className={Style.category}>
        {array2.map((el, i) => (
          <div className={Style.category_box} key={1 + 1}>
            <Image
              src={el.background}
              className={Style.category_box_img}
              alt="Background image"
              width={350}
              height={150}
              objectFit="cover"
            />

            <div className={Style.category_box_title}>
              <span>
                <BsCircleFill />
              </span>
              <div className={Style.category_box_title_info}>
                <h4>Enterainment</h4>
                <small>1995 NFTS</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;