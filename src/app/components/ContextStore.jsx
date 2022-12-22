import { useState } from "react";
import { createContext } from "react";
import { EncryptStorage } from "encrypt-storage";

export const EpisodeContext = createContext();
export const ChatContext    = createContext();

export default function ContextStore({children}){
    const [episode, setEpisode] = useState('');
    const [chat, setChat]       = useState([]);
    
    return (
        <EpisodeContext.Provider value={[episode, setEpisode]}>
            {children}
        </EpisodeContext.Provider>
    )
}
