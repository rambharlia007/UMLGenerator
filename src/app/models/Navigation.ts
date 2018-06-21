export class Navigation {
    StartRole: string;
    EndRole: string;
    EndEntity: string = '';
    StartEntity: string = '';
    StartMultiplicity: string = "1";
    EndMultiplicity: string;
    Direction: string = "UNI";
    IsBinding: boolean = false;
    IsRequired: boolean = false;
    Constraints: string;
    EndMultiplicityMapping: string

    constructor(data: Navigation) {
        if (data !== null) {
            this.StartRole = data.StartRole;
            this.EndRole = data.EndRole;
            this.EndEntity = data.EndEntity;
            this.StartEntity = data.StartEntity;
            this.StartMultiplicity = data.StartMultiplicity;
            this.EndMultiplicity = data.EndMultiplicity;
            this.Direction = data.Direction;
            this.IsBinding = data.IsBinding;
            this.IsRequired = data.IsRequired;
            this.Constraints = data.Constraints;
            this.EndMultiplicityMapping = data.EndMultiplicityMapping
        }
    }
}