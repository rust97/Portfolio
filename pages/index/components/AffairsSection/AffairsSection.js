export default function AffairsSection({ title, dev, devText }) {
  return (
    <section className="flex flex-col justify-center items-center affairs__container">
      <article className="affairs__me flex items-start w-11/12">
        <div className="affairs__me-title w-3/12">
          <h1 className="uppercase">{title}</h1>
        </div>
        <div className="affairs__me-text w-9/12">
          <h3>{dev}</h3>
          <p className="mb-5">{devText}</p>
        </div>
      </article>
    </section>
  );
}
