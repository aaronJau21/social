import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    nombre: { type: String, required: true },
    apellidos: { type: String, required: true },
    email: { type: String, required: true },
    pais: { type: String, required: false },
    profesion: { type: String, required: false },
    nacimiento: { type: String, required: false },
    telefono: { type: String, required: false },
    avatar: { type: String, default: "defectp.png", required: false },

    estado: { type: String, default: false, required: false },
    descripcion: { type: String, required: false },
    username: { type: String, required: false },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = model("User", UserSchema, "users");

export default User;
