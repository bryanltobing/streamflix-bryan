import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';
import React, { useState } from 'react';

const ModalAuthentication = ({ isOpen, handleSubmitAuth }) => {
  const [fullName, setFullName] = useState('');
  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} isCentered size={['xs']}>
      <ModalOverlay />
      <ModalContent backgroundColor="gray.700" color="gray.200">
        <ModalHeader>Authentication</ModalHeader>
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              placeholder="Full Name"
              onChange={(evt) => setFullName(evt.target.value)}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => handleSubmitAuth(fullName)}
          >
            Log In
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalAuthentication;
