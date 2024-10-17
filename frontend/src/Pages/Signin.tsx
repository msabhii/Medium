import { Quote, AuthComponent } from "../Components";
export const Signin = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2">
        <AuthComponent type="signin" />
        <div className="invisible lg:visible">
          <Quote />
        </div>
      </div>
    </>
  );
};
