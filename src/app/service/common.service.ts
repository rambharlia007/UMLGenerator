import { Injectable } from '@angular/core';
@Injectable()
export class CommonService {
    public EntityData: string;
    public FieldData: string;
    constructor() { }

    getUmlMappingValue(value: string) {
        switch (value) {
            case "0..1":
                return "->";
            case "1":
                return "->";
            case "0..*":
                return "+-> 0..*";
            case "1..*":
                return "+-> 0..*";
            default:
                return "->";
        }
    }

    downloadData(data: string, fileName: string) {
        var element = document.createElement("a");
        element.setAttribute("href", data);
        element.setAttribute("download", fileName);
        element.style.display = "none";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

}