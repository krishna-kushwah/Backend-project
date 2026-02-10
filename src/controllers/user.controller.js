import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  // get user details from frontend
  // validation - not empty
  // check if user already exists : username, email
  // check for images, check for avtar
  // create user object- create entry in db
  // remove passeord and refresh token field from response
  // check for user creation
  // return res

  const { username, email, fullname, password } = req.body;
  console.log("email", email);
});
export { registerUser };
