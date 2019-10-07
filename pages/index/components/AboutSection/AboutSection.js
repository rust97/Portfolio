import "./AboutSection.css";

export default function AboutSection({ title, intro, info }) {
  return (
    <section className="flex flex-col justify-center items-center about__container">
      <article className="about__me flex items-start w-11/12">
        <div className="about__me-title w-3/12">
          <h1 className="uppercase">{title}</h1>
        </div>
        <div className="about__me-text w-9/12">
          <p className="mb-5">{intro}</p>
          <p className="mb-5">{info}</p>
        </div>
      </article>
    </section>
  );
}
