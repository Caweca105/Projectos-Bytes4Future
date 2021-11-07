import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Garconet">
    <Container>
      <Title>
        Garçonet <Badge>2021</Badge>
      </Title>
      <P>
        The team for this project/challenge was composed by three people.
        The problem that we defined was the waiting times in restaurants, when we want to order food or beverages and no one is coming to get our order.
        We decided to create a Web App for restaurants in which it has a QR Code Reader and it could 'read' in which table we were and we could start to ask for food and beverages with that same application. We had two front-ends, one back-end and a database (in which we had the menu and the requests for the day).
        The initial idea was to create everything using Next.js and to connect it with WebSockets... Unfortunately we weren't able to do it. So we opted to use React.js for front-end, Express.js for back-end and MongoDB as our database.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>MongoDb, Express.js, react.js, Node.js</span>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/garconet1.png" alt="garconet" />
      <WorkImage src="/images/projects/garconet2.png" alt="garconet" />
      <WorkImage src="/images/projects/garconet3.png" alt="garconet" />
    </Container>
  </Layout>
)

export default Work
