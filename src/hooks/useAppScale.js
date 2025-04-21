import { useEffect } from "react";

const useAppScale = () => {
    useEffect(() => {
        const handleResize = () => {
            const baseWidth = 1920;
            const baseHeight = 1080;
            const minWidth = 1050;
            const minHeight = 768;

            const scale = window.innerWidth < minWidth
              ? 1
              : Math.min(
                  window.innerWidth / baseWidth, 
                  window.innerHeight / baseHeight
                );
                
            const doc = document.documentElement;
            doc.style.setProperty('--app-scale', `${scale}`);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
};

export default useAppScale;