export const isAuthenticatedValidation = () => {
  if (
    !!sessionStorage.getItem('user') &&
    sessionStorage.getItem('user').startsWith('{"')
  ) {
    const parsedUser = JSON.parse(sessionStorage.getItem('user'));
    return parsedUser?.fullName && typeof parsedUser?.balance == 'number'
      ? true
      : false;
  } else {
    return false;
  }
};
