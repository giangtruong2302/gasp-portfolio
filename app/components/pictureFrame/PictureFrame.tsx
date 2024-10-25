import React from "react";
import styles from "./pictureFrame.module.scss";
import Image from "next/image";
// import photo from "@/public/images/testImage.webp";
import photo from "@/public/images/Giang1.jpeg";
function PictureFrame() {
  return (
    <div className={styles.container}>
      <Image src={photo} className={styles.innerFrame} alt="my picture" />

      <div className={styles.about}>SOFTWARE DEVELOPER</div>
      <div className={styles.about}>
        <span>Duong Truong Giang</span>
      </div>
    </div>
  );
}

export default PictureFrame;
