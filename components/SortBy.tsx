import { useState } from 'react'
import styled from 'styled-components'

type Props = {
    sortBy: string
    setSortBy: (val: string) => void
}

export default function SortByComponent({ sortBy, setSortBy }: Props) {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState(null)

    const toggling = () => setIsOpen(!isOpen)

    const onOptionClicked = (value: any, index: number) => () => {
        setSelectedOption(value)
        setIsOpen(false)
        index == 0 ? setSortBy('newest') : setSortBy('oldest')
    }

    const options = ['Newest first', 'Oldest first']

    return (
        <Container>
            <DropDownHeader onClick={toggling}>
                {selectedOption || 'Newest first'}
                {isOpen ? (
                    <DropdownIcon src="/icons/up.svg" alt="up" />
                ) : (
                    <DropdownIcon src="/icons/dropdown.svg" alt="dropdown" />
                )}
            </DropDownHeader>
            {isOpen && (
                <DropDownListContainer>
                    <DropDownList>
                        {options.map((option, index) => (
                            <ListItem
                                onClick={onOptionClicked(option, index)}
                                key={index}
                            >
                                {option}
                            </ListItem>
                        ))}
                    </DropDownList>
                </DropDownListContainer>
            )}
        </Container>
    )
}

const Container = styled.div`
    /* max-width: 255px;
    width: 100%; */
`

const DropDownHeader = styled.div`
    position: relative;
    font-size: 16px;
    line-height: 24px;
    padding: 11px 60px 10px 5px;
    background-color: #fff;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.42);
    outline: none;
    box-sizing: border-box;
`

const DropDownListContainer = styled.div`
    max-width: 255px;
    width: 100%;
`

const DropDownList = styled.ul`
    padding: 0;
    margin: 0;
    background: #ffffff;
    border: none;
    box-sizing: border-box;
    color: #000;
    font-size: 16px;
    line-height: 24px;
    &:first-child {
        padding-top: 11px;
    }
`

const ListItem = styled('li')`
    list-style: none;
    padding: 4px 16px 11px 4px;
`
const DropdownIcon = styled.img`
    position: absolute;
    height: auto;
    width: 24px;
    height: 24px;
    right: 16px;
`
