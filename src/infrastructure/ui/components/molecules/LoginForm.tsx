import Button from "../atoms/Button";
import TextInput from "../atoms/TextInput";

const LoginForm: React.FC = () => {
  return (
    <form className="space-y-6">
      <TextInput
        label="Correo electrónico"
        type="email"
        name="email"
        required
        placeholder="ejemplo@dominio.com"
      />
      <TextInput
        label="Contraseña"
        type="password"
        name="password"
        required
        placeholder="••••••••"
      />
      <Button type="submit" variant="primary">
        Iniciar Sesión
      </Button>
    </form>
  );
};

export default LoginForm;
