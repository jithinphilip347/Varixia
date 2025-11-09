"use client"

import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Image from "next/image";
import Gallery1 from "../../../public/images/gallery/gallery-1.jpg";
import Gallery2 from "../../../public/images/gallery/gallery-2.jpg";
import Gallery3 from "../../../public/images/gallery/gallery-3.jpg";
import Gallery4 from "../../../public/images/gallery/gallery-4.jpg";
import Gallery5 from "../../../public/images/gallery/gallery-5.jpg";
import Gallery6 from "../../../public/images/gallery/gallery-6.jpg";
import Gallery7 from "../../../public/images/gallery/gallery-7.jpg";
import Gallery8 from "../../../public/images/gallery/gallery-8.jpg";
import Gallery9 from "../../../public/images/gallery/gallery-9.jpg";
import Gallery10 from "../../../public/images/gallery/gallery-10.jpg";
import Gallery11 from "../../../public/images/gallery/gallery-11.jpg";
import Gallery12 from "../../../public/images/gallery/gallery-12.jpg";
import Gallery13 from "../../../public/images/gallery/gallery-13.jpg";
import Gallery14 from "../../../public/images/gallery/gallery-14.jpg";
import Gallery15 from "../../../public/images/gallery/gallery-15.jpg";
import Gallery16 from "../../../public/images/gallery/gallery-16.jpg";
import Gallery17 from "../../../public/images/gallery/gallery-17.jpg";
import Gallery18 from "../../../public/images/gallery/gallery-18.jpg";
import Gallery19 from "../../../public/images/gallery/gallery-19.jpg";
import Gallery20 from "../../../public/images/gallery/gallery-20.jpg";
import Gallery21 from "../../../public/images/gallery/gallery-21.jpg";
import Gallery22 from "../../../public/images/gallery/gallery-22.jpg";
import Gallery23 from "../../../public/images/gallery/gallery-23.jpg";
import Gallery24 from "../../../public/images/gallery/gallery-24.jpg";
import Gallery25 from "../../../public/images/gallery/gallery-25.jpg";


const HomeGallery = () => {
  const galleryImages = [
    Gallery1, Gallery2, Gallery3, Gallery4, Gallery5,
    Gallery6, Gallery7, Gallery8, Gallery9, Gallery10,
    Gallery11, Gallery12, Gallery13, Gallery14, Gallery15,
    Gallery16, Gallery17, Gallery18, Gallery19, Gallery20,
    Gallery21, Gallery22, Gallery23, Gallery24, Gallery25
  ];

  return (
    <div id="HomeGallery">
      <div className="container">
       <div className="HomeGalleryHead">
        <h2>Kalavardhini Art Gallery</h2>
      </div>
      </div>
      <PhotoProvider>
        <div className="HomeGalleryMain">
          {galleryImages.map((image, index) => (
            <div key={index} className="HomeGalleryItem">
              <PhotoView src={image.src}>
                <div className="HomeGalleryImage">
                  <Image
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    width={350}
                    height={400}
                    placeholder="blur"
                  />
                </div>
              </PhotoView>
            </div>
          ))}
        </div>
      </PhotoProvider>
    </div>
  );
};

export default HomeGallery;
