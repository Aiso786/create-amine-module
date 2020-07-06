export const SITE_FILTER_CHANGE = 'SITE.FILTER_CHANGE';
export const SITE_FILTER_RESET = 'SITE.FILTER_RESET';

interface SiteFilterChange {
  type: typeof SITE_FILTER_CHANGE;
  payload: any;
}
interface @Module@FilterReset {
  type: typeof @MODULE@_FILTER_RESET;
}

export type FilterActionTypes = @Module@FilterChange | @Module@FilterReset;
