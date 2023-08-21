import styled from 'styled-components';
import {IoLibrary} from 'react-icons/io5';
import { MdHomeFilled, MdSearch} from 'react-icons/md';
import Playlists from './Playlists';

export const Sidebar = () => {
    return (
        <Container>
            <div className='top-links'>
                <div className="logo">
                <img src='../../src/assets/spotify-white.png' alt='spotify logo' />
                </div>
                <ul>
                <li>
                    <MdHomeFilled/>
                    <span>Home</span>
                </li>
                <li>
                    <MdSearch/>
                    <span>Search</span>
                </li>
                <li>
                    <IoLibrary/>
                    <span>Your Librery</span>
                </li>
            </ul>
            </div>
            <Playlists/>
        </Container>
    )
};

const Container = styled.div`
    background-color: black;
    color: #b3b3b3;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100;
    .top-links{
        display: flex;
        flex-direction: column;
        .logo{
            text-align: center;
            margin: 1rem 0;
            img{
                max-inline-size: 80%;
                block-size: auto;
                margin-top: -50px;
            }
        }   
        ul{
            list-style-type: none;
            display: flex;
            flex-direction: column;
            padding: 1rem;
            gap: 1rem;
            li{
                display: flex;
                gap: 1rem;
                cursor: pointer;
                transition: 0.3s ease-in-out;
                &:hover{
                    color: white;
                }
            }
        }     
    }
`;