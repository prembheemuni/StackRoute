import app from "./app";
import { ServerConfig } from "./config";

app.listen(ServerConfig.PORT, () => {
  console.log("app is listening at 3003");
});
