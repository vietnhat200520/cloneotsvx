// src/component/common/Banner.jsx

import React, { useState, useEffect, useCallback } from 'react';
import { Box } from '@mui/material';
import './Banner.css';

// --- CSS IN JAVASCRIPT (Styled Components/Box) ---
// Chuyển CSS gốc sang Mui Styled Components

// Styles are moved to Banner.css; use plain Box and img with classes


// --- COMPONENT CHÍNH ---

const INTERVAL = 4000;
const TRANS_MS = 100;
const FLASH_MS = 100;

const Banner = ({ slidesData = [] }) => {
    // Current Index của slide đang active
    const [current, setCurrent] = useState(0); 
    // State để theo dõi class "top" và "flash" cho mỗi slide
    const [slideClasses, setSlideClasses] = useState(slidesData.map(() => ''));

    const numSlides = slidesData.length;

    // Logic chuyển slide
    const nextSlide = useCallback(() => {
        if (numSlides === 0) return;

        const next = (current + 1) % numSlides;

        // 1. Chuẩn bị slide tiếp theo (next) và hiện tại (current)
        setSlideClasses(prevClasses => {
            const newClasses = [...prevClasses];
            // Đặt nextSlide lên top và visible (tương đương .top)
            newClasses[next] = 'top';
            return newClasses;
        });

        // 2. Kích hoạt hiệu ứng flash cho slide hiện tại (curSlide.classList.add("flash"))
        setSlideClasses(prevClasses => {
            const newClasses = [...prevClasses];
            newClasses[current] = 'flash';
            return newClasses;
        });

        // 3. Xóa flash sau FLASH_MS
        setTimeout(() => {
            setSlideClasses(prevClasses => {
                const newClasses = [...prevClasses];
                newClasses[current] = ''; // curSlide.classList.remove("flash")
                return newClasses;
            });
        }, FLASH_MS + 20);

        // 4. Kích hoạt chuyển đổi (nextSlide.classList.add("active"))
        // Ta sử dụng requestAnimationFrame để đảm bảo Mui cập nhật DOM trước khi transition
        requestAnimationFrame(() => {
            setSlideClasses(prevClasses => {
                const newClasses = [...prevClasses];
                newClasses[next] += ' active'; // nextSlide.classList.add("active")
                return newClasses;
            });
        });
        
        // 5. Dọn dẹp slide cũ (curSlide)
        setTimeout(() => {
            setSlideClasses(prevClasses => {
                const newClasses = [...prevClasses];
                newClasses[current] = ''; // curSlide.classList.remove("active") và ẩn
                return newClasses;
            });
        }, 20);

        // 6. Hoàn tất transition và dọn dẹp (sau TRANS_MS)
        setTimeout(() => {
            setSlideClasses(prevClasses => {
                const newClasses = slidesData.map(() => '');
                // Chỉ giữ lại trạng thái active cho slide mới
                newClasses[next] = 'active'; 
                return newClasses;
            });
            setCurrent(next);
        }, TRANS_MS + 40);

    }, [current, numSlides, slidesData.length]);


    // 7. Thiết lập AutoPlay (setInterval)
    useEffect(() => {
        if (numSlides === 0) return;

        const timer = setInterval(nextSlide, INTERVAL);

        return () => clearInterval(timer);
    }, [nextSlide, numSlides]);

    // Khởi tạo trạng thái ban đầu (slide đầu tiên active)
    useEffect(() => {
        if (numSlides > 0 && !slideClasses.includes('active')) {
            setSlideClasses(prevClasses => {
                const newClasses = [...prevClasses];
                newClasses[0] = 'active';
                return newClasses;
            });
        }
    }, [numSlides, slideClasses]);


    return (
        <section>
            <Box className="banner">
                {slidesData.map((slide, index) => (
                    <img
                        key={slide.id}
                        src={slide.link}
                        alt={slide.alt}
                        style={{ 
                            transform: slideClasses[index].includes('active') || slideClasses[index].includes('top') 
                                ? 'translateX(0)' 
                                : 'translateX(100%)',
                            visibility: slideClasses[index].includes('active') || slideClasses[index].includes('top')
                                ? 'visible' 
                                : 'hidden',
                        }}
                        className={`slide ${slideClasses[index]}`}
                    />
                ))}
            </Box>
        </section>
    );
};

export default Banner;