import React from 'react';
import Icons from './Icons';

const Album = (props) => {
  const { albumsArray } = props
  return (
    <section className="album-container">
      {albumsArray.map((mappedOutItem) => (
        <div className="album-card" key={mappedOutItem.id}>
          <div className="image-container">
            <img src={mappedOutItem.images[0].url} className="album-image" alt="Cover" />
            <Icons />
          </div>
          <div className="albums">
            <a href={mappedOutItem.external_urls.spotify} target="_blank" className="album-name" rel="noreferrer"> {mappedOutItem.name}</a>
          </div>
          <div className="artists"> {mappedOutItem.artists.map((mappedOutArtist) => (
            <a href={mappedOutArtist.external_urls.spotify} target="_blank" className="artist-name" key={mappedOutArtist.id} rel="noreferrer">
              <span>{mappedOutArtist.name}</span>
            </a>
          ))}
          </div>
        </div>
      ))}
    </section>
  )
}
export default Album
