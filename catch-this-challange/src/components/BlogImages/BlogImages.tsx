import React from "react";
import "./BlogImages.scss";
import SingleBlogImage, {
  BlogImageProps,
} from "../SingleBlogImage/SingleBlogImage";

interface BlogImagesProps {
  blogPosts: BlogImageProps[];
}

const BlogImages: React.FC<BlogImagesProps> = ({ blogPosts }) => {
  return (
    <div className="blogs">
      {blogPosts.map((blog: BlogImageProps, index) => (
        <div className="blogs__single-blog" key={index}>
          <SingleBlogImage
            title={blog.title}
            description={blog.description}
            link={blog.link}
            linkTitle={blog.linkTitle}
            imageSrc={blog.imageSrc}
          />
        </div>
      ))}
    </div>
  );
};

export default BlogImages;
