import React, { useEffect, useState } from "react";
import { Box, Typography, LinearProgress, CircularProgress } from "@mui/material";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaJs } from "react-icons/fa";


const skillsData = [
  { name: "HTML", icon: <FaHtml5 color="orange" size={30} />, percentage: 98 },
  { name: "CSS", icon: <FaCss3Alt color="blue" size={30} />, percentage: 95 },
  { name: "Bootstrap", icon: <FaBootstrap color="purple" size={30} />, percentage: 85 },
  { name: "React", icon: <FaReact color="cyan" size={30} />, percentage: 87 },
  { name: "Node.js", icon: <FaNodeJs color="green" size={30} />, percentage: 80 },
  { name: "JavaScript", icon: <FaJs color="yellow" size={30} />, percentage: 88 },
  { name: "Express.js", icon: <FaJs color="purple" size={30} />, percentage: 80 },
];

const softSkills = [
  { name: "Teamwork", percentage: 85 },
  { name: "Problem Solving", percentage: 80 },
  { name: "Creativity", percentage: 75 },
  { name: "Leadership", percentage: 70 },
];

const SkillsSection = () => {
  const [progress, setProgress] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      const updatedProgress = {};
      skillsData.forEach((skill) => (updatedProgress[skill.name] = skill.percentage));
      softSkills.forEach((skill) => (updatedProgress[skill.name] = skill.percentage));
      setProgress(updatedProgress);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ display:"flex" ,flexDirection:"column", alignItems:"center", gap:"20px", height:'100vh', width: '80%', justifyContent: 'center'}}>
      <Typography variant="h2" style={{color:'#0d9276', fontWeight:600 }}>
          My <span style={{ color: '#c80e13' }}>Skills</span>
        </Typography>
    <Box display="flex" justifyContent="center" gap={4} p={4} color="white" width='100%'>

      {/* Left Side: Technology Skills */}
      <Box width={{ xs: "100%", md: "48%" }} p={2} color='#0d9276' alignItems="center">
        <Typography variant="h4" gutterBottom fontWeight='500' >Technical Skills</Typography>
        {skillsData.map((skill, index) => (
          <Box key={index} display="flex" alignItems="center" gap={2} my={2}>
            {skill.icon}
            <Box width="100%">
              <Box display="flex" justifyContent="space-between">
                <Typography variant="body1">{skill.name}</Typography>
                <Typography variant="body2">{progress[skill.name] || 0}%</Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={progress[skill.name] || 0}
                sx={{ height: 8, borderRadius: 5, bgcolor: "gray", "& .MuiLinearProgress-bar": { bgcolor: "#c80e13" } }}
              />
            </Box>
          </Box>
        ))}
      </Box>

      {/* Right Side: Soft Skills */}
<Box display="flex" flexDirection="column" alignItems="center" width="80%" color="#0d9276">
  <Typography variant="h4" gutterBottom fontWeight='500'>Soft Skills</Typography>
  <Box
    display="grid"
    gridTemplateColumns="repeat(2, 1fr)" 
    gap={4}
    width="100%"
  >
    {softSkills.map((skill, index) => (
      <Box key={index} display="flex" flexDirection="column" alignItems="center">
        <Typography variant="body1" mb={1} fontWeight='500' fontSize="22px">{skill.name}</Typography> 
        <Box position="relative" display="inline-flex">
          <CircularProgress
            variant="determinate"
            value={progress[skill.name] || 0}
            size={100}
            thickness={4}
            bgcolor="gray"
            sx={{ color: "#c80e13"}}
          />
          <Box position="absolute" top="35%" left="35%" transform="translate(-50%, -50%)">
            <Typography variant="h6" color="#41356C" fontWeight="bold">
              {progress[skill.name] || 0}%
            </Typography>
          </Box>
        </Box>
      </Box>
    ))}
  </Box>
</Box>

</Box>
  </Box>
  );
};

export default SkillsSection;
