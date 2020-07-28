//@flow

export type GiftItem = {
  id: string,
  image: ?string,
  name: string,
  description: string,
  level: number,
  change: number,
  cost: 2,
  tags: $ReadOnlyArray<string>,
  __typename: string
};

export type GiftItems = $ReadOnlyArray<GiftItem>;

export type StartupDataGift = {
  id: number,
  image: string,
  name: string,
  description: string,
  start: string,
  end: string,
  items: GiftItems,
  probability_total: number,
  __typename: string
};

export type StartupData = $ReadOnlyArray<StartupDataGift>;

export type Gift = {
  id: string,
  image: string,
  name: string,
  description: string,
  startDate: Date,
  endDate: Date,
  items: GiftItems,
  probability_total: number,
  __typename: string
};
