import { GET_REPO, REPO_ERROR } from "../types";

export const getSampleData = (input: string) => (dispatch: any) => {
  try {

    fetch(`api/github/repository/${input}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: GET_REPO,
          payload: data,
        });
      }).catch(() => {
        dispatch({
          type: REPO_ERROR,
          payload: "error message",
        });
      })

  } catch (error) {
    dispatch({
      type: REPO_ERROR,
      payload: "error message",
    });
  }
};