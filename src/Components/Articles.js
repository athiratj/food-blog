
import { SimpleGrid, Box, Card, CardHeader, CardBody, CardFooter, Image, Text, Button, Heading } from "@chakra-ui/react";
import React from "react";
import meal1 from '../assets/meal1.png';
import meal2 from '../assets/meal2.png';
import meal3 from '../assets/meal3.png';
import meal4 from '../assets/meal4.png';
import meal5 from '../assets/meal5.png';
import meal6 from '../assets/meal6.png';

const Articles = () => {

    return(
        <Box my="158px" mx="108px" h="680px">
            <Heading color="#0E2368" fontSize="56px" fontWeight="600" fontFamily="sans-serif" lineHeight="42px" letterSpacing="4%">Latest Articles</Heading>
            <SimpleGrid spacing={4} mt="82px" templateColumns='repeat(auto-fill, minmax(400px, 3fr))'>
                <Card w="381px" h="554px" border="1px solid #93A2D361" borderRadius="21px">
                    <CardHeader>
                        <Image p="27px" src={meal1} alt="meal1"></Image>
                    </CardHeader>
                    <CardBody mx="43px" mb="27.41px" w="295px" overflow="hidden">
                        <Heading color="#0E2368" mb="14px" fontSize="21px" fontWeight="700" lineHeight="27px">Grilled Tomatoes at Home</Heading>
                        <Text fontSize="15px" fontWeight="400" lineHeight="27px">PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</Text>
                    </CardBody>
                    <CardFooter ml="43px" mb="40px" p="3px, 26px, 3px, 26px" w="295px">
                        <Button borderRadius="21px" w="131px" h="42px" variant="outline" border="1px solid #424961">Read More</Button>
                    </CardFooter>
                </Card>
                <Card w="381px" h="554px" border="1px solid #93A2D361" borderRadius="21px">
                    <CardHeader>
                        <Image p="27px" src={meal1} alt="meal1"></Image>
                    </CardHeader>
                    <CardBody mx="43px" mb="27.41px" w="295px" overflow="hidden">
                        <Heading color="#0E2368" mb="14px" fontSize="21px" fontWeight="700" lineHeight="27px">Grilled Tomatoes at Home</Heading>
                        <Text fontSize="15px" fontWeight="400" lineHeight="27px">PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</Text>
                    </CardBody>
                    <CardFooter ml="43px" mb="40px" p="3px, 26px, 3px, 26px" w="295px">
                        <Button borderRadius="21px" w="131px" h="42px" variant="outline" border="1px solid #424961">Read More</Button>
                    </CardFooter>
                </Card>
                <Card w="381px" h="554px" border="1px solid #93A2D361" borderRadius="21px">
                    <CardHeader>
                        <Image p="27px" src={meal1} alt="meal1"></Image>
                    </CardHeader>
                    <CardBody mx="43px" mb="27.41px" w="295px" overflow="hidden">
                        <Heading color="#0E2368" mb="14px" fontSize="21px" fontWeight="700" lineHeight="27px">Grilled Tomatoes at Home</Heading>
                        <Text fontSize="15px" fontWeight="400" lineHeight="27px">PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</Text>
                    </CardBody>
                    <CardFooter ml="43px" mb="40px" p="3px, 26px, 3px, 26px" w="295px">
                        <Button borderRadius="21px" w="131px" h="42px" variant="outline" border="1px solid #424961">Read More</Button>
                    </CardFooter>
                </Card>
        
            </SimpleGrid>
        </Box>

    )



}
export default Articles;

    
