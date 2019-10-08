export default function HelloSection() {
  return (
    <div className="flex  w-full justify-center items-center hello__wrap">
      <div className=" flex  w-full justify-center items-end pb-16">
        <span
          className="main__photo"
          style={{ background: `url('/static/images/ph.png')` }}
        />
        <div className="flex flex-col justify-end items-start ml-4">
          <h1 className="text-2xl font-semibold my-2">Hello, I`m Rustam</h1>
          <p className="text-gray-600">Front-end developer and student</p>
          <div className="main__social flex justify-start w-full my-1 mt-1">
            <a href="https://github.com/rust97">
              <span style={{ background: `url('/static/images/git.svg')` }} />
            </a>
            <a href="mailto:rust_97@mail.ru">
              {" "}
              <span style={{ background: `url('/static/images/mail.svg')` }} />
            </a>
            <a href="tel:+79397435557">
              {" "}
              <span style={{ background: `url('/static/images/tel.svg')` }} />
            </a>
          </div>
          <div className="main__social flex justify-start w-full mt-1">
            <a href="https://t.me/tulaganov_r">
              {" "}
              <span style={{ background: `url('/static/images/tg.svg')` }} />
            </a>
            <a href="https://www.instagram.com/tulaganov.r/">
              {" "}
              <span style={{ background: `url('/static/images/inst.svg')` }} />
            </a>
            <a href="https://wa.me/79397435557">
              {" "}
              <span style={{ background: `url('/static/images/wp.svg')` }} />
            </a>
            <a href="https://vk.com/tulaganov_r">
              {" "}
              <span style={{ background: `url('/static/images/vk.svg')` }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
