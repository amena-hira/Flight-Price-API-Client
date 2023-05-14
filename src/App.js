import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import routes from "./Route/Route";

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
