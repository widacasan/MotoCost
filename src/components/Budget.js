import React from 'react';
import { useParams } from 'react-router-dom';
import HeadTitle from './HeadTitle';

const MotoCost = () => {
    const { marca, modelo } = useParams();

    // Objeto de mapeo con imágenes y descripciones para cada marca y modelo
    const motoData = {
        honda: {
          'CBR1000RR': {
                image: 'https://img.remediosdigitales.com/d76a47/cbr-3-2022/1366_2000.jpeg',
                description: 'Descripción de la Honda CBR1000RR.'
            },
            // Agrega más modelos de Honda con sus respectivas imágenes y descripciones aquí
        },
        suzuki: {
          'Gixxer 250 Naked': {
            image: 'https://www.carandbike.com/_next/image?url=https%3A%2F%2Fc.ndtvimg.com%2F2019-08%2F8nrg653o_2019-suzuki-gixxer-sf-250_625x300_16_August_19.jpg&w=3840&q=75',
            description: 'Es la increíble Suzuki Gixxer 250, una joya sobre ruedas que proviene de la famosa familia de Hayabusa y GSX-R. Su motor de alto rendimiento en una estructura compacta ofrece eficiencia en el consumo y facilidad de mantenimiento. Con sistema ABS de doble canal y tecnología de Moto GP, esta moto es una reina en las carreteras. ¡Prepárate para brillar con estilo y conquistar la velocidad!'
        },
        },
        // Agrega más marcas con sus respectivos modelos, imágenes y descripciones aquí
    };

    // Lógica para obtener la imagen y la descripción según la marca y el modelo seleccionados
    const selectedMotoData = motoData[marca] && motoData[marca][modelo];

    return (
        <div>
            <HeadTitle title="Haz tu presupuesto" />
            <h2>{`Genial! tienes una ${marca} ${modelo} `}</h2>
            {selectedMotoData && (
                <div>
                    <img src={selectedMotoData.image} alt={`${marca} ${modelo}`} />
                    <p>{selectedMotoData.description}</p>
                </div>
            )}
        </div>
    );
};

export default MotoCost;