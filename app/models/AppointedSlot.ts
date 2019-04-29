import { AllowNull, Column, CreatedAt, DeletedAt, Model, Table, UpdatedAt} from 'sequelize-typescript';
import { PrimaryGeneratedColumn } from 'typeorm';

@Table({
    tableName: 'appointedslots',
    timestamps: true,
})

export class AppointedSlot extends Model<AppointedSlot> {
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