import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Categories from "../Components/Categories/Categories";
import NewCategory from "../Components/Categories/Category/NewCategory";
import ViewCategory from '../Components/Categories/Category/ViewCategory';
import DeleteCategory from '../Components/Categories/Category/DeleteCategory';
import UpdateCategory from '../Components/Categories/Category/UpdateCategory';
const Main = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Categories} />
                <Route path="/AddCategory" component={NewCategory} />
                <Route path="/View" component={ViewCategory} />
                <Route path="/Delete" component={DeleteCategory} />
                <Route path="/Edit" component={UpdateCategory} />
            </Switch>
        </React.Fragment>

    )
}

export default Main;