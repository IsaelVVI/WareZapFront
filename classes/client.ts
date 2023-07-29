export class ClientClassBody {
  id: number;
  name: string;
  phone: string;
  phone_secondary: string;  

  constructor() {
    this.id = 0
    this.name = ''    
    this.phone = ''
    this.phone_secondary = ''
    
  }

  async setClient(
    id: number,
    name: string,
    phone: string,
    phone_secondary: string
  ) {
    this.id = id || 0;
    this.name = name || "";
    this.phone = phone || "";    
    this.phone_secondary = phone_secondary || "";
  }
}
