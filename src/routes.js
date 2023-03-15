import Resources from "layouts/resources";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
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
