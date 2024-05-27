import { title } from "process"
import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    title:"The Weeknd Playlist | 2 Hour Playlist",
    image:"../video.jpg",
    author:"Abel Tesfaye",
    timeStamp:"4 years ago",
    views:"24M views"
},

{
    title:"The Weeknd Playlist | 2 Hour Playlist",
    image:"../video.jpg",
    author:"Abel Tesfaye",
    timeStamp:"4 years ago",
    views:"24M views"
},

{
    title:"The Weeknd Playlist | 2 Hour Playlist",
    image:"../video.jpg",
    author:"Abel Tesfaye",
    timeStamp:"4 years ago",
    views:"24M views"
},

{
    title:"The Weeknd Playlist | 2 Hour Playlist",
    image:"../video.jpg",
    author:"Abel Tesfaye",
    timeStamp:"4 years ago",
    views:"24M views"
},
{
    title:"The Weeknd Playlist | 2 Hour Playlist",
    image:"../video.jpg",
    author:"Abel Tesfaye",
    timeStamp:"4 years ago",
    views:"24M views"
},
{
    title:"The Weeknd Playlist | 2 Hour Playlist",
    image:"../video.jpg",
    author:"Abel Tesfaye",
    timeStamp:"4 years ago",
    views:"24M views"
},
{
    title:"The Weeknd Playlist | 2 Hour Playlist",
    image:"../video.jpg",
    author:"Abel Tesfaye",
    timeStamp:"4 years ago",
    views:"24M views"
},
{
    title:"The Weeknd Playlist | 2 Hour Playlist",
    image:"../video.jpg",
    author:"Abel Tesfaye",
    timeStamp:"4 years ago",
    views:"24M views"
},

]


export const VideoGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {VIDEOS.map(video => <div>
    <VideoCard 
    title={video.title}
    image={video.image}
    author={video.author}
    timeStamp={video.timeStamp}
    views={"24M views"}></VideoCard>
            </div>)}
        </div>
    )
}