import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  IoLogoGithub,
  IoLogoLinkedin
} from 'react-icons/io5'

const Home = () => (
        <Layout>
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('#94d2bd', 'whiteAlpha.200')} p={3} mb={6} align="center" >
                Hello, I&apos;m a full-stack developer based in Portugal
            </Box>

            <Box display={{ md:'flex' }}>
                <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Diogo Lemos
                </Heading>
                <p>Developer</p>
                </Box>   
                <Box 
                    flexShrink={0} 
                    mt={{base: 4, md:0}} 
                    ml={{md: 6}} 
                    align="center"
                >
                    <Image 
                        borderColor="whiteAlpha.800" 
                        borderWidth={2} 
                        borderStyle="solid" 
                        maxWidth="100px" 
                        display="inline-block" 
                        borderRadius="full" 
                        src="/images/diogo.jpg" 
                        alt="Profile Image" 
                    />
                </Box> 
            </Box>
        <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
            Introduction
        </Heading>
        <Paragraph>
            Diogo is a freelance and a full-stack developer based in Lisbon, Portugal, with a passion for coding and curious about new technologies. He enjoys to find bugs and to frustrate with code, he likes to tackle problems and spend some time trying to understand what is causing them. He is curious about cybersecurity and tries to further is knowledge in it when there's time for it. When not online, he loves hanging out with friends, gaming (RPG and strategy fan), watch japanese animation, to travel and he is obsessed towards Pokemon, on a unhealthy scale. The technologies that he usually uses are Javasript, React.js, Next.js, MongoDB and Express.js. Although all of this, he is not shy of a new challenge and to look for new things that may awake his passion for this area.
        </Paragraph>
        <Box align="center" my={4}>
            <NextLink href="/projects">
                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
                </Button>
            </NextLink>
        </Box>
        </Section>

        <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
                Bio
            </Heading>
            <Accordion allowToggle allowMultiple>
              <AccordionItem>
                  <h2>
                      <AccordionButton>
                              <Box flex="1" textAlign="left">
                                  <BioSection>
                                      <BioYear>
                                          1992
                                      </BioYear>
                                      Born in Lisbon, Portugal
                                  </BioSection>
                              </Box>
                          <AccordionIcon />
                      </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    It was the day when i was born
                  </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                  <h2>
                      <AccordionButton>
                              <Box flex="1" textAlign="left">
                                  <BioSection>
                                      <BioYear>
                                          2011
                                      </BioYear>
                                      Completed Highschool at Instituto Pupilos do Exército.
                                  </BioSection>
                              </Box>
                          <AccordionIcon />
                      </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                      Comleted highschool at Instituto Pupilos do Exército.
                  </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                  <h2>
                      <AccordionButton>
                              <Box flex="1" textAlign="left">
                                  <BioSection>
                                      <BioYear>
                                          Jul. 2012 to Oct. 2014
                                      </BioYear>
                                      Sibs Processos as a Data Analyst
                                  </BioSection>
                              </Box>
                          <AccordionIcon />
                      </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                      At Sibs I started in a team to verify personal documentation and to check if the regulations imposed by Banco de Portugal (Portugal National Bank) were being respected. I was in two teams, one was for opening and the other for maintenance of bank accounts. After a while I was put in another team, to pledge bank accounts when receiving instructions to do it, by the IRS and Social Security. And finally, I had to deal with inheritance and heir qualification, for that I had to work side by side with the juridical department of that same bank.
                      All of their tools were in-house, as such, I cannot disclose information about it. Sorry for the inconvenience.
                  </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                  <h2>
                      <AccordionButton>
                              <Box flex="1" textAlign="left">
                                  <BioSection>
                                      <BioYear>
                                          Nov. 2014 to Nov. 2015
                                      </BioYear>
                                      Kantar WorldPanel as a ROC Analyst
                                  </BioSection>
                              </Box>
                          <AccordionIcon />
                      </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                  On this job, I had to receive data, treat and organize the data and distribute it to an international team, in order to report it to the clients. I also did reporting and managed KPI's for a few businesses.
                  </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                  <h2>
                      <AccordionButton>
                              <Box flex="1" textAlign="left">
                                  <BioSection>
                                      <BioYear>
                                          Nov. 2015 to Nov. 2016
                                      </BioYear>
                                      AutoTranscais
                                  </BioSection>
                              </Box>
                          <AccordionIcon />
                      </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                  At AutoTranscais I had a backoffice role, my main job was to keep the records of the tow trucks, the car repair shop and the international trucks by creating, updating and using spredsheets.
                  </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                  <h2>
                      <AccordionButton>
                              <Box flex="1" textAlign="left">
                                  <BioSection>
                                      <BioYear>
                                          Aug. 2016 to Aug. 2018
                                      </BioYear>
                                      Cilindriconcept, lda as the business owner
                                  </BioSection>
                              </Box>
                          <AccordionIcon />
                      </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                  Cilindriconcept was a business in which I had a small fleet of cars, aprox. 7, as such I had to organize the schedule of the drivers, aprox. 28, I had to be in touch with suppliers, drivers, repair shops, payments and sometimes I drove a bit. The business was in partnership with Uber, FreeNow, Bolt and Cabify. Sold it to another person at the end of August 2018.
                  </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                  <h2>
                      <AccordionButton>
                              <Box flex="1" textAlign="left">
                                  <BioSection>
                                      <BioYear>
                                          Aug. 2018 to Aug. 2020
                                      </BioYear>
                                      Carvalho & Gil Ribeiro e Lemos as the owner
                                  </BioSection>
                              </Box>
                          <AccordionIcon />
                      </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                  Carvalho & Gil Ribeiro e Lemos was a business in which I had a small fleet of cars, aprox. 5, as such I had to organize the schedule of the drivers, aprox. 6, I had to be in touch with suppliers, drivers, repair shops, payments and sometimes I drove a bit. The business was in partnership with Uber, FreeNow, Bolt and Cabify. Merged it with Eight Tigers, lda in June 2020.
                  </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                  <h2>
                      <AccordionButton>
                              <Box flex="1" textAlign="left">
                                  <BioSection>
                                      <BioYear>
                                          Aug. 2020 to Aug. 2021
                                      </BioYear>
                                      Eight Tigers, lda as the owner
                                  </BioSection>
                              </Box>
                          <AccordionIcon />
                      </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                  At Eight Tigers I had a small fleet of cars, aprox. 5, as such I had to organize the schedule of the drivers, aprox. 4, I had to be in touch with suppliers, drivers, repair shops, payments and sometimes I drove a bit. The business was in partnership with Uber, FreeNow, Bolt and Cabify. Sold it in August 2021.
                  </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                  <h2>
                      <AccordionButton>
                              <Box flex="1" textAlign="left">
                                  <BioSection>
                                      <BioYear>
                                          Oct. 2020 to Dec. 2020
                                      </BioYear>
                                      42 Lisbon
                                  </BioSection>
                              </Box>
                          <AccordionIcon />
                      </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                  After being hit by Covid-19 and the quarantine, I decided to take this bootcamp. It was focused in Objective-C, Git and Linux Command Line. Due to quarantine, it was not possible to continue further development at this bootcamp.
                  </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                  <h2>
                      <AccordionButton>
                              <Box flex="1" textAlign="left">
                                  <BioSection>
                                      <BioYear>
                                          Mar. 2021 to Jul. 2021
                                      </BioYear>
                                      Bytes4Future Bootcamp
                                  </BioSection>
                              </Box>
                          <AccordionIcon />
                      </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                  Bytes4Future is a partnership between Aga Khan Foundation, Run Code School and Sintra. This bootcamp focused in giving us FullStack knowledge by using HTML/CSS, Javascript, React.js, Redux.js, Node.js, Express.js and MongoDB. At this bootcamp I've done a few projects that you can check at {" "}
                  <NextLink href="/projects">
                    <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" size="xs">
                      My portfolio
                    </Button>
                  </NextLink>
                </AccordionPanel>
              </AccordionItem>
          </Accordion>
        </Section>

        <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          All forms of art, Gaming, Animals, Outdoors, Software Security
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Caweca105" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @Caweca105
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/diogo-lemos-2a9059aa/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                Diogo Lemos
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink href="/contacts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Contact me
            </Button>
          </NextLink>
        </Box>
      </Section>
        </Container>
        </Layout>
    )

export default Home