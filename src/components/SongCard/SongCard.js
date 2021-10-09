import './SongCard.scss'
import React from "react";
import { Link } from "react-router-dom";
import spotifyLogo from '../../../src/assets/spotify.png'

function SongCard(props) {
    const spotifyUrl = `https://open.spotify.com/track/${props.song.spotifyId}`

    return (
        <div id={'songCard'} className={'relative bg-secondary p-4 w-full'}>
            <span className={'text-primary block'}>Title: <b>{props.song.name}</b></span>
            <span className={'text-primary block'}>Album: <b>{props.song.album}</b></span>
            {props.showArtist && <span className={'text-primary block'}>Artist: <Link className={'italic'} to={`/artist/${encodeURIComponent(props.song.artist)}`}><strong>{props.song.artist}</strong></Link></span> }
            <span className={'text-primary block'}>Genre: <Link className={'italic'} to={`/genre/${encodeURIComponent(props.song.genre)}`}><strong>{props.song.genre}</strong></Link></span>
            <span className={'text-primary block'}>Year: <b>{props.song.year}</b></span>
            <a className={'float-right mobile:absolute top-0 right-0 transform transition hover:scale-105'} href={spotifyUrl} target={'_blank'} rel={'noreferrer'}><img alt={'Listen on Spotify!'} src={spotifyLogo} width={'120px'}/></a>
        </div>
    );
}

export default SongCard;
