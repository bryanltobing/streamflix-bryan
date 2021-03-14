import { Button } from '@chakra-ui/button';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';
import React from 'react';

const ConfirmationModal = ({
  isOpen,
  setIsOpen,
  title,
  content,
  confirmAction,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} isCentered>
      <ModalOverlay />
      <ModalContent backgroundColor="gray.700" color="gray.200">
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>{content}</ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={confirmAction}>
            Sure!
          </Button>
          <Button onClick={() => setIsOpen(false)} color="gray.700">
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ConfirmationModal;
