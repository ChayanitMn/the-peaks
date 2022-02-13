import styled from 'styled-components'
import useWindowSize from '../utils/hooks/useWindowSize'
import Layout from '../components/layout/Layout'
import Bookmark from '../components/Bookmark'

export default function NewsDetail() {
    const [width] = useWindowSize()
    return (
        <Layout>
            <Container>
                <Bookmark />
                <Date>Fri 12 Jun 2020 06.40 BST</Date>
                <NewsTitle>
                    Global report: WHO warns of accelerating Covid-19 infections
                    in Africa
                </NewsTitle>
                <NewsDesc>
                    Continent is seeing more cases spread to the provinces;
                    Trump supporters can’t sue over catching Covid-19 at
                    rallies; Brazil confirms 30,000 new cases
                </NewsDesc>
                {width > 768 ? (
                    <></>
                ) : (
                    <NewsImage>
                        <img src="/news-detail/news-img.png" alt="news" />
                        <p>
                            A woman walks along a flooded road amidst a storm in
                            the Masiphumelele informal settlement in Cape Town
                            Photograph: Nic Bothma/EPA
                        </p>
                    </NewsImage>
                )}
                <NewsWrap>
                    <NewsContent>
                        <p>
                            South Africa is the worst-affected country on the
                            continent, with more than a quarter of all
                            infections. But most countries have fewer than 1,000
                            infections, said Moeti, and the UN does not believe
                            that severe cases are going undetected. Africa has
                            recorded fewer than 6,000 deaths, according to an
                            AFP tally, but just five countries account for 70%
                            of these: South Africa, Algeria, Nigeria, Egypt and
                            Sudan. In Africa, “the pandemic is still
                            concentrated in and around capital cities but we are
                            seeing more and more cases spread out into the
                            provinces,” Moeti said. She said that in most
                            countries on the continent, the virus entered
                            capitals through international flights from Europe.
                            Africa’s relatively young population compared to
                            other continents, and in-built experience of dealing
                            with disease outbreaks have been cited as reasons
                            why Africa has not so far seen the death rates
                            experienced on other continents. Moeti said early
                            action by African countries had helped keep the
                            numbers low - but constant vigilance was still
                            needed. The US remains the worst-affected country
                            worldwide, passing 2 million infections on Thursday.
                            Spikes have been recorded in several states,
                            including Arizona, which is confirming more than
                            1,000 cases daily. US president Donald Trump has
                            introduced a policy stopping attendees at his
                            rallies from suing the campaign or venue if they
                            contract coronavirus at the events. A statement on
                            the campaign website page for a rally in Tulsa says:
                            “By clicking register below, you are acknowledging
                            that an inherent risk of exposure to COVID-19 exists
                            in any public place where people are present. By
                            attending the Rally, you and any guests voluntarily
                            assume all risks related to exposure to COVID-19 and
                            agree not to hold Donald J. Trump for President,
                            Inc.; BOK Center; ASM Global; or any of their
                            affiliates … liable for any illness or injury.”
                            Stocks fell sharply Thursday on Wall Street as
                            coronavirus cases increased, deflating recent
                            optimism for a quick economic recovery. The DOW
                            Jones Industrial Average saw its worst day in weeks,
                            closing down almost 7%. Asian shares were moderately
                            lower on Friday as a result of the overnight rout.
                            The US Federal Reserve warned on Wednesday that a
                            second wave of infections risks prolonging the
                            country’s recovery. The Fed predicted unemployment
                            will still be at around 9% by December – close to
                            the worst levels seen in the GFC – but Federal
                            Reserve chair Jerome Powell said that a second
                            outbreak could mean that figure was optimistic.
                        </p>
                    </NewsContent>
                    {width < 768 ? (
                        <></>
                    ) : (
                        <NewsImage>
                            <img src="/news-detail/news-img.png" alt="news" />
                            <p>
                                A woman walks along a flooded road amidst a
                                storm in the Masiphumelele informal settlement
                                in Cape Town Photograph: Nic Bothma/EPA
                            </p>
                        </NewsImage>
                    )}
                </NewsWrap>
            </Container>
        </Layout>
    )
}

const Container = styled.div`
    max-width: ${({ theme }) => theme.layout.width};
    width: 100%;
    margin: 63px auto 100px;

    @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
        margin: 63px auto 50px;
    }
`

const Date = styled.p`
    font-size: 12px;
    line-height: 31px;
    letter-spacing: 0.83px;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.87);
    margin-top: 18px;
    margin-bottom: 10px;
`

const NewsTitle = styled.h2`
    width: 60%;
    font-family: Georgia;
    font-weight: 700;
    font-size: 34px;
    line-height: 39px;
    letter-spacing: 0.07px;
    color: rgba(0, 0, 0, 0.87);
    margin: unset;
    @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
        width: 100%;
    }
`

const NewsDesc = styled.p`
    width: 60%;
    font-family: Georgia;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: 0.07px;
    color: rgba(0, 0, 0, 0.87);
    padding-bottom: 15px;
    margin-top: 10px;
    border-bottom: 1px solid #97979720;
    @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
        width: 100%;
    }
`

const NewsWrap = styled.div`
    display: flex;
    width: 100%;
    @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
        display: block;
    }
`

const NewsContent = styled.div`
    width: 60%;
    p {
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.1px;
        color: rgba(0, 0, 0, 0.87);
        margin-top: 13px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
        width: 100%;
    }
`

const NewsImage = styled.div`
    /* display: flex; */
    /* align-items: center; */
    width: 40%;
    margin-left: 30px;
    img {
        max-width: 100%;
        width: 100%;
        height: auto;
    }
    p {
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 0.3px;
        color: rgba(0, 0, 0, 0.87);
        mix-blend-mode: normal;
        opacity: 0.5;
        margin-top: 10px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
        width: 100%;
        margin-left: unset;
        margin-top: 20px;
        margin-bottom: 20px;
    }
`
