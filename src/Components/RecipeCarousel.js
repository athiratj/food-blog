import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const RecipeCarousel = ( ) => {
    const recipes = [
        {
          id: 1,
          title: 'Recipe 1',
          imageUrl: 'https://via.placeholder.com/300x200?text=Recipe+1',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a gravida massa.',
        },
        {
          id: 2,
          title: 'Recipe 2',
          imageUrl: 'https://via.placeholder.com/300x200?text=Recipe+2',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a gravida massa.',
        },
        {
          id: 3,
          title: 'Recipe 3',
          imageUrl: 'https://via.placeholder.com/300x200?text=Recipe+3',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a gravida massa.',
        },
        {
          id: 4,
          title: 'Recipe 4',
          imageUrl: 'https://via.placeholder.com/300x200?text=Recipe+4',
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
      <Flex align="center" justify="space-between" mb={6}>
        <Heading size="lg">Latest Recipes</Heading>
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
      </Flex>
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
              <Box>
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
              </Button>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Container>
  );
};

export default RecipeCarousel;
