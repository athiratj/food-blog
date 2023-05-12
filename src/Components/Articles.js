
import { SimpleGrid, Flex, Box, Card, CardHeader, CardBody, CardFooter, Image, Text, Button, Heading, useMediaQuery } from "@chakra-ui/react";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import meal1 from '../assets/meal1.png';
import meal2 from '../assets/meal2.png';
import meal3 from '../assets/meal3.png';
import meal4 from '../assets/meal4.png';
import meal5 from '../assets/meal5.png';
import meal6 from '../assets/meal6.png';

const Articles = () => {
    const recipes = [
        {
            id: 1,
            title: 'Grilled Tomatoes at Home',
            imageUrl: `${meal1}`,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
        },
        {
            id: 2,
            title: 'Snacks for Travel',
            imageUrl: `${meal2}`,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
        },
        {
            id: 3,
            title: 'Post-workout Recipes',
            imageUrl: `${meal3}`,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
        },
        // {
        //     id: 4,
        //     title: 'How To Grill Corn',
        //     imageUrl: `${meal4}`,
        //     text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
        // },
        // {
        //     id: 5,
        //     title: 'Crunchwrap Supreme',
        //     imageUrl: `${meal5}`,
        //     text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
        // },
        //   {
        //     id: 6,
        //     title: 'Broccoli Cheese Soup',
        //     imageUrl: `${meal6}`,
        //     text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
        //   }
      ];

    const [isNotMobile] = useMediaQuery("(min-width:600px)");
    const [slideIndex, setSlideIndex] = useState(0);

    const handleLeftClick = () => {
        setSlideIndex(slideIndex === 0 ? recipes.length - 1 : slideIndex - 1);
    };

    const handleRightClick = () => {
        setSlideIndex(slideIndex === recipes.length - 1 ? 0 : slideIndex + 1);
    };


    return(
        <Box m={isNotMobile ? "158px auto" : "132px auto 0 auto"} 
            px={isNotMobile ? "108px": "52px"} 
            h={isNotMobile ? "680px" : "1783px"} 
            textAlign={isNotMobile ? "left" : "center"} >
            <Heading color="#0E2368" fontWeight="600" fontFamily="poppins" letterSpacing="4%" margin="0 auto"
                fontSize={isNotMobile ? "56px" : "28px"}
                lineHeight={isNotMobile ? "42px" : "54px"}
                w={isNotMobile ? "1225px" : "271px"}>Latest Articles</Heading>
            <SimpleGrid spacingX='41px' spacingY='61px' minChildWidth='271px' margin="0 auto"    
            w={isNotMobile ? "1225px" : "271px"}
            colums={isNotMobile ? 3 : 1} 
            // columns={{sm: 1, md: 3}} 
            mt={isNotMobile ? "82px": "23px"}>
                {recipes.map((recipe, index) => (
                    <Card w={isNotMobile ? "381px" : "271px"} 
                    h={isNotMobile ? "554px" : "484px"}  
                    borderRadius="21px" border="1px solid #93A2D361" key={index}>
                    <CardHeader px={isNotMobile ? "27px" : "33px"} py={isNotMobile ? "27px" : "40px"}>
                        <Image src={recipe.imageUrl} alt="meal1"></Image>
                    </CardHeader>
                    <CardBody mb="27.41px" overflow="hidden"
                    mx={isNotMobile ? "43px": "auto"} 
                    w={isNotMobile ? "295px" : "236px"}>
                        <Heading color="#0E2368" fontWeight="700" fontFamily="poppins"
                            mb={isNotMobile ? "14px": "6px"}
                            fontSize={isNotMobile ? "21px" : "16px"}
                            lineHeight={isNotMobile ? "27px" : "35px"}
                            textAlign={isNotMobile ? "justify" : "center"}
                            letterSpacing="5%">{recipe.title}</Heading>
                        <Text fontWeight="400" fontFamily="opensans"
                            px={isNotMobile ? "0px": "20px"}
                            fontSize={isNotMobile ? "15px" : "12px"} 
                            lineHeight={isNotMobile ? "27px" : "22px"}
                            letterSpacing="-2%">{recipe.text}</Text>
                    </CardBody>
                    <CardFooter ml={isNotMobile ? "43px" : "0"} mb="40px" w={isNotMobile ? "295px" : "271px"} px={isNotMobile ? "0" : "76px"}>
                        <Button variant="outline" 
                        borderRadius={isNotMobile ? "21px" : "27px"} 
                        w={isNotMobile ? "131px" : "118px"} 
                        h={isNotMobile ? "42px" : "26px"} 
                        border={isNotMobile ? "1px solid #424961" : "2px solid #424961"}>
                            <Text fontWeight="600" fontFamily="sourcesans" fontSize={isNotMobile ? "16px" : "11px"} lineHeight="35px">Read More</Text></Button>
                    </CardFooter>
                </Card>
                ))}    
            </SimpleGrid>
            <Flex justifyContent="space-around" alignItems="center" color="#424961" 
                width={isNotMobile ? "114px" : "75px"} 
                margin={isNotMobile ? "64px auto 0 auto" : "59px auto 0 auto"}>
            {/* color="#AFAFAF" */}
                <Button variant="outline" size={isNotMobile ? "sm" : "xs"} onClick={handleLeftClick} border="1px solid #AFAFAF">
                    <FontAwesomeIcon  icon={faChevronLeft} />
                </Button>
                <Text fontFamily="sourcesans" fontSize={isNotMobile ? "22px" : "12px"} lineHeight="27px">1/2</Text>
                <Button variant="ghost" size={isNotMobile ? "sm" : "xs"} onClick={handleRightClick} border="1px solid #AFAFAF">
                    <FontAwesomeIcon icon={faChevronRight} />
                </Button>
            </Flex>
        </Box>

    )



}
export default Articles;

    
