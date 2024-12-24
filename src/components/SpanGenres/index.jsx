import { Container } from "./styles"

export default function SpanGenres({ genres }) {

    return (
        <Container>
            {genres &&
                genres.map((genre) => <span key={genre.id}>{genre.name}</span>)}
        </Container>
    )
}
