import { createContext, useContext, useMemo } from 'react';
import io from 'socket.io-client';

const socketContext = createContext();

const getSocket = () => {
    const socket = useContext(socketContext);
    if (!socket) {
        throw new Error('getSocket must be used within a SocketProvider');
    }
    return socket;
};

const SocketProvider = ({ children }) => {
    const socket = useMemo(() => io(`${import.meta.env.VITE_HOST_URL}`,{withCredentials:true}), []);

    return (
        <socketContext.Provider value={socket}>
            {children}
        </socketContext.Provider>
    );
};

export { getSocket, SocketProvider };
