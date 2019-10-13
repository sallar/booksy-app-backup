export const validateEmail = (email: string) => {
  const emailRegexp = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
  if (!email) {
    return true;
  }

  if (email.length > 254) {
    return true;
  }

  const valid = emailRegexp.test(email);
  if (!valid) {
    return true;
  }

  const parts = email.split('@');
  if (parts[0].length > 64) {
    return true;
  }

  const domainParts = parts[1].split('.');
  if (domainParts.some(part => part.length > 63)) {
    return true;
  }

  return false;
};
