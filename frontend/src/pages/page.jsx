import { useEffect, useState } from "react"
import {
    Card,
    CardHeader,
    CardContent
} from "@/components/ui/card"
import { Link } from 'react-router-dom';


function Paises() {
    const [paises, setPaises] = useState([])
    const [cursoSelecionado, setCursoSelecionado] = useState(null)

    useEffect(() => {
        fetch("http://localhost:3000/countries")
            .then(res => res.json())
            .then(data => {
                setPaises(data.data);
            })

    }, [])


    return (
        <div>
            <div style={{ backgroundColor: '#8bb393' }} className="flex flex-col">
                <h1 className="text-3xl font-serif font-bold mb-4 text-center p-4">Discover the World</h1>
                <section className="grid gap-4 px-4 md:grid-cols-2 lg:grid-cols-3">
                    {Array.isArray(paises) && paises.map((pais) => (
                        <Card key={pais.name} style={{ backgroundColor: '#f4f4f5' }} className=" shadow rounded-xl p-4">
                            <Link to={`/pais/${encodeURIComponent(pais.name)}`}>
                                <CardHeader>
                                    <img src={pais.flag} alt={`Bandeira de ${pais.name}`} className="w-100 h-70 rounded-md mb-2" />
                                </CardHeader>
                                <CardContent className="flex justify-center items-center">
                                    <h2 className="font-serif text-lg font-bold">{pais.name}</h2>
                                </CardContent>
                            </Link>
                        </Card>
                    ))}
                </section>
                
            </div>
        </div>
    );

}

export default Paises


