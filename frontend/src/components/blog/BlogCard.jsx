import React from 'react';
import { ArrowUpRight, Clock } from 'lucide-react';

export const BlogCard = ({ blog, index = 0, onClick }) => {
  const heights = [270, 360, 300, 390, 315, 340];

  return (
    <article
      className="pin-card"
      onClick={() => onClick?.(blog)}
    >
      <div
        className="pin-image"
        style={{
          height: `${heights[index % heights.length]}px`,
        }}
      >
        <img
          src={blog.coverImage}
          alt={blog.title}
        />

        <div className="pin-overlay" />

        <div className="pin-category">
          {blog.category}
        </div>

        <div className="pin-arrow">
          <ArrowUpRight size={18} />
        </div>

        <div className="pin-title">
          <h3>{blog.title}</h3>
        </div>
      </div>

      <div className="pin-content">

        <p>
          {blog.summary}
        </p>

        <div className="pin-footer">

          <div className="journal-label">
            <span className="journal-dot" />
            DEV INFINITY JOURNAL
          </div>

          <div className="pin-time">
            <Clock size={12} />
            {blog.readTime}
          </div>

        </div>

      </div>

      <style>{`

        .pin-card {
          position: relative;
          overflow: hidden;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 18px;
          cursor: pointer;

          transition:
            transform .35s cubic-bezier(.2,.8,.2,1),
            box-shadow .35s ease,
            border-color .35s ease;
        }

        .pin-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 20px 50px rgba(0,0,0,.12);
          border-color: var(--border-hover);
        }

        .pin-image {
          position: relative;
          overflow: hidden;
        }

        .pin-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;

          transition:
            transform .65s cubic-bezier(.2,.8,.2,1);
        }

        .pin-card:hover .pin-image img {
          transform: scale(1.07);
        }

        .pin-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              to bottom,
              rgba(0,0,0,.04) 25%,
              rgba(0,0,0,.76) 100%
            );
        }

        .pin-category {
          position: absolute;
          top: 13px;
          left: 13px;

          padding: 7px 11px;

          border-radius: 999px;

          background: rgba(255,255,255,.92);
          backdrop-filter: blur(12px);

          color: #111;

          font-size: 9px;
          font-weight: 850;
          letter-spacing: .04em;
        }

        .pin-arrow {
          position: absolute;
          top: 13px;
          right: 13px;

          width: 38px;
          height: 38px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: rgba(255,255,255,.92);
          color: #111;

          opacity: 0;
          transform: translateY(-8px);

          transition:
            opacity .3s ease,
            transform .3s ease;
        }

        .pin-card:hover .pin-arrow {
          opacity: 1;
          transform: translateY(0);
        }

        .pin-title {
          position: absolute;
          left: 17px;
          right: 17px;
          bottom: 17px;
        }

        .pin-title h3 {
          margin: 0;

          color: white;

          font-size: clamp(1.05rem, 2vw, 1.45rem);
          line-height: 1.05;

          font-weight: 850;
          letter-spacing: -.03em;

          text-shadow:
            0 2px 15px rgba(0,0,0,.4);
        }

        .pin-content {
          padding: 16px;
        }

        .pin-content p {
          margin: 0 0 16px;

          color: var(--text-secondary);

          font-size: 12px;
          line-height: 1.55;

          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;

          overflow: hidden;
        }

        .pin-footer {
          padding-top: 12px;

          border-top:
            1px solid var(--border-color);

          display: flex;
          justify-content: space-between;
          align-items: center;

          gap: 8px;
        }

        .journal-label {
          display: flex;
          align-items: center;
          gap: 6px;

          color: var(--text-muted);

          font-size: 8px;
          font-weight: 850;

          letter-spacing: .1em;
        }

        .journal-dot {
          width: 5px;
          height: 5px;

          border-radius: 50%;

          background: var(--accent);
        }

        .pin-time {
          display: flex;
          align-items: center;
          gap: 4px;

          color: var(--text-muted);

          font-size: 9px;
          white-space: nowrap;
        }

      `}</style>
    </article>
  );
};