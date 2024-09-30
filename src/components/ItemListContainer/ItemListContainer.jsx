import React from 'react';
import { Box, Center, Stack, Heading, Text, Image, useColorModeValue } from '@chakra-ui/react';
import { GiOldKing } from 'react-icons/gi';

export const ItemListContainer = ({ products = [] }) => { 
    if (!Array.isArray(products)) {
        console.error("Products is not an array");
        return null; 
    }

    return (
        <Center py={12}>
            <Stack spacing={8} direction={{ base: 'column', md: 'row' }} wrap="wrap" justify="center">
                {products.map((item) => (
                    <Box
                        role={'group'}
                        p={6}
                        maxW={'330px'}
                        w={'full'}
                        bg={useColorModeValue("pink")}
                        boxShadow={'2xl'}
                        rounded={'lg'}
                        pos={'relative'}
                        zIndex={1}
                        key={item.id}
                    >
                        <Box
                            rounded={'lg'}
                            mt={-12}
                            pos={'relative'}
                            height={'230px'}
                        >
                            <Image
                                rounded={'lg'}
                                height={230}
                                width={282}
                                objectFit={'cover'}
                                src={item.thumbnail} 
                                alt={item.name}  
                            />
                        </Box>
                        <Stack pt={10} align={'center'}>
                            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                                Brand
                            </Text>
                            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                                {item.name || "Nice Chair, pink"}
                            </Heading>
                            <Stack direction={'row'} align={'center'}>
                                <Text fontWeight={800} fontSize={'xl'}>
                                    {item.price || "$57"}
                                </Text>
                                <Text textDecoration={'line-through'} color={'gray.600'}>
                                    {item.originalPrice || "$199"}
                                </Text>
                            </Stack>
                        </Stack>
                    </Box>
                ))}
            </Stack>
        </Center>
    );
};
