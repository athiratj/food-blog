import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  Text, useMediaQuery, Card, CardHeader, CardBody, CardFooter
} from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import meal1 from '../assets/meal1.png';
import meal2 from '../assets/meal2.png';
import meal3 from '../assets/meal3.png';
import meal4 from '../assets/meal4.png';
import meal5 from '../assets/meal5.png';
import meal6 from '../assets/meal6.png';

const RecipeCarousel = ( ) => {

    const [isNotMobile] = useMediaQuery("(min-width:600px)");
    const recipes = [
        {
          id: 1,
          title: 'Recipe 1',
          imageUrl: `${meal1}`,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a gravida massa.',
        },
        {
          id: 2,
          title: 'Recipe 2',
          imageUrl: `${meal2}`,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a gravida massa.',
        },
        {
          id: 3,
          title: 'Recipe 3',
          imageUrl: `${meal3}`,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a gravida massa.',
        },
        {
          id: 4,
          title: 'Recipe 4',
          imageUrl: `${meal4}`,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a gravida massa.',
        },
      ];

  const [slideIndex, setSlideIndex] = useState(0);

  const handleLeftClick = () => {
    setSlideIndex(slideIndex === 0 ? recipes.length - 1 : slideIndex - 1);
  };

  const handleRightClick = () => {
    setSlideIndex(slideIndex === recipes.length - 1 ? 0 : slideIndex + 1);
  };

  return (
    <Container maxW="container.xl" py={8}>
        <Heading size="lg">Latest Recipes</Heading>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        pos="relative"
        overflow="hidden"
      >
        {recipes.slice(slideIndex, slideIndex + 2).map((recipe, index) => (
          <Box
            key={index}
            w={{ base: "100%", md: "50%" }}
            pl={{ md: index === 1 ? 4 : 0 }}
            pt={{ base: index === 1 ? 4 : 0, md: 0 }}
            mb={{ base: index === 1 ? 8 : 0, md: 0 }}
          >
            <Flex direction="column" justify="space-between" h="100%">
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
                            letterSpacing="5%">{recipe.name}</Heading>
                        <Text fontWeight="400"
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
                            <Text fontWeight="600" fontSize={isNotMobile ? "16px" : "11px"} lineHeight="35px">Read More</Text></Button>
                    </CardFooter>
                </Card>
              {/* <Box>
                <Image
                  src={recipe.imageUrl}
                  alt={recipe.name}
                  objectFit="cover"
                  h={{ base: "200px", md: "100%" }}
                />
                <Box py={4}>
                  <Heading size="md">{recipe.name}</Heading>
                  <Text mt={2}>{recipe.text}</Text>
                </Box>
              </Box>
              <Button variant="ghost" mt={4}>
                Read More
              </Button> */}
            </Flex>
          </Box> 
        ))}
      </Flex>
      <Flex align="center">
          <Button
            variant="ghost"
            size="lg"
            onClick={handleLeftClick}
            mr={4}
          >
            <Icon as={FaChevronLeft} />
          </Button>
          <Button variant="ghost" size="lg" onClick={handleRightClick}>
            <Icon as={FaChevronRight} />
          </Button>
      </Flex>
    </Container>
  );
};

export default RecipeCarousel;
