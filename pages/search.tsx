import { useEffect, useState } from 'react'
import Router, { useRouter } from 'next/router'
import styled from 'styled-components'
import Layout from '../components/layout/Layout'
import SortBy from '../components/SortBy'

export default function SearchResults() {
    const router = useRouter()
    const [sortBy, setSortBy] = useState('newest')
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        const queryString = router.query.searchValue
        if (queryString && typeof queryString === 'string') {
            setSearchValue(queryString)
            fetchSearchResult()
        }
    }, [router, sortBy])

    async function fetchSearchResult() {
        const res = await fetch(
            `https://content.guardianapis.com/search?api-key=${process.env.NEXT_PUBLIC_API_KEY}&section=news&order-by=${sortBy}`,
        )
        res.json()
            .then((res) => setSearchResult(res.response.results))
            .catch((err) => `Error is ${err}`)
    }

    const renderSearchResult = () => {
        const news = searchResult.map((data) => {
            const { webTitle, sectionId, id } = data
            return (
                <Card key={id}>
                    <a href="#">
                        <NewsImg
                            src={`/home/${Math.floor(
                                Math.random() * (15 - 1 + 1) + 1,
                            )}.png`}
                            alt="news image"
                        />
                        <WrapTitle>
                            <Title>{webTitle}</Title>
                        </WrapTitle>
                    </a>
                </Card>
            )
        })
        return news
    }

    return (
        <Layout>
            <Container>
                <TitleBar>
                    <div>
                        <CategoryTitle>Search results</CategoryTitle>
                    </div>

                    <WrapViewBookmark>
                        <Button onClick={() => router.push('/bookmark')}>
                            <BookmarkIcon
                                src="/icons/bookmark.svg"
                                alt="bookmark"
                            />
                            View BOOKMARK
                        </Button>
                    </WrapViewBookmark>
                    <WrapSortBy>
                        <SortBy sortBy={sortBy} setSortBy={setSortBy} />
                    </WrapSortBy>
                </TitleBar>
                <Content>{renderSearchResult()}</Content>
            </Container>
        </Layout>
    )
}

const Container = styled.div`
    max-width: ${({ theme }) => theme.layout.width};
    width: 100%;
    margin: 0 auto 100px;

    @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
        margin: 0 auto 50px;
    }
`

const TitleBar = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
        margin-bottom: 50px;
    }
`

const WrapViewBookmark = styled.div`
    position: absolute;
    right: 255px;
    top: 45%;
    @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
        top: unset;
        right: unset;
        bottom: -15%;
        left: 0px;
    }
`

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
    margin-right: 22px;
    @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
        margin-right: 0px;
    }
`

const BookmarkIcon = styled.img`
    height: 18px;
    width: 18px;
    margin-right: 6px;
`
const WrapSortBy = styled.div`
    position: absolute;
    top: 36%;
    right: 0px;
    z-index: 20;
    max-width: 255px;
    width: 100%;
    @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
        max-width: 155px;
        top: 79%;
        right: 0px;
    }
`

const CategoryTitle = styled.h1`
    font-family: Georgia;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    color: rgba(0, 0, 0, 0.87);
    line-height: 49px;
    margin: unset;
    margin-top: 44px;
    margin-bottom: 30px;
    @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
        font-size: 36px;
    }
`

const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 30px 15px;
    grid-auto-flow: row;
    @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
        grid-template-columns: 1.5fr 1.5fr;
        grid-template-rows: 1fr;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        gap: 30px 0px;
    }
`

const Card = styled.div`
    position: relative;
`

const NewsImg = styled.img`
    width: 100%;
`

const WrapTitle = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 134px;
    width: 100%;
    background: rgba(9, 53, 123, 0.9);
    border-bottom: 3px solid #d32f2f; ;
`

const Title = styled.h3`
    display: -webkit-box;
    font-family: Georgia;
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    letter-spacing: 0.07px;
    color: #ffffff;
    padding: 10px 10px 0px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: unset;
`
