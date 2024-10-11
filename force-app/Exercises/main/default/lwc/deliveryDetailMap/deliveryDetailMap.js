import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import FIELD_Course_Delivery__City from '@salesforce/schema/Course_Delivery__c.City__c';
import FIELD_Course_Delivery__Country from '@salesforce/schema/Course_Delivery__c.Country__c';
const fields = [FIELD_Course_Delivery__City, FIELD_Course_Delivery__Country];
import Utils from 'c/utils';

export default class DeliveryDetailMap extends LightningElement {
	@api recordId;
	name;
	mapMarkers = [];
	
	@wire(getRecord, { recordId: '$recordId', fields })
	loadMap({ error, data }) {
		if (error) {
			// TODO: handle error
		} else if (data) {
			// Get Map data
			const City = Utils.getDisplayValue(data, FIELD_Course_Delivery__City);
			const Country = Utils.getDisplayValue(data, FIELD_Course_Delivery__Country);
			// Transform location data into map markers
			this.mapMarkers = [{
				location: { City, Country },
				description: `Coords: ${City}, ${Country}`
			}];
		}
	}

}
