import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
const CustomCard = ({ title, subtitle, color }) => {
    return (
      <CardActionArea>
        <Card sx={{ backgroundColor: color }}>
          <CardContent>
            <Typography sx={{ textAlign: 'center', textTransform: 'uppercase'}} variant={'h4'}>
              {title}
            </Typography>
            <Typography sx={{ textAlign: 'center'}}>{subtitle}</Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    );
  };

  export default CustomCard;