import React from "react";
import { useParams } from "react-router-dom";

function PostDetail() {
  const { id } = useParams();
  return <div>Post ID: {id}</div>;
}

export default PostDetail;
