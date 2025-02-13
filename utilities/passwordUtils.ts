import argon2 from "argon2";

//hasing password with argon
export const hashPassword = async (password: string): Promise<string> => {
  try {
    const hashedPassword = await argon2.hash(password, {
      type: argon2.argon2id as unknown as number,
      memoryCost: 2 ** 16,
      timeCost: 3,
      parallelism: 1,
    });
    return hashedPassword;
  } catch (error) {
    throw new Error("Error hashing password: " + error);
  }
};

//verifing password with hashing
export const verifyPassword = async (
  inputPassword: string,
  storedHash: string
): Promise<boolean> => {
  try {
    return await argon2.verify(storedHash, inputPassword);
  } catch (error) {
    console.error("Error verifying password:", error);
    return false;
  }
};
