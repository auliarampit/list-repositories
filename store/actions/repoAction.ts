import { GET_REPO, REPO_ERROR } from "../types";

export const getSampleData = () => async (dispatch: (arg0: { 
    type: string;
    payload: string | number[];
}) => void) => {
  try {
    dispatch({
      type: GET_REPO,
      payload: [1, 2, 3, 4, 5, 6],
    });
  } catch (error) {
    dispatch({
      type: REPO_ERROR,
      payload: "error message",
    });
  }
};