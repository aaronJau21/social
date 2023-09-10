import { app, port } from "./src/app";

app.listen(port, () =>
  console.log(`El servidor corriendo en el puerto ${port}`)
);
