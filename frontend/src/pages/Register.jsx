import AuthLayout from "../components/auth/AuthLayout";
import RegisterForm from "../components/auth/RegisterForm";

function Register() {
  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join KrishiMitra and start your smart farming journey."
    >
      <RegisterForm />
    </AuthLayout>
  );
}

export default Register;