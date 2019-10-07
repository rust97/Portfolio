import { useState } from "react";

export default function Project({ item }) {
  const [fullHeight, setHeight] = useState(360);
  const demo = item.link.content[0].content[1].content[0].value;
  const demoLink = item.link.content[0].content[1].data.uri;

  return (
    <div className="project__wrap mb-5">
      <a href="#">
        <img
          src={item.preview.fields.file.url}
          style={{ top: `-${fullHeight - 360}px`, width: "360px" }}
          onMouseEnter={e => setHeight(e.target.clientHeight)}
          onMouseLeave={() => setHeight(265)}
        />
        <div className="project__hidden">
          <a href={demoLink} className="project__open-btn">
            {demo}
          </a>
          {item.link.content.length > 1 ? (
            <a
              href={item.link.content[1].content[1].data.uri}
              className="project__open-btn"
            >
              {item.link.content[1].content[1].content[0].value}
            </a>
          ) : (
            ""
          )}
        </div>
      </a>
    </div>
  );
}
