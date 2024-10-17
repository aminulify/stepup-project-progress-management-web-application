import { create } from 'zustand';

const useStore = create((set) => ({
    showMenu: false,
    setShowMenu: () => set((state) => ({ showMenu: !state.showMenu })),
}))

export default useStore;