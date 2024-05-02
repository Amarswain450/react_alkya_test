import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'

const useStore = create(
    persist(
        devtools(
            (set, get) => ({
                emailData: "",
                token: "",
                setEmailData: (data) => set(state => ({ emailData: data })),
                setToken: (data) => set(() => ({token: data}))
            })
        ),
        {
            name: 'my-app-state',
            getStorage: () => localStorage,
        }
    )
);

export default useStore;
