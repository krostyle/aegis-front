import Button from "../atoms/Button";
import EmailIcon from "../atoms/EmailIcon";
import PasswordIcon from "../atoms/PasswordIcon";
import TextInput from "../atoms/TextInput";

const RegisterForm: React.FC = () => {
  return (
    <form className="space-y-6">
      <TextInput
        label="Correo electrónico"
        svg={<EmailIcon />}
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
        svg={<PasswordIcon />}
      />
      <TextInput
        label="Confirmar contraseña"
        type="password"
        name="password"
        required
        placeholder="••••••••"
        svg={<PasswordIcon />}
      />
      <Button type="submit" variant="primary">
        Registrarse
      </Button>
    </form>
  );
};

export default RegisterForm;
