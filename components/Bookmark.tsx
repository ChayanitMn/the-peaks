import { useEffect, useState } from 'react'
import styled from 'styled-components'

interface Props {
    isAdd: boolean
}

export default function BookmarkComponent() {
    const [isAddBookmark, setIsAddBookmark] = useState(false)
    const [isButtonClicked, setIsButtonClicked] = useState(false)

    useEffect(() => {
        renderTabMessage()
    }, [isAddBookmark])

    const onClickButton = () => {
        setIsAddBookmark(!isAddBookmark)
        setIsButtonClicked(true)
    }

    const renderTabMessage = () => {
        if (isButtonClicked) {
            if (isAddBookmark) {
                return (
                    <TabMessage isAdd={isAddBookmark}>
                        <BookmarkIcon
                            src="/icons/bookmark.svg"
                            alt="bookmark"
                        />
                        saved to bookmarks
                    </TabMessage>
                )
            } else {
                return (
                    <TabMessage isAdd={isAddBookmark}>
                        <BookmarkIcon
                            src="/icons/bookmark-off.svg"
                            alt="bookmark"
                        />
                        removed from bookmarks
                    </TabMessage>
                )
            }
        }
    }

    return (
        <>
            <Button onClick={() => onClickButton()}>
                <BookmarkIcon src="/icons/bookmark.svg" alt="bookmark" />
                {isAddBookmark ? 'REMOVE BOOKMARK' : 'ADD BOOKMARK'}
            </Button>
            {renderTabMessage()}
        </>
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
    height: 18px;
    width: 18px;
    margin-right: 6px;
`
const TabMessage = styled.div<Props>`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 20;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 32px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #fff;
    text-transform: uppercase;
    background-color: ${(props) => (props.isAdd ? '#388E3C' : '#D32F2F')};
`
