import Icon from '@chakra-ui/icon';
import { Box, Stack, Text } from '@chakra-ui/layout';
import { idrFormat } from 'common/currency';
import GlobalContext from 'context/GlobalContext';
import React, { useContext } from 'react';
import { CgProfile } from 'react-icons/cg';

const Profile = () => {
  const { user } = useContext(GlobalContext);
  return (
    <>
      <Stack paddingY={[2, 4]} direction="row" spacing={4}>
        <Icon as={CgProfile} w={8} h={8} />
        <Box>
          <Text fontWeight="bold">{user?.fullName}</Text>
          <Text>{idrFormat(user?.balance)}</Text>
        </Box>
      </Stack>
    </>
  );
};

export default Profile;
