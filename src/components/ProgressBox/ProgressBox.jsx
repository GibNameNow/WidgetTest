import React from "react";
// import { Box } from "@mui/system";
import { Box, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';


// ProgressRow list data
const progressRows = [
    {
        label: "Full Width Bar",
        barFraction: 1,
        barColor: "secondary.main",
        valueText: "15k",
    },
    {
        label: "Half Width Bar",
        barFraction: 0.5,
        barColor: "secondary.main",
        valueText: "7.5k",
    },
    {
        label: "Quarter Width",
        barFraction: 0.25,
        barColor: "secondary.main",
        valueText: "3.75k",
    },
    {
        label: "Quarter Width",
        barFraction: 0.25,
        barColor: "secondary.main",
        valueText: "3.75k",
    },
    {
        label: "Quarter Width",
        barFraction: 0.25,
        barColor: "secondary.main",
        valueText: "3.75k",
    },
];



function RadioArrowIcon(props) {
  return (
    <Box sx={{ position: "relative", width: 24, height: 24 }}>
      <RadioButtonUncheckedIcon sx={{ fontSize: 24,color: "rgb(224,240,252)",}} />
      
      <KeyboardArrowRightRoundedIcon
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) scale(0.9)",
          color: "rgb(224,240,252)",
        }}
      />
    </Box>
  );
}

const ProgressRow = ({ label, barFraction, barColor, valueText }) => {

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        gap: 2,
        mb: 2,
      }}
    >
      {/* Left side: text (2/5) */}
      <Box sx={{ width: "40%" }}>
        <Typography
          sx={{
            fontWeight: 500,
            color: "rgb(224,240,252)",
            fontSize: "1rem",
            lineHeight: 1.2,
          }}
        >
          {label}
        </Typography>
      </Box>

      {/* Right side: bar (3/5) */}
      <Box sx={{ width: "60%" }}>
        <Box
          sx={{
            width: `${barFraction * 100}%`,
            border: "3px solid",
            borderColor: barColor,
            borderRadius: 1.5,
            minHeight: 20,
            backgroundColor: barColor,
            transition: "width 0.3s ease",
            paddingRight: "0.2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
            
        <Typography
          sx={{
            fontWeight: 500,
            color: "rgb(224,240,252)",
            fontSize: "0.875rem",
            lineHeight: 1.2,
            textAlign: "right",
          }}
        >
          {valueText}
        </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const ProgressBox = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", }}>
        <Box
        sx={{
            p: 4,
            borderRadius: 4,
            border: "5px solid",
            borderColor: "secondary.main",
            boxShadow: 3,
            backgroundColor: "primary.main",
            maxWidth: 420,
        }}
        >
            {/* Headline */}
            <Typography
                variant="h5"
                sx={{
                fontWeight: 700,
                mb: 4,
                textAlign: "left",
                color: "rgb(224,240,252)",
                mb: "2rem",
                }}
            >
                Metrics Overview
            </Typography>

            {/* Rows */}
                {progressRows.map((row, index) => (
                <ProgressRow
                key={index}
                label={row.label}
                barFraction={row.barFraction}
                barColor={row.barColor}
                valueText={row.valueText} 
                />
            ))}
            <Box sx={{ display: "flex", justifyContent: "flex-end" , mt: "2rem"}} > 
                <Button variant="outlined" sx={{borderColor: "secondary.main", backgroundColor: "rgb(87,40,18)"}} endIcon={<RadioArrowIcon />}>
                <Typography
                sx={{
                fontWeight: 300,
                color: "rgb(224,240,252)",
                }}
                >
                Go to Dashboard
                </Typography>
                </Button>
            </Box>  
        </Box>
    </Box>
  );
};

export default ProgressBox;