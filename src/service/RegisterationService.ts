import { GetObjectCommand, PutObjectCommand, S3 } from "@aws-sdk/client-s3";
import { CONFIG } from "./../config/Config";
import { ReservationDto } from "./../entities/Reservation";
import { CrudI } from "./../interfaces/CrudI";
import { v4 as uuid } from "uuid";


export class RegistertationService implements CrudI {
    client: S3;
    constructor() {
        this.client = new S3({
            region: CONFIG.AWS_REGION(),
            credentials: {
                accessKeyId: CONFIG.AWS_ACCESS_KEY(),
                secretAccessKey: CONFIG.AWS_SECRET_ACCESS_ID()
            }
        })
    }
    public async create(reservation: ReservationDto) {
        const id = await uuid();
        reservation.id = id;
        const reservations: ReservationDto[] = await this.getAll();
        reservations.push(reservation);
        await this.updateReservations(reservations)
        return reservation
    }

    public async getAll() {
        const command = new GetObjectCommand({
            Bucket: CONFIG.BUCKET_NAME(),
            Key: CONFIG.BUCKET_OBJECT_KEY(),
        });
        const response = await this.client.send(command)
        const str = await response.Body.transformToString();
        return JSON.parse(str)
    }

    public async delete(id) {

    }
    public async update(reservation: ReservationDto) {
        const reservations: ReservationDto[] = await this.getAll();
        const updatedReservations = reservations.map((_reservation) => {
            if (_reservation.id === reservation.id) { 
                return reservation 
            }
            else {
                return _reservation
            }
        })
        await this.updateReservations(updatedReservations);
        return reservation
    }

    private async updateReservations(reservations: ReservationDto[]) {
        const stringifiedData = JSON.stringify(reservations);
        console.log(stringifiedData)
        var buf = Buffer.from(stringifiedData);
        const payload = {
            Bucket: CONFIG.BUCKET_NAME(),
            Key: CONFIG.BUCKET_OBJECT_KEY(),
            Body: buf,
        }
        const command = new PutObjectCommand(payload)
        const response = await this.client.send(command);
        return response
    }

}