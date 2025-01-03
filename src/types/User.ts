// types/User.ts
export type User = {
    id: number;
    name: string;
    email: string;
    role: "admin" | "medico" | "recepcionista";
  };
  