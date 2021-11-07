import {
  Container,
  Heading,
  Box,
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const About = () => (
    <Layout>
        <Container>
            <Box flexgrow={1}>
                <Heading as="h2" variant="page-title">
                    About me
                </Heading>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Who am I?
                    </Heading>

                    <Paragraph>
                        I've been working since my 20th anniversary. I've always wished to get into a technological area, but never did and after Covid hit my businesses I decided to do a leap of faith and embrace coding. I may be new to this, but I'm willing to learn and to give it my all.
                    </Paragraph>
                </Section>

                <Section delay={0.5}>
                    <Heading as="h3" variant="section-title">
                        What am I like?
                    </Heading>

                    <Paragraph>
                        I'm an outgoing person, extroverted and technologically savvy.
                        I like to be humorous and to make others laugh. 
                        If you didn't know anything about me, you would know that I love Pokemon!
                        I also enjoy movies, books, videogames and everything that has a good story in it.
                        Photography, although, really amateur/beginner/wannabe in it.
                    </Paragraph>
                </Section>

                <Section delay={0.8}>
                    <Heading as="h3" variant="section-title">
                        What am I looking for?
                    </Heading>

                    <Paragraph>
                        As I've only been in controlled environments I would like to get some real experience in front and in back-end, after that I'll decide what I enjoy the most.
                        I also have a crush on Cybersecurity, although, first I would prefer to become more experienced with coding and after that, maybe I will dedicate myself more to it.
                    </Paragraph>
                </Section>

                <Section delay={1.1}>
                    <Heading as="h3" variant="section-title">
                        What I've done at Bytes4Future?
                    </Heading>

                    <Paragraph>
                        For 10 weeks I took part in the intensiveprogramming Boot Camp of Bytes4Future. In thisprogram I learned to write JavaScript (ES6) code, Ialso learned the basis of topics such as ObjectOriented Programming, Data Structures,Algorithms, Functional Programming and BasicSoftware Principles.
                        Starting from the HTML and CSS base acquired inthe PowerUp stage of Bytes4Future, I learned todevelop interfaces using the declarative model,more specifically, using React. I also learned whatRedux is all about.
                        I learned how to use JavaScript in the backendusing NodeJS to run JavaScript code outside thebrowser. I developed REST APIs using Express andhad my first chance to play with Web Sockets.
                        To store application data, I learned how to usefiles, most of the time to store JSON objects. Ialso learned to work with MongoDB and learnedthe basics of SQL.
                        During the development of projects I used Git andGitHub to manage source code versions.
                    </Paragraph>
                </Section>

                <Section delay={1.4}>
                    <Heading as="h3" variant="section-title">
                        Disclaimer
                    </Heading>

                    <Paragraph>
                        My native language is not English, as such I may have done a few typos or got wrong some verbal constructions. If you spot one of those, please reach out to me, thank you in advance.

                        This site was done by using Next.js, three.js, chakra-ui and radix
                    </Paragraph>
                </Section>


            </Box>
        </Container>
    </Layout>
)

export default About