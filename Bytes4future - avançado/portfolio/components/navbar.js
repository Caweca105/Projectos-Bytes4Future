import Logo from './Logo';
import NextLink from 'next/link';
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button.js'
import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, path, _target, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return(
        <NextLink href={href}>
            <Link
            p={2}
            bg={active ? 'glassTeal' : undefined}
            color={active ? '#202023' : inactiveColor}
            _target={_target}
            {...props}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props

    return (
        <Box
        position="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue('#ffffff40', '#20202390')}
        style={{backdropFilter: 'blur(10px'}}
        zIndex={1}
        {...props}
        >
            <Container 
            display="flex" 
            p={2} 
            maxW="container.md" 
            wrap="wrap" 
            align="center" 
            justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>

                <Stack
                direction={{base: 'column', md: 'row'}} 
                display={{base: 'none', md:'flex'}}
                width={{base: 'full', md:'auto'}}
                alignItems="center"
                flexGrow={1}
                mt={{ base: 4, md: 0 }}
                >
                    <LinkItem href="/projects" path={path}>
                        Projects
                    </LinkItem>
                    <LinkItem href="/about" path={path}>
                        About
                    </LinkItem>
                    <LinkItem href="/contacts" path={path}>
                        Contacts
                    </LinkItem>
                    <LinkItem 
                    _target="_blank"
                    href="https://github.com/Caweca105"
                    path={path}
                    display="inline-flex"
                    align="center"
                    style={{ gap: 4 }}
                    pl={2}
                    >
                        <IoLogoGithub />
                        Source
                    </LinkItem>
                </Stack>
                <Box flex={1} align="right">
                    <ThemeToggleButton />
                    <Box ml={2} display={{base: 'inline-block', md:'none'}}>
                        <Menu isLazy id="navbar-menu">
                            <MenuButton 
                                as={IconButton} 
                                icon ={<HamburgerIcon />} 
                                variant="outline" 
                                aria-label="Options"
                            />
                            <MenuList>
                                <NextLink href="/projects" passHref>
                                    <MenuItem as={Link}>Projects</MenuItem>
                                </NextLink>
                                <NextLink href="/about" passHref>
                                    <MenuItem as={Link}>About</MenuItem>
                                </NextLink>
                                <NextLink href="/contacts" passHref>
                                    <MenuItem as={Link}>Contact Me</MenuItem>
                                </NextLink>
                                    <MenuItem 
                                        as={Link} 
                                        href="https://github.com/Caweca105"
                                    >
                                        View Source
                                    </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar