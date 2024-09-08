import { createBrowserRouter, redirect} from "react-router-dom";
import Toastify from "toastify-js";
import LoginPage from "../views/LoginPage";
import BaseLayout from "../views/BaseLayout";
import Home from "../views/HomePage";
import Favourite from "../views/FavouritePage";

const url = "http://localhost:3000"

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage url={url}/>,
        loader: () => {
            if (localStorage.access_token) {
                Toastify({
                  text: "You already logged in",
                  duration: 2000,
                  newWindow: true,
                  close: true,
                  gravity: "top",
                  position: "left",
                  stopOnFocus: true,
                  style: {
                    background: "#EF4C54",
                    color: "#17202A",
                    boxShadow: "0 5px 10px black",
                    fontWeight: "bold",
                  },
                  }).showToast();
                  return redirect("/");
            }
            return null
        }
    },
    {
        element: <BaseLayout/>,
        loader: () => {
            if (!localStorage.access_token) {
              Toastify({
                text: "Please login first",
                duration: 2000,
                newWindow: true,
                close: true,
                gravity: "top",
                position: "left",
                stopOnFocus: true,
                style: {
                  background: "#EF4C54",
                  color: "#17202A",
                  boxShadow: "0 5px 10px black",
                  fontWeight: "bold",
                },
              }).showToast();
              return redirect("/login");
            }
      
            return null;
          },
          children: [
            {
                path: "/",
                element: <Home url={url}/>
            },
            {
              path: "favourite",
              element: <Favourite url={url}/>
            }
          ]
    }
])


export default router