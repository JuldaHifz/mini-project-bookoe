import { RouterProvider } from "react-router-dom";

import router from "./router";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <RouterProvider router={router}>
        <Layout />
      </RouterProvider>
    </>
  );
}

export default App;
