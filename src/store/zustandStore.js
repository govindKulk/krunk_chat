import { create } from "zustand";
import { chatData } from "../data";

export const useChatStore = create((set) => ({
    chatData: chatData,
    clientRole: 'user',
    addChat: (chat) => set((state) => {
  
        return ({ chatData: [...state.chatData, {id: state.chatData.length, ...chat}] })
    }),
    setClientRole: (role) => set(() => ({clientRole: role}))
}))