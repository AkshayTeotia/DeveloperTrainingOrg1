import { LightningElement, api } from 'lwc';

export default class Pagination extends LightningElement {
    currentpage = 1;
    totalRecords = [];
    size = 5;
    pageCount = 0;
    visibleRecords = [];

    get records() {
        return this.visibleRecords;
    }

    @api
    set records(data) {
        this.totalRecords = data;
        this.pageCount = Math.ceil(data.length / this.size);
        this.updateRecords();
    }

    previoushandler() {
        if (this.currentpage > 1) {
            this.currentpage--;
            this.updateRecords();
        }
    }

    nexthandler() {
        if (this.currentpage < this.pageCount) {
            this.currentpage++;
            this.updateRecords();
        }
    }

    get disprev() {
        return this.currentpage <= 1;
    }

    get disnext() {
        return this.currentpage >= this.pageCount;
    }

    updateRecords() {
        const start = (this.currentpage - 1) * this.size;
        const end = this.currentpage * this.size;
        this.visibleRecords = this.totalRecords.slice(start, end);
        this.dispatchEvent(new CustomEvent('update', {
            detail: {
                records: this.visibleRecords
            }
        }));
    }
}
