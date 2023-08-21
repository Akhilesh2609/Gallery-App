import { useState } from 'react';
import {Box,Button,ChakraProvider,Container,Input,SimpleGrid,Heading,Modal,ModalOverlay,ModalContent,
 ModalBody,Image as ChakraImage,IconButton,useColorMode,Flex,CSSObject,} from '@chakra-ui/react';
import DownloadButton from "./Components/Download";
import { LoadImages, Searchimages } from './Components/Api';
import { FaSun, FaMoon } from 'react-icons/fa';
import UserLoginAccount from './Components/Login';

function App() {
  const [query, setQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const data = LoadImages();
  const searchData = Searchimages(query);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const { colorMode, toggleColorMode } = useColorMode();

  const search = () => {
    setSearchQuery(query);
  };

  // CSS styling for the image container
  const imageContainerStyle: CSSObject = {
    width: '100%',
    height: '0',
    paddingBottom: '100%',
    position: 'relative',
  };

  // CSS styling for the image
  const imageStyle: CSSObject = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  return (
    <ChakraProvider>
      <Box bg={colorMode === 'light' ? '#f5f5f5' : 'gray.800'} minHeight="100vh" py={8}>
         <Flex justify="flex-start" pd='2'>
          <UserLoginAccount></UserLoginAccount>
          </Flex>
        <Container maxW="container.md">
          <Flex justify="flex-end" position="fixed" top={4} right={4}>

            <IconButton
              icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
              isRound
              size="sm"
              onClick={toggleColorMode}
              color={colorMode === 'light' ? 'black' : 'white'}
            />
          </Flex>
          <Box mb={8} textAlign="center">
            <Heading
              mb="8"
              fontWeight="extrabold"
              size="2xl"
              bgGradient="linear(to-r, pink.600, pink.500,pink.200, blue.200, blue.400, blue.600)"
              bgClip="text"
            >
              GALLERY
            </Heading>
            <Input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search images"
              size="lg"
              width="60%"
              mx="auto"
              mb={4}
              bg={colorMode === 'light' ? 'white' : 'gray.700'}
              color={colorMode === 'light' ? 'black' : 'white'}
            />
            <Button
              colorScheme="blue"
              onClick={search}
              mt={-1.5} ml={2} 
              px={6} py={6}
              borderRadius="md"
              color="white"
              _hover={{ bgGradient: 'linear(to-r, pink.600, pink.400, blue.600)' }}
              _focus={{ outline: 'none' }}
            >
              Search
            </Button>
            </Box>
            <SimpleGrid columns={4} spacing={4}>
              {searchQuery ? searchData.map((img, key) => (
                <Box key={key}>
                <Box style={imageContainerStyle}>
                <ChakraImage src={img.urls.thumb} alt={img.alt_description} style={imageStyle} />
                </Box>
                <DownloadButton selectedImage={img} />
                </Box>
             ))
             : data.map((img) => (
               <Box
               key={img.id}
               onClick={() => handleImageClick(img)}
               borderWidth="1px"
               borderColor="black"
               borderRadius="md"
               overflow="hidden"
               cursor="pointer"
              >
                <Box style={imageContainerStyle}>
                <ChakraImage src={img.urls.thumb} alt={img.alt_description} style={imageStyle} />
                </Box>
                <DownloadButton selectedImage={img} />
               </Box>
      ))}
</SimpleGrid>
          <Modal isOpen={selectedImage !== null} onClose={closeModal}>
            <ModalOverlay />
            <ModalContent>
              <ModalBody>
                {selectedImage && (
                  <ChakraImage src={selectedImage.urls.regular} alt={selectedImage.alt_description} width="100%" />
                )}
              </ModalBody>
            </ModalContent>
          </Modal>
        </Container>
      </Box>
    </ChakraProvider> 
  );
}

export default App;

