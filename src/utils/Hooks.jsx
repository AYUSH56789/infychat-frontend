import { useEffect } from "react"
import { getSocket } from "./SocketIo"

// const socket=getSocket()
const useSocketHandler = (socket, handlers) => {
    useEffect(() => {
        Object.entries(handlers).forEach(([event, handler]) => {
            socket.on(event, handler);
        })
        return () => {
            Object.entries(handlers).forEach(([event, handler]) => {
                socket.off(event, handler);
            })
        }

    }, [socket, handlers])
}

export { useSocketHandler }