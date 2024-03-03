import { useState } from "react";
import Button from "react-bootstrap/Button";
import { FormControl, TextField } from "@mui/material";
import Modal from "react-bootstrap/Modal";
import { InputLabel } from "../../Pages/System/PlanModel/components/InputLabel";
import { useForm } from "react-hook-form";

function CommentModel({ message, show, handleClose, handleSave, setComment }) {
  
  const {register,handleSubmit,formState: {errors}} = useForm()
  
  const onSubmit = (data) => {
      setComment(data.comment)
      handleSave()
  }
  return (

      <Modal
        centered
        contentClassName="bg-[#1E1E2D] border p-2 !max-w-[700px] !border-[#EFAA20] !rounded-[20.27px] text-white"
        show={show}
        onHide={handleClose}
        size="lg"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
          <FormControl fullWidth>
            <InputLabel id="comment" label={message} size={20} />
            <textarea 
            className="outline-none border !border-[#EFAA2080] my-4 p-2 text-white bg-[#2B2B40] rounded-[7px]" 
            id="comment" 
            
            rows={4}
            placeholder={message}
            {...register("comment",{
              required: `This Field is required!`
            })}
            >
              
            </textarea>
            
          </FormControl>
        </Modal.Body>
        <Modal.Footer className="border-none">
          <Button
          type="submit"
            className="mx-auto py-1 px-14 font-semibold text-[13px] text-white bg-[#EFAA20] hover:bg-[#EFAA20]"
            
            // disabled={!isCommentValid}
          >
            حفظ
          </Button>
        </Modal.Footer>
        </form>
      </Modal>

  );
}

export default CommentModel;
