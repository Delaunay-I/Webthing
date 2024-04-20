import { getUserById } from "../controllers/userController";
import User from "../databse/models/userModel.js";

jest.mock("../databse/models/userModel.js");

const req = {
  params: { id: "59b99db4cfa9a34dcd7885b4" },
};

const res = {
  sendStatus: jest.fn((x) => x),
  status: jest.fn((x) => x),
  json: jest.fn((x) => x),
};

describe("get users", () => {
  it("should send a status code of 404 when the user is not found", async () => {
    User.findById.mockResolvedValueOnce(null);
    await getUserById(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: "no such user" });
  });

  it("should send a status code of 200 when the user is found", async () => {
    User.findById.mockReturnValue({
      id: req.params.id,
      username: "username",
      email: "email",
      password: "password",
    });
    await getUserById(req, res);
    expect(User.findById).toHaveBeenCalledWith(req.params.id);
    expect(User.findById).toHaveReturnedWith({
      id: req.params.id,
      username: "username",
      email: "email",
      password: "password",
    });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledTimes(1);
  });
});
