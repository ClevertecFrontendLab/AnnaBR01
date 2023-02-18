export enum Breackpoint {
  SM = 767,
  MD = 1439,
}

export const Media = {
  SM: `@media screen and (max-width: ${Breackpoint.SM}px)`,
  MD: `@media screen and (max-width: ${Breackpoint.MD}px)`,
};
