export default function Footer() {
  return (
    <footer className="w-full flex justify-around items-center">
      <p className="copyright">Copyright 2019 Tulaganov R.A.</p>
      <div className="flex footer__contacts">
        <div className="footer__list-wrap mr-16">
          <p>Contant</p>
          <ul>
            <li>rust_97@mail.ru</li>
            <li>+7 939 743 55 57</li>
            <li>Russia, Kazan</li>
          </ul>
        </div>
        <div className="footer__list-wrap">
          <p>Social</p>
          <ul>
            <li>
              <a href="https://vk.com/tulaganov_r">Vkontakte</a>
            </li>
            <li>
              <a href="https://www.instagram.com/tulaganov.r/">Instagram</a>
            </li>
            <li>
              <a href="https://t.me/tulaganov_r">Telegram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
