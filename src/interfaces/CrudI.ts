import { ReservationDto } from "./../entities/Reservation";

export interface CrudI {
    getAll: () => any
    create: (reservation : ReservationDto) => any
    update: (reservation : ReservationDto) => any
    delete: (id: string) => any
}