import React from "react";

const BlogPage1 = ({ params }: { params: { id: string } }) => {
  return <div>BlogPage1: {params.id}</div>;
};

export default BlogPage1;
