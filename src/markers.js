import { Marker } from 'react-globe';

const markers: Marker[] = [
    {
        id: 1,
        city: 'Ningbo',
        year: '-2006',
        color: 'white',
        coordinates: [29.8683, 121.5440],
        value: 150,
    },
    {
        id: 2,
        city: 'Tianjin',
        year: '2006-2011',
        color: 'white',
        coordinates: [39.3434, 117.3616],
        value: 150,
    },
    {
        id: 3,
        city: 'Boston',
        color: 'white',
        year: '2011-2015',
        coordinates: [42.3601, -71.0589],
        value: 150,
    },
    {
        id: 4,
        city: 'Singapore',
        color: 'white',
        year: '2015-2019',
        coordinates: [1.3521, 103.8198],
        value: 150,
    },
    {
        id: 5,
        city: 'Berlin',
        color: 'white',
        year: '2019-',
        coordinates: [52.5200, 13.4050],
        value: 150,
    },
];

export default markers;
