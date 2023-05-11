import React from "react";
import { Box, Image, Text, Flex, Spacer, Button, Container, Heading, useMediaQuery } from '@chakra-ui/react';
import logo from '../assets/Logo.svg';
import pizza from '../assets/Home-pizza.png';
import design from '../assets/Design-pizza.svg';


const Home = () => {

    const[isNotMobile] = useMediaQuery("(min-width:600px)");

    return(
        <Box bg="#FFFFFF" bgImage={`url(${pizza})`} bgPos="right" bgRepeat="no-repeat" 
            bgSize={isNotMobile ? "50% 100%" : "100% 100%"} 
            h={isNotMobile ? "804px": "413px"} maxW="100vw">
            <Flex justifyContent="space-between">
                <Box ml="100px" mt="33px">
                    <Image w="107px" h="83px" src={logo} alt='logo' display={isNotMobile ? "block" : "none"}/>
                </Box>
                <Spacer/>
                <Button variant="outline" border="1px solid #FFFFFF"
                    h={isNotMobile ? "42px" : "31px"}
                    mt={isNotMobile ? "32px" : "18px"} 
                    mr={isNotMobile ? "41px" : "18px"}  
                    borderRadius={isNotMobile ? "21px" : "27px"}
                    w={isNotMobile ? "122px" : "88px"} >
                    <Text color="#FFFFFF" fontSize={isNotMobile ? "16px" : "11px"} fontFamily="sans-serif" fontWeight="600" lineHeight="36px">Get In Touch</Text>
                </Button>
            </Flex>
                <Container 
                    mt={isNotMobile ? "111px" : "440px"} 
                    ml={isNotMobile ? "100px" : "auto"} 
                    textAlign={isNotMobile ? "left" : "center"}>
                    <Heading color="#0E2368" fontWeight="700" fontFamily="sans-serif" 
                        fontSize={isNotMobile ? "62px" : "38px"}  
                        lineHeight={isNotMobile ? "69px" : "46px"}>Discover The <br/><Text as="b" color="#E23744">Best</Text> Food <br/> and Drinks</Heading>
                    <Text color="#444957" fontWeight="400" fontFamily="sans-serif" 
                        mt={isNotMobile ? "26px": "21px"}
                        fontSize={isNotMobile ? "16.44px" : "11px"} 
                        lineHeight={isNotMobile ? "27.41px" : "18px"}>Naturally made Health Products for the <br/> growth and support of your baby.</Text>
                    <Button w={isNotMobile ? "190px" : "120px"} h={isNotMobile ? "63px" : "40px"} variant="solid" bg="#E23744"
                        borderRadius={isNotMobile ? "34px" : "30px"}
                        p={isNotMobile ? "14px, 34px, 14px, 34px" : "12px, 30px, 12px, 30px"}
                        mt={isNotMobile ? "41px": "28px"}>
                        <Text color="#FFFFFF" fontFamily="sans-serif" fontWeight="700" 
                            fontSize={isNotMobile ? "18px" : "12px"}
                            lineHeight={isNotMobile ? "36px" : "31.54px"}>Explore Now!</Text>
                    </Button>
                </Container>
        </Box>

    );
}

export default Home;