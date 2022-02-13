import Router from 'next/router'
import styled from 'styled-components'
import Layout from '../components/layout/Layout'
import { SortBy } from '../components/'

export default function Home() {
    return (
        <Layout>
            <Container>
                <TitleBar>
                    <div>
                        <CategoryTitle>Top stories</CategoryTitle>
                    </div>

                    <WrapViewBookmark>
                        <Button onClick={() => Router.push('/all-bookmark')}>
                            <BookmarkIcon
                                src="/icons/bookmark.svg"
                                alt="bookmark"
                            />
                            View BOOKMARK
                        </Button>
                    </WrapViewBookmark>
                    <WrapSortBy>
                        <SortBy />
                    </WrapSortBy>
                </TitleBar>

                {/* Sub Top news */}
                <Content>
                    <Card>
                        <a href="#">
                            <NewsImg
                                src="/news-card/pic.png"
                                alt="news image"
                            />
                            <WrapTitle>
                                <CustomTitle>
                                    Coronavirus live news: markets fall over
                                    fears of long US
                                </CustomTitle>
                                <NewsDesc>
                                    Republican senators on Capitol Hill have
                                    expressed their dismay at a Donald Trump.
                                </NewsDesc>
                            </WrapTitle>
                        </a>
                    </Card>
                    <Card>
                        <a href="#">
                            <NewsImg
                                src="/news-card/pic.png"
                                alt="news image"
                            />
                            <WrapTitle>
                                <CustomTitle>
                                    Liverpool Premier League trophy lift:
                                    Special ceremony to mark success Liverpool
                                    Premier League trophy lift: Special ceremony
                                    to mark success
                                </CustomTitle>
                                <NewsDesc>
                                    Republican senators on Capitol Hill have
                                    expressed their dismay at a Donald Trump.
                                </NewsDesc>
                            </WrapTitle>
                        </a>
                    </Card>
                    <Card>
                        <a href="#">
                            <NewsImg
                                src="/news-card/pic.png"
                                alt="news image"
                            />
                            <WrapTitle>
                                <CustomTitle>
                                    Liverpool Premier League trophy lift:
                                    Special ceremony to mark success Liverpool
                                    Premier League trophy lift: Special ceremony
                                    to mark success
                                </CustomTitle>
                                <NewsDesc>
                                    Republican senators on Capitol Hill have
                                    expressed their dismay at a Donald Trump.
                                </NewsDesc>
                            </WrapTitle>
                        </a>
                    </Card>
                </Content>

                {/* Sport News */}
                <CategoryTitle>Sports</CategoryTitle>
                <Content>
                    <Card>
                        <a href="#">
                            <NewsImg
                                src="/news-card/pic.png"
                                alt="news image"
                            />
                            <WrapTitle>
                                <Title>
                                    Liverpool Premier League trophy lift:
                                    Special ceremony to mark success Liverpool
                                    Premier League trophy lift: Special ceremony
                                    to mark success
                                </Title>
                            </WrapTitle>
                        </a>
                    </Card>
                    <Card>
                        <a href="#">
                            <NewsImg
                                src="/news-card/pic.png"
                                alt="news image"
                            />
                            <WrapTitle>
                                <Title>
                                    Liverpool Premier League trophy lift:
                                    Special ceremony to mark succes
                                </Title>
                            </WrapTitle>
                        </a>
                    </Card>
                    <Card>
                        <a href="#">
                            <NewsImg
                                src="/news-card/pic.png"
                                alt="news image"
                            />
                            <WrapTitle>
                                <Title>
                                    Liverpool Premier League trophy lift:
                                    Special ceremony to mark success
                                </Title>
                            </WrapTitle>
                        </a>
                    </Card>
                </Content>

                {/*
                <TopFiveNews>
                    <MainNews>Hello</MainNews>
                    <SubOne>Hello</SubOne>
                    <SubTwo>Hello</SubTwo>
                    <SubThree>Hello</SubThree>
                    <SubFour>Hello</SubFour>
                </TopFiveNews> */}
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
    max-height: 106px;
    font-family: Georgia;
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    letter-spacing: 0.07px;
    color: #ffffff;
    padding: 10px 10px 8px;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: unset;
`
const CustomTitle = styled(Title)`
    max-height: 54px;
    -webkit-line-clamp: 2;
    padding: 10px 10px 0px;
`

const Card = styled.div`
    position: relative;
`

const NewsImg = styled.img`
    width: 100%;
`
const NewsDesc = styled.p`
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: #ffffff;
    padding: 0 10px;
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

// const TopFiveNews = styled.div`
//     display: grid;
//     grid-template-columns: 1fr repeat(2, 0.5fr) repeat(2, 1fr);
//     grid-template-rows: repeat(2, 1.5fr) repeat(3, 1fr);
//     grid-column-gap: 30px;
//     grid-row-gap: 30px;
// `

// const MainNews = styled.div`
//     /* grid-area: 1 / 1 / 3 / 2; */
//     /* grid-area: 1 / 1 / 12 / 2; */
//     grid-area: 1 / 1 / 3 / 2;
//     background-color: red;
// `

// // const SubNews = styled.div`
// //     grid-area: 1 / 2 / 2 / 3;
// // `

// const SubOne = styled.div`
//     /* grid-area: 1 / 2 / 2 / 3; */
//     /* grid-area: 1 / 2 / 8 / 3; */
//     grid-area: 1 / 3 / 7 / 4;
//     background-color: green;
// `

// const SubTwo = styled.div`
//     /* grid-area: 1 / 3 / 2 / 4 */
//     /* grid-area: 1 / 3 / 4 / 4; */
//     grid-area: 1 / 3 / 7 / 4;
//     background-color: black;
// `

// const SubThree = styled.div`
//     /* grid-area: 2 / 2 / 3 / 3; */
//     /* grid-area: 6 / 2 / 10 / 3; */
//     grid-area: 7 / 3 / 12 / 4;
//     background-color: blue;
// `

// const SubFour = styled.div`
//     /* grid-area: 2 / 3 / 3 / 4; */
//     /* grid-area: 6 / 3 / 12 / 4; */
//     grid-area: 7 / 3 / 12 / 4;
//     background-color: brown;
// `
