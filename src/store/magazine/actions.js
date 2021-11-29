import magazineConstans, { RESET_STORE } from "./constants";

const magazineActions = {
  getAllMagazines: () => ({
    type: magazineConstans.GET_ALL_MAGAZINE.REQUEST,
  }),
  getMagazineDetail: () => ({
    type: magazineConstans.GET_MAGAZINE_DETAIL.REQUEST,
  })
};

export default magazineActions;