import { GET_REPO, REPO_ERROR } from "../types";

const initialState = {
  repo: [],
  loading: true,
};

const sampleReducer = (state = initialState, action: { type: String; payload: Object; }) => {
  switch (action.type) {
    case GET_REPO:
      return {
        ...state,
        repo: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default sampleReducer;