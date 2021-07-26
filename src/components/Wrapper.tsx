import * as React from "react";
import Header from "./Header";

const Wrapper = ({ children }: {children: React.ReactNode}) => {
  return (
    <>
      <Header title={"Projects Tracker App"} />
      <div className="container is-max-widescreen">{children}</div>
    </>
  );
};

export default Wrapper;
