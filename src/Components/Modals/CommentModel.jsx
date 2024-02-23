import { useState } from "react";
import Button from "react-bootstrap/Button";
import { FormControl, TextField } from "@mui/material";
import Modal from "react-bootstrap/Modal";
import { InputLabel } from "../../Pages/System/PlanModel/components/InputLabel";

function CommentModel({ message, show, handleClose, handleSave, setComment }) {
  const [commentText, setCommentText] = useState("");

  const isCommentValid = commentText.length >= 5;

  return (
    <>
      <Modal
        centered
        contentClassName="bg-[#1E1E2D] border p-2 !max-w-[700px] !border-[#EFAA20] !rounded-[20.27px] text-white"
        show={show}
        onHide={handleClose}
        size="lg"
      >
        <Modal.Body>
          <FormControl fullWidth>
            <InputLabel id="comment" label={message} size={20} />
            <TextField
              size="small"
              id="new-project"
              multiline
              rows={4}
              value={commentText}
              placeholder={message}
              onChange={(e) => {
                setCommentText(e.target.value);
                setComment(e.target.value);
              }}
              variant="outlined"
              sx={{
                my: 1,
                border: "1px solid #EFAA2080",
                "& fieldset": {
                  border: "none",
                },
              }}
              inputProps={{
                sx: {
                  color: "white",
                  py: "10px",
                },
              }}
              className="text-white bg-[#2B2B40] rounded-[7px]"
            />
          </FormControl>
        </Modal.Body>
        <Modal.Footer className="border-none">
          <Button
            className="mx-auto py-1 px-14 font-semibold text-[13px] text-white bg-[#EFAA20] hover:bg-[#EFAA20]"
            onClick={handleSave}
            disabled={!isCommentValid}
          >
            حفظ
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CommentModel;
