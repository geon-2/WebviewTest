import { useState, useEffect } from "react";
import { ListContainer, SwipeableCardItem } from "../components/ListComponents";
import MetaTag from "../components/MetaTag";

interface RecruitItem {
    type: string;
    company: string;
    date: string;
}

function Home() {
    const [recruitList, setRecruitList] = useState<RecruitItem[]>([]);

    useEffect(() => {
        setRecruitList([
            {
                type: "채용",
                company: "우아한형제들",
                date: "2021.08.31",
            },
            {
                type: "채용",
                company: "우아한형제들",
                date: "2021.08.31",
            },
            {
                type: "채용",
                company: "우아한형제들",
                date: "2021.08.31",
            },
            {
                type: "채용",
                company: "우아한형제들",
                date: "2021.08.31",
            },
            {
                type: "채용",
                company: "우아한형제들",
                date: "2021.08.31",
            },
            {
                type: "채용",
                company: "우아한형제들",
                date: "2021.08.31",
            },
        ]);
    })

    return (
        <>
            <MetaTag />
            <ListContainer>
                {recruitList.map((item, index) => (
                    <SwipeableCardItem
                        key={index}
                        type={item.type}
                        company={item.company}
                        date={item.date}
                    />
                ))}
            </ListContainer>
        </>
    );
}

export default Home;