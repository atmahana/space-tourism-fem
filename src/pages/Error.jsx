import { NavLink } from "react-router-dom";

function Error() {
  return (
    <section className="bg-primary h-screen text-secondary grid place-content-center px-4 gap-3">
      <h1 className="text-xl select-none">
        Hm? There is nothing here, just like the space. I should go back.
      </h1>
      <NavLink to="/" className='text-white bg-slate-800 hover:bg-slate-700 w-fit px-4 py-2 rounded-full'>Go Back</NavLink>
    </section>
  );
}

export default Error;
