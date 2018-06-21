
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Entity } from '../../models/Entity';
import { EntityService } from '../../service/entity.service';
import { CommonService } from '../../service/common.service';

declare var nomnoml: any;

@Component({
  selector: 'app-api-designer',
  templateUrl: './api-designer.component.html',
  styleUrls: ['./api-designer.component.css']
})



export class ApiDesignerComponent implements OnInit {
    apiEntityData: any;
    Entities: Array<Entity> = [new Entity(null)];
    entityNames: Array<string> = [];
    constructor(private entityService: EntityService, private commonService: CommonService) { }
    ngOnInit() {
        this.entityService.GetEntityDataFromServer();
        this.entityService.GetEntityFieldDataFromServer();
    }

    collapseAllPanels() {
       this.Entities.forEach((data) => {
           data.isPanelCollapsed = true;
       })
    }

    addEntity() {
       this.collapseAllPanels();
       this.Entities.push(new Entity(null));
    }

    deleteEntity(index: number) {
       if (this.Entities.length > 1) this.Entities.splice(index, 1);
    }
    cloneEntity(data: Entity) {
       this.collapseAllPanels();
       this.Entities.push(new Entity(data))
    }

    downloadJson() {
       var fileData: any = { Entities: [] };
       this.Entities.forEach(function (value) {
           var x = {
               Name: value.Name,
               Fields: value.Fields,
               IncomingNavigations: value.IncomingNavigations,
               OutgoingNavigations: value.OutgoingNavigations
           };
           fileData.Entities.push(x);
       });

       var data =
           "data:text/plain;charset=utf-8," +
           encodeURIComponent(JSON.stringify(fileData, null, 4));
       var fileName = "entity-json-" + Math.floor((Math.random() * 100000));
       this.commonService.downloadData(data, fileName);
    }

    downloadCanvas() {
       var data = document.getElementById("target-canvas") as HTMLCanvasElement;
       var fileName = "json-uml-image-" + Math.floor((Math.random() * 100000));
       this.commonService.downloadData(data.toDataURL(), fileName);
    }


    loadEntityFromExistingData(data: string) {
       var copyEntities: Array<Entity> = [];
       this.Entities = [];
       var parsedData = JSON.parse(data);
       if (parsedData.Entities) {
           parsedData.Entities.forEach((value: Entity) => {
               var vm = new Entity(value);
               vm.isPanelCollapsed = true;
               copyEntities.push(vm);
           });
           var index = copyEntities.length - 1;
           copyEntities[index].isPanelCollapsed = false;
           this.Entities = copyEntities;
           this.getUmlMapping();
       }
    }

    readUploadFileJsonData(event: any): void {
       var self = this;
       console.log(event);
       var fileToLoad: any = event.target.files[0];
       var fileReader = new FileReader();
       fileReader.onload = function (fileLoadedEvent: any) {
           var textFromFileLoaded = fileLoadedEvent.target.result;
           self.loadEntityFromExistingData(textFromFileLoaded);
       };
       fileReader.readAsText(fileToLoad, "UTF-8");
    }


    getUmlMapping() {
       var copyEntityNames: any = [];
       var self = this;
       var result = "";
       self.Entities.forEach(function (value) {
           copyEntityNames.push(value.Name);
           var fieldData = "|";
           value.Fields.forEach(function (fieldValue) {
               if (fieldValue.Name && fieldValue.DataType)
                   fieldData =
                       fieldData + fieldValue.Name + ":" + fieldValue.DataType + "\n";
           });
           result = result + "[ " + value.Name + fieldData + "  ] \n";
           value.OutgoingNavigations.forEach(function (navValue) {
               if (
                   navValue.StartEntity &&
                   navValue.EndMultiplicity &&
                   navValue.EndEntity
                   && self.entityNames.includes(navValue.StartEntity)
                   && self.entityNames.includes(navValue.EndEntity)
               )
                   result =
                       result +
                       "[" +
                       navValue.StartEntity +
                       "] " +
                       self.commonService.getUmlMappingValue(navValue.EndMultiplicity) +
                       " [" +
                       navValue.EndEntity +
                       "] \n";
           });
       });

       if (JSON.stringify(this.entityNames) !== JSON.stringify(copyEntityNames))
           this.entityNames = copyEntityNames;

       var canvas = document.getElementById("target-canvas");
       nomnoml.draw(canvas, result);
    }

    changeInEntity() {
       this.getUmlMapping();
    }

    onClickCollapseHeader(entity: Entity) {
       var isCollapse = !entity.isPanelCollapsed;
       this.collapseAllPanels();
       entity.isPanelCollapsed = isCollapse;
    }
}
