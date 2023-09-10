import { Request, Response } from "express";
import bcryptjs from "bcryptjs";

import User from "../../models/User";

export const register = async (req: Request, res: Response) => {
  const { nombre, apellidos, email, password } = req.body;

  let user = await User.findOne({ email });
  if (user) {
    return res.status(200).send({
      status: "Error",
      msg: "El usuario ya existe",
    });
  }

  user = new User({ nombre, apellidos, email, password });
  const salt = await bcryptjs.genSalt(10);
  const hash = await bcryptjs.hash(password, salt);

  user.password = hash;

  await user.save();

  return res.status(200).send({
    status: "Success",
    mensaje: "Cuenta Cread",
    user,
  });
};
