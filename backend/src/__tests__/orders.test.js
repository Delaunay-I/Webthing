import { getOrderById, getOrders } from "../controllers/orderControllers";
import Order from "../databse/models/orderModel.js";

jest.mock("../databse/models/orderModel.js");

const req = {
  params: { id: "59b99db4cfa9a34dcd7885b4" },
};

const res = {
  sendStatus: jest.fn((x) => x),
  status: jest.fn((x) => x).mockReturnThis(),
  json: jest.fn((x) => x).mockReturnThis(),
};

describe("get users", () => {
  it("should send status code of 200 when getting all the orders", async () => {
    await getOrders(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledTimes(1);
  });

  it("should send status code of 404 when the order is not found", async () => {
    Order.findById.mockReturnValue(null);
    await getOrderById(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledTimes(1);
  });

  it("should send status code of 201 when the order is found", async () => {
    Order.findById.mockReturnValue({
      name: "test",
      customerName: "test",
      size: "xl",
      number: 1,
    });
    await getOrderById(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledTimes(1);
  });
});
