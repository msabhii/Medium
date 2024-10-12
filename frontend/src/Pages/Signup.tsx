import { Quote, AuthComponent } from "../Components";
export const Signup = () => {
  return (
    <>
      <div className="lg:grid lg:grid-cols-2">
        <AuthComponent type="signup" />
        <div className="invisible lg:visible">
          <Quote />
        </div>
      </div>
    </>
  );
};
