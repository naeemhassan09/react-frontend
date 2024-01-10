export const validateZoneName = (zoneName: string) => {
    const regex = /^[a-zA-Z0-9]*-[a-zA-Z0-9]*$/;

    if (!regex.test(zoneName)) {
      return true;
    }

    return false;
  };