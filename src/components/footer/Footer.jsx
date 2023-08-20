import React from "react";

const FooterPage = () => {
  return (
    <section className="container flex flex-col justify-between w-full p-3 text-xs rounded-t sm:flex-row sm:text-sm bg-slate-900 text-slate-200">
      <p className="w-1/3 text-start sm:text-start">Ahmad Zaky Ubaidillah</p>
      <p className="w-1/3 text-star sm:text-center">MATRIX PROJECT</p>
      <p className="w-1/3 text-star sm:text-end">Copyright@ 2023</p>
    </section>
  );
};

export default FooterPage;