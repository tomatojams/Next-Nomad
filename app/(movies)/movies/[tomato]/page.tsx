import axios from "axios";

import { API_URL } from "../../../(home)/page";
import MovieInfos from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import { Suspense } from "react";

export async function getMovies(tomato: string) {
  const res = await axios(`${API_URL}/${tomato}`);
  return res.data;
}

async function getVideos(tomato: string) {
  const res = await axios(`${API_URL}/${tomato}/videos`);
  return res.data;
}

export default async function Movie({ params: { tomato } }: { params: { tomato: string } }) {
  return (
    <>
      <Suspense fallback={<h3>Loading movieInfo</h3>}>
        <MovieInfos tomato={tomato} />
      </Suspense>
      <Suspense fallback={<h3>Loading movieVideo</h3>}>
        <MovieVideos tomato={tomato} />
      </Suspense>
    </>
  );
}
