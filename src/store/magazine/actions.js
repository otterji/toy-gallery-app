import magazineConstans, { RESET_STORE } from "./constants";

const magazineActions = {
  getAllMagazines: () => ({
    type: magazineConstans.GET_ALL_MAGAZINE.REQUEST,
  }),
  getMagazineDetail: ({ magazineId }) => ({
    type: magazineConstans.GET_MAGAZINE_DETAIL.REQUEST,
    magazineId,
  }),
  resetStore: () => ({
    type: RESET_STORE
  }),
};

export default magazineActions;