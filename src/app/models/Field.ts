export class Field {
    Name: string;
    DataType: string;
    IsNullable: boolean = false;
    IsKey: boolean = false;
    IsParentKey: boolean = false;
    IsRequired: boolean = false;
    HrSystemMapping: any = { DataElementId: 0 };
    DbName: string;
    Length: string;

    constructor(data: Field) {
        if (data !== null) {
            this.Name = data.Name;
            this.DataType = data.DataType;
            this.IsNullable = data.IsNullable;
            this.IsKey = data.IsKey;
            this.IsParentKey = data.IsParentKey;
            this.IsRequired = data.IsRequired;
            this.HrSystemMapping.DataElementId = data && data.HrSystemMapping && data.HrSystemMapping.DataElementId;
            this.DbName = data.DbName;
            this.Length = data.Length;
        }
    }
}