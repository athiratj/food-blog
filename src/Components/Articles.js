import { Flex, Box, Card, CardHeader, CardBody, CardFooter, Image, Text, Button, Heading, useMediaQuery } from "@chakra-ui/react";
import React, { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import meal1 from '../assets/meal1.png';
import meal2 from '../assets/meal2.png';
import meal3 from '../assets/meal3.png';
import meal4 from '../assets/meal4.png';
import meal5 from '../assets/meal5.png';
import meal6 from '../assets/meal6.png';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 990 },
        items: 3,
        slidesToSlide: 3, 
    },
   
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 1,
        slidesToSlide: 1,
    },
  };

const Articles = () => {
    const carouselRef = useRef(null);
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
        {
            id: 4,
            title: 'How To Grill Corn',
            imageUrl: `${meal4}`,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
        },
        {
            id: 5,
            title: 'Crunchwrap Supreme',
            imageUrl: `${meal5}`,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
        },
          {
            id: 6,
            title: 'Broccoli Cheese Soup',
            imageUrl: `${meal6}`,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
          }
      ];

    const [isNotMobile] = useMediaQuery("(min-width:600px)");

    const returnCard = (recipe, index) => {
        return (
          <Card
            w={isNotMobile ? "381px" : "271px"}
            h={isNotMobile ? "554px" : "484px"}
            borderRadius="21px"
            border="1px solid #93A2D361"
            key={index}
          >
            <CardHeader
              px={isNotMobile ? "27px" : "33px"}
              py={isNotMobile ? "27px" : "40px"}
            >
              <Image src={recipe.imageUrl} alt="meal1"></Image>
            </CardHeader>
            <CardBody
              mb="27.41px"
              overflow="hidden"
              mx={isNotMobile ? "43px" : "auto"}
              w={isNotMobile ? "295px" : "236px"}
            >
              <Heading
                color="#0E2368"
                fontWeight="700"
                fontFamily="poppins"
                mb={isNotMobile ? "14px" : "6px"}
                fontSize={isNotMobile ? "21px" : "16px"}
                lineHeight={isNotMobile ? "27px" : "35px"}
                textAlign={isNotMobile ? "justify" : "center"}
                letterSpacing="5%"
              >
                {recipe.title}
              </Heading>
              <Text
                fontWeight="400"
                fontFamily="opensans"
                px={isNotMobile ? "0px" : "20px"}
                fontSize={isNotMobile ? "15px" : "12px"}
                lineHeight={isNotMobile ? "27px" : "22px"}
                letterSpacing="-2%"
              >
                {recipe.text}
              </Text>
            </CardBody>
            <CardFooter
              ml={isNotMobile ? "43px" : "0"}
              mb="40px"
              w={isNotMobile ? "295px" : "271px"}
              px={isNotMobile ? "0" : "76px"}
            >
              <Button
                variant="outline"
                borderRadius={isNotMobile ? "21px" : "27px"}
                w={isNotMobile ? "131px" : "118px"}
                h={isNotMobile ? "42px" : "26px"}
                border={isNotMobile ? "1px solid #424961" : "2px solid #424961"}
              >
                <Text
                  fontWeight="600"
                  fontFamily="sourcesans"
                  fontSize={isNotMobile ? "16px" : "11px"}
                  lineHeight="35px"
                >
                  Read More
                </Text>
              </Button>
            </CardFooter>
          </Card>
        );
      };
     
      let renderFistHalf, renderSecondHalf;
     
      if (!isNotMobile) {
        const middleIndex = Math.ceil(recipes.length / 2);
        const firstHalf = [...recipes].splice(0, middleIndex);
        const secondHalf = [...recipes].splice(-middleIndex);
        renderFistHalf = firstHalf.map((recipe, index) => returnCard(recipe, index));
        renderSecondHalf = secondHalf.map((recipe, index) => returnCard(recipe, index));
      }
     
      const renderAllCards = recipes.map((recipe, index) => returnCard(recipe, index));

    return(
        <Box m={isNotMobile ? "158px auto" : "132px auto 0 auto"} 
            px={isNotMobile ? "108px": "52px"} 
            h={isNotMobile ? "680px" : "1783px"} 
            align={isNotMobile ? "left" : "center"} >
            <Heading color="#0E2368" fontWeight="600" fontFamily="poppins" letterSpacing="4%" margin="0 auto 80px auto"
                fontSize={isNotMobile ? "56px" : "28px"} 
                lineHeight={isNotMobile ? "42px" : "54px"}
                w={isNotMobile ? "1225px" : "271px"}>Latest Articles</Heading>
            <Carousel
                ref={carouselRef}
                swipeable={false}
                draggable={false}
                showDots={false}
                arrows={false}
                renderButtonGroupOutside
                customButtonGroup={<CustomButtons isNotMobile={isNotMobile} />}
                renderDotsOutside={false}
                responsive={responsive}
                customTransition="transform 500ms ease-in-out"
                transitionDuration={500}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                slidesToSlide={3}>
                {!isNotMobile ? [<div>{renderFistHalf}</div>, <div>{renderSecondHalf}</div>] : [...renderAllCards]}
            </Carousel>
        </Box> 
    )}

export default Articles;

const CustomButtons = ({ isNotMobile, next, previous, goToSlide, ...rest }) => {
    const handleLeftClick = () => { previous(); };
    const handleRightClick = () => { next(); };
    const { carouselState: { currentSlide }, } = rest;

    return (
      <Flex
        justifyContent="space-around" alignItems="center"color="#424961" 
        width={isNotMobile ? "114px" : "75px"}
        margin={isNotMobile ? "64px auto 0 auto" : "59px auto 0 auto"}
      >
        <Button variant="outline" border="1px solid #AFAFAF"
          size={isNotMobile ? "sm" : "xs"}
          onClick={handleLeftClick}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </Button>
        <Text fontFamily="sourcesans" lineHeight="27px"
          fontSize={isNotMobile ? "22px" : "12px"}
        >
          {currentSlide === 0 ? "1" : "2"}/2
        </Text>
        <Button variant="outline" border="1px solid #AFAFAF"
          size={isNotMobile ? "sm" : "xs"}
          onClick={handleRightClick}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </Button>
      </Flex>
    );
  };

    