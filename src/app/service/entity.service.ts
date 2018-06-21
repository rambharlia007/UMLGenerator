import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EntityService {
    public EntityData: Array<any> = [];
    public FieldData: Array<any> = [];
    constructor(private _http: Http) { }
    GetEntityDataFromServer() {
        var tempData: any = []
        var self = this;
        this._http.get("https://demo4735519.mockable.io/api/entities").subscribe(data => {
            var parsedData = JSON.parse(data.text());
            parsedData.forEach(function (d: any) {
                tempData.push({ id: d.Layer, text: d.LayerID });
            })
            self.EntityData = tempData;
        })
    }
    GetEntityFieldDataFromServer() {
        var self = this;
        this._http.get("https://demo4735519.mockable.io/api/fields").subscribe(data => {
            var parsedData = JSON.parse(data.text());
            parsedData.forEach(function (d: any) {
                self.FieldData.push({
                    id: d.DataElement, text: d["English translation"], layerId: d.LayerId
                });
            })
        });
    }
}