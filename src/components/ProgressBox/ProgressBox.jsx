import React from "react";
// import { Box } from "@mui/system";
import { Box, Typography } from "@mui/material";

const ProgressRow = ({ label, barFraction, barColor }) => {
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
            color: "text.primary",
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
            height: 16,
            backgroundColor: `${barColor}33`, // slight tint
            transition: "width 0.3s ease",
          }}
        />
      </Box>
    </Box>
  );
};

const ProgressBox = () => {
  return (
    <Box
      sx={{
        p: 4,
        borderRadius: 4,
        border: "5px solid",
        borderColor: "grey.400",
        boxShadow: 3,
        backgroundColor: "background.paper",
        width: "100%",
        maxWidth: 420,
        mx: "auto",
      }}
    >
      {/* Headline */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          mb: 4,
          textAlign: "left",
          color: "text.primary",
        }}
      >
        Metrics Overview
      </Typography>

      {/* Rows */}
      <ProgressRow
        label="Full Width Bar"
        barFraction={1}
        barColor="#1976d2"
      />
      <ProgressRow
        label="Half Width Bar"
        barFraction={0.5}
        barColor="#2e7d32"
      />
      <ProgressRow
        label="Quarter Width Bar"
        barFraction={0.25}
        barColor="#d32f2f"
      />
    </Box>
  );
};

export default ProgressBox;
