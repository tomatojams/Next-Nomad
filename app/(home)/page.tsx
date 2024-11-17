// 메타데이타는 page 또는  layout 만 export 가능
// 메타데이타는 서버컴포넌트에만 있음

import axios from "axios";

import Movie from "../../components/movie";
import styles from "../styles/home.module.css";


export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  // 서버에서 작업을 하고있으면 메뉴조차 볼수없게 된다.
  // await new Promise((resolve) => setTimeout(resolve, 1000));

  const res = await axios(API_URL);
  return res.data;
}

// ** 홈페이지를 async로해야 loading 페이지를 읽고 기다릴수있음
export default async function TomatoHome() {
  //1. state 필요없이 그냥 받을수있음 2. 미리 캐싱해줌
  // const movies = (await axios(URL)).data
  const movies = await getMovies();

  return (
    <><div className={styles.container}>
      {
        movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
          />
        ))}</div>
    </>
  );
}
