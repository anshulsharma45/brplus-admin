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
          targets: -1,
          width: "50px",
          title: "Actions",
          orderable: false,
          render: function (data, type, full, meta) {
            return '\
	                        <div class="dropdown dropdown-inline">\
	                            <button type="button" class="btn btn-primary btn-sm mr-2" data-toggle="modal" data-target="#exampleModalSizeLg">More</button>\
	                        <a href="javascript:;" class="btn btn-sm btn-clean btn-icon" title="Delete">\
	                            <span class="svg-icon svg-icon-md">\
	                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\
	                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
	                                        <rect x="0" y="0" width="24" height="24"/>\
	                                        <path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fill-rule="nonzero"/>\
	                                        <path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3"/>\
	                                    </g>\
	                                </svg>\
	                            </span>\
	                        </a>\
	                    ';
          },
        },
        {
          targets: 7,
          width: "75px",
          render: function (data, type, full, meta) {
            var status = {
              1: { title: "Pending", class: "label-light-success" },
              2: { title: "Delivered", class: " label-light-success" },
              3: { title: "Canceled", class: " label-light-danger" },
              4: { title: "Success", class: " label-light-success" },
              5: { title: "Info", class: " label-light-info" },
              6: { title: "Danger", class: " label-light-danger" },
              7: { title: "Warning", class: " label-light-warning" },
            };
            if (typeof status[data] === "undefined") {
              return data;
            }
            return (
              '<span class="label label-sm font-weight-bold' +
              status[data].class +
              ' label-inline">' +
              status[data].title +
              "</span>"
            );
          },
        },
        {
          targets: 8,
          width: "75px",
          render: function (data, type, full, meta) {
            var status = {
              1: { title: "Online", state: "danger" },
              2: { title: "Retail", state: "primary" },
              3: { title: "Direct", state: "success" },
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
    },
  };
})();

jQuery(document).ready(function () {
  KTDatatablesBasicPaginations.init();
});
