export default function ContactSection() {
  return (
    <section className="flex flex-col justify-center items-center about__container">
      <article className="about__me flex items-start w-11/12">
        <div className="about__me-title w-3/12">
          <h1 className="uppercase">contact</h1>
        </div>
        <div className="about__me-text w-9/12">
          <p className="mb-5">
            You can send me an email at{" "}
            <a href="emailto:rust_97@mail.ru">rust_97@mail.ru</a>.
          </p>
          <p className="mb-5">
            Or talk to me on <a>Telegram</a> and <a>Instagram</a>.
          </p>
        </div>
      </article>
    </section>
  );
}
