import { useState } from "react";
import {
  Button,
  Card as MUICard,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

export default function Category(props) {
  const [isDeleteMode, setDeleteMode] = useState(false);

  function enableDeleteMode() {
    setIsEditMode(true);
  }

  function disableDeleteMode() {
    setDeleteMode(false);
  }

  return (
    <MUICard>
      {isDeleteMode ? (
        <CategoryModeEdit {...props} onDisableDeleteMode={disableDeleteMode} />
      ) : (
        <CategoryModeShow {...props} onEnableDeleteMode={enableDeleteMode} />
      )}
    </MUICard>
  );
}

function CategoryModeShow({
  name,
  description,
  onDeleteEditMode,
  onEnableEditMode,
}) {
  return (
    <>
      <CardContent>
        <Typography variant="h6" component="p">
          <h6>{name}</h6>
        </Typography>

        <Typography variant="h6" component="p">
          <h6>{description}</h6>
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" onClick={onEnableEditMode}>
          Edit
        </Button>
        <Button size="small" onClick={onDeleteEditMode}>
          Delete
        </Button>
      </CardActions>
    </>
  );
}

function CategoryModeEdit({ name, description, onDisableDeleteMode }) {
  return (
    <div>
      <div>
        <h6>{name}</h6>
      </div>
      <div>
        <p>{description}</p>
      </div>

      <div>
        <button onClick={onDisableDeleteMode}>Abbrechen</button>
        <button>Delete for real for real</button>
      </div>
    </div>
  );
}
