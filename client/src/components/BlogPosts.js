import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { LoadPosts } from "../store/actions/TravelActions";
import Comments from "./Comments";
import Likes from "./Likes";

const mapStateToProps = ({ postState }) => {
  
  return { postState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBlogPosts: () => dispatch(LoadPosts()),
  };
};


const BlogPosts = (props) => {
  useEffect(() => {
    props.fetchBlogPosts();
  }, []);

  return (
    <div className="blog-post-container">
      {props.postState.posts.map((post) => (
        <ul className="location-list" key={post.id}>
          <h2>{post.title}</h2>
          <h3>Continent: {post.continent}</h3>
          <h3>Country: {post.country}</h3>
          <h3>City: {post.location}</h3>
          <h5>Author: {post.author}</h5>
          <p>{post.story}</p>
          <image src={`${post.image}`} />
          {/* <Likes />
          <Comments /> */}
        </ul>
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogPosts);
