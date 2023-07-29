export class UserClassBody {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  plan: string;

  constructor() {
    this.id = 0
    this.name = ''
    this.email = ''
    this.phone = ''
    this.company = ''
    this.plan = ''    
  }

  async setUser(
    id: number,
    name: string,
    email: string,
    phone: string,
    company: string,
    plan: string
  ) {
    this.id = id || 0;
    this.name = name || "";
    this.email = email || "";
    this.phone = phone || "";
    this.company = company || "";
    this.plan = plan || "";
  }
}
