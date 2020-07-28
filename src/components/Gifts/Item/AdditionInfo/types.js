//@flow
import type { GiftItems } from "kernel/types";

export type ComponentProps = {
  backgroundImage: string,
  items: GiftItems
};

export type ComponentState = {
  isOpen: boolean
};
