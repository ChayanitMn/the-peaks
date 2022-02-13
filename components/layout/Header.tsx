import { useState } from 'react'
import Router from 'next/router'
import styled from 'styled-components'

export default function Header() {
    const [isSearchActive, setIsSearchActive] = useState(false)
    const [seachValue, setSeachValue] = useState('')

    const handleKeyPress = (event: any) => {
        if (event.code === 'Enter') {
            setSeachValue(event.target.value)
            Router.push(`/search/?searchValue=${seachValue}`)
        }
    }

    return (
        <Container>
            <WrapHeader>
                <a href="/">
                    <Logo src="/header/logo.svg" alt="The Peaks logo" />
                </a>
                {isSearchActive ? (
                    <SearchWrapInput>
                        <SearchInput
                            placeholder="Search all news"
                            onKeyPress={(e) => handleKeyPress(e)}
                        />
                        <CustomSearchIcon
                            src="/icons/search.svg"
                            alt="search"
                        />
                    </SearchWrapInput>
                ) : (
                    <SearchWrapIcon onClick={() => setIsSearchActive(true)}>
                        <Search src="/icons/search.svg" alt="search" />
                    </SearchWrapIcon>
                )}
            </WrapHeader>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
`
const WrapHeader = styled.div`
    max-width: ${({ theme }) => theme.layout.width};
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
        justify-content: space-between;
    }
`

const Logo = styled.img`
    width: 142px;
    height: auto;
    padding: 31px 0px 39px;
    margin-left: 16px;
    @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
        width: 100px;
    }
`
const SearchWrapIcon = styled.div`
    position: relative;
    width: 90px;
    border-bottom: 2px solid #fff;
    margin-right: 16px;
    @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
        width: 50px;
    }
`

const SearchWrapInput = styled.div`
    position: relative;
`

const Search = styled.img`
    position: absolute;
    width: 17px;
    height: auto;
    left: 40%;
    bottom: 12px;
`

const CustomSearchIcon = styled.img`
    position: absolute;
    width: 17px;
    height: auto;
    right: 40px;
    bottom: 12px;
    @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
        right: 35px;
    }
`

const SearchInput = styled.input`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 300px;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    padding: 11px 40px 9px 27px;
    background-color: #2153a3;
    outline: none;
    border: none;
    border-bottom: 3px solid #ffffff;
    margin-right: 16px;
    ::placeholder {
        color: #ffffff;
        opacity: 0.4;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
        width: 150px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
        width: 100px;
        font-size: 14px;
    }
`
