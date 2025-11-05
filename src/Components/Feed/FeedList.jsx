// List-style Feed component (alternative to grid Feed)
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './FeedList.css';

import thumbnail1 from '../../assets/thumbnail1.png';
import jack from '../../assets/profile_icon.png';
import { API_KEY, value_converter } from '../../data';

const FeedList = ({ category = '0' }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const key = API_KEY || 'YOUR_API_KEY';
        const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=20&regionCode=US&videoCategoryId=${category}&key=${key}`;
        const res = await fetch(url);
        const json = await res.json();
        setVideos(json.items || []);
      } catch (err) {
        setVideos([]);
      }
    };
    fetchData();
  }, [category]);

  return (
    <div className="feed-list">
      {videos.map((item, index) => {
        if (!item || !item.snippet) return null;
        const id = typeof item.id === 'object' && item.id.videoId ? item.id.videoId : item.id;
        const thumb = item.snippet.thumbnails?.medium?.url || thumbnail1;
        const views = item.statistics?.viewCount ? value_converter(item.statistics.viewCount) : 'N/A';

        return (
          <Link to={`/video/${category}/${id || index}`} className="list-card" key={id || index}>
            <img className="list-thumb" src={thumb} alt={item.snippet.title || 'thumbnail'} />
            <div className="list-meta">
              <h2 className="list-title">{item.snippet.title || 'No title'}</h2>
              <div className="list-channel">
                <img src={jack} alt="channel" />
                <span>{item.snippet.channelTitle || 'Unknown channel'}</span>
              </div>
              <p className="list-sub">{views} views • 2 days ago</p>
              <p className="list-desc">{item.snippet.description?.slice(0, 120) || ''}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default FeedList;


