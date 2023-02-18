import React from "react";
import "./SingleBlogImage.scss";

export interface BlogImageProps {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
  linkTitle?: string;
}

const BlogImage: React.FC<BlogImageProps> = ({
  imageSrc,
  title,
  description,
  link,
  linkTitle = "Learn More",
}) => {
  return (
    <div className="blog-image">
      <img src={imageSrc} alt={title} className="image" />
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
      <a href={link} className="link">
        {linkTitle}
      </a>
    </div>
  );
};

export default BlogImage;
