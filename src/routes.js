import {configureRoutes} from "pawjs/src/utils/bundler";
// routes
import * as Home from "./pages/home";
import * as Contact from "./pages/contact";
import * as Blog from "./pages/blog";
import * as ProgressiveImageRendering from "./pages/progressive-image-rendering";
import * as Counter from "./pages/counter";
import * as Page from "./pages/page";


export default configureRoutes([
  Home,
  Contact,
  Blog,
  ProgressiveImageRendering,
  Counter,
  Page
]);