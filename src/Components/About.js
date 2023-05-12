import React from "react";
import { Box, Stack, Image, Container, Heading, Text, Button, useMediaQuery } from '@chakra-ui/react';
import about from '../assets/About.png'

const About = () => {

    const [isNotMobile] = useMediaQuery("(min-width:600px)");

    return(
        <Stack w="100%" align='center' bgColor="#303E820A" 
            px={isNotMobile ? "205px": "50"}
            h={isNotMobile ? "467px" : "516px"}
            direction={isNotMobile ? "row" : "column"}
            spacing={isNotMobile ? '200px':'140px'}
            mt={isNotMobile ? "186px" : "394px"} >
                <Image display={isNotMobile ? "block" : "none"} src={about} alt="about" w="384px" h="468px"></Image>
                <Box textAlign={isNotMobile ? "left" : "center"} w={isNotMobile ? "auto" : "275px"}>
                    <Heading color="#0E2368" fontWeight="600"
                        fontSize={isNotMobile ? "45px" : "26px"} 
                        lineHeight={isNotMobile ? "27px" : "35px"}>About Us</Heading>
                    <Text color="#444957" fontWeight="400"
                        mt={isNotMobile ? "27.41px" : "21px"}  
                        fontSize={isNotMobile ? "15px" : "11px"} 
                        lineHeight={isNotMobile ? "27px" : "21px"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</Text>
                    <Button bg='#E23744' color="#FFFFFF" variant='solid'
                        w={isNotMobile ? "132px": "96px"}
                        h={isNotMobile ? "42px" : "25px"} 
                        borderRadius={isNotMobile ? "21px" : "27px"}
                        mt={isNotMobile ? "21px" : "16px"}>
                            <Text fontSize={isNotMobile ? "16px" : "11px"} lineHeight={isNotMobile ? "36px" : "46px"}>Read More</Text>
                    </Button>
                </Box>
        </Stack>
    );
}

export default About;