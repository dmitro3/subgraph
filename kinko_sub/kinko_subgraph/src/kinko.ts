import { BigInt } from "@graphprotocol/graph-ts"
import {
  InitiateCharity,
} from "../generated/kinko/kinko"
import {Initiate_Charity } from "../generated/schema"

export function handleInitiateCharity(event: InitiateCharity): void {

  let kinko = Initiate_Charity.load(event.transaction.from.toHex())
  if(!kinko){
    kinko = new Initiate_Charity(event.transaction.from.toHex())
  }
  kinko.charityAddress = event.params.charityAddress;
  kinko._sourceToken = event.params._sourceToken;
  kinko._rewardToken = event.params._rewardToken;
  kinko.save()
}

