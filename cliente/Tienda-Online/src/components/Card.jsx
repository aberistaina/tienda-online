import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    CardActionArea,
    CardActions,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const CardProductos = () => {
    return (
        <Card
            sx={{
                width: "300px",
                margin: "30px",
            }}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    image="https://gourmetshop.cl/wp-content/uploads/2021/12/Leche-entera-1-L.png"
                    alt="Leche"
                />
            
            <CardContent>
                <Typography
                    sx={{
                        textAlign: "center",
                        fontSize: "20px",
                    }}
                >
                    Leche Entera
                </Typography>

                <Typography
                    sx={{
                        textAlign: "center",
                        fontSize: "20px",
                    }}
                >
                    $1.090
                </Typography>

            </CardContent>
        </CardActionArea>
            <CardActions sx={{
                display: "flex",
                justifyContent: "center",
                margin: "20px"
            }}>
                <Button
                    size="small"
                    color="primary" 
                    variant="contained"
                    endIcon={<AddShoppingCartIcon />}
                >
                    Agregar
                </Button>
            </CardActions>
        </Card>
    );
};
