export class DeviceClassBody {
  id: number;
  brand: string;
  model: string;

  constructor() {
    this.id = 0
    this.brand = ''
    this.model = ''
  }

  async setDevice(
    id: number,
    brand: string,
    model: string,    
  ) {
    this.id = id || 0;
    this.brand = brand || ""
    this.model = model || ""
  }
}
