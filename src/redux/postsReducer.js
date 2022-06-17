import { CREATE_POST, FETCH_POSTS } from './types';

const initState = {
    posts: [],
    fetchedPosts: [],
};

// Pure Functions - чистые функции
export const postsReducer = (state = initState, action) => {
    switch (action.type) {
        case CREATE_POST:
            // return {...state, posts: state.posts.concat(action.payload)}
            return { ...state, posts: [...state.posts, action.payload] };
        case FETCH_POSTS:
            return { ...state, fetchedPosts: [...state.fetchedPosts, ...action.payload] };
        default:
            return state;
    }
};
