import { useState } from "react";
import {
  Button,
  Card as MUICard,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

export default function CardProducts(props) {
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
        <ProductModeEdit {...props} onDisableDeleteMode={disableDeleteMode} />
      ) : (
        <ProductModeShow {...props} onEnableDeleteMode={enableDeleteMode} />
      )}
    </MUICard>
  );
}

function ProductModeShow({
  name,
  description,
  tags,
  price,
  category,
  onEnableDeleteMode,
  onEnableEditMode,
}) {
  return (
    <>
      <CardContent>
        <Typography variant="h6" component="p">
          <h5>
            Name {name} / Price {price}
          </h5>
        </Typography>

        <p>{description}</p>

        <p>{category}</p>

        <ul>
          <tags>{tags}</tags>
        </ul>
      </CardContent>

      <CardActions>
        <Button size="small" onClick={onEnableEditMode}>
          Edit
        </Button>

        <Button size="small" onClick={onEnableDeleteMode}>
          Delete
        </Button>
      </CardActions>
    </>
  );
}

function ProductModeEdit({
  name,
  description,
  tags,
  price,
  category,
  onDisableDeleteMode,
}) {
  return (
    <div>
      <div>
        <h5>{name}</h5>
        <h5>{price}</h5>
      </div>
      <div>
        <p>{description}</p>
        <p>{category}</p>
      </div>
      <ul>
        <li>{tags}</li>
      </ul>
      <div>
        <button onClick={onDisableDeleteMode}>Abbrechen</button>
        <button>Delete for realn</button>
      </div>
    </div>
  );
}
