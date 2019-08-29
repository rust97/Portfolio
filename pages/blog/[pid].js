import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import "./blog.css";

export default function Post() {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <Layout>
      <p>Post: {pid}</p>
      <div className="post__wrap">
        <div className="post__head">
          <img className="post__img" src="/static/images/blogPh.jpg" />
          <p className="post__date">June 30, 2017</p>
          <p className="post__title">
            Что поможет тебе вырасти или как найти Ментора!
          </p>
        </div>
        <div className="post__main">
          <p>
            As you may or may not know, Lindsay and I have hit a bit of a rough
            patch. Marry me. I’m afraid I just blue myself. It’s called ‘taking
            advantage.’ It’s what gets you ahead in life. That’s what it said on
            ‘Ask Jeeves.’ I don’t understand the question, and I won’t respond
            to it. He’ll want to use your yacht, and I don’t want this thing
            smelling like fish. Whoa, this guy’s straight?
          </p>
          <p>
            There’s so many poorly chosen words in that sentence. It’s a hug,
            Michael. I’m hugging you. What’s Spanish for “I know you speak
            English?” I don’t criticize you! And if you’re worried about
            criticism, sometimes a diet is the best defense. I don’t understand
            the question, and I won’t respond to it. Bad news. Andy Griffith
            turned us down. He didn’t like his trailer. Steve Holt! Not tricks,
            Michael, illusions. I’m a monster.
          </p>
          <p>
            I don’t understand the question, and I won’t respond to it. He’ll
            want to use your yacht, and I don’t want this thing smelling like
            fish. I care deeply for nature. I’m a monster. Michael!
          </p>
        </div>
      </div>
    </Layout>
  );
}
