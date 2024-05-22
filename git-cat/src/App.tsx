import {RouterProvider} from "react-router-dom";
import router from "@/router/router.tsx";
import {UserProvider} from "@/providers/UserProvider.tsx";

function App() {
  return (
    <>
       <UserProvider>
           <RouterProvider router={router}/>
       </UserProvider>
    </>
  )
}

export default App
