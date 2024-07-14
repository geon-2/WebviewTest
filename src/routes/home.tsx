import { useState, useEffect } from "react";
import { ListContainer, BlockItem } from "../components/ListComponents";

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
        <ListContainer>
            {recruitList.map((item, index) => (
                <BlockItem
                    key={index}
                    type={item.type}
                    company={item.company}
                    date={item.date}
                />
            
            ))}
        </ListContainer>
    );
}

export default Home;