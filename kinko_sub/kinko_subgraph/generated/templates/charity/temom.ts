// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CharityCreated extends ethereum.Event {
  get params(): CharityCreated__Params {
    return new CharityCreated__Params(this);
  }
}

export class CharityCreated__Params {
  _event: CharityCreated;

  constructor(event: CharityCreated) {
    this._event = event;
  }

  get charityIndex(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get startingTime(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get charityReward(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get endingTime(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get distributionTime(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class CharityInitiated extends ethereum.Event {
  get params(): CharityInitiated__Params {
    return new CharityInitiated__Params(this);
  }
}

export class CharityInitiated__Params {
  _event: CharityInitiated;

  constructor(event: CharityInitiated) {
    this._event = event;
  }

  get sourceToken(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get rewardToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get owner(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class Claimed extends ethereum.Event {
  get params(): Claimed__Params {
    return new Claimed__Params(this);
  }
}

export class Claimed__Params {
  _event: Claimed;

  constructor(event: Claimed) {
    this._event = event;
  }

  get charityIndex(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get doner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get time(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get donationAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get reward(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class Donated extends ethereum.Event {
  get params(): Donated__Params {
    return new Donated__Params(this);
  }
}

export class Donated__Params {
  _event: Donated;

  constructor(event: Donated) {
    this._event = event;
  }

  get charityIndex(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get doner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get time(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class temom__charityListResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt, value3: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }

  getRewardAmount(): BigInt {
    return this.value0;
  }

  getStartTime(): BigInt {
    return this.value1;
  }

  getEndTime(): BigInt {
    return this.value2;
  }

  getDistributionTime(): BigInt {
    return this.value3;
  }
}

export class temom extends ethereum.SmartContract {
  static bind(address: Address): temom {
    return new temom("temom", address);
  }

  charityList(param0: BigInt): temom__charityListResult {
    let result = super.call(
      "charityList",
      "charityList(uint256):(uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new temom__charityListResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt()
    );
  }

  try_charityList(
    param0: BigInt
  ): ethereum.CallResult<temom__charityListResult> {
    let result = super.tryCall(
      "charityList",
      "charityList(uint256):(uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new temom__charityListResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt()
      )
    );
  }

  donations(param0: BigInt, param1: Address): BigInt {
    let result = super.call(
      "donations",
      "donations(uint256,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1)
      ]
    );

    return result[0].toBigInt();
  }

  try_donations(param0: BigInt, param1: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "donations",
      "donations(uint256,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  rewardToken(): Address {
    let result = super.call("rewardToken", "rewardToken():(address)", []);

    return result[0].toAddress();
  }

  try_rewardToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("rewardToken", "rewardToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  sourceToken(): Address {
    let result = super.call("sourceToken", "sourceToken():(address)", []);

    return result[0].toAddress();
  }

  try_sourceToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("sourceToken", "sourceToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  totalDonations(param0: BigInt): BigInt {
    let result = super.call(
      "totalDonations",
      "totalDonations(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBigInt();
  }

  try_totalDonations(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalDonations",
      "totalDonations(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _sourceToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _rewardToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _sender(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ClaimCall extends ethereum.Call {
  get inputs(): ClaimCall__Inputs {
    return new ClaimCall__Inputs(this);
  }

  get outputs(): ClaimCall__Outputs {
    return new ClaimCall__Outputs(this);
  }
}

export class ClaimCall__Inputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }

  get _charityIndex(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ClaimCall__Outputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }
}

export class CreateCharityCall extends ethereum.Call {
  get inputs(): CreateCharityCall__Inputs {
    return new CreateCharityCall__Inputs(this);
  }

  get outputs(): CreateCharityCall__Outputs {
    return new CreateCharityCall__Outputs(this);
  }
}

export class CreateCharityCall__Inputs {
  _call: CreateCharityCall;

  constructor(call: CreateCharityCall) {
    this._call = call;
  }

  get _rewardAmount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _startTime(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _endTime(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _distributionTime(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class CreateCharityCall__Outputs {
  _call: CreateCharityCall;

  constructor(call: CreateCharityCall) {
    this._call = call;
  }
}

export class DonateCall extends ethereum.Call {
  get inputs(): DonateCall__Inputs {
    return new DonateCall__Inputs(this);
  }

  get outputs(): DonateCall__Outputs {
    return new DonateCall__Outputs(this);
  }
}

export class DonateCall__Inputs {
  _call: DonateCall;

  constructor(call: DonateCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _charityIndex(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DonateCall__Outputs {
  _call: DonateCall;

  constructor(call: DonateCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}