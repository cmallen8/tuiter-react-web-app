import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import {Provider} from "react-redux";
import store from "./final-project/redux/store"
import Search from "./final-project/search";
import SearchDetails from "./final-project/search/search-details";
import Login from "./final-project/login";
import HomeComponent from "./final-project/home";
import NavigationBar from "./final-project/navigation-bar";
import React from "react";
import ProfileComponent from "./final-project/screens/profile";
import Register from "./final-project/screens/register";
import EditProfile from "./final-project/screens/edit-profile";
import CurrentUserContext from "./final-project/components/current-user-context";

function App() {
  return (
    <Provider store={store}>
    <CurrentUserContext>
      <BrowserRouter>
          <div className="container">
              <div className="row mt-2">
                  <div className="col-10">
                      <Routes>
                          <Route path="/final-project/show-details/:id" element={<SearchDetails />} />
                          <Route path="/final-project/home" element={<HomeComponent />}/>
                          <Route path="/final-project/search" element={<Search />}/>
                          <Route path="/final-project/search/:queryTerm" element={<Search />}/>
                          <Route path="/final-project/profile" element={<ProfileComponent />}/>
                          <Route path="/final-project/profile/edit-profile" element={<EditProfile />}/>
                          <Route path="/final-project/login" element={<Login />}/>
                          <Route path="/final-project/register" element={<Register />}/>
                      </Routes>
                  </div>
                  <div className="col-2">
                      <NavigationBar />
                  </div>
              </div>

          </div>
      </BrowserRouter>
    </CurrentUserContext>
    </Provider>
  );
}
export default App;
