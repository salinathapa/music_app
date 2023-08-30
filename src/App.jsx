import React, { useState } from 'react'
import './App.css'

function TaeyeonIntro() {
  return (
    <div className="intro">
      <div className="intro-image">
        <img className="logo" src="./taeyeon.jpg" alt='Taeyeon'/>
      </div>
      <div className="intro-info">
        <h1>Taeyeon Kim</h1>
        <p>Born: March 9, 1989</p>
        <p>Age: 34</p>
        <p>From: South Korea</p>
        <p>Occupation: Singer</p>
        <p>Genres: K-Pop | Pop Rock | R & B | Soul</p>
        <p>Member of: Girls' Generation/SNSD</p>
      </div>
    </div>
  );
}

function AlbumList() {
  
  const albums = [
    { name: "I", releaseDate: "October 7, 2015"},
    { name: "Why", releaseDate: "June 28, 2016"},
    { name: "My Voice", releaseDate: "February 28, 2017"},
    { name: "This Christmas: Winter is Coming", releaseDate: "December 12, 2017"},
    { name: "Something New", releaseDate: "June 18, 2018"},
    { name: "Purpose", releaseDate: "October 28, 2019"},
    { name: "What Do I Call You", releaseDate: "December 15, 2020"},
    { name: "INVU", releaseDate: "February 14, 2022"}
  ]
  
  const [likedAlbums, setLikedAlbums] = useState([])
  const [albumLikes, setAlbumLikes] = useState(new Array(albums.length).fill(0))

  const toggleLike = (albumIndex) => {
    const updatedLikes = [...albumLikes];
    updatedLikes[albumIndex] = likedAlbums.includes(albumIndex)
      ? updatedLikes[albumIndex] - 1
      : updatedLikes[albumIndex] + 1;

    setAlbumLikes(updatedLikes);

    if (likedAlbums.includes(albumIndex)) {
      setLikedAlbums(likedAlbums.filter((index) => index !== albumIndex));
    } else {
      setLikedAlbums([...likedAlbums, albumIndex]);
    }
  };

  return (
    <div>
      {albums.map((album, index) => (
        <div key={index} className="album-card">
          <h3>{album.name}</h3>
          <p>Release Date: {album.releaseDate}</p>
          <p>Likes: {albumLikes[index]}</p>
          <button
            onClick={() => toggleLike(index)}
            className={likedAlbums.includes(index) ? 'liked' : ''}
          >
            {likedAlbums.includes(index) ? 'Liked' : 'Like'}
          </button>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <TaeyeonIntro />
      <div className="album-list">
        <AlbumList />
      </div>
    </div>
  );
}

export default App