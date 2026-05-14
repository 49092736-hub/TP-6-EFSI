import axios from Axios;
import { useEffect, useState } from 'react';
import './SearchBar.css';   
import API from './API';
function SearchBar() {
  const [peliculas, setPeliculas] = useState([]);   
  const [pelicula, setPelicula] = useState('');

  const peliculaBuscada = async () => {
    const responsepeliculas = await axios.get(`http://www.omdbapi.com/?s=${pelicula}&apikey=a9b1c8e7`);
    setPeliculas(responsepeliculas.data.Search);
  }

  return (


