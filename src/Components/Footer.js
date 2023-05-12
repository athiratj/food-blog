import React from 'react';
import { Box, Image, Container, Heading, Text, Flex, UnorderedList, ListItem, useMediaQuery } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/Logo.svg';

const Footer = () => {
    const [isNotMobile] = useMediaQuery("(min-width:600px)");

    return(
        <Flex justifyContent="space-between" w="100%" bgColor="#F8F8F8" fontFamily="sourcesans" 
            h={isNotMobile ? "362px" : "608px"}
            px={isNotMobile ? "103px" : "41px"} 
            pt={isNotMobile ? "84px" : "52px"} 
            pb={isNotMobile ? "92px" : "107px"} 
            direction={isNotMobile ? "row" : "column"}
            // display={isNotMobile ? "flex" : "block"}
            gap={isNotMobile ? "auto" : "30px"}>
            <Image alignSelf="center" src={logo} alt="truck logo"
                w={isNotMobile ? "161px": "75px"} 
                h={isNotMobile ? "125px" : "58px"}/>
            <Box>
                <Heading color="#0E2368" fontWeight="600" letterSpacing="3%"
                    fontSize={isNotMobile ? "19px" : "16px"}  
                    lineHeight={isNotMobile ? "27px" : "35px"}  
                    mb={isNotMobile ? "14px" : "2px"}>Contact Us</Heading>
                <Box color="#646874" fontWeight="400"
                    fontSize={isNotMobile ? "15px" : "9px"}  
                    lineHeight={isNotMobile ? "23px" : "12px"}
                    w={isNotMobile ? "232px" : "300px"}>
                    <Text>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</Text>
                    <Text py={isNotMobile ? "15px" : "10px"}>example2020@gmal.com</Text>
                    <Text>(904)-443-0343</Text>
                </Box>
            </Box>
            <UnorderedList listStyleType="none" ml="0">
                <ListItem mb={isNotMobile ? "14px" : 0}><Heading color="#0E2368" fontWeight="600" letterSpacing="3%"
                    fontSize={isNotMobile ? "19px" : "16px"}  
                    lineHeight={isNotMobile ? "27px" : "35px"}  
                    mb={isNotMobile ? "14px" : 0}>More</Heading></ListItem>
                <Flex flexDirection="column" justifyContent="space-evenly" gap={isNotMobile ? "14px" : "0px"} color="#646874" fontWeight="400"  
                    fontSize={isNotMobile ? "15px" : "9px"} 
                    lineHeight={isNotMobile ? "27px" : "19px"}>
                    <ListItem>About Us</ListItem>
                    <ListItem>Products</ListItem>
                    <ListItem>Career</ListItem>
                    <ListItem>Contact Us</ListItem>
                </Flex>
            </UnorderedList>
            <Flex justifyContent="space-between"
                direction={isNotMobile ? "column" : "column-reverse"} 
                gap={isNotMobile ? "100px" : "16px"} >
                <Box pl={isNotMobile ? "64px" : 0}>
                    <Heading color="#0E2368" fontSize="19px" fontWeight="600" lineHeight="27px" letterSpacing="3%" mb="11px"
                        display={isNotMobile ? "block" : "none"}>Social Links</Heading>
                    <Flex 
                        justifyContent={isNotMobile ? "space-between" : "center"} color="#0E2368" 
                        gap={isNotMobile ? "auto" : "20px"}>
                        <FontAwesomeIcon size={isNotMobile ? "xl" : "sm"} icon={faInstagram} />
                        <FontAwesomeIcon size={isNotMobile ? "xl" : "sm"} icon={faTwitter} />
                        <FontAwesomeIcon size={isNotMobile ? "xl" : "sm"} icon={faFacebookF} />
                    </Flex>
                </Box>
                <Text alignSelf="center" color="#828B9C" fontWeight="400"  fontFamily="roboto"  
                    fontSize={isNotMobile ? "15px" : "9px"}>&copy; 2022 Food Truck Example</Text>
            </Flex>
        </Flex>

    );
}

export default Footer;