import { createJWT, isTokenValid, attachCookiesToResponse } from "./jwt.js";
import createTokenUser from "./createTokenUser.js";
import checkPermissions from "./checkPermissions.js";
import sendVerificationEmail from "./sendVerificationEmail.js";
import createHash from "./createHash.js";
import sendResetPasswordEmail from "./sendResetPasswordEmail.js";

export default {
  createJWT,
  isTokenValid,
  attachCookiesToResponse,
  createTokenUser,
  checkPermissions,
  sendVerificationEmail,
  createHash,
  sendResetPasswordEmail,
};
