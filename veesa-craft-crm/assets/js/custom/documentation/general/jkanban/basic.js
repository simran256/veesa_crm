"use strict";var KTJKanbanDemoBasic={init:function(){new jKanban({element:"#kt_docs_jkanban_basic",gutter:"0",widthBoard:"250px",boards:[{id:"_inprocess",title:"In Process",item:[{title:'<span class="fw-bold">You can drag me too</span>'},{title:'<span class="fw-bold">Buy Milk</span>'}]},{id:"_working",title:"Working",item:[{title:'<span class="fw-bold">Do Something!</span>'},{title:'<span class="fw-bold">Run?</span>'}]},{id:"_done",title:"Done",item:[{title:'<span class="fw-bold">All right</span>'},{title:'<span class="fw-bold">Ok!</span>'}]}]})}};KTUtil.onDOMContentLoaded((function(){KTJKanbanDemoBasic.init()}));;