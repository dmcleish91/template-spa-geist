import { compareSync, hashSync } from 'bcryptjs';

export function hashPassword(password: string) {
  const hashedPassword = hashSync(password, 6);
  return hashedPassword;
}

export function verifyPassword(formPassword: string, userPassword: string) {
  return compareSync(formPassword, userPassword);
}
