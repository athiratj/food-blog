import React from "react";
import { Box, Stack, Image, Container, Heading, Text, Button } from '@chakra-ui/react';
import about from '../assets/About.png'

const About = () => {
    return(
        <Container w="100%" h="467px" mt="186px" bgColor="#303E820A">
            <Stack direction="row" align='center' px="205px" spacing='200px'>
                <Image src={about} alt="about" w="384px" h="468px"></Image>
                <Box my="107px">
                    <Heading color="#0E2368" fontSize="45px" fontWeight="600" lineHeight="27px">About Us</Heading>
                    <Text mt="27.41px" color="#444957" fontSize="15px" fontWeight="400" lineHeight="27px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                    <Button w="132px" h="42px" p="3px, 26px, 3px, 26px" borderRadius="21px" mt="21px" bg='#E23744' color="#FFFFFF" variant='solid'>Read More</Button>
                </Box>
            </Stack>
        </Container>
    );
}

export default About;