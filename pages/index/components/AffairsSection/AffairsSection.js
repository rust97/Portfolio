export default function AffairsSection() {
  return (
    <section className="flex flex-col justify-center items-center affairs__container">
      <article className="affairs__me flex items-start w-11/12">
        <div className="affairs__me-title w-3/12">
          <h1 className="uppercase">what i do</h1>
        </div>
        <div className="affairs__me-text w-9/12">
          <h3>Development</h3>
          <p className="mb-5">
            I can develop applications on react, redux, effector, vue, vuex,
            html, css, sass, javascript, webpack, Bootstrap, Tailwind, git Love
            React GraphQl
          </p>
          <h3 className="mt-10">Design</h3>
          <p className="mb-5">
            I don`t do design, I work with a friend who is a good designer and
            makes designs for my projects =)
          </p>
        </div>
      </article>
    </section>
  );
}
