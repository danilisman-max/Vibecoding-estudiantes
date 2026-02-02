
export interface Student {
  id: string;
  name: string;
  password: string;
  quote: string;
  pbiUrl: string;
}

export type ViewState = 'login' | 'dashboard';
