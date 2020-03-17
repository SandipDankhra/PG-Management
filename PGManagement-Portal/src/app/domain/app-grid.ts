import { GridDesigner } from "@rxweb/grid"

export class AppGrid extends GridDesigner {
  allowSorting: boolean;
  designClass: any;
  footerDesignClass: any;
  maxPerPage: number;
  pagingSource: number[];

  constructor(source: any[], model: Function, gridConfiguration?: any) {
    super(source, model, gridConfiguration);
    this.allowSorting = true;
    this.designClass.tableClass = "table table-striped table-hover dataTables-example dataTable text-center border-bottom".split(' ');
    this.designClass.cellClass = ["sorting"];
    this.designClass.ascendingClass = ["fr-sorting", "ml-2"];
    this.designClass.descendingClass = ["fr-sorting", "ml-2"];
    this.designClass.rowClass = [function () { return "gradeA even".split(" ") }];
    this.footerDesignClass.rootClass = "dataTables_paginate paging_simple_numbers d-flex flex-column flex-lg-row justify-content-between align-items-center".split(' ');
    this.footerDesignClass.dropDownTemplateClass.rootClass = "dataTables_length mb-3 mb-lg-0".split(' ');
    this.footerDesignClass.dropDownTemplateClass.controlClass = "form-control form-control-sm mx-2".split(" ");
    this.footerDesignClass.textTemplateClass.rootClass = "dataTables_info mb-3 mb-lg-0".split(" ");
    this.footerDesignClass.paginatorClass.rootClass = "pagination pagination-noborder mb-3 mb-lg-0".split(" ");
    this.footerDesignClass.paginatorClass.unorderedListItemClass = "pagination pagination-noborder mb-3 mb-lg-0".split(" ");;
    this.footerDesignClass.paginatorClass.listItemClass = ["paginate_button", "page-item", function () { return this.active ? "active" : "" }];
    this.footerDesignClass.paginatorClass.anchorClass = "page-link".split(" ");
    this.footerDesignClass.dropDownTemplateClass.labelClass = "d-flex align-items-center mb-0".split(' ');
    this.maxPerPage = 25;
    this.pagingSource = [25, 50, 75, 100];
  }

  refresh(elementId) {
    let element = document.getElementById(elementId);
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

}

export class AppDivGrid extends GridDesigner {
  allowSorting: boolean;
  isDivBase: boolean;
  startNodeName: string;
  designClass: any;
  footerDesignClass: any;
  maxPerPage: number;
  pagingSource: number[];
  constructor(source: any[], model: Function, gridConfiguration?: any) {
    super(source, model, gridConfiguration);
    this.allowSorting = true;
    this.isDivBase = true;
    this.startNodeName = "div"
    this.designClass.tableClass = "div-table div-table-striped div-table-hover table project-search-table".split(' ');
    this.designClass.headerRowClass = "div-tr d-flex".split(" ");
    this.designClass.headerClass = ["div-thead"];
    this.designClass.headerCellClass = ["div-th"];
    this.designClass.ascendingClass = ["fr-sorting", "ml-2"];
    this.designClass.descendingClass = ["fr-sorting", "ml-2"];
    this.designClass.bodyClass = ["div-tbody"];
    this.designClass.rowClass = [function () { return "div-tr".split(" ") }];
    this.designClass.cellClass = ["div-td"];
    this.footerDesignClass.rootClass = "dataTables_paginate paging_simple_numbers d-flex flex-column flex-lg-row justify-content-between align-items-center".split(' ');
    this.footerDesignClass.dropDownTemplateClass.rootClass = "dataTables_length mb-3 mb-lg-0".split(' ');
    this.footerDesignClass.dropDownTemplateClass.controlClass = "form-control form-control-sm mx-2".split(" ");
    this.footerDesignClass.textTemplateClass.rootClass = "dataTables_info mb-3 mb-lg-0".split(" ");
    this.footerDesignClass.paginatorClass.rootClass = "pagination pagination-noborder mb-3 mb-lg-0".split(" ");
    this.footerDesignClass.paginatorClass.unorderedListItemClass = "pagination pagination-noborder mb-3 mb-lg-0".split(" ");;
    this.footerDesignClass.paginatorClass.listItemClass = ["paginate_button", "page-item", function () { return this.active ? "active" : "" }];
    this.footerDesignClass.paginatorClass.anchorClass = "page-link".split(" ");
    this.footerDesignClass.dropDownTemplateClass.labelClass = "d-flex align-items-center mb-0".split(' ');
    this.maxPerPage = 25;
    this.pagingSource = [25, 50, 75, 100];
  }

  refresh(elementId) {
    let element = document.getElementById(elementId);
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
}


export class DivGrid extends GridDesigner {
  isDivBase: boolean;
  startNodeName: string;
  hideHeaderFooter: boolean;
  allowSorting: boolean;
  designClass: any;

  constructor(source: any[], model: Function, gridConfiguration?: any) {
    super(source, model, gridConfiguration);
    this.isDivBase = true;
    this.startNodeName = "div"
    this.hideHeaderFooter = true;
    this.allowSorting = false;
    this.designClass.bodyClass = ["hiddenRow div-tr collapse show".split(" ")];
    this.designClass.rowClass = [function () { return "div-tr".split(" ") }];
    this.designClass.cellClass = ["div-td"];
  }

  refresh(elementId) {
    let element = document.getElementById(elementId);
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

}
