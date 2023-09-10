export interface Invitation {
    id: string,
    email: string,
    name: string,
    roleId: string,
    status: string,
    verificationCode: number,
    timestamp: number
}
