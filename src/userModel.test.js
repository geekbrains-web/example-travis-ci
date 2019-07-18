const mongoose = require("./mongoClient");
const User = require("./userModel");

describe("UserModel", () => {
  const existingEmail = "existing.user" + Math.random() + "@test.com";
  const existingPassword = "supersecret";

  beforeAll(async () => {
    await User.register(existingEmail, existingPassword);
  });

  afterAll(() => {
    mongoose.disconnect();
  });

  it('should register new user successfully', async () => {
    const email = "unique.email+" + Math.random() + "test.com";
    const pass = "supersecret";

    const newUser = await User.register(email, pass);

    expect(newUser).not.toBeNull();
    expect(newUser.email).toBe(email);
    expect(newUser.password).not.toBe(pass);

    expect(await newUser.isPassword(pass)).toBe(true);
  });

  it('should not register new user because email already exist', async () => {
    const email = "unique.email+" + Math.random() + "test.com";
    const pass = "supersecret";

    // first attempt is successful
    const firstAttempt = await User.register(email, pass);

    expect(firstAttempt).not.toBeNull();
    expect(firstAttempt.email).toBe(email);
    expect(firstAttempt.password).not.toBe(pass);

    // second attempt is ending with throws exception
    await expect((async () => {
      const secondAttempt = await User.register(email, pass);
    })()).rejects.toThrow(mongoose.MongoError);

  });

  it('should found existing user and check his password', async () => {

    const existingUser = await User.findByEmail(existingEmail);

    expect(existingUser).not.toBeNull();
    expect(existingUser.email).toBe(existingEmail);
    expect(existingUser.password).not.toBe(existingPassword);

    expect(await existingUser.isPassword(existingPassword)).toBe(true);
  });

});
