import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';

function Posts({ syncPosts }) {
    if (!syncPosts.length) {
        return <p className="text-center">Постов пока нет</p>;
    }

    return syncPosts.map((post, id) => <Post post={post} key={id} />);
}

const mapStateToolProps = (state) => {
    console.log(state);
    return {
        syncPosts: state.posts.posts,
    };
};

export default connect(mapStateToolProps, null)(Posts);
