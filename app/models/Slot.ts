import { AllowNull, Column, CreatedAt, DeletedAt, Model, Table, UpdatedAt} from 'sequelize-typescript';
import { PrimaryGeneratedColumn } from 'typeorm';

@Table({
    tableName: 'slots',
    timestamps: true,
})

export class Slot extends Model<Slot> {
    @PrimaryGeneratedColumn("uuid")
    public id: number;

    @AllowNull(false)
    @Column({field: 'profile_id'})
    public profileId: string;

    @PrimaryGeneratedColumn()
    @Column({field: 'slot_id'})
    public slotId: number;

    @AllowNull(false)
    @Column({field: 'start_time'})
    public startTime: Date;

    @AllowNull(false)
    @Column({field: 'end_time'})
    public endTime: Date;

    @AllowNull(false)
    @Column({field: 'slot_size'})
    public slotSize: number;

    @CreatedAt
    @Column({field: 'created_at'})
    public creationDate: Date;

    @UpdatedAt
    @Column({field: 'updated_at'})
    public updatedOn: Date;

    @DeletedAt
    @Column({field: 'deleted_at'})
    public deletionDate: Date;
}