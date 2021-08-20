import * as actionTypes from "../Actions/types";
import setUp from "../httpSetUp";
import config from "../config";

const TemplateService = {
  loadTemplates(dispatch) {
    setUp
      .getMethod(config.endPoints.templates)
      .then((templates) => {
        dispatch({
          type: actionTypes.FETCH_TEMPLATES,
          payload: templates,
        });
      })
      .catch((err) => {
        dispatch({ type: "ERROR_USERS", payload: err });
      })
      .finally(() => {});
  },
};
export default TemplateService;
