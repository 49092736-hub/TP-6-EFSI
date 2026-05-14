import axios from 'axios';

const [peliculas, setPeliculas] = useState([]);

 useEffect(async () => {
    const responsepeliculas = await axios.get('http://www.omdbapi.com/movies?apiKey=a9b1c8e7');
    setPeliculas(responsepeliculas.data);

  }, []);
  
     return (
    <>
      { <div>
        <ul>
          {peliculas.map(p => <li> {p.title} - {p.year} </li>)}
        </ul>
      </div> }
    </>
  )

  export default API;

    