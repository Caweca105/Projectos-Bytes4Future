import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbGarconet from '../public/images/projects/garconet-thumbnail.png'
import thumbPokejoker from '../public/images/projects/pokejoker-thumbnail.png'

const Works = () => (
  <Layout title="Project">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Bytes4Future Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem 
            id="garconet" 
            title="Garconet" 
            thumbnail={thumbGarconet}
          >
            A restaurant application to facilitate communication between the kitchen, the room and the clients.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="pokejoker"
            title="Pokejoker"
            thumbnail={thumbPokejoker}
          >
            A quiz game for Pokemon lovers and enthusiasts.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works