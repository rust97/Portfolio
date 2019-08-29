import "./AboutSection.css";

export default function AboutSection() {
  return (
    <section className="flex flex-col justify-center items-center about__container">
      <article className="about__me flex items-start w-11/12">
        <div className="about__me-title w-3/12">
          <h1 className="uppercase">about</h1>
        </div>
        <div className="about__me-text w-9/12">
          <p className="mb-5">
            Hello! I`am Tulaganov Rustam. Web Developer specializing in
            front-end development. I`am watching keep up-to-date with changes in
            the industry. I like to follow new technologies, best practices of
            architecture for future projects
          </p>
          <p className="mb-5">
            At the moment I work in a small company, and in my free time I take
            orders on freelance. I'd really like to go to Innopolis University
            or study abroad.
          </p>
        </div>
      </article>
    </section>
  );
}
