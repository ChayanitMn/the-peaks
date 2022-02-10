import { useState } from 'react'
import styled from 'styled-components'

export default function SortByComponent() {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState(null)

    const toggling = () => setIsOpen(!isOpen)

    const onOptionClicked = (value: any) => () => {
        setSelectedOption(value)
        setIsOpen(false)
    }

    const options = ['Newest first', 'Oldest first']

    return (
        <>
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
                                onClick={onOptionClicked(option)}
                                key={index}
                            >
                                {option}
                            </ListItem>
                        ))}
                    </DropDownList>
                </DropDownListContainer>
            )}
        </>
    )
}

const DropDownHeader = styled.div`
    position: relative;
    max-width: 255px;
    width: 100%;
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
        margin-top: 11px;
    }
`

const ListItem = styled('li')`
    list-style: none;
    margin: 4px auto 11px 4px;
`
const DropdownIcon = styled.img`
    position: absolute;
    height: auto;
    width: 24px;
    height: 24px;
    right: 16px;
`
