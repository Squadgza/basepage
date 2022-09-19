const FETCH_POSTS = 'FETCH_POSTS';
const FETCH_USER = 'FETCH_USER';
const CREATE_RESERVE = 'CREATE_RESERVE'; // this will be used for joining some action
// const CREATE_JOIN = 'CREATE_JOIN';

const baseUrl = 'localhost:3000/posts';
const userUrl = 'localhost:3000/user';
const initialState = {
  posts: [],
  user: [],
};

export const getPosts = (payload) => ({
  type: FETCH_POSTS,
  payload,
});

export const getUser = (payload) => ({
  type: FETCH_USER,
  payload,
});

export const createReserve = (payload) => ({
  type: CREATE_RESERVE,
  payload,
});

// export const createJoin = (payload) => ({
//   type: CREATE_JOIN,
//   payload,
// });

export const getPostsFromApi = () => async (dispatch) => {
  const request = await fetch(baseUrl);
  const response = await request.json();
  dispatch(getPosts(response));
};

export const getuserFromApi = () => async (dispatch) => {
  const request = await fetch(userUrl);
  const response = await request.json();
  dispatch(getUser(response));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, posts: action.payload };
    case FETCH_USER:
      return { ...state, user: action.payload };
    case CREATE_RESERVE: {
      const changeState = state.posts.map((el) => {
        if (el.id === action.payload.id) {
          return { ...el, reserve: action.payload.reserve };
        }
        return el;
      });
      return { ...state, posts: changeState };
    }
    // case CREATE_JOIN: {
    //   const changeJoin = state.missions.map((el) => {
    //     if (el.mission_id === action.payload.mission_id) {
    //       return { ...el, join: action.payload.join };
    //     }
    //     return el;
    //   });
    //   return { ...state, missions: changeJoin };
    // }
    default:
      return state;
  }
};

export default reducer;