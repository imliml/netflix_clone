import React, { useState } from "react";
import { movieApi, tvApi } from "../../api";

const DetailContainer = () => {
  //   const {
  //     location: { pathname },
  //   } = props;

  const [detail, setDetail] = useState({
    loading: true,
    result: null,
    resultError: null,
    // isMovie: pathname.includes("/movie/"),
  });

  const getData = async () => {
    // // // const [getDetail, getDetailError] = isMovie
    // // //   ? await movieApi.movie(id)
    // // //   : await tvApi.show(id);
    // // setDetail({
    // //   loading: false,
    // //   result: getDetail,
    // //   resultError: getDetailError,
    // });
  };

  return (
    <div>
      <h1>tesxt</h1>
    </div>
  );
};

export default DetailContainer;
