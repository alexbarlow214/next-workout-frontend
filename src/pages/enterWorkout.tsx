import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../components/theme";
import Exercises from "../components/Exercises";
import { useForm } from "react-hook-form";
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  Divider,
  Checkbox,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";
// inputRef = react
import Header from "../components/Header";
import { mock } from "../components/mock";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { borderColor } from "@mui/system";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";

const ExerciseFields = (id, name) => {
  const [sets, setSets] = useState([""]);
  return (
    <Box flex="1" mb="15px">
      {sets.map((item) => (
        <Box display="flex" flex="1" sx={{ flexDirection: "row", }} m="10px">
          <Typography flex="0" align="center" ml="5px" mr="5px">
            Set
          </Typography>
          <Typography flex="0.5" align="center" ml="5px" mr="5px" sx={{border: 1}}>
            aaaa
          </Typography>
          <Typography flex="0.5" align="center" ml="5px" mr="5px" sx={{border: 1}}>
            bbbb
          </Typography>
        </Box>
      ))}
      <Button
        flex="1"
        align="center"
        justifyContent="center"
        // sx={{
        //   color: "black",
        //   backgroundColor: colors.greenAccent[600],
        //   borderRadius: 2,
        //   borderColor: colors.greenAccent[600],
        //   typography: "h4",
        //   fontWeight: "bold",
        //   '&:hover': {
        //     color: colors.greenAccent[600],
        //     backgroundColor: "white",
        //     borderColor:  colors.greenAccent[600]
        //   },
        // }}
        startIcon={<AddCircleSharpIcon />}
        onClick={() => {
          setSets(sets.concat(""));
        }}
        variant="outlined"
      >
        Newa
      </Button>
    </Box>
  );
};
export default function enterWorkout() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const alist = [{ id: "a", name: "aaaa" }];

  const [exercises, setExercises] = useState(alist);

  return (
    <Box flex="1" alignItems="center" mb="15px">
      <Typography
        flex="1"
        align="center"
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
      >
        Exercises
      </Typography>
      {exercises.map((item) => (
        <ExerciseFields id={item.id} name={item.name} />
      ))}
      <Button
        flex="1"
        align="right"
        sx={{
          color: "black",
          backgroundColor: colors.greenAccent[600],
          borderRadius: 2,
          borderColor: colors.greenAccent[600],
          typography: "h4",
          fontWeight: "bold",
          "&:hover": {
            color: colors.greenAccent[600],
            backgroundColor: "white",
            borderColor: colors.greenAccent[600],
          },
        }}
        startIcon={<AddCircleSharpIcon />}
        onClick={() => {
          setExercises(exercises.concat({ id: "a", name: "aaaa" }));
        }}
        // variant="outlined"
      >
        New
      </Button>
    </Box>
  );
}
