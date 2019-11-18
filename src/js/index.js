import { HeaderComponent } from "./components/header.component.js";
import { InformationComponent } from "./components/information.component.js";
import { CartComponent } from "./components/cart.component.js";
import { LoaderComponent } from "./components/loader.component.js";
import { ItemsComponent } from "./components/items.component.js";
import { CategoryComponent } from "./components/category.component.js";
import { BreadcrumbComponent } from "./components/breadcrumb.component.js";

const header = new HeaderComponent('header');
const loader = new LoaderComponent('loader');
const information = new InformationComponent('information');
const cart = new CartComponent('cart');
const items = new ItemsComponent('items', {loader});
const category = new CategoryComponent('category', {items});
const breadcumb = new BreadcrumbComponent('breadcrumb');