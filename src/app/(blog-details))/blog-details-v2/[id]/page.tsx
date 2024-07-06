import React from "react";

const BlogPage2 = ({ params }: { params: { id: string } }) => {
  return <div>BlogPage2: {params.id}</div>;
};

export default BlogPage2;
