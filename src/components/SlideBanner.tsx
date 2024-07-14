import { useState, useEffect, useCallback } from 'react';
import styled from "styled-components";

const SlideBannerView = styled.div`
    width: 90%;
    margin: 0 auto;
    height: 10rem;
    display: flex;
    position: relative;
`;

const SlideBannerItem = styled.div`
    width: calc((100% - 20px) / 3);
    height: 100%;
    border-radius: 10px;
    position: absolute;
    transition: transform 0.5s ease;

    &.type1 { background-color: #f1c40f; }
    &.type2 { background-color: #e67e22; }
    &.type3 { background-color: #e74c3c; }
`;

const totalSlides = 3;

export default function SlideBanner() {
    const [items, setItems] = useState<number[]>([]);
    const [transitioning, setTransitioning] = useState(false);
    const margin = 10;

    const updateItems = useCallback(() => {
        setItems(prev => {
            const newItems = [...prev];
            newItems.push(newItems.shift()!);
            return newItems;
        });
    }, []);

    useEffect(() => {
        setItems([...Array(totalSlides).keys()]);
    }, []);

    useEffect(() => {
        if (items.length === 0) return;

        const timer = setInterval(() => {
            setTransitioning(true);
            setTimeout(() => {
                updateItems();
                setTransitioning(false);
            }, 500); // 트랜지션 시간과 일치
        }, 3000);

        return () => clearInterval(timer);
    }, [items, updateItems]);

    const getTransform = (index: number) => {
        const baseTransform = `translateX(calc(${index * 100}% + ${margin * index}px))`;
        if (transitioning && index === 0) {
            return `${baseTransform} translateX(calc(-100% - ${margin}px))`;
        }
        return baseTransform;
    };

    return (
        <SlideBannerView>
            {items.map((item, index) => (
                <SlideBannerItem
                    key={item}
                    className={`type${item + 1}`}
                    style={{
                        transform: getTransform(index),
                        zIndex: items.length - index
                    }}
                />
            ))}
        </SlideBannerView>
    );
}