export default function Project({ img }) {
  return (
    <div className="project__wrap mb-5">
      <a href="#">
        <img src={img} />
        <div className="project__hidden">
          <a className="project__open-btn">View code</a>
        </div>
      </a>
    </div>
  );
}
