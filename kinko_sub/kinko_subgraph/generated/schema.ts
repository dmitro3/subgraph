// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Initiate_Charity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Initiate_Charity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Initiate_Charity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Initiate_Charity", id.toString(), this);
    }
  }

  static load(id: string): Initiate_Charity | null {
    return changetype<Initiate_Charity | null>(
      store.get("Initiate_Charity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get charityAddress(): Bytes | null {
    let value = this.get("charityAddress");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set charityAddress(value: Bytes | null) {
    if (!value) {
      this.unset("charityAddress");
    } else {
      this.set("charityAddress", Value.fromBytes(<Bytes>value));
    }
  }

  get _sourceToken(): Bytes | null {
    let value = this.get("_sourceToken");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set _sourceToken(value: Bytes | null) {
    if (!value) {
      this.unset("_sourceToken");
    } else {
      this.set("_sourceToken", Value.fromBytes(<Bytes>value));
    }
  }

  get _rewardToken(): Bytes | null {
    let value = this.get("_rewardToken");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set _rewardToken(value: Bytes | null) {
    if (!value) {
      this.unset("_rewardToken");
    } else {
      this.set("_rewardToken", Value.fromBytes(<Bytes>value));
    }
  }
}

export class Charity_Created extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Charity_Created entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Charity_Created must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Charity_Created", id.toString(), this);
    }
  }

  static load(id: string): Charity_Created | null {
    return changetype<Charity_Created | null>(store.get("Charity_Created", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get charityIndex(): BigInt | null {
    let value = this.get("charityIndex");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set charityIndex(value: BigInt | null) {
    if (!value) {
      this.unset("charityIndex");
    } else {
      this.set("charityIndex", Value.fromBigInt(<BigInt>value));
    }
  }

  get startingTime(): BigInt | null {
    let value = this.get("startingTime");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set startingTime(value: BigInt | null) {
    if (!value) {
      this.unset("startingTime");
    } else {
      this.set("startingTime", Value.fromBigInt(<BigInt>value));
    }
  }

  get charityReward(): BigInt | null {
    let value = this.get("charityReward");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set charityReward(value: BigInt | null) {
    if (!value) {
      this.unset("charityReward");
    } else {
      this.set("charityReward", Value.fromBigInt(<BigInt>value));
    }
  }

  get endingTime(): BigInt | null {
    let value = this.get("endingTime");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set endingTime(value: BigInt | null) {
    if (!value) {
      this.unset("endingTime");
    } else {
      this.set("endingTime", Value.fromBigInt(<BigInt>value));
    }
  }

  get distributionTime(): BigInt | null {
    let value = this.get("distributionTime");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set distributionTime(value: BigInt | null) {
    if (!value) {
      this.unset("distributionTime");
    } else {
      this.set("distributionTime", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class Charity_Claimed extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Charity_Claimed entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Charity_Claimed must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Charity_Claimed", id.toString(), this);
    }
  }

  static load(id: string): Charity_Claimed | null {
    return changetype<Charity_Claimed | null>(store.get("Charity_Claimed", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get charityIndex(): BigInt | null {
    let value = this.get("charityIndex");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set charityIndex(value: BigInt | null) {
    if (!value) {
      this.unset("charityIndex");
    } else {
      this.set("charityIndex", Value.fromBigInt(<BigInt>value));
    }
  }

  get doner(): Bytes | null {
    let value = this.get("doner");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set doner(value: Bytes | null) {
    if (!value) {
      this.unset("doner");
    } else {
      this.set("doner", Value.fromBytes(<Bytes>value));
    }
  }

  get time(): BigInt | null {
    let value = this.get("time");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set time(value: BigInt | null) {
    if (!value) {
      this.unset("time");
    } else {
      this.set("time", Value.fromBigInt(<BigInt>value));
    }
  }

  get donationAmount(): BigInt | null {
    let value = this.get("donationAmount");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set donationAmount(value: BigInt | null) {
    if (!value) {
      this.unset("donationAmount");
    } else {
      this.set("donationAmount", Value.fromBigInt(<BigInt>value));
    }
  }

  get reward(): BigInt | null {
    let value = this.get("reward");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set reward(value: BigInt | null) {
    if (!value) {
      this.unset("reward");
    } else {
      this.set("reward", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class Charity_Donated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Charity_Donated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Charity_Donated must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Charity_Donated", id.toString(), this);
    }
  }

  static load(id: string): Charity_Donated | null {
    return changetype<Charity_Donated | null>(store.get("Charity_Donated", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get charityIndex(): BigInt | null {
    let value = this.get("charityIndex");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set charityIndex(value: BigInt | null) {
    if (!value) {
      this.unset("charityIndex");
    } else {
      this.set("charityIndex", Value.fromBigInt(<BigInt>value));
    }
  }

  get doner(): Bytes | null {
    let value = this.get("doner");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set doner(value: Bytes | null) {
    if (!value) {
      this.unset("doner");
    } else {
      this.set("doner", Value.fromBytes(<Bytes>value));
    }
  }

  get time(): BigInt | null {
    let value = this.get("time");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set time(value: BigInt | null) {
    if (!value) {
      this.unset("time");
    } else {
      this.set("time", Value.fromBigInt(<BigInt>value));
    }
  }

  get amount(): BigInt | null {
    let value = this.get("amount");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set amount(value: BigInt | null) {
    if (!value) {
      this.unset("amount");
    } else {
      this.set("amount", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class Charity_Initiated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Charity_Initiated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Charity_Initiated must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Charity_Initiated", id.toString(), this);
    }
  }

  static load(id: string): Charity_Initiated | null {
    return changetype<Charity_Initiated | null>(
      store.get("Charity_Initiated", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get sourceToken(): Bytes | null {
    let value = this.get("sourceToken");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set sourceToken(value: Bytes | null) {
    if (!value) {
      this.unset("sourceToken");
    } else {
      this.set("sourceToken", Value.fromBytes(<Bytes>value));
    }
  }

  get rewardToken(): Bytes | null {
    let value = this.get("rewardToken");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set rewardToken(value: Bytes | null) {
    if (!value) {
      this.unset("rewardToken");
    } else {
      this.set("rewardToken", Value.fromBytes(<Bytes>value));
    }
  }

  get owner(): Bytes | null {
    let value = this.get("owner");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set owner(value: Bytes | null) {
    if (!value) {
      this.unset("owner");
    } else {
      this.set("owner", Value.fromBytes(<Bytes>value));
    }
  }
}
