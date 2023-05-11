
import { SimpleGrid, Box, Card, CardHeader, CardBody, CardFooter, Image, Text, Button, Heading, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import meal1 from '../assets/meal1.png';
import meal2 from '../assets/meal2.png';
import meal3 from '../assets/meal3.png';
import meal4 from '../assets/meal4.png';
import meal5 from '../assets/meal5.png';
import meal6 from '../assets/meal6.png';

const Articles = () => {

    const [isNotMobile] = useMediaQuery("(min-width:600px)");

    return(
        <Box minW="375px" my={isNotMobile ? "158px" : "132px"} 
            px={isNotMobile ? "108px": "52px"} 
            h={isNotMobile ? "680px" : "1783"} 
            textAlign={isNotMobile ? "left" : "center"}>
            <Heading color="#0E2368" fontWeight="600" fontFamily="sans-serif" letterSpacing="4%" 
                fontSize={isNotMobile ? "56px" : "28px"}
                lineHeight={isNotMobile ? "42px" : "54px"}
                w={isNotMobile ? "100%" : "271px"}>Latest Articles</Heading>
            <SimpleGrid spacingX='41px' spacingY='61px' minChildWidth='271px' w={isNotMobile ? "100%" : "271px"}
            colums={isNotMobile ? 3 : 1} 
            // columns={{sm: 1, md: 3}} 
            mt={isNotMobile ? "82px": "23px"}>
                <Card w={isNotMobile ? "381px" : "271px"} 
                    h={isNotMobile ? "554px" : "484px"}  
                    borderRadius="21px" border="1px solid #93A2D361">
                    <CardHeader px={isNotMobile ? "27px" : "33px"} py={isNotMobile ? "27px" : "40px"}>
                        <Image src={meal1} alt="meal1"></Image>
                    </CardHeader>
                    <CardBody mb="27.41px" overflow="hidden"
                    mx={isNotMobile ? "43px": "auto"} 
                    w={isNotMobile ? "295px" : "236px"}>
                        <Heading color="#0E2368" fontWeight="700" 
                            mb={isNotMobile ? "14px": "6px"}
                            fontSize={isNotMobile ? "21px" : "16px"}
                            lineHeight={isNotMobile ? "27px" : "35px"}
                            textAlign={isNotMobile ? "justify" : "center"}
                            letterSpacing="5%">Grilled Tomatoes at Home</Heading>
                        <Text fontWeight="400"
                            px={isNotMobile ? "0px": "20px"}
                            fontSize={isNotMobile ? "15px" : "12px"} 
                            lineHeight={isNotMobile ? "27px" : "22px"}
                            letterSpacing="-2%">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....</Text>
                    </CardBody>
                    <CardFooter ml={isNotMobile ? "43px" : "0"} mb="40px" w={isNotMobile ? "295px" : "271px"} px={isNotMobile ? "0" : "76px"}>
                        <Button variant="outline" 
                        borderRadius={isNotMobile ? "21px" : "27px"} 
                        w={isNotMobile ? "131px" : "118px"} 
                        h={isNotMobile ? "42px" : "26px"} 
                        border={isNotMobile ? "1px solid #424961" : "2px solid #424961"}>
                            <Text fontWeight="600" fontSize={isNotMobile ? "16px" : "11px"} lineHeight={isNotMobile ? "35px" : "46px"}>Read More</Text></Button>
                    </CardFooter>
                </Card>
                <Card w={isNotMobile ? "381px" : "271px"} 
                    h={isNotMobile ? "554px" : "484px"}  
                    borderRadius="21px" border="1px solid #93A2D361">
                    <CardHeader px={isNotMobile ? "27px" : "33px"} py={isNotMobile ? "27px" : "40px"}>
                        <Image src={meal1} alt="meal1"></Image>
                    </CardHeader>
                    <CardBody mb="27.41px" overflow="hidden"
                    mx={isNotMobile ? "43px": "auto"} 
                    w={isNotMobile ? "295px" : "236px"}>
                        <Heading color="#0E2368" fontWeight="700" 
                            mb={isNotMobile ? "14px": "6px"}
                            fontSize={isNotMobile ? "21px" : "16px"}
                            lineHeight={isNotMobile ? "27px" : "35px"}
                            textAlign={isNotMobile ? "justify" : "center"}
                            letterSpacing="5%">Grilled Tomatoes at Home</Heading>
                        <Text fontWeight="400"
                            px={isNotMobile ? "0px": "20px"}
                            fontSize={isNotMobile ? "15px" : "12px"} 
                            lineHeight={isNotMobile ? "27px" : "22px"}
                            letterSpacing="-2%">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....</Text>
                    </CardBody>
                    <CardFooter ml={isNotMobile ? "43px" : "0"} mb="40px" w={isNotMobile ? "295px" : "271px"} px={isNotMobile ? "0" : "76px"}>
                        <Button variant="outline" 
                        borderRadius={isNotMobile ? "21px" : "27px"} 
                        w={isNotMobile ? "131px" : "118px"} 
                        h={isNotMobile ? "42px" : "26px"} 
                        border={isNotMobile ? "1px solid #424961" : "2px solid #424961"}>
                            <Text fontWeight="600" fontSize={isNotMobile ? "16px" : "11px"} lineHeight={isNotMobile ? "35px" : "46px"}>Read More</Text></Button>
                    </CardFooter>
                </Card>
                <Card w={isNotMobile ? "381px" : "271px"} 
                    h={isNotMobile ? "554px" : "484px"}  
                    borderRadius="21px" border="1px solid #93A2D361">
                    <CardHeader px={isNotMobile ? "27px" : "33px"} py={isNotMobile ? "27px" : "40px"}>
                        <Image src={meal1} alt="meal1"></Image>
                    </CardHeader>
                    <CardBody mb="27.41px" overflow="hidden"
                    mx={isNotMobile ? "43px": "auto"} 
                    w={isNotMobile ? "295px" : "236px"}>
                        <Heading color="#0E2368" fontWeight="700" 
                            mb={isNotMobile ? "14px": "6px"}
                            fontSize={isNotMobile ? "21px" : "16px"}
                            lineHeight={isNotMobile ? "27px" : "35px"}
                            textAlign={isNotMobile ? "justify" : "center"}
                            letterSpacing="5%">Grilled Tomatoes at Home</Heading>
                        <Text fontWeight="400"
                            px={isNotMobile ? "0px": "20px"}
                            fontSize={isNotMobile ? "15px" : "12px"} 
                            lineHeight={isNotMobile ? "27px" : "22px"}
                            letterSpacing="-2%">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....</Text>
                    </CardBody>
                    <CardFooter ml={isNotMobile ? "43px" : "0"} mb="40px" w={isNotMobile ? "295px" : "271px"} px={isNotMobile ? "0" : "76px"}>
                        <Button variant="outline" 
                        borderRadius={isNotMobile ? "21px" : "27px"} 
                        w={isNotMobile ? "131px" : "118px"} 
                        h={isNotMobile ? "42px" : "26px"} 
                        border={isNotMobile ? "1px solid #424961" : "2px solid #424961"}>
                            <Text fontWeight="600" fontSize={isNotMobile ? "16px" : "11px"} lineHeight={isNotMobile ? "35px" : "46px"}>Read More</Text></Button>
                    </CardFooter>
                </Card>
        
            </SimpleGrid>
        </Box>

    )



}
export default Articles;

    
