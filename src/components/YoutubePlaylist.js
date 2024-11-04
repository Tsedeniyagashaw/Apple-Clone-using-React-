import React, { useEffect, useState } from 'react';


const YouTubePlaylist = () => {
    const [videos, setVideos] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true); 
    const apiKey = 'AIzaSyA9lHEeF_yiw1cnxO6zi8WIWsA4pTbcb00';
    const playlistId = 'UUE_M8A5yxnLfW0KghEeajjw';
    const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=12&playlistId=${playlistId}&key=${apiKey}`;

    useEffect(() => {
        const fetchVideos = async () => {
            setLoading(true); 
            try {
                const response = await fetch(url);
                const data = await response.json();
                setVideos(data.items);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false); 
            }
        };
        fetchVideos();
    }, [url]);

    const nextVideo = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (videos.length - 2));
    };

    const prevVideo = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + (videos.length - 2)) % (videos.length - 2));
    };

    
    const videosToShow = videos.slice(currentIndex, currentIndex + 3); 

    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center my-2">
                <div
                    className="bg-dark bg-opacity-25 py-2" 
                    onClick={prevVideo}
                    disabled={currentIndex === 0}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                    </svg>
                </div>

           
                <div className="row flex-grow-1 w-100 overflow-hidden mx-1 ">
                    {loading ? (
                        <div className="d-flex justify-content-center align-items-center w-100" style={{ height: '270px' }}>
                            <div className="spinner-border text-dark" role="status">
                                <span className="visually-hidden">...</span>
                            </div>
                        </div>
                    ) : (
                        videosToShow.map((video) => (
                            <div className="col-lg-4 col-md-6 col-12 video-wrapper" key={video.id}>
                                <div className="position-relative w-100">
                                    <iframe
                                        className="w-100"
                                        height="270"
                                        src={`https://www.youtube.com/embed/${video.contentDetails.videoId}`}
                                        frameBorder="0"
                                        allowFullScreen
                                        title={video.snippet.title}
                                    />
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div 
                    className="bg-dark bg-opacity-25 py-2" 
                    onClick={nextVideo}
                    disabled={currentIndex >= videos.length - 3}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default YouTubePlaylist;