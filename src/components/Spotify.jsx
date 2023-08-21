import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Body } from "./Body";
import { useStateProvider } from "../utils/StateProvider";
import axios from 'axios';
import { reducerCases } from "../utils/Constants";

const Spotify = () => {
    const [{ token}, dispatch] = useStateProvider();
    const bodyRef = useRef();
    const [navBackground, setNavBackground] = useState(false);
    const [headerBackground, setHeaderBackground] = useState(false);

    const bodyScrolled= () => {
        bodyRef.current.scrollTop >= 30 ? setNavBackground(true) : setNavBackground(false);
        bodyRef.current.scrollTop >= 268 ? setHeaderBackground(true) : setHeaderBackground(false);

    }

    useEffect(()=>{
        const getUserInfo = async () => {
            const { data } = await axios.get('https://api.spotify.com/v1/me', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const userInfo = {
                userId: data.id,
                userName: data.display_name,
            };
            dispatch({type: reducerCases.SET_USER, userInfo});
        };
        getUserInfo();
    }, [dispatch, token])
    return (
        <Container>
            <div className="spotify__body">
                <Sidebar/>
                <div className="body" ref={bodyRef} onScroll={bodyScrolled}>
                    <Navbar navBackground={navBackground}/>
                    <div className="body__contents">
                        <Body headerBackground={headerBackground}/>
                    </div>
                </div>
            </div>
            <div className="spotify__footer">
                <Footer/>
            </div>
        </Container>
    )
}

const Container = styled.div`
    max-height: 100vh;
    max-width: 100vw;
    overflow: hidden;
    display:grid;
    grid-template-rows: 85vh 15vh;
    .spotify__body{
        display:grid;
        grid-template-columns: 0.5fr 5fr;
        height: 100%;
        width: 100%;
        background: linear-gradient(transparent, rgba(0,0,0,1));
        background-color: #1ed760;
        .body{
        height: 100%;
        width: 100%;
        overflow: auto;
        &::-webkit-scrollbar {
        width: 0.7rem;
        &-thumb {
            background-color: rgba(255, 255, 255, 0.6);
        }
        }
        }   
    }   
`;

export default Spotify;
