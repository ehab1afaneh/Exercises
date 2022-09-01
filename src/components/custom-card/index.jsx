import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import CustomModal from "../custom-modal";

const CustomCard = ({ exercise }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <Card
        onClick={() => setOpenModal(true)}
        className="custom-card m-3 image-list__item"
      >
        <CardContent className="p-1">
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <img
              alt={exercise.title}
              className="exercises-image"
              src="https://res.cloudinary.com/dujaj7bp2/video/upload/v1626623808/base_task_video/020_FLIP_all_four_opposition_reach_knoer2.jpg"
            />
          </Typography>

          <Typography className="exercise-title text-center" variant="body2">
            {exercise.title}
          </Typography>
        </CardContent>
      </Card>

      <CustomModal
        openModal={openModal}
        setOpenModal={(value) => setOpenModal(value)}
        exercise={exercise}
      />
    </div>
  );
};

export default CustomCard;
