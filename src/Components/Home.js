import React from "react";
import { Box, Image, Text, Flex, Spacer, Button, Container, Heading } from '@chakra-ui/react';
import logo from '../assets/Logo.svg';
import pizza from '../assets/Home-pizza.png';
import design from '../assets/Design-pizza.svg';

const Home = () => {
    return(
        <Box bg="#FFFFFF" minH="100vh" bgImage={`url(${pizza})`} bgPos="right bottom, right top" bgRepeat="no-repeat, no-repeat">
            <Flex justifyContent="space-between">
                <Box ml="100px" mt="33px"><Image w="107px" h="83px" src={logo} alt='logo' /></Box>
                <Spacer/>
                <Button mt="32px" mr="41px" borderRadius="21px" w="122px" h="42px" variant="outline" border="1px solid #FFFFFF">
                    <Text color="#FFFFFF" fontSize="16px" fontFamily="sans-serif" fontWeight="600" lineHeight="36px">Get In Touch</Text>
                </Button>
            </Flex>
                <Container top="227px" left="100px" position="absolute">
                    <Heading color="#0E2368" fontSize="62px" fontWeight="700" fontFamily="sans-serif" lineHeight="69px">Discover The <br/><Text as="b" color="#E23744">Best</Text> Food <br/> and Drinks</Heading>
                    <Text mt="26px" color="#444957" fontWeight="400" fontSize="16.44px" fontFamily="sans-serif" lineHeight="27.41px">Naturally made Health Products for the <br/> growth and support of your baby.</Text>
                    <Button mt="41px" p="14px, 34px, 14px, 34px" borderRadius="34px" w="190px" h="63px" variant="solid" bg="#E23744">
                        <Text color="#FFFFFF" fontSize="18px" fontFamily="sans-serif" fontWeight="700" lineHeight="36px">Explore Now!</Text>
                    </Button>
                </Container>
        </Box>

    );
}

export default Home;