import React, { useState } from 'react';
import './App.css';

// 手動で用意した動画情報の配列
const videos = [
  {
    id: 'YdBuZdBj_S8?si=MiRGTgrvQVosrgWx',
    title: '1',
    url: 'https://www.youtube.com/embed/YdBuZdBj_S8?si=MiRGTgrvQVosrgWx',
  },
  {
    id: 'znwErDd95N4?si=XqbWXubOowTbdEdu',
    title: '2',
    url: 'https://www.youtube.com/embed/znwErDd95N4?si=XqbWXubOowTbdEdu',
  },
  {
    id: 'WFwJ-v1xMMU?si=1JM56WC3UbNOFjzj',
    title: '3',
    url: 'https://www.youtube.com/embed/WFwJ-v1xMMU?si=1JM56WC3UbNOFjzj',
  },
  {
    id: 'f-jfHX8sYlE?si=UvxlZReQQEkxfpSp',
    title: '4',
    url: 'https://www.youtube.com/embed/f-jfHX8sYlE?si=UvxlZReQQEkxfpSp',
  },
  {
    id: '5x3twjOjcqE?si=cuTeZza91SCWNkd',
    title: '5',
    url: 'https://www.youtube.com/embed/5x3twjOjcqE?si=cuTeZza91SCWNkd',
  },
  {
    id: 'GiuF-3oBQWE?si=VfgURRkM1ZaZA9yI',
    title: '6',
    url: 'https://www.youtube.com/embed/GiuF-3oBQWE?si=VfgURRkM1ZaZA9yI',
  },
  {
    id: 'ahp5S6eoCFc?si=jYXoBDcV2Rxyk_hh',
    title: '7',
    url: 'https://www.youtube.com/embed/ahp5S6eoCFc?si=jYXoBDcV2Rxyk_hh',
  },
  {
    id: '2LNJ3MaDpzo?si=286MIDD-3C3Eo7al',
    title: '8',
    url: 'https://www.youtube.com/embed/2LNJ3MaDpzo?si=286MIDD-3C3Eo7al',
  },
  {
    id: 'X5W1x2QspA0?si=g6NBzhNvJmpAK4he',
    title: '9',
    url: 'https://www.youtube.com/embed/X5W1x2QspA0?si=g6NBzhNvJmpAK4he',
  },
  {
    id: 'pkbbY2dA1UQ?si=WAbDfxvRE5bq_kSa',
    title: '10',
    url: 'https://www.youtube.com/embed/pkbbY2dA1UQ?si=WAbDfxvRE5bq_kSa',
  },

  // 他の動画情報も同様に追加
];

const MotivationComponent = () => {
  const [videoId, setVideoId] = useState(''); // 選択された動画のIDを保持
  const [isPlaying, setIsPlaying] = useState(false); // 動画再生中かどうかを管理

  // ランダムな動画を再生する関数
  const getRandomVideo = () => {
    // 配列内からランダムなインデックスを取得
    const randomIndex = Math.floor(Math.random() * videos.length);
    // 選択されたランダムな動画を設定
    const selectedVideo = videos[randomIndex];
    setVideoId(selectedVideo.id);
    setIsPlaying(true); // 動画再生中の状態に設定
  };

  // 動画を停止する関数
  const stopVideo = () => {
    // 動画の再生状態をリセット
    setIsPlaying(false);
    setVideoId(''); // 動画IDをクリア
  };

  return (
    <div className="motivation-container">
      <h1 className="app-title">
        <p>MOTIVATION UP</p>
      </h1>
      {isPlaying ? ( // 動画再生中の表示
        <div>
          <h2 className="video-title">
            <p>NOW PLAYING↓</p>
          </h2>
          <div className="video-container">
            <iframe
              className="fullscreen-video"
              src={videos.find((video) => video.id === videoId)?.url || ''}
              frameBorder="0"
              allowFullScreen
              title="Motivation Video"
            ></iframe>
          </div>
          <button className="another-video-button shadow_2" onClick={getRandomVideo}>
          NO  I CANT DO IT
          </button>
          <button className="stop-button shadow_2" onClick={stopVideo}>
          YES I CAN DO IT
          </button>
        </div>
      ) : ( // 動画再生前の表示
        <button className="motivation-button shadow" onClick={getRandomVideo}>
          <span>I want <strong>motivation</strong></span>
        </button>
      )}
    </div>
  );
};

export default MotivationComponent;