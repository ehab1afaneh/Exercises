import { sortBy } from "lodash";
import { filter } from "lodash";

export const filteredData = (data, word) => {
  return sortBy(
    filter(data, (item) => {
      return item?.title?.toLowerCase()?.includes(word?.toLowerCase());
    }),
    ["title"]
  );
};

export const checkEndLoading = (cardsCount, counter, filteredExercises) => {
  if (cardsCount * counter >= filteredExercises.length) {
    return false;
  }
  return true;
};
