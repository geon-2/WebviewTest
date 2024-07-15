import { ReactNode, ReactElement, useState } from "react";
import styled from "styled-components";
import { useSwipeable } from "react-swipeable";

const ListContainerStyle = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 2rem;
  overflow-scroll: touch;
  overflow-x: hidden;
`;

const ListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    & > h2 {
        font-size: 2rem;
        font-weight: 600;
    }
`

const ListFilter = styled.div`
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    & > span {
        margin-right: 1rem;
    }
    & > input {
        display: none;
    }
    & > input:checked + label {
        background: #aaa;
    }
    & > label {
        margin-left: 1rem;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        border: 2px solid #999;
        cursor: pointer;
    }
`

const ListItem = styled.div`
    width: 100%;
    height: 15rem;
    margin-bottom: 1rem;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 2rem;
`

const ListItemTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > span {
        font-size: 1.5rem;
        font-weight: 400;
        height: 2rem;
        border-radius: 1rem;
        padding: 0.5rem 1rem;
        &:first-child {
            background-color: #f1c40f;
            color: #fff;
        }

        &:last-child {
            border: 1px solid #f1c40f;
            color: purple;
        }
    }
`

const ListItemContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    height: 10rem;

    & > div:first-child {
        background-color: rgb(0, 100, 200);
        border-radius: 1rem;
        width: 25%;
        height: 100%;
    }
    & > div:nth-child(2) {
        width: 50%;
        font-size: 1.5rem;
        font-weight: 200;

        & > p:first-child {
            font-size: 2rem;
            font-weight: 600;
            margin-bottom: 1rem;
        }
    }

    & > div:last-child {
        width: 20%;
        text-align: center;
        height: 8rem;
        line-height: 8rem;
        background: #aaa;
        color: #fff;
        border-radius: 1rem;
        font-size: 1.5rem;
    }
`

interface ListContainerProps {
    children?: ReactNode;
}

function ListContainer({ children }: ListContainerProps): ReactElement {

    return (
        <ListContainerStyle>
            <ListHeader>
                <h2>전체 공고목록</h2>
                <ListFilter>
                    <span>모집중인 공고만 보기</span>
                    <input type="checkbox" id="filter" />
                    <label htmlFor="filter"></label>
                </ListFilter>
            </ListHeader>
            {children}
        </ListContainerStyle>
    );
}

interface BlockItemProps {
    type: string,
    company: string,
    date: string,
}

function CardItem({ type, company, date }: BlockItemProps): ReactElement  {
    return (
        <ListItem>
            <ListItemTop>
                <span>{type}</span>
                <span>D-Day</span>
            </ListItemTop>
            <ListItemContent>
                <div></div>
                <div>
                    <p>{company}</p>
                    <p>{date}</p>
                </div>
                <div>취소</div>
            </ListItemContent>
        </ListItem>
    );
}

const SwipeableCardContainer = styled.div`
    height: 15rem;
    transition: transform 0.3s;
`

const CardDeleteButton = styled.button`
`

function SwipeableCardItem({ type, company, date }: BlockItemProps): ReactElement {
    const [swipeDistance, setSwipeDistance] = useState<number>(0);

    const handlers = useSwipeable({
        onSwiped: (eventData) => {
            setSwipeDistance(0);
        },
        onSwiping: (eventData) => {
            if (eventData.dir == 'Left' || eventData.dir == 'Right') {
                setSwipeDistance(eventData.absX * (eventData.dir == 'Left' ? -1 : 1));
            }
        },
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    return (
        <SwipeableCardContainer
            {...handlers}
            style={{ transform: `translateX(${swipeDistance}px)` }}
        >
            <CardItem type={type} company={company} date={date} />
            <CardDeleteButton onClick={() => console.log('Delete')}>삭제</CardDeleteButton>
        </SwipeableCardContainer>
    )
}

export { ListContainer, CardItem, SwipeableCardItem };