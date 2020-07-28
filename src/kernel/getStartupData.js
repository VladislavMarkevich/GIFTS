//@flow
import { v4 as uuid } from "uuid";
import { data } from "./dataJson";
import type { StartupData, Gift } from "./types";

export type UpddatedStartupData = $ReadOnlyArray<Gift>;

export function getStartupData(): UpddatedStartupData {
  const startupData: StartupData = JSON.parse(data);

  const updatedStartupDate = startupData.reduce((result, it) => {
    const {
      image = "",
      name = "",
      description = "",
      start = "",
      end = "",
      items = [],
      probability_total = "",
      __typename = ""
    } = it;

    const startDate = new Date(start);
    const endDate = new Date(end);

    const newItems = items.map(it => {
      const newId = uuid();
      return { ...it, id: newId };
    });

    const ret = {
      id: uuid(),
      image,
      name,
      description,
      startDate,
      endDate,
      items: newItems,
      probability_total,
      __typename
    };

    result.push(ret);
    return result;
  }, []);

  return updatedStartupDate;
}
