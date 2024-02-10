import React, { useEffect, useState } from "react";
import "./Portfolio.css";

export default function Portfolio() {
  const [isImgOpen, setIsImgOpen] = useState(0);
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);

  const openImg = (index) => {
    setIsImgOpen(index);
    setSelectedImgIndex(index);
  };

  const closeImg = () => {
    setIsImgOpen(0);
  };

  const handleArrowClick = (direction) => {
    let newIndex;

    if (direction === "left") {
      newIndex = selectedImgIndex === 1 ? 6 : selectedImgIndex - 1;
    } else {
      newIndex = selectedImgIndex === 6 ? 1 : selectedImgIndex + 1;
    }

    setSelectedImgIndex(newIndex);
  };

  useEffect(() => {
    if (isImgOpen) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto"; 
    }
  }, [isImgOpen]);

  return (
    <div className="container portfolio py-5">
      <div className="row g-4">
        <h2>Partners in success</h2>
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="col-md-4" 
            onClick={() => openImg(index + 1)}
          >
            <div className="position-relative portfolioCard overflow-hidden">
              <img src={`images/portfolio${index + 1}.png`} alt={`Image ${index + 1}`} />
              <div className="position-absolute overlay">
                <i className="fa-solid fa-magnifying-glass-plus"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isImgOpen > 0 && (
        <div className="selectedImg">
          <div className="imgBox">
            <img
              src={`images/portfolio${selectedImgIndex}.png`}
              alt={`Selected Image ${selectedImgIndex}`}
            />
            <div className="closeImg" onClick={closeImg}>
              <i className="fa-solid fa-circle-xmark"></i>
            </div>
            <div className="arrows">
              <i className="fa-solid fa-circle-arrow-left" onClick={() => handleArrowClick("left")}></i>
              <i className="fa-solid fa-circle-arrow-right" onClick={() => handleArrowClick("right")}></i>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
