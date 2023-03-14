import Tables from "layouts/tables";
import Resources from "layouts/resources";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  // {
  //   type: "collapse",
  //   name: "Dashboard",
  //   key: "dashboard",
  //   icon: <Icon fontSize="small">dashboard</Icon>,
  //   route: "/dashboard",
  //   component: <Dashboard />,
  // },
  {
    type: "collapse",
    name: "Tables",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Resources",
    key: "resources",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/resources",
    component: <Resources />,
  },
];

export default routes;
