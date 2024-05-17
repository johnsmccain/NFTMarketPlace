"use client";
import React,{useEffect, useState, useContext}from 'react';
import web3Modal from "web3modal";
import { ethers } from "ethers";
import Router from 'next/router';
import axios from "axios";
import {create as ipfsHttpClient} from 'ipfs-http-client';

// Internal import
import { NFTMarketPlaceAddress, NFTMarketPlaceABI } from './constants';

// fectching from smart contract
export const fetchContract = (signerOrProvider) => new ethers.Contract(NFTMarketPlaceAddress, NFTMarketPlaceABI, signerOrProvider);

// Connect with smart contract
export const connectingWithSmartContract = async () => {
  try {
    const web3Modalx = new web3Modal();
	// console.log(web3Modalx)
    const connection = await web3Modalx.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    // const provider = new ethers.providers.Web3Provider(connection);
    // const provider = new ethers.BrowserProvider(connection);
    // console.log(provider)
    const signer = provider.getSigner();
    const contract = fetchContract(signer);
    return contract;
  } catch (error) {
    console.log("Something went wrong while connecting with contract", error);
  }
}


export const NFTMarketContext = React.createContext();

export const NFTMarketProvider = ({children}) => {
  // const checkContract = async () => {
  //   const contract = await connectingWithSmartContract();
  //   console.log(contract)
  // }


  <NFTMarketContext.Provider  value={data}>
    {children}
  </NFTMarketContext.Provider>
}
