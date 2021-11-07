import {
    Container,
    Badge,
    List,
    ListItem,
    SimpleGrid,
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'

  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Project = () => (
    <Layout title="pokejoker">
      <Container>
        <Title>
          PokeJoker <Badge>2021</Badge>
        </Title>
        <P>
          PokeJoker was a three-man project roughly based on 'Who Wants To Be a Millionaire'. Our theme was Pokemon questions. There are three difficulties, each one of them has a different music, questions and cinematography based on the theme. There is a points system and a pikachu button that randomly eliminates one question, but if you do not use those pikachu it will give bonus points.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web Application</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>MongoDb, Express.js, react.js, Node.js</span>
          </ListItem>
        </List>
  
        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/projects/pokejoker1.png" alt="pokejoker" />
          <WorkImage src="/images/projects/pokejoker2.png" alt="pokejoker" />
          <WorkImage src="/images/projects/pokejoker3.png" alt="pokejoker" />
        </SimpleGrid>
      </Container>
    </Layout>
  )
  
  export default Project
  