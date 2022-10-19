import { BigInt } from "@graphprotocol/graph-ts"
import {
  flatSale,
  lazy_Auction,
  lazy_Auction_duration
} from "../generated/Contract/Contract"
import {  Flatsale,Lazy_auction ,Lazy_Auction_duration} from "../generated/schema"

export function handleflatSale(event: flatSale): void {
  let contract =  Flatsale.load(event.transaction.from.toHex());
  if(!contract){
    contract = new Flatsale(event.transaction.from.toHex());
  }
  contract.nonce = event.params.nonce;
  contract.tokenId = event.params.tokenId;
  contract.seller = event.params.seller;
  contract.assetAddress = event.params.assetAddress;
  contract.amount = event.params.amount;
  contract.save();
}

export function handlelazy_Auction(event: lazy_Auction): void {
  let contract = Lazy_auction.load(event.transaction.from.toHex());
  if(!contract){
    contract = new Lazy_auction(event.transaction.from.toHex());
  }
  contract.tokenId = event.params.tokenId;
  contract.assetAddress = event.params.assetAddress;
  contract.amount = event.params.amount;
  contract.winner = event.params.winner;
  contract.seller = event.params.seller;
  contract.save();
}



export function handlelazy_Auction_duration(
  event: lazy_Auction_duration
): void {

  let contract = Lazy_Auction_duration.load(event.transaction.from.toHex());
  if(!contract){
    contract = new Lazy_Auction_duration(event.transaction.from.toHex());
  }
  contract.startTime = event.params.startTime;
  contract.endTime = event.params.endTime;
  contract.save();
}
