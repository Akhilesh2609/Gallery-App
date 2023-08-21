import { IconButton, Flex, Box } from '@chakra-ui/react';
import { FaDownload } from 'react-icons/fa';

const DownloadButton = ({ selectedImage }) => {
  const handleDownload = () => {
    if (selectedImage) {
      const link = document.createElement('a');
      link.href = selectedImage.urls.raw;
      link.download = `${selectedImage.alt_description}.jpg`;
      link.target = '_blank';
      link.click();
    }
  };

  return (
    <Box position="relative">
      <Flex justifyContent="flex-end" position="absolute" bottom={2} right={2}>
        <IconButton
          icon={<FaDownload />}
          onClick={handleDownload}
          colorScheme="blue"
          size="sm"
          borderRadius="md"
          _hover={{ bg: 'blue.600' }}
          aria-label="Download"
        />
      </Flex>
    </Box>
  );
};

export default DownloadButton;
