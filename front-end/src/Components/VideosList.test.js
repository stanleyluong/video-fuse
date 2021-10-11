import { render, screen } from '@testing-library/react';
import VideosList from './VideosList';

test('renders VideosList component', () => {
    const mockVideo = {
        "id": "25ff984c-e79d-460c-a75f-489e58425656",
        "source": "https://video-fuse-footage.s3.us-east-1.amazonaws.com/astronaut-in-suit-closing-container-underwater.mp4",
        "poster": "https://video-fuse-footage.s3.us-east-1.amazonaws.com/astronaut-in-suit-closing-container-underwater.jpg",
    }

    const mockVideos = [mockVideo];
    const mockPlaylist = [];
    const mockHandleVideo = () => {};

    render(
        <VideosList
            handleAddVideo={mockHandleVideo}
            videos={mockVideos}
            playlist={mockPlaylist}
        />
    );
    const titleElement = screen.getByText(/Video Fuse/i);
    expect(titleElement).toBeInTheDocument();
});
