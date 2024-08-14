"use client"

import Head from 'next/head'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { FlipWords } from '@/components/flip-words'
import Link from 'next/link'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Welcome - Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
        <Logo>CyberSage</Logo>
        <Nav>
          <NavItem href="/about">ABOUT</NavItem>
          <NavItem href="/features">FEATURES</NavItem>
          <NavItem href="mailto:26dwivediom@gmail.com">CONTACT</NavItem>
        </Nav>
        <Link href="/sign-in" passHref>
          <SignInButton>SIGN IN</SignInButton>
        </Link>
      </Header>

      <Main>
        <Title>
          Welcome to
          <FlipWords words={["CyberSage"]} duration={3000} />
        </Title>
        <CTAButtons>
          <Button>See more</Button>
        </CTAButtons>
      </Main>

      <Graphic>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{ repeat: Infinity, duration: 5 }}
        >
          {/* Add your SVG or image here */}
        </motion.div>
      </Graphic>
    </Container>
  )
}

// Styled components
const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  background-color: #000;
  color: #fff;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`

const Logo = styled.div`
  font-size: 3rem; /* Large font size for emphasis */
  font-weight: bold;
  background: linear-gradient(90deg, #5000ca, #ff007f); /* Gradient background */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3); /* Text shadow for depth */
`

const Nav = styled.nav`
  display: flex;
`

const NavItem = styled.a`
  margin: 0 1rem;
  cursor: pointer;
`

const SignInButton = styled.button`
  background-color: #5000ca;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
`

const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem; /* Add space between title and FlipWords */
`

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem; /* Add space under the button */
`

const Button = styled.button`
  background-color: ${props => props.primary ? '#5000ca' : 'transparent'};
  color: white;
  border: ${props => props.primary ? 'none' : '1px solid white'};
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
`

const Graphic = styled.div`
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
`
