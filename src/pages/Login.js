import { GoogleLogin } from "@react-oauth/google";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();

  const responseMessage = (response) => {
    const token = response.credential;
    login(token);
  };

  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <div className="flex flex-col items-center max-w-96">
      <img className="w-64" src="/logo.png" alt="logo image" />
      <br />
      <p className="text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <br />

      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </div>
  );
}
