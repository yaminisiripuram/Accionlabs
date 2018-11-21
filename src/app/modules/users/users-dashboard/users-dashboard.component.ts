/**
 * UsersDashboardComponent: Dashboard Component loading Table with data
 * @author:Yamini
 */
/** doc:angular core */
import { Component, OnInit } from '@angular/core';

/** doc:services */
import { UserService } from '../services/users-service';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.css']
})
export class UsersDashboardComponent implements OnInit {

  public gridOptions: any;

  constructor(
    private userService: UserService
  ) { }

  /** on Init  */
  ngOnInit() {
    const me = this;
    me.initUsersPostGrid();
    me.getUsersPost();
  }

  /** Grid initalization */
  initUsersPostGrid() {
    const me = this;
    me.gridOptions = {};
    me.gridOptions.data = [];
    me.gridOptions.columns = [{
      title: '#',
      dataIndex: 'id',
      sortable: true
    }, {
      title: 'Title',
      dataIndex: 'title',
      sortable: true
    }, {
      title: 'Body',
      dataIndex: 'body',
      sortable: true
    }];
  }

  /** getting the data from the service call */
  getUsersPost() {
    const me = this;
    me.userService.getUserPosts().subscribe(response => {
      me.gridOptions.data = { response } ? response : [];
    }, (error) => {
      console.log(error);
    });
  }

  /** sorting by direction */
  sortData(column) {
    const gridData = this.gridOptions.data;
    const dataIndex = (column.dataIndex) ? column.dataIndex : null;
    const direction = (column.direction === 'desc') ? -1 : 1;

    if (dataIndex) {
      gridData.sort(function (a, b) {
        if (a[dataIndex] < b[dataIndex]) {
          return -1 * direction;
        }
        if (a[dataIndex] > b[dataIndex]) {
          return 1 * direction;
        }
        return 0;
      });
    }
  }
  /** sorting column */
  doSorting(column) {
    let direction = (column.direction) ? column.direction : 'desc';
    direction = (direction === 'desc') ? 'asc' : 'desc';
    column.direction = direction;
    this.sortData(column);
  }
}
