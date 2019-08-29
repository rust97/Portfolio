export default function HelloSection() {
  return (
    <div className="flex  w-full justify-center items-center hello__wrap">
      <div className="flex  w-full justify-center items-end pb-16">
        <span
          className="main__photo"
          style={{ background: `url('/static/images/ph.png')` }}
        />
        <div className="flex flex-col justify-end items-start ml-4">
          <h1 className="text-2xl font-semibold my-2">Hello, I`m Rustam</h1>
          <p className="text-gray-600">Front-end developer and student</p>
          <div className="main__social flex justify-start w-full my-1 mt-1">
            <span style={{ background: `url('/static/images/git.svg')` }} />
            <span style={{ background: `url('/static/images/mail.svg')` }} />
            <span style={{ background: `url('/static/images/tel.svg')` }} />
          </div>
          <div className="main__social flex justify-start w-full mt-1">
            <span style={{ background: `url('/static/images/tg.svg')` }} />
            <span style={{ background: `url('/static/images/inst.svg')` }} />
            <span style={{ background: `url('/static/images/wp.svg')` }} />
            <span style={{ background: `url('/static/images/vk.svg')` }} />
          </div>
        </div>
      </div>
    </div>
  );
}
