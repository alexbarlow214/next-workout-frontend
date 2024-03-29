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
  MenuItem,
  TextField,
} from "@mui/material";
import { useState, useEffect } from "react";
// inputRef = react
import Header from "../components/Header";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { borderColor } from "@mui/system";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { mock } from "../components/mock";
import { SelectChangeEvent } from "@mui/material/Select";
import InputAdornment from '@mui/material/InputAdornment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'

// const ExerciseFields = ({exercise, reps, weigth}) => {
function ExerciseFields({ onChange, index, exercises, register }) {
  const [sets, setSets] = useState([""]);

  const handleExerciseChange = (event: SelectChangeEvent) => {
    exercises[index].exercise = event.target.value as string;
    onChange(exercises);
  };

  const handleRepChange = (set: number) => {return (event) => {
    exercises[index].reps[set] = event.target.value as number;
    onChange(exercises);
  }};

  const handleWeightChange = (set: number) => {return (event) => {
    exercises[index].weight[set] = event.target.value as number;
    onChange(exercises);
  }};



  return (
    <Box flex="1" mb="15px">
      <FormControl fullWidth sx={{mb: "10px"}}>
        <InputLabel id="demo-simple-select-label">Exercise</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Exercise"
          onChange={handleExerciseChange}
          defaultValue={exercises[index].exercise}
        >
          {mock.map((exercise) =>
            exercise.name === exercises[index].exercise ? (
              <MenuItem value={exercise.name}>{exercise.name}</MenuItem>
            ) : (
              <MenuItem value={exercise.name}>{exercise.name}</MenuItem>
            )
          )}
          {/* {mock.map((exercise) => (     
              <MenuItem value={exercise.name}>{exercise.name}</MenuItem>
                    )              
          )} */}
        </Select>
      </FormControl>
      {sets.map((item, index) => (
        <Box display="flex" alignItems="center"  flex="1" sx={{ flexDirection: "row" }} mb="10px">
          <Typography display="flex" flex="0" mr="5px" justifyContent={"center"} minWidth={"50px"}>
            {"Set " + (index + 1).toString()}
          </Typography>
          <TextField
            required
            label="Reps"
            variant="outlined"
            align="center"
            type="number"
            ml="5px"
            mr="5px"
            sx={{ flex: 0.5, ml: "5px", mr: "5px"}}
            onChange={handleRepChange(index)}
          />
          <TextField
            required
            label="Weight"
            variant="outlined"
            align="center"
            InputProps={{
              endAdornment: <InputAdornment position="end">lbs</InputAdornment>,
            }}
            type="number"
            ml="5px"
            mr="5px"
            sx={{ flex: 0.5, ml: "5px", }}
            onChange={handleWeightChange(index)}
          />
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
}
export default function enterWorkout() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const alist = [{exercise: "Bicep Curl", reps: [], weight: [] }];
  const [exercises, setExercises] = useState(alist);
  const { register, handleSubmit } = useForm();
  const [date, setDate] = useState(dayjs());

  const onSubmit = data => window.alert(JSON.stringify({exercises: exercises, date: date}));

  return (
    <Box flex="1" alignItems="center" m="15px">
          <form onSubmit={handleSubmit(onSubmit)}>
      <Typography
        flex="1"
        align="center"
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        mb="20px"
      >
        Exercises
      </Typography>
      {exercises.map((item, index) => (
        // <ExerciseFields exercise={item.exercise} reps={item.reps} weight={item.weight}/>
        <ExerciseFields
          onChange={setExercises}
          index={index}
          exercises={exercises}
          register={register}
        />
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
          mb: "20px",
          "&:hover": {
            color: colors.greenAccent[600],
            backgroundColor: "white",
            borderColor: colors.greenAccent[600],
          },
        }}
        startIcon={<AddCircleSharpIcon />}
        onClick={() => {
          setExercises(
            exercises.concat({ exercise: "Chest Fly", reps: [], weight: [] })
          );
        }}
        // variant="outlined"
      >
        New Exercise
      </Button>
      <Box display="flex" flex="1">
      <Button
      type="submit"
        flex="1"
        align="right"
        sx={{
          mr:"5px",
          width: "100%",
          // color: "black",
          // backgroundColor: colors.greenAccent[600],
          // borderRadius: 2,
          // borderColor: colors.greenAccent[600],
           typography: "h4",
          // fontWeight: "bold",
          // "&:hover": {
          //   color: colors.greenAccent[600],
          //   backgroundColor: "white",
          //   borderColor: colors.greenAccent[600],
          // },
        }}
        startIcon={<AddCircleSharpIcon />}
        variant="outlined"
      >
        Submit
      </Button>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
          defaultValue={dayjs()}
          // value={value}
          onChange={(newValue) => setDate(newValue)}
        />
        </LocalizationProvider>
        </Box>
      </form>
    </Box>
  );
}
