import express from "express";
import { BannerController } from "../controller/banner.controller.js";
import PartsController from "../controller/parts.controller.js";
import UserController from "../controller/user.controller.js";
import { VehicleController } from "../controller/vehicle.controller.js";
import { auth } from "../middleware/auth.js";
import AddressController from "../controller/address.controller.js";
import OrderController from "../controller/order.controller.js";

const router = express.Router();
// method http get post put delete
// ---------- Auth -------------
router.post("/user/login", UserController.login);
router.post("/user/register", UserController.register);
router.put("/user/update/:id", auth, UserController.updateUser);
router.put("/user/delete/:id", auth, UserController.deleteUser);
// ------------ Banner -------------
router.post("/banner/insert", auth, BannerController.insert);
router.put("/banner/update/:id", auth, BannerController.updateBanner);
router.put("/banner/delete/:id", auth, BannerController.deleteBanner);
// ------------ vehicle -----------
router.post("/vehicle/insert", auth, VehicleController.insert);
router.get("/vehicle/getOne/:id", auth, VehicleController.getVehicleOne);
router.get("/vehicle/getAll", auth, VehicleController.getVehicleAll);
router.put("/vehicle/update/:id", auth, VehicleController.updateVehicle);
router.put("/vehicle/delete/:id", auth, VehicleController.deleteVehicle);
// ------------- parts -------------
router.post("/parts/insert", auth, PartsController.insert);
router.get("/parts/getOne/:id", auth, PartsController.getOne);
router.get("/parts/getAll", auth, PartsController.getAll);
router.put("/parts/update/:id", auth, PartsController.updateParts);
router.put("/parts/delete/:id", auth, PartsController.deletePart);
// ------------- address ------------
router.post("/address/insert", auth, AddressController.insert);
router.get("/address/getAll", auth, AddressController.getAll);
// ------------ order ------------
router.post("/order/insert", auth, OrderController.insert);
router.get("/order/getAll", auth, OrderController.getAll);
router.get("/order/getOne/:id", auth, OrderController.getOne);
router.get("/order/getOrderStatusAwait/:id", auth, OrderController.getOrderStatusAwait);
router.get("/order/getOrderStatusPadding/:id", auth, OrderController.getOrderStatusPadding);
router.get("/order/getOrderStatusSuccess/:id", auth, OrderController.getOrderStatusSuccess);
router.get("/order/getOrderStatusCancel/:id", auth, OrderController.getOrderStatusCancel);
router.put("/order/updateStatusPading/:orderId", auth, OrderController.updateOrderStatuspadding);
router.put("/order/updateStatusSuccsess/:orderId", auth, OrderController.updateOrderStatusSuccsess);
router.put("/order/updateStatusCancel/:orderId", auth, OrderController.updateOrderStatusCancel);

export default router;
