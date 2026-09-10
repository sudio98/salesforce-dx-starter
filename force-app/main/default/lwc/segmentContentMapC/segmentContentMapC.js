import { LightningElement } from 'lwc';
import SEGMENT_CONTENT_MAP from '@salesforce/resourceUrl/SegmentContentMapC';

export default class SegmentContentMapC extends LightningElement {
    get staticResourceUrl() {
        return SEGMENT_CONTENT_MAP;
    }
}
