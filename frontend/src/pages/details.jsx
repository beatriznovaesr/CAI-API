import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
    Card,
    CardContent
} from "@/components/ui/card"
function Detalhes() {
    const { nome } = useParams();
    const [pais, setPais] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/countries")
            .then(res => res.json())
            .then(data => {
                const encontrado = data.data.find(p => p.name === nome);
                setPais(encontrado);
            });
    }, [nome]);

    if (!pais) return <div className="text-center p-4">Loading...</div>;

    return (
        <div style={{ backgroundColor: '#8bb393' }} className="min-h-screen flex items-center justify-center p-4">
            <Card key={pais.name} style={{ backgroundColor: '#f4f4f5' }} className="w-full max-w-4xl shadow rounded-xl p-4">
                <CardContent className="flex flex-col md:flex-row items-center md:items-start gap-6">

                    <img
                        src={pais.flag}
                        alt={`Bandeira de ${pais.name}`}
                        className="w-40 md:w-100 h-auto rounded mb-4 md:mb-0" 
                    />

                    <section className="flex flex-col text-black space-y-2 w-full">
                        <h1 className="text-2xl font-bold mb-2">{pais.name}</h1>
                        <p>Capital: {pais.capital}</p>
                        <p>Region: {pais.region}</p>
                        <p>Subregion: {pais.subregion}</p>
                        <p>Population: {pais.population}</p>
                        <p>Area: {pais.area}</p>
                        <p>Coordinates: {pais.coordinates?.latitude}, {pais.coordinates?.longitude}</p>
                        <p>Borders: {Array.isArray(pais.borders) ? pais.borders.join(', ') : 'N/A'}</p>
                        <p>Timezones: {pais.timezones}</p>
                        <p>Currency: {pais.currency}</p>
                        <p>Languages: {pais.languages}</p>
                    </section>

                </CardContent>
            </Card>
        </div>
    );
}

export default Detalhes;
