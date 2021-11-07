import { useState, useEffect } from 'react'
import Section from '../components/section'
import {
  Container,
  Heading,
  Box,
  Button,
  useColorModeValue,
  FormControl,
  FormLabel,
  Textarea,
  Input
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import ToastForm from '../components/toast'

export default function Form() {
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (window.location.search.includes('success=true')) {
      setSuccess(true)
    }
  }, [])

  return (
    <Layout>
      <Section delay={0.1}>
        <Container>
          <Box borderRadius="lg" bg={useColorModeValue('#94d2bd', 'whiteAlpha.200')} p={3} mb={6} align="center" >
                    If you wish to contact me, use the form below please
          </Box>

          <Heading as="h2" variant="contact-form" align="center">
            Contact Me
          </Heading>
        </Container>
      </Section>
      {success && {ToastForm}}

        <Section delay={0.3}>
        <Container>
              <form name="contact" method="POST" action="/?success=true" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />

                <Box borderRadius="lg" bg={useColorModeValue('#94d2bd', 'whiteAlpha.200')} p={3} mb={6} align="center">
                  <FormControl id="name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input />
                  </FormControl>
                </Box>

                <Box borderRadius="lg" bg={useColorModeValue('#94d2bd', 'whiteAlpha.200')} p={3} mb={6} align="center">
                  <FormControl id="Company">
                    <FormLabel>Company</FormLabel>
                    <Input />
                  </FormControl>
                </Box>

                <Box borderRadius="lg" bg={useColorModeValue('#94d2bd', 'whiteAlpha.200')} p={3} mb={6} align="center">
                  <FormControl id="email" isRequired>
                    <FormLabel>Email adress</FormLabel>
                    <Input 
                      type="email" 
                      id="email" 
                      name="email" 
                    />
                  </FormControl>
                </Box>

                <Box borderRadius="lg" bg={useColorModeValue('#94d2bd', 'whiteAlpha.200')} p={3} mb={6} align="center">
                  <FormControl id="name" isRequired>
                    <FormLabel>Message</FormLabel>
                    <Textarea 
                      id="message" 
                      name="message"
                      size="lg"
                    />
                  </FormControl>
                </Box>

                  <Container align="center">
                    <Button 
                      type="Submit" 
                      rightIcon={<ChevronRightIcon />}
                      colorScheme="teal"
                    >
                      Submit
                    </Button>
                  </Container>
              </form>
        </Container>
      </Section>
    </Layout>
  )
}