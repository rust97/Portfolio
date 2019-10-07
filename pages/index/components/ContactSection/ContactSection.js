export default function ContactSection({ title, email, otherContacts }) {
  return (
    <section className="flex flex-col justify-center items-center about__container">
      <article className="about__me flex items-start w-11/12">
        <div className="about__me-title w-3/12">
          <h1 className="uppercase">{title}</h1>
        </div>
        <div className="about__me-text w-9/12">
          <p className="mb-5">
            {email[0].value}
            <a href={email[1].data.uri}>{email[1].content[0].value}</a>.
          </p>
          <p className="mb-5">
            {otherContacts[0].value}{" "}
            <a href={otherContacts[1].data.uri}>
              {otherContacts[1].content[0].value}
            </a>{" "}
            {otherContacts[2].value}{" "}
            <a href={otherContacts[3].data.uri}>
              {otherContacts[3].content[0].value}
            </a>
            .
          </p>
        </div>
      </article>
    </section>
  );
}
