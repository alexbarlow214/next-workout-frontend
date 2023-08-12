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
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';



function addExercise(){
  return (<Box><Typography>yo</Typography></Box>) 
}

const ExerciseFields = (id,name) => {
  const [sets, setSets] = useState([""])
  return (<Box>
          {sets.map((item) => (
            <Typography>aaaa</Typography>
          ))}
          <Button
            // flex="1"
            // align="right"
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
              setSets(sets.concat(""))
            }}
           variant="outlined"
          >
            Newa
          </Button>
        </Box>)
}
export default function enterWorkout(){

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const alist = [{id: 'a', name: "aaaa"}]

  const [exercises, setExercises] = useState(alist);

    return(<Box m="20px" flex="1">
    <Box display="flex" sx={{ flexDirection: "row" }}>
      <Box
        flex="1"
        mr="20px"
        height="83vh"
        sx={{
          "& .MuiDataGrid-root": { border: "none", fontSize: "1.25rem" },
          "& .MuiDataGrid-cell": { border: "none" },
          "& .name-column-cell": { border: "none", fontWeight: "bold" },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.primary[600],
            borderBottom: "none",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.primary[600],
          },
        }}
      >
        <Box
          flex="1"
          display="flex"
          sx={{ flexDirection: "row" }}
          alignItems="center"
          mb="15px"
        >
          <Typography
            justifyContent="center"
            flex="1"
            align="center"
            variant="h2"
            color={colors.grey[100]}
            fontWeight="bold"
          >
            Exercises
          </Typography>
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
              '&:hover': {
                color: colors.greenAccent[600],
                backgroundColor: "white", 
                borderColor:  colors.greenAccent[600]
              },
            }}
            startIcon={<AddCircleSharpIcon />}
            onClick={() => {
              setExercises(exercises.concat({id: 'a', name: "aaaa"}))
            }}
           // variant="outlined"
          >
            New
          </Button>
        </Box>
        {exercises.map((item) => (
          <ExerciseFields id={item.id} name ={item.name}/>
      ))}
      </Box>
      <Divider
        flexItem={true}
        orientation="vertical"
        flex="1"
        sx={{ bgcolor: colors.grey[300] }}
      />
    </Box>
    
  </Box>)}

