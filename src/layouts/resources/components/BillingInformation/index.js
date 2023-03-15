// @mui material components
import Card from "@mui/material/Card";
import { useEffect } from "react";
import { useSelector , useDispatch  } from 'react-redux';
import { bindActionCreators } from 'redux';
import {actionCreator} from '../../../../state/index'


// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Resources page components
import Resource from "layouts/resources/components/Resource";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
const PAGE_LIMIT = 5
function BillingInformation() {
  const {resources, page} = useSelector((state)=>state.resource)
  const dispatch= useDispatch()
  const {fetchPostsAction,withdrowMoney}=bindActionCreators(actionCreator,dispatch)

  useEffect(() => {
    fetchPostsAction({ page: 1, limit: PAGE_LIMIT });
  }, []); 

  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <Box display="flex" justifyContent="space-between" >
          <MDTypography variant="h6" fontWeight="medium">
            Resources Information
          </MDTypography>
          <Box display="flex">
            <Button variant="text" disabled={page<=1} color="black" onClick={()=>{fetchPostsAction({ page: page-1, limit: PAGE_LIMIT });}}>Back</Button>
            <span>{page}</span>
            <Button variant="text" color="black" onClick={()=>{fetchPostsAction({ page: page+1, limit: PAGE_LIMIT });}} >Next</Button>

          </Box>
        </Box>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {resources.map((post) => (
            <Resource
              key={post.id}
              title={post.title}
              body={post.body}
            />
          ))}
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default BillingInformation;
