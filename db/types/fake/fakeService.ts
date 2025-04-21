import { House } from "../../../types/db/house";
const FAKE_HOUSES = [
{
        id: 1,
        price: 240000,
        name: "Casa Roble",
        description: "Hermosa casa familiar con fuente decorativa y bellos jardines.",
        terrainArea: 250,
        constructionArea: 180,
        type: "RENT"
},
{
    id: 2,
    price: 350000,
    name: "Villa Sol",
    description: "Villa moderna con alberca, gimnasio y vistas panorámicas.",
    terrainArea: 400,
    constructionArea: 320,
    type: "SALE"
},
{
    id: 3,
    price: 1000,
    name: "Departamento Plaza",
    description: "Departamento pequeño en zona céntrica, ideal para una pareja.",
    terrainArea: 80,
    constructionArea: 60,
    type: "RENT"
},
{
    id: 4,
    price: 450000,
    name: "Casa del Lago",
    description: "Casa de lujo frente al lago, con 5 recámaras y amplio jardín.",
    terrainArea: 600,
    constructionArea: 500,
    type: "SALE"
},
{
    id: 5,
    price: 1500,
    name: "Penthouse Sky",
    description: "Penthouse con vista panorámica, acabados de lujo y acceso a piscina.",
    terrainArea: 150,
    constructionArea: 120,
    type: "RENT"
},
{
    id: 6,
    price: 550000,
    name: "Casa Bosque",
    description: "Casa en el bosque con 3 hectáreas de terreno y múltiples espacios para eventos.",
    terrainArea: 3000,
    constructionArea: 600,
    type: "SALE"
},
{
    id: 7,
    price: 1200,
    name: "Loft Urbano",
    description: "Loft en el centro de la ciudad, ideal para profesionales.",
    terrainArea: 50,
    constructionArea: 45,
    type: "RENT"
},
{
    id: 8,
    price: 420000,
    name: "Casa Montaña",
    description: "Casa en la montaña con vistas espectaculares y grandes ventanales.",
    terrainArea: 500,
    constructionArea: 350,
    type: "SALE"
},
{
    id: 9,
    price: 900,
    name: "Estudio Céntrico",
    description: "Estudio moderno con excelentes acabados, ubicado en el corazón de la ciudad.",
    terrainArea: 45,
    constructionArea: 40,
    type: "RENT"
},
{
    id: 10,
    price: 400000,
    name: "Casa Serena",
    description: "Casa espaciosa con jardín amplio, cocina abierta y recámaras grandes.",
    terrainArea: 600,
    constructionArea: 450,
    type: "SALE"
}
]


class FakeService {
    async getHouses(type: string, minPrice: number, maxPrice: number): Promise<House[]> {
        return FAKE_HOUSES;
        }

    async getHouseById(id: number): Promise<House>{
        return FAKE_HOUSES[id];
    }
}

export default FakeService;

