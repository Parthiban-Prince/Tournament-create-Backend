import {adminService }from "../service/adminService.js";

export async function admincontroller(req, res) {
  try {

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const admin = await adminService({ email, password });

    return res.status(200).json({ admin });

  } catch (error) {
    console.log("CONTROLLER error 👉", error);
    return res.status(500).json({ message: "Server error" });
  }
}


export default {admincontroller};