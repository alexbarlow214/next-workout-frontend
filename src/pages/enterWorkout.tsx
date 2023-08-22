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
  Select,
  MenuItem
} from "@mui/material";
import { useState, useEffect } from "react";
// inputRef = react
import Header from "../components/Header";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { borderColor } from "@mui/system";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { mock } from "../components/mock";
import { SelectChangeEvent } from '@mui/material/Select';

// const ExerciseFields = ({exercise, reps, weigth}) => {
  function ExerciseFields ({onChange, index, exercises}) {
  const [sets, setSets] = useState([""]);

  const handleChange = (event: SelectChangeEvent) => {
    exercises[index].exercise = event.target.value as string
    onChange(exercises)
  };

  return ( 
    <Box flex="1" mb="15px">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Exercise</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Exercise"
          onChange={handleChange}
          defaultValue={exercises[index].exercise}
        >
          {mock.map((exercise) => 
            (exercise.name === exercises[index].exercise ? (
              <MenuItem value={exercise.name}>{exercise.name}</MenuItem>
            ) : (
              <MenuItem value={exercise.name}>{exercise.name}</MenuItem>
              ))
            
          )}
                    {/* {mock.map((exercise) => (     
              <MenuItem value={exercise.name}>{exercise.name}</MenuItem>
                    )              
          )} */}
        </Select>
      </FormControl>
      {sets.map((item) => (
        <Box display="flex" flex="1" sx={{ flexDirection: "row" }} m="10px">
          <Typography flex="0" align="center" ml="5px" mr="5px">
            Set
          </Typography>
          <Typography
            flex="0.5"
            align="center"
            ml="5px"
            mr="5px"
            sx={{ border: 1 }}
          >
            aaaa
          </Typography>
          <Typography
            flex="0.5"
            align="center"
            ml="5px"
            mr="5px"
            sx={{ border: 1 }}
          >
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

  const alist = [{ exercise: "Bicep Curl", reps: [], weight: []}];
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
      {exercises.map((item, index) => (
        // <ExerciseFields exercise={item.exercise} reps={item.reps} weight={item.weight}/>
            <ExerciseFields item={item} onChange={setExercises} index={index} exercises={exercises}/>
      ))}
      <Button
        flex="1"
        align="right"
        sx={{
          width: "100%",
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
          setExercises(exercises.concat({ exercise: "Chest Fly", reps: [], weight: []}));
        }}
        // variant="outlined"
      >
        New
      </Button>
      <Button
        flex="1"
        align="right"
        sx={{
          width: "100%",
          // color: "black",
          // backgroundColor: colors.greenAccent[600],
          // borderRadius: 2,
          // borderColor: colors.greenAccent[600],
          // typography: "h4",
          // fontWeight: "bold",
          // "&:hover": {
          //   color: colors.greenAccent[600],
          //   backgroundColor: "white",
          //   borderColor: colors.greenAccent[600],
          // },
        }}
        startIcon={<AddCircleSharpIcon />}
        onClick={() => {
          window.alert(exercises[0].exercise);
        }}
        variant="outlined"
      >
        Submit
      </Button>
    </Box>
  );
}
