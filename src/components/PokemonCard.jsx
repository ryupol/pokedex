import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    margin: "auto",
    width: "130px",
    height: "130px",
  },
}));
export default function PokemonCard({ pokemon, image }) {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={2}>
      <Card>
        <CardMedia className={classes.cardMedia} image={image}></CardMedia>
        <CardContent>
          <Typography>
            {pokemon.id} {pokemon.name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
