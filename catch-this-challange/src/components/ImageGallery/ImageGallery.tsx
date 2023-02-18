import React from "react";
import "./ImageGallery.scss";

interface ImageGalleryProps {
  imageList: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ imageList }) => {
  return (
    <div className="image-gallery-container">
      <div className="image-gallery">
        {imageList.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
