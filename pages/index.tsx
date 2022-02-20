import Router from 'next/router'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import NewsData from '../types/newsData'
import Layout from '../components/layout/Layout'
import { SortBy, Spinner } from '../components/'

export default function Home() {
    const [topNewsData, setTopNewsData] = useState<NewsData[]>([])
    const [sportData, setSportData] = useState([])
    const [cultureData, setCultureData] = useState([])
    const [lifeAndStyleData, setLifeAndStyleData] = useState([])
    const [sortBy, setSortBy] = useState('newest')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetchTopNewsData()
        fetchSportData()
        fetchCultureData()
        fetchLifeAndStyleData()
        setIsLoading(false)
    }, [sortBy])

    const API_KEY = '08731270-8295-4142-8f41-a30ed1b544e9'

    async function fetchTopNewsData() {
        const res = await fetch(
            `https://content.guardianapis.com/search?api-key=${API_KEY}&section=news&order-by=${sortBy}`,
        )
        res.json()
            .then((res) => setTopNewsData(res.response.results))
            .catch((err) => `Error is ${err}`)
    }

    async function fetchSportData() {
        const res = await fetch(
            `https://content.guardianapis.com/search?api-key=${API_KEY}&section=sport&order-by=${sortBy}`,
        )
        res.json()
            .then((res) => setSportData(res.response.results))
            .catch((err) => `Error is ${err}`)
    }
    async function fetchCultureData() {
        const res = await fetch(
            `https://content.guardianapis.com/search?api-key=${API_KEY}&section=culture&order-by=${sortBy}`,
        )
        res.json()
            .then((res) => setCultureData(res.response.results))
            .catch((err) => `Error is ${err}`)
    }
    async function fetchLifeAndStyleData() {
        const res = await fetch(
            `https://content.guardianapis.com/search?api-key=${API_KEY}&section=lifeandstyle&order-by=${sortBy}`,
        )
        res.json()
            .then((res) => setLifeAndStyleData(res.response.results))
            .catch((err) => `Error is ${err}`)
    }

    const renderTopNewsData = () => {
        return (
            <>
                <TopFiveNews>
                    <WrapMainLeft>
                        <FirstNews>
                            <Card>
                                <a href="/1">
                                    <NewsImg
                                        src="/home/1.png"
                                        alt="news image"
                                    />
                                    <CustomWrapTitleOne>
                                        <CustomTitle>
                                            {topNewsData[0]?.webTitle}
                                        </CustomTitle>
                                        <NewsDesc>
                                            Continent is seeing more cases
                                            spread to the provinces; Trump
                                            supporters can’t sue over catching
                                            Covid-19 at rallies; Brazil confirms
                                            30,000 new cases
                                        </NewsDesc>
                                    </CustomWrapTitleOne>
                                </a>
                            </Card>
                        </FirstNews>
                    </WrapMainLeft>
                    <WrapMainRight>
                        <WrapSubNews className="mt-lg-30">
                            <Top>
                                <Card>
                                    <a href="/1">
                                        <NewsImg
                                            src="/home/2.png"
                                            alt="news image"
                                        />
                                        <CustomWrapTitleTop>
                                            <CustomTitleTop className="title-3-line">
                                                {topNewsData[1]?.webTitle}
                                            </CustomTitleTop>
                                        </CustomWrapTitleTop>
                                    </a>
                                </Card>
                            </Top>
                            <Top className="ml-30">
                                <Card>
                                    <a href="/1">
                                        <NewsImg
                                            src="/home/3.png"
                                            alt="news image"
                                        />
                                        <CustomWrapTitleThree>
                                            <CustomTitleTop className="title-3-line">
                                                {topNewsData[2]?.webTitle}
                                            </CustomTitleTop>
                                        </CustomWrapTitleThree>
                                    </a>
                                </Card>
                            </Top>
                        </WrapSubNews>
                        <WrapSubNews className="mt-lg-170">
                            <Bottom>
                                <Card>
                                    <a href="/1">
                                        <CustomWrapTitleFour>
                                            <CustomTitleBottom>
                                                {topNewsData[3]?.webTitle}
                                            </CustomTitleBottom>
                                        </CustomWrapTitleFour>
                                    </a>
                                </Card>
                            </Bottom>
                            <Bottom className="ml-30">
                                <Card>
                                    <a href="/1">
                                        <CustomWrapTitleFive>
                                            <CustomTitleBottom>
                                                {topNewsData[4]?.webTitle}
                                            </CustomTitleBottom>
                                        </CustomWrapTitleFive>
                                    </a>
                                </Card>
                            </Bottom>
                        </WrapSubNews>
                    </WrapMainRight>
                </TopFiveNews>

                {/* Sub Top news  */}
                <Content>
                    <Card>
                        <a href="#">
                            <NewsImg src="/home/4.png" alt="news image" />
                            <WrapTitle>
                                <CustomTitle>
                                    {topNewsData[5]?.webTitle}
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
                            <NewsImg src="/home/5.png" alt="news image" />
                            <WrapTitle>
                                <CustomTitle>
                                    {topNewsData[6]?.webTitle}
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
                            <NewsImg src="/home/6.png" alt="news image" />
                            <WrapTitle>
                                <CustomTitle>
                                    {topNewsData[7]?.webTitle}
                                </CustomTitle>
                                <NewsDesc>
                                    Republican senators on Capitol Hill have
                                    expressed their dismay at a Donald Trump.
                                </NewsDesc>
                            </WrapTitle>
                        </a>
                    </Card>
                </Content>
            </>
        )
    }
    const renderSportData = () => {
        const news = sportData.map((data) => {
            const { webTitle, sectionId } = data
            if (sectionId === 'sport') {
                return (
                    <Card>
                        <a href="/1">
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
            }
        })
        return news
    }

    const renderCultureData = () => {
        const news = cultureData.map((data) => {
            const { webTitle, sectionId } = data
            if (sectionId === 'culture') {
                return (
                    <Card>
                        <a href="/1">
                            <NewsImg
                                src={`/home/${Math.floor(
                                    Math.random() * (15 - 1 + 1) + 1,
                                )}.png`}
                                alt="news image"
                            />
                            <WrapTitleYellow>
                                <Title>{webTitle}</Title>
                            </WrapTitleYellow>
                        </a>
                    </Card>
                )
            }
        })
        return news
    }

    const renderLifeAndStyleData = () => {
        const news = lifeAndStyleData.map((data) => {
            const { webTitle, sectionId } = data
            if (sectionId === 'lifeandstyle') {
                return (
                    <Card>
                        <a href="/1">
                            <NewsImg
                                src={`/home/${Math.floor(
                                    Math.random() * (15 - 1 + 1) + 1,
                                )}.png`}
                                alt="news image"
                            />
                            <WrapTitleBlue>
                                <Title>{webTitle}</Title>
                            </WrapTitleBlue>
                        </a>
                    </Card>
                )
            }
        })
        return news
    }

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
                        <SortBy sortBy={sortBy} setSortBy={setSortBy} />
                    </WrapSortBy>
                </TitleBar>
                {isLoading ? (
                    <Spinner />
                ) : (
                    <>
                        {renderTopNewsData()}

                        <CategoryTitle>Sports</CategoryTitle>
                        <Content>{renderSportData()}</Content>
                        <CategoryTitle>Culture</CategoryTitle>
                        <Content>{renderCultureData()}</Content>
                        <CategoryTitle>Life And Style</CategoryTitle>
                        <Content>{renderLifeAndStyleData()}</Content>
                    </>
                )}
            </Container>
        </Layout>
    )
}
const Container = styled.div`
    max-width: ${({ theme }) => theme.layout.width};
    width: 100%;
    margin: 0 auto 100px;

    .ml-30 {
        margin-left: 30px;
    }

    .title-3-line {
        padding: 10px 10px 0px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
        .mt-lg-30 {
            margin-top: 30px;
        }
        .mt-lg-170 {
            margin-top: 170px;
        }
    }
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

const Card = styled.div`
    position: relative;
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
    border-bottom: 3px solid #d32f2f;
`

const WrapTitleYellow = styled(WrapTitle)`
    border-bottom: 3px solid #ffca28;
`

const WrapTitleBlue = styled(WrapTitle)`
    border-bottom: 3px solid #2196f3;
`

const CustomWrapTitleTop = styled(WrapTitle)`
    height: 107px;
`

const CustomWrapTitleOne = styled(WrapTitle)`
    border-bottom: 3px solid #388e3c;
`

const CustomWrapTitleTwo = styled(WrapTitle)`
    height: 107px;
`

const CustomWrapTitleThree = styled(WrapTitle)`
    height: 107px;
    border-bottom: 3px solid #ffc107;
`

const CustomWrapTitleFour = styled(WrapTitle)`
    height: 138px;
    border-bottom: 3px solid #2196f3;
`

const CustomWrapTitleFive = styled(WrapTitle)`
    height: 138px;
    border-bottom: 3px solid #388e3c;
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

const CustomTitleTop = styled(Title)`
    -webkit-line-clamp: 3;
    font-size: 18px;
    line-height: 27px;
`

const CustomTitleBottom = styled(Title)`
    font-size: 18px;
    line-height: 27px;
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
    margin-top: 8px;
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

const TopFiveNews = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    margin-bottom: 30px;
    @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
        display: block;
    }
`

const WrapMainLeft = styled.div`
    width: 50%;
    @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
        width: 100%;
    }
`

const WrapMainRight = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    margin-left: 30px;
    @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
        width: 100%;
        margin: unset;
    }
`

const WrapSubNews = styled.div`
    display: flex;
    max-width: 100%;
    width: 100%;
`

const FirstNews = styled.div``

const Top = styled.div`
    display: block;
    width: 100%;
`

const Bottom = styled.div`
    display: grid;
    width: 100%;
`
