import { ClientClassBody } from "../classes/client"
import { DeviceClassBody } from "../classes/device"
import { UserClassBody } from "../classes/user"

export const useUser = () => useState<UserClassBody>('user', () => new UserClassBody)

export const useToken = () => useState<string>('use_token', () => '')

// state modal novo cliente
export const useNewClient = () => useState<boolean>('new_client', () => false)

// state modal selecionar cliente
export const useSelectClient = () => useState<boolean>('select_client', () => false)


// state modal selecionar dispositivo
export const useSelectDevice = () => useState<boolean>('select_device', () => false)

// state todos os clientes
export const useAllClients = () => useState<Array<ClientClassBody>>('all_clients', () => [])

// state cliente selecionado 
export const useClientSelected = () => useState<ClientClassBody>('client_selected', () => new ClientClassBody)

// state todos os dispositivos
export const useAllDevices = () => useState<Array<DeviceClassBody>>("all_devices", () => [])

// state dispositivo selecionado
export const useDeviceSelected = () => useState<DeviceClassBody>('device_selected', () => new DeviceClassBody)