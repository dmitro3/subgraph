import { BigInt } from "@graphprotocol/graph-ts"
import {
  Transfer,
  Approval
} from "../generated/Polygon/Polygon"
import { transfer,  approval} from "../generated/schema"


export function handleTransfer(event: Transfer): void {
  let polygon = transfer.load(event.transaction.from.toHex())
  if (!polygon) {
    polygon = new transfer(event.transaction.from.toHex())
  }
  polygon.from = event.params.from
  polygon.to = event.params.to
  polygon.value = event.params.value
  polygon.save()
}

export function handleApproval(event: Approval): void {
  let polygon = approval.load(event.transaction.from.toHex())
  if (!polygon) {
    polygon = new approval(event.transaction.from.toHex())
  }
  polygon.owner = event.params.owner
  polygon.spender = event.params.spender
  polygon.value = event.params.value
  polygon.save()
}
