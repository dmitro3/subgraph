import { BigInt } from "@graphprotocol/graph-ts"
import {
    CharityInitiated,
    CharityCreated,
    Donated,
    Claimed

} from "../generated/templates/charity/temom"
import {Charity_Initiated,Charity_Created,Charity_Claimed ,Charity_Donated} from "../generated/schema"

export function handleInitiateCharity(event: CharityInitiated): void {

  let kinko = Charity_Initiated.load(event.transaction.from.toHex())
  if(!kinko){
    kinko = new Charity_Initiated(event.transaction.from.toHex())
  }
  kinko.sourceToken = event.params.sourceToken;
  kinko.rewardToken = event.params.rewardToken;
  kinko.owner = event.params.owner;
  kinko.save()
}

export function handleCharityCreated(event: CharityCreated): void {
    let  kinko = Charity_Created.load(event.transaction.from.toHex())
    if(!kinko){
        kinko = new Charity_Created(event.transaction.from.toHex())
    }
    kinko.charityIndex = event.params.charityIndex;
    kinko.startingTime = event.params.startingTime;
    kinko.charityReward = event.params.charityReward;
    kinko.endingTime = event.params.endingTime;
    kinko.distributionTime=event.params.distributionTime;
    kinko.save()
}

export function handleCharityClaimed(event: Claimed): void {
    let kinko = Charity_Claimed.load(event.transaction.from.toHex())
    if(!kinko){
        kinko = new Charity_Claimed(event.transaction.from.toHex())
    }
    kinko.charityIndex = event.params.charityIndex;
    kinko.doner = event.params.doner;
    kinko.time = event.params.time;
    kinko.donationAmount = event.params.donationAmount;
    kinko.reward= event.params.reward;
    kinko.save()
}

export function handleDonated(event: Donated): void {
    let kinko = Charity_Donated.load(event.transaction.from.toHex())
    if(!kinko){
        kinko = new Charity_Donated(event.transaction.from.toHex())
    }
    kinko.charityIndex = event.params.charityIndex;
    kinko.doner = event.params.doner;
    kinko.time = event.params.time;
    kinko.amount = event.params.amount;
    kinko.save()

}
