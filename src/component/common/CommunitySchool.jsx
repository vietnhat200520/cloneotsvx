import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { communityData } from '../../data';
import './CommunitySchool.css';

const CommunitySchool = () => {
  return (
    <Box className="community-wrapper">
      <Typography variant="h4" className="community-title">
        CỘNG ĐỒNG
      </Typography>

      <Grid container spacing={3} classes={{ root: 'community-grid-root' }}>
        {communityData.map((item) => (
          <Grid item xs={12} md={4} key={item.id} classes={{ root: 'community-item-root' }}>
            <Box className="community-card">
              {/* Header của Card */}
              <Box className="card-header">
                <FacebookIcon className="fb-icon" />
                <Typography className="group-name">{item.title}</Typography>
              </Box>

              {/* Nội dung của Card */}
              <Box className="card-body">
                <Box className="info-row">
                  <Box className="info-left">
                    <PeopleAltIcon />
                    <Typography>Thành viên</Typography>
                  </Box>
                  <Typography className="info-right">{item.members}</Typography>
                </Box>

                <Box className="info-row">
                  <Box className="info-left">
                    <AssignmentIcon />
                    <Typography>Đánh giá</Typography>
                  </Box>
                  <Typography className="info-right">{item.rating}</Typography>
                </Box>

                <Button 
                  variant="contained" 
                  classes={{ root: 'btn-join-root' }}
                  fullWidth
                >
                  THAM GIA NGAY
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CommunitySchool;

