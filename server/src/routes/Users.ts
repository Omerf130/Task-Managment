import express from "express";
import { register/* , deleteUserById */, getAllUsers, login, logout, getUserById/* , googleLogin */, updatedUserRoleById, getUserDetails } from "../controllers/User";
// import { requireAdminAuth } from "../middlewares/requireAuth";

const router = express.Router();

router.get("/", (req,res) => { res.json({message:"test message"})})

router.get("/userDetails", getUserDetails);
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
// router.post("/googleLogin", googleLogin)
router.get("/"/* ,requireAdminAuth */, getAllUsers);
router.get("/:id", getUserById) 
// router.delete("/:id"/* ,requireAdminAuth */, deleteUserById);
router.patch("/:id"/* ,requireAdminAuth */, updatedUserRoleById);

export default router;