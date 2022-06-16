import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Post from './Post';
import { Loader } from './Loader';
import { fetchPosts } from './../redux/actions';

export const FetchedPosts = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.fetchedPosts);
    const loading = useSelector((state) => state.app.loading);

    if (loading) {
        return <Loader />;
    }

    if (!posts.length) {
        return (
            <button className="btn btn-primary" onClick={() => dispatch(fetchPosts())}>
                Загрузить
            </button>
        );
    }

    return posts.map((post, id) => <Post post={post} key={id} />);
};