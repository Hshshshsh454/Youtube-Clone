import React, { useState, useEffect } from 'react';
import './PlayVideo.css';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/profile_icon.png';
import { API_KEY, value_converter } from '../../data';
import moment from 'moment';

const PlayVideo = ({ videoId }) => {
  const [apiData, setApiData] = useState(null);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchVideoData = async () => {
      // fetch video data from youtube api
      try {
        const videoDetailsUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`;
        const res = await fetch(videoDetailsUrl);
        const data = await res.json();

        const channelDetailsUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${data.items[0].snippet.channelId}&key=${API_KEY}`;
        const channelRes = await fetch(channelDetailsUrl);
        const channelData = await channelRes.json();
        console.log(channelData); // Temporary log to use channelData

        if (data.items && data.items.length > 0) {
          setApiData(data.items[0]);
        }
      } catch (error) {
        console.error('Error fetching video data:', error);
      }
    };

    fetchVideoData();
  }, [videoId]);

  return (
    <div className="PlayVideo">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="YouTube video player"
        allowFullScreen
        frameBorder="0"
      ></iframe>

      <h3>{apiData ? apiData.snippet.title : 'Loading title...'}</h3>

      <div className="play-video-info">
        {apiData ? (
          <p>
            {value_converter(apiData.statistics.viewCount)} views &bull;{' '}
            {moment(apiData.snippet.publishedAt).fromNow()}
          </p>
        ) : (
          <p>Loading video info...</p>
        )}

        <div className="video-buttons">
          <button>
            <img src={like} alt="like" />{' '}
            {apiData ? value_converter(apiData.statistics.likeCount) : '0'}
          </button>
          <button>
            <img src={dislike} alt="dislike" /> Dislike
          </button>
          <button>
            <img src={share} alt="share" /> Share
          </button>
          <button>
            <img src={save} alt="save" /> Save
          </button>
        </div>
      </div>

      <hr />

      <div className="publisher">
        <img src={jack} alt="publisher" />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : 'Channel Name'}</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>

      <div className="vid-description">
        <p>
          {apiData ? apiData.snippet.description.slice(0, 300) + '...' : 'Loading description...'}
        </p>
      </div>

      <hr />

      <h4>{130 + comments.length} Comments</h4>

      <div className="comment-box">
        <img src={jack} alt="user profile" />
        <input
          type="text"
          placeholder="Add a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const trimmed = commentText.trim();
              if (!trimmed) return;
              setComments([
                {
                  id: Date.now(),
                  author: 'You',
                  avatar: jack,
                  text: trimmed,
                  time: 'Just now',
                },
                ...comments,
              ]);
              setCommentText('');
            }
          }}
        />
      </div>

      <div className="comments-list">
        {comments.map((c) => (
          <div className="comment" key={c.id}>
            <img src={c.avatar} alt="comment user" />
            <div>
              <h3>
                {c.author} <span>{c.time}</span>
              </h3>
              <p>{c.text}</p>
              <div className="comment-actions">
                <img src={like} alt="like" />
                <span>0</span>
                <img src={dislike} alt="dislike" />
              </div>
            </div>
          </div>
        ))}
        <div className="comment">
          <img src={jack} alt="comment user" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>
              A global computer network providing a variety of information and
              communication facilities.
            </p>
            <div className="comment-actions">
              <img src={like} alt="like" />
              <span>244</span>
              <img src={dislike} alt="dislike" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
