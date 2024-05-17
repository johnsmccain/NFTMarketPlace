import React from "react";

//INTRNAL IMPORT
import Style from "../../styles/searchPage.module.css";
import { Slider, Brand } from "../../components";
import  SearchBar  from "../../searchPage/searchBar/SearchBar";
import { Filter } from "../../components";

import { NFTCardTwo, Banner } from "../../collectionPage";
import images from "../../img";

const searchPage = () => {
  const collectionArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
  ];
  return (
    <div className={Style.searchPage}>
      <Banner bannerImage={images.creatorbackground2} />
      <SearchBar />
      <Filter />
      <NFTCardTwo NFTData={collectionArray} />
      <Slider />
      <Brand />
    </div>
  );
};

export default searchPage;