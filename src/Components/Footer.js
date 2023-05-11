import React from 'react';
import { Box, Stack, Image, Container, Heading, Text, Button, Flex, UnorderedList, ListItem } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/Logo.svg';

const Footer = () => {
    return(
        <Container >
            <Flex justifyContent="space-between" w="100%" h="362px" px="103px" pt="84px" pb="92px" bgColor="#F8F8F8">
                <Image w="161px" h="125px" alignSelf="center" src={logo} alt="truck logo"></Image>
                <Flex justifyContent="space-around" gap="192px">
                    <Box>
                        <Heading color="#0E2368" fontSize="19px" fontWeight="600" lineHeight="27px" letterSpacing="3%" mb="14px">Contact Us</Heading>
                        <Box color="#646874" fontSize="15px" fontWeight="400" lineHeight="23px">
                            <Text>Lorem Ipsum Pvt Ltd.5/1, Magalton<br/> Road, Phartosh Gate near YTM<br/> Market, XYZ-343434</Text>
                            <Text py="15px">example2020@gmal.com</Text>
                            <Text>(904)-443-0343</Text>
                        </Box>
                    </Box>
                    <UnorderedList listStyleType="none" >
                        <ListItem mb="14px"><Heading color="#0E2368" fontSize="19px" fontWeight="600" lineHeight="27px" letterSpacing="3%">More</Heading></ListItem>
                        <Flex flexDirection="column" justifyContent="space-evenly" gap="14px" color="#646874" fontSize="15px" fontWeight="400" lineHeight="27px">
                            <ListItem>About Us</ListItem>
                            <ListItem>Products</ListItem>
                            <ListItem>Career</ListItem>
                            <ListItem>Contact Us</ListItem>
                        </Flex>
                    </UnorderedList>
                </Flex>
                <Box>
                    <Box pl="64px">
                        <Heading color="#0E2368" fontSize="19px" fontWeight="600" lineHeight="27px" letterSpacing="3%" mb="11px">Social Links</Heading>
                        <Flex justifyContent="space-between" color="#0E2368">
                            <FontAwesomeIcon size="xl" icon={faInstagram} />
                            <FontAwesomeIcon size="xl" icon={faTwitter} />
                            <FontAwesomeIcon size="xl" icon={faFacebookF} />
                        </Flex>
                    </Box>
                    <Text color="#828B9C" fontSize="15px" fontWeight="400" lineHeight="25px" mt="100px">&copy;  2022 Food Truck Example</Text>
                </Box>
            </Flex>

        </Container>
    );
}

export default Footer;