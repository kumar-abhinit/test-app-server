import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'varchar', length: 255})
    firstName: string

    @Column({type: 'varchar', length: 255})
    lastName: string

    @Column({type: 'varchar', length: 255})
    email: string

    @Column({type: 'varchar', length: 255})
    password: string

    @Column({type: 'varchar', length: 255})
    userRole: string
}