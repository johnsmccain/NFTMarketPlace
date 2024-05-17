'use client'
// import styles from "./index.module.css";
import { AudioLive, BigNFTSlider, Brand, Category, Collection, Filter, FollowerTab, HeroSection, NFTCard, Service, Slider, Subscribe, Title, Video } from "@/components";
import { NFTMarketProvider, connectingWithSmartContract } from "@/context/NFTMarketContext";
import { useEffect } from "react";
// import { NFTMarketContext } from "@/context/NFTMarketContext";
// import { useContext } from "react";

export default function Home() {
 const checkContract = async () => {
    const contract = await connectingWithSmartContract();
    console.log(contract)
  }
  useEffect(() => {
    checkContract()
  }, [])


  return (
    <main >
      {/* <NFTMarketProvider > */}

      <HeroSection/>
      <Service/>
      <BigNFTSlider/>
      <Title heading="Latest Audio Collections" paragraph="Discover the most outstanding NFTs in all topics of life"/>
      <AudioLive/>
      <FollowerTab/>

      <Slider/>
      <Collection/>
      <Title heading="Featured NFTs " paragraph="Discover the most outstanding NFTs in all topics of life"/>
      <Filter/>
      <NFTCard/>
      <Title heading="Browse by category" paragraph="Explore the NFTs in the most feateured categories"/>
      <Category/>
      <Subscribe/>
      <Brand/>
      <Video/>
      {/* </NFTMarketProvider> */}
    </main>
  );
}
