import Image from "next/image";

import classes from "./PostHeader.module.css";

const PostHeader = ({ title, image }) => {
  return (
    <header className={classes.header}>
      <h1>{title}</h1>

      <Image
        src={image}
        alt={title}
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
          maxWidth: "140px",
          borderRadius: "8px",
        }}
      />
    </header>
  );
};

export default PostHeader;
