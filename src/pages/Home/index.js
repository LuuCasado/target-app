import React, { useEffect } from "react";

import SamplePhone from "components/global/SamplePhone/index.js";
import useSession from "hooks/useSession";

const Home = () => {
  const { user } = useSession();

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <div>
      <SamplePhone />
    </div>
  );
};

export default Home;
