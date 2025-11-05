// Feed component for displaying a list of video cards
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Feed.css';

// Importing thumbnail images for fallback
import thumbnail1 from '../../assets/thumbnail1.png';
import { API_KEY, value_converter } from '../../data'; // ✅ Added value_converter import

// Feed component that renders a list of video cards (dynamic + static fallback)
const Feed = ({ category = '0' }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const key = API_KEY || 'YOUR_API_KEY';
        const videoList_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=20&regionCode=US&videoCategoryId=${category}&key=${key}`;
        const res = await fetch(videoList_url);
        const json = await res.json();
        setData(json.items || []); // ✅ Safe default
      } catch (err) {
        console.error('Failed to fetch videos', err);
        setData([]); // ✅ Clear on failure
      }
    };
    fetchData();
  }, [category]);

  return (
    <div className="feed">
      {data.map((item, index) => {
        if (!item || !item.snippet) return null;

        // ✅ Handle both id types from YouTube API (object or string)
        const id = typeof item.id === 'object' && item.id.videoId ? item.id.videoId : item.id;
        const thumb = item.snippet.thumbnails?.medium?.url || thumbnail1;

        // ✅ Safely access statistics
        const views = item.statistics?.viewCount
          ? value_converter(item.statistics.viewCount)
          : 'N/A';

        return (
          <Link
            to={`/video/${category}/${id || index}`}
            className="card"
            key={id || index}
          >
            <img src={thumb} alt={item.snippet.title || 'thumbnail'} />
            <h2>{item.snippet.title || 'No title'}</h2>
            <h3>{item.snippet.channelTitle || 'Unknown channel'}</h3>

            {/* ✅ Fixed broken JSX syntax */}
            <p>{views} views • 2 days ago</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Feed;
