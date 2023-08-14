import { NavLink } from "react-router-dom";

function ErrorPage() {
  return (
    <section className="bg-primary h-screen text-secondary grid place-content-center">
      <h1 className="text-5xl">
        Hm? Nothing here, just like the space. I should go back
      </h1>
      <NavLink to="/">Go Back</NavLink>
    </section>
  );
}

export default ErrorPage;
