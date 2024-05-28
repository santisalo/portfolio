import moment from "moment";
export const getMyAge = (date: string) => {
  return moment().diff(moment(date), "years");
};
export const removeDotFromSlug = (slug: string) => {
  return slug ? slug.replace(".", "-") : "";
};
