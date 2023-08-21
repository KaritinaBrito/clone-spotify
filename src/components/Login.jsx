import styled from "styled-components";

export const Login = () => {
    const handleClick= () => {
        const clientId = '76971cffc776458d8ee0520010af1b53';
        const redirectUrl = 'http://localhost:5173/';
        const apiUrl = 'https://accounts.spotify.com/authorize';
        const scope = [
            "user-read-private",
            "user-read-email",
            "user-modify-playback-state",
            "user-read-playback-state",
            "user-read-currently-playing",
            "user-read-recently-played",
            "user-top-read",
            ];
            window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
                " "
            )}&response_type=token&show_dialog=true`;
    }

    return (
        <Container>
            <img src='../../src/assets/spotify-black.png' alt='spotify logo' />
            <button onClick={handleClick}>Connnect Spotify</button>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background: #1ed760;
    gap: 5rem;
    img{
        height: 20vh;        
    }
    button{
        padding: 1rem 5rem;
        border-radius: 5rem;
        border: none;
        background-color: black;
        color: #49f585;
        cursor: pointer;
    }
`;

