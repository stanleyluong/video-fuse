import { render } from '@testing-library/react';
import VideosList from '../VideoList/VideosList';

test('renders VideosList component', () => {
    const mockVideo = {
        "id": "25ff984c-e79d-460c-a75f-489e58425656",
        "source": "https://video-fuse-footage.s3.us-east-1.amazonaws.com/astronaut-in-suit-closing-container-underwater.mp4",
        "poster": "https://video-fuse-footage.s3.us-east-1.amazonaws.com/astronaut-in-suit-closing-container-underwater.jpg",
    }
    const mockVideo2 = {
        "id": "abc",
        "source": "def",
        "poster": "ghi"
    }

    const mockVideos = [mockVideo,mockVideo2];
    const mockPlaylist = [];
    const mockHandleVideo = () => {};

    render(
        <VideosList
            handleAddVideo={mockHandleVideo}
            videos={mockVideos}
            playlist={mockPlaylist}
        />
    );
    const imageElement = document.querySelector('img')
    expect(imageElement.src).toEqual('https://video-fuse-footage.s3.us-east-1.amazonaws.com/astronaut-in-suit-closing-container-underwater.jpg')
    const videoElements = document.querySelectorAll('[data-testid="poster"]')
    expect(videoElements.length).toEqual(2)   
});
