import { Data } from '@angular/router';
import { Support } from './support';

export interface DataObject{
    data: Data;
    support: Support;
}


export interface DataObjectList{
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Data[];
    support: Support;
}