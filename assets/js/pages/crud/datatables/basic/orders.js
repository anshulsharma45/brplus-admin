"use strict";
var KTDatatablesBasicPaginations = (function () {
  var initTable1 = function () {
    var table = $("#kt_datatable");

    // begin first table
    table.DataTable({
      responsive: true,
      pagingType: "full_numbers",
      columnDefs: [
        {
          targets: 7,
          width: "50px",
          title: "Actions",
          orderable: false,
          render: function (data, type, full, meta) {
            return '\
	                        <div class="dropdown dropdown-inline">\
	                            <button type="button" class="btn btn-primary btn-sm mr-2" data-toggle="modal" data-target="#exampleModalSizeLg">More</button>\
	                    ';
          },
        },
        {
          targets: 6,
          width: "100px",
          render: function (data, type, full, meta) {
            var status = {
              1: { title: "Cancelled", state: "danger" },
              2: { title: "Success", state: "success" },
              3: { title: "Suspicious", state: "info" },
            };
            if (typeof status[data] === "undefined") {
              return data;
            }
            return (
              '<span class="label label-' +
              status[data].state +
              ' label-dot mr-2"></span>' +
              '<span class="font-weight-bold text-' +
              status[data].state +
              '">' +
              status[data].title +
              "</span>"
            );
          },
        },
      ],
    });
  };
  var initTable2 = function () {
    var table = $("#kt_datatable2");

    // begin first table
    table.DataTable({
      responsive: true,
      pagingType: "full_numbers",
      columnDefs: [
        {
          targets: 6,
          width: "50px",
          title: "Actions",
          orderable: false,
          render: function (data, type, full, meta) {
            return '\
	                        <div class="dropdown dropdown-inline">\
	                            <button type="button" class="btn btn-primary btn-sm mr-2" data-toggle="modal" data-target="#exampleModalSizeLg">More</button>\
	                    ';
          },
        },
        {
          targets: 5,
          width: "100px",
          render: function (data, type, full, meta) {
            var status = {
              1: { title: "3rd and Final Attempt", state: "danger" },
              2: { title: "First Charge", state: "success" },
              3: { title: "2nd Attempt", state: "info" },
            };
            if (typeof status[data] === "undefined") {
              return data;
            }
            return (
              '<span class="label label-' +
              status[data].state +
              ' label-dot mr-2"></span>' +
              '<span class="font-weight-bold text-' +
              status[data].state +
              '">' +
              status[data].title +
              "</span>"
            );
          },
        },
      ],
    });
  };

  return {
    //main function to initiate the module
    init: function () {
      initTable1();
      initTable2();
    },
  };
})();

jQuery(document).ready(function () {
  KTDatatablesBasicPaginations.init();
});
