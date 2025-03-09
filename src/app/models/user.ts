export interface User {
    id: number;
    nom: string;
    role: 'USER' | 'ADMIN'; // Définition des rôles possibles
  }
  