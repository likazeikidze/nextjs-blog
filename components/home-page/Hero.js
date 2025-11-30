import Image from "next/image";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/lika.jpg"
          alt="An image showing Lika"
          width={300}
          height={300}
        />
      </div>

      <h1>Hi, I'm Lika</h1>
      <p>
        I create modern full-stack applications with React and Next.js, focusing
        on performance, usability, and real-world impact.
      </p>
    </section>
  );
};

export default Hero;
