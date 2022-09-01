import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";

const CustomModal = ({ exercise, openModal, setOpenModal }) => {
  return (
    <Modal className="custom-modal" open={openModal}>
      <Box>
        <ClickAwayListener onClickAway={() => setOpenModal(false)}>
          <Box className="modal-container p-3">
            <div className="d-flex justify-content-between">
              <h3>{exercise.title}</h3>
              <div className="close-button" onClick={() => setOpenModal(false)}>
                X
              </div>
            </div>
            <div className="mt-2">
              <TextField value={exercise.seconds} disabled />
            </div>

            <div className="instructions mt-4">
              <h3>instructions</h3>
              {exercise?.instructions?.map((instruction, index) => (
                <TextField
                  key={index}
                  className="w-100 my-2"
                  value={instruction}
                  disabled
                />
              ))}
            </div>
            <div className="exercise-video mt-4">
              <video controls>
                <source
                  src="https://res.cloudinary.com/dujaj7bp2/video/upload/v1626623808/base_task_video/020_FLIP_all_four_opposition_reach_knoer2.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </Box>
        </ClickAwayListener>
      </Box>
    </Modal>
  );
};

export default CustomModal;
