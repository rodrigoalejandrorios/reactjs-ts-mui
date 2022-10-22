import React from "react";
import { Box, Button, Container, Grid } from "@mui/material";
import { CardComponent, HeaderComponent } from "../../components";
import { characters } from "../../api/characters";
import { TypeCharacter } from "./interface/character.interface";

export const HomePage: React.FC<{}> = () => {
  const [allCharacters, setAllCharacters] = React.useState<TypeCharacter[] | null>(null)

  React.useEffect(() => {
    characters.getAll({ page: 1 }).then((r) => {
      setAllCharacters(r.data.results)
    }).catch((e) => {
      console.error(e)
    })
  }, [])

  return (
    <Container maxWidth="xl">
      <HeaderComponent
        title="Hola mundo"
        description="Hola mundo bienvenido a Codrr"
        element={
          <Button fullWidth variant="contained">
            Hola mundo
          </Button>
        }
      />
      <div>
        {
          allCharacters?.length !== 0 ? (
            <Grid container spacing={2} direction="row">
              {allCharacters!.map((character) => (
                <Grid item xs={3}>
                  <CardComponent key={character.id} image={character.image} name={character.name} species={character.species} status={character.status} />
                </Grid>
              ))}
            </Grid>
          ) : ""
        }
      </div>
    </Container>
  );
};
