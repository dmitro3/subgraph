import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Initialized,
  OwnershipTransferred,
  flatSale,
  lazy_Auction,
  lazy_Auction_duration
} from "../generated/Contract/Contract"

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createflatSaleEvent(
  nonce: BigInt,
  seller: Address,
  tokenId: BigInt,
  assetAddress: Address,
  amount: BigInt
): flatSale {
  let flatSaleEvent = changetype<flatSale>(newMockEvent())

  flatSaleEvent.parameters = new Array()

  flatSaleEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )
  flatSaleEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  flatSaleEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  flatSaleEvent.parameters.push(
    new ethereum.EventParam(
      "assetAddress",
      ethereum.Value.fromAddress(assetAddress)
    )
  )
  flatSaleEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return flatSaleEvent
}

export function createlazy_AuctionEvent(
  tokenId: BigInt,
  assetAddress: Address,
  amount: BigInt,
  winner: Address,
  seller: Address
): lazy_Auction {
  let lazyAuctionEvent = changetype<lazy_Auction>(newMockEvent())

  lazyAuctionEvent.parameters = new Array()

  lazyAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  lazyAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "assetAddress",
      ethereum.Value.fromAddress(assetAddress)
    )
  )
  lazyAuctionEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  lazyAuctionEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )
  lazyAuctionEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )

  return lazyAuctionEvent
}

export function createlazy_Auction_durationEvent(
  startTime: BigInt,
  endTime: BigInt
): lazy_Auction_duration {
  let lazyAuctionDurationEvent = changetype<lazy_Auction_duration>(
    newMockEvent()
  )

  lazyAuctionDurationEvent.parameters = new Array()

  lazyAuctionDurationEvent.parameters.push(
    new ethereum.EventParam(
      "startTime",
      ethereum.Value.fromUnsignedBigInt(startTime)
    )
  )
  lazyAuctionDurationEvent.parameters.push(
    new ethereum.EventParam(
      "endTime",
      ethereum.Value.fromUnsignedBigInt(endTime)
    )
  )

  return lazyAuctionDurationEvent
}
