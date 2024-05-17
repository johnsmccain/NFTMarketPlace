import React from "react";

//INTERNAL IMPORT
import { Button, Category, Brand } from "../../../components";
import NFTDetailsPage from "../../../nFTDetailsPage/NFTDetailsPage";
const NFTDetails = () => {
  return (
    <div>
      <NFTDetailsPage />
      <Category />
      <Brand />
    </div>
  );
};

export default NFTDetails;