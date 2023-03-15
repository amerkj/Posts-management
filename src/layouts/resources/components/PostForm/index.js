import { Button, Card, fabClasses, FormControl, TextField } from "@mui/material";
import { Box } from "@mui/system";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import React, { useEffect, useState } from "react";
import {  useDispatch, useSelector  } from 'react-redux';
import { bindActionCreators } from 'redux';
import {actionCreator} from '../../../../state/index'

const PostForm = () => {
  const {editPostId, resources} = useSelector((state)=>state.resource)

  const dispatch= useDispatch()
  const {createPostAction, editPostAction, cancelEditing}=bindActionCreators(actionCreator,dispatch)
    const [errors, setErrors] = useState({title: {e: false, msg: ''}, body: {e: false, msg: ''}})
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [isEditing, setIsEditing] = useState(false)
    const cardTitle = isEditing ? 'Edit' : 'Add'

    const titleChanged = (e) => {
        const title = e.target.value
        setTitle(title)
        validateTitle(title)
    }

    const bodyChanged = (e) => {
        const body = e.target.value
        setBody(body)
        validateBody(body)
    }

    const validateTitle = (title) => {
        let valid = true
        if (!title.match(/^[A-Za-z\s]*$/)) {
            setErrors({...errors, title: {e: true, msg: 'allows letters only'}});
            valid = false
        } else if(title.length === 0) {
            setErrors({...errors, title: {e: true, msg: 'Post title is required'}});
            valid = false
        }
        else {
            setErrors({...errors, title: {e: false, msg: ''}});
        }
        return valid
    }

    const validateBody = (body) => {
        let valid = true
        if(body.length === 0) {
            setErrors({...errors, body: {e: true, msg: 'Post body is required'}});
            valid = false
        }
        else {
            setErrors({...errors, body: {e: false, msg: ''}}); 
        }
        return valid;
    }


    const validateForm = () => {
        let t = validateTitle(title)
        let b = validateBody(body)
        return t && b;
    }

    const clearForm = () => {
        setTitle('')
        setBody('')
    }

    const submit = () => {
        if(!validateForm()) {
            return
        }
        if(isEditing){
          editPostAction({title, body, id: editPostId})
        }else {
          createPostAction({title, body})
        }
        clearForm()
    }

    useEffect(() => {
      if(editPostId && editPostId !== -1) {
        setIsEditing(true)
        const postToEdit = resources.find(post => {
          return post.id === editPostId
        })
        setTitle(postToEdit.title)
        setBody(postToEdit.body)
      }
      else {
        setIsEditing(false)
      }

    }, [editPostId, resources])

    const cancelPostEdit = () => {
      cancelEditing()
      clearForm()
    }

  return (
    <Card>
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          {cardTitle} Post
        </MDTypography>
        <Box display="flex" flexDirection="column" gap="20px" marginTop="15px" marginBottom="20px">
          <TextField
            error={errors.title.e}
            onChange={titleChanged}
            helperText={errors.title.msg}
            value={title}
            id="standard-basic"
            label="Post Title"
          />
          <TextField
            label="Post Body"
            error={errors.body.e}
            onChange={bodyChanged}
            helperText={errors.body.msg}
            value={body}
            multiline
            rows={4}
          />
          <Box display="flex" gap="10px">
            <Button style={{flex: 1, color: "white"}} onClick={submit} variant="contained">
              {cardTitle}
            </Button>
            {isEditing && (
              <Button style={{flex:1, color: "black"}} color="white" onClick={cancelPostEdit} variant="contained">
                cancel
              </Button>
            )}
          </Box>
        </Box>
      </MDBox>
    </Card>
  );
};

export default PostForm;
