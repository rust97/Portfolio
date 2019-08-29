export default function Footer() {
  return (
    <footer className="w-full flex justify-around items-center">
      <p>Copyright 2019 Tulaganov R.A.</p>
      <div className="flex">
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
              <a href="#">Vkontakte</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Telegram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
