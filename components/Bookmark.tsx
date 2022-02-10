import { useState } from 'react'
import styled from 'styled-components'

export default function BookmarkComponent() {
    const [isAddBookmark, setIsAddBookmark] = useState(true)

    return (
        <Button onClick={() => setIsAddBookmark(!isAddBookmark)}>
            <BookmarkIcon src="/icons/bookmark.svg" alt="bookmark" />
            {isAddBookmark ? 'ADD BOOKMARK' : 'REMOVE BOOKMARK'}
        </Button>
    )
}

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 13px;
    line-height: 22px;
    padding: 5px 12px 4px;
    border: none;
    outline: none;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.06);
    border-radius: 4px;
`

const BookmarkIcon = styled.img`
    /* position: absolute; */
    height: 18px;
    width: 18px;
    margin-right: 6px;
`
