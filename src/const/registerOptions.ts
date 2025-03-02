export interface RegisterFormField {
  title: string;
  label: string;
  placeholder?: string;
  secure?: boolean;
}

export const REGISTER_OPTIONS_PELEADOR: RegisterFormField[] = [
  { title: "nombre", label: "Nombre", placeholder: "Ingresa tu nombre" },
  {
    title: "apellidos",
    label: "Apellidos",
    placeholder: "Ingresa tus apellidos",
  },
  { title: "peso", label: "Peso (kg)", placeholder: "Ingresa tu peso" },
];

export const REGISTER_OPTIONS_ENTRENADOR: RegisterFormField[] = [
  { title: "nombre", label: "Nombre", placeholder: "Ingresa tu nombre" },
  {
    title: "apellidos",
    label: "Apellidos",
    placeholder: "Ingresa tus apellidos",
  },
  {
    title: "especialidad",
    label: "Especialidad",
    placeholder: "Ingresa tu especialidad",
  },
];

export const REGISTER_OPTIONS_GIMNASIO: RegisterFormField[] = [
  {
    title: "nombre",
    label: "Nombre Gym",
    placeholder: "Ingresa el nombre del gimnasio",
  },
  {
    title: "direccion",
    label: "Dirección",
    placeholder: "Ingresa la dirección",
  },
  { title: "ciudad", label: "Ciudad", placeholder: "Ingresa la ciudad" },
];
