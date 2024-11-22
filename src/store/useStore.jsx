import { create } from 'zustand';

const useStore = create((set) => ({
    activeTag: 'Все проекты', // Boshlang'ich tag
    setActiveTag: (tag) => set({ activeTag: tag }), // Tagni yangilash funksiyasi
}));

export default useStore;
