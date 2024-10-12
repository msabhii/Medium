import { Quote, SignupComponent } from "../Components";
export const Signup = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        <SignupComponent />
        <Quote />
      </div>
    </>
  );
};
