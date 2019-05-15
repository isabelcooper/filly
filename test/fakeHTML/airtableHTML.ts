export const airtableHTML = `<body class="noPointerEventsForBlockIframes noPointerEventsForPaneDivider">
<div id="hyperbaseContainer">
    <div id="snackbarContainer"></div>
    <div id="softAlert" class="baymax softDialog white rounded-big stroked1">
        <h3 class="title mb2 display huge strong line-height-3">Alert</h3>
        <div class="body mb2 break-word">Lorem ipsum</div>
        <div class="buttons">
            <div class="okayButton right py1 px2 blue text-white strong rounded clickable-stroked1-inset pointer"
                 tabindex="1">Okay
            </div>
        </div>
    </div>
    <div class="richTextboxContainer template">
        <div class="richTextbox light-scrollbar" contenteditable="true"></div>
        <div class="mentionIcon absolute bottom-0 right-0 p1 mr-half quieter link-unquiet strong pointer">@</div>
        <ul class="mentionSuggest hmenu hdropdown absolute stroked rounded white">
            <li class="template" menuitemvalue="{userId}">
                <div class="userIconContainer"></div>
                <span class="name">{userName}</span>
            </li>
        </ul>
        <input class="editableFix" tabindex="-1">
        <div class="urlMenu hbubblemenu hdropdown">
            <div class="flex items-center">
                <div class="flex items-center mr1 quiet">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" class="icon"
                         style="shape-rendering: geometricPrecision;">
                        <path fill-rule="evenodd" fill="currentColor"
                              d="M2,8.00003 C2.55,8.00003 3,8.45003 3,9 C3,9.55003 2.55,10 2,10 L1,10 C0.45,10 0,9.55003 0,9 L0,4.00003 C0,3.86203 0.028,3.73103 0.079,3.61203 C0.18,3.37303 0.373,3.18003 0.612,3.07903 C0.731,3.02803 0.862,3.00003 1,3.00003 L7,3.00003 C7.138,3.00003 7.269,3.02803 7.388,3.07903 C7.627,3.18003 7.82,3.37303 7.921,3.61203 C7.972,3.73103 8,3.86203 8,4.00003 L8,6.00003 C8,6.55003 7.55,7.00003 7,7.00003 C6.45,7.00003 6,6.55003 6,6.00003 L6,5 L2,5 L2,8.00003 Z M11.9211,3.61173 C11.9721,3.73173 12.0001,3.86273 12.0001,3.99973 L12.0001,8.99973 C12.0001,9.54973 11.5501,9.99973 11.0001,9.99973 L5.0001,9.99973 C4.4501,9.99973 4.0001,9.54973 4.0001,8.99973 L4.0001,6.49973 C4.0001,6.22473 4.2251,5.99973 4.5001,5.99973 C4.7751,5.99973 5.0001,6.22473 5.0001,6.49973 L5.0001,7.99973 L10.0001,7.99973 L10.0001,4.99973 C9.4501,4.99973 9.0001,4.54973 9.0001,3.99973 C9.0001,3.44973 9.4501,2.99973 10.0001,2.99973 L11.0001,2.99973 C11.1371,2.99973 11.2691,3.02773 11.3881,3.07873 C11.6271,3.18073 11.8191,3.37273 11.9211,3.61173 Z">
                        </path>
                    </svg>
                </div>
                <div class="linkContainer"></div>
            </div>
        </div>
    </div>
    <div class="attachmentViewer template">
        <div class="attachmentViewerContents">
            <div class="filename"></div>
            <div class="close absolute p2 top-0 right-0 text-white pointer link-quiet"></div>
            <div class="loading absolute p2 top-0 left-0"></div>
            <div class="leftArrow">
                <i class="icon-angle-left"></i>
            </div>
            <div class="rightArrow">
                <i class="icon-angle-right"></i>
            </div>
            <div class="attachmentContainer"></div>
            <div class="bottomBar">
                <div class="number"></div>
                <div class="thumbnails"></div>
                <div class="flex items-center absolute bottom-0 right-0 p2">
                    <div class="download pointer link-quiet ml2" title="Download attachment"></div>
                    <div class="rename pointer link-quiet ml2" title="Rename attachment"></div>
                    <div class="remove pointer link-quiet ml2" title="Remove attachment"></div>
                </div>
            </div>
        </div>
    </div>
    <div id="globalAlertContainer" class="baymax"></div>
    <div id="modalContainer"></div>
    <div class="relative width-full height-full">
        <div data-reactroot="" class="sharedForm overflow-auto webkit-touch-scroll">
            <div class="form reactForm">
                <div class="formContent">
                    <div>
                        <div class="formCoverImageContainer col-12 background-cover background-center"></div>
                        <div class="formHeader mx-auto max-width-2 lg-rounded-big md-rounded-big sm-rounded-big white">
                            <div class="formLogoImageContainer"></div>
                            <div class="formName">Form</div>
                            <div class="formDescription break-word"></div>
                        </div>
                    </div>
                    <div class="formFieldAndSubmitContainer px3 py1">
                        <div class="formFieldContainer mx-auto max-width-2">
                            <div class="sharedFormField">
                                <div class="title">Name</div>
                                <div class="cellContainer">
                                    <div class="cell formCell" data-columntype="text">
                                        <div class="flex-auto flex baymax"><input type="text" value=""
                                                                                  class="col-12 line-height-4 rounded border-thick border-darken2 border-darken3-hover detailCursor-border-blue border-blue-focus detailCursor-stroked-blue-focus"
                                                                                  style="padding: 6px;"
                                                                                  data-com.onepassword.iv=""></div>
                                    </div>
                                </div>
                            </div>
                            <div class="sharedFormField">
                                <div class="title">Date</div>
                                <div class="cellContainer">
                                    <div class="cell formCell dateformat-Local" data-columntype="date">
                                        <div class="flex-auto flex baymax">
                                            <div class="flex col-12 lg-col-6 md-col-6">
                                                <div class="flex baymax border-darken2 border-darken3-hover border-blue-focus detailCursor-border-blue rounded border-thick flex-auto white">
                                                    <input type="text"
                                                           class="date truncate px1 detailCursor-stroked-blue-focus col-12 hasDatepicker"
                                                           placeholder="dd/mm/yyyy" value="" id="dp1557924237546"
                                                           style="border: 0px; background-color: transparent; padding-top: 6px;"
                                                           data-com.onepassword.iv=""></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="sharedFormField">
                                <div class="title">select</div>
                                <div class="cellContainer">
                                    <div class="cell formCell" data-columntype="select">
                                        <div class="flex-auto flex baymax">
                                            <div>
                                                <div class="flex items-center mb1 pointer focus-container" tabindex="0">
                                                    <div class="flex-none flex-inline items-center justify-center circle border-thick border-darken2 white mr1 parent-focus-border-blue"
                                                         style="width: 18px; height: 18px;">
                                                        <div class="circle" style="width: 8px; height: 8px;"></div>
                                                    </div>
                                                    <div style="padding-top: 2px; padding-bottom: 2px; max-width: 448px;">
                                                        <span class="flex-inline items-center pill pl1 pr1 line-height-4 fit flex-none blueLight2 print-color-exact text-blue-dark1"
                                                              style="min-width: 18px; height: 18px; font-size: 13px; font-weight: 400;"><div
                                                                class="flex-auto truncate">red</div></span></div>
                                                </div>
                                                <div class="flex items-center mb1 pointer focus-container" tabindex="0">
                                                    <div class="flex-none flex-inline items-center justify-center circle border-thick border-darken2 white mr1 parent-focus-border-blue"
                                                         style="width: 18px; height: 18px;">
                                                        <div class="circle" style="width: 8px; height: 8px;"></div>
                                                    </div>
                                                    <div style="padding-top: 2px; padding-bottom: 2px; max-width: 448px;">
                                                        <span class="flex-inline items-center pill pl1 pr1 line-height-4 fit flex-none cyanLight2 print-color-exact text-cyan-dark1"
                                                              style="min-width: 18px; height: 18px; font-size: 13px; font-weight: 400;"><div
                                                                class="flex-auto truncate">orange</div></span></div>
                                                </div>
                                                <div class="flex items-center mb1 pointer focus-container" tabindex="0">
                                                    <div class="flex-none flex-inline items-center justify-center circle border-thick border-darken2 white mr1 parent-focus-border-blue"
                                                         style="width: 18px; height: 18px;">
                                                        <div class="circle" style="width: 8px; height: 8px;"></div>
                                                    </div>
                                                    <div style="padding-top: 2px; padding-bottom: 2px; max-width: 448px;">
                                                        <span class="flex-inline items-center pill pl1 pr1 line-height-4 fit flex-none tealLight2 print-color-exact text-teal-dark1"
                                                              style="min-width: 18px; height: 18px; font-size: 13px; font-weight: 400;"><div
                                                                class="flex-auto truncate">green</div></span></div>
                                                </div>
                                                <div class="flex items-center mb1 pointer focus-container" tabindex="0">
                                                    <div class="flex-none flex-inline items-center justify-center circle border-thick border-darken2 white mr1 parent-focus-border-blue"
                                                         style="width: 18px; height: 18px;">
                                                        <div class="circle" style="width: 8px; height: 8px;"></div>
                                                    </div>
                                                    <div style="padding-top: 2px; padding-bottom: 2px; max-width: 448px;">
                                                        <span class="flex-inline items-center pill pl1 pr1 line-height-4 fit flex-none greenLight2 print-color-exact text-green-dark1"
                                                              style="min-width: 18px; height: 18px; font-size: 13px; font-weight: 400;"><div
                                                                class="flex-auto truncate">very green</div></span></div>
                                                </div>
                                                <div class="small quieter link-unquiet-focusable text-blue-focus"
                                                     style="height: 16px;"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="formSubmit mx-auto max-width-2 baymax">
                            <div class="formValidationMessage"></div>
                            <input type="button"
                                   class="submitButton blue rounded-big px2 py1 text-white strong huge border-none submit styled-input pointer link-quiet"
                                   value="Submit">
                            <div class="mt2 quieter small"><!-- react-text: 61 -->Never submit passwords through
                                <!-- /react-text --><!-- react-text: 62 -->Airtable forms<!-- /react-text -->
                                <!-- react-text: 63 -->.<!-- /react-text --><!-- react-text: 64 --> <!-- /react-text --><a
                                        href="mailto:security@airtable.com?subject=Report%20abuse%20-%20Airtable%20forms&amp;body=Please%20briefly%20describe%20the%20type%20of%20abuse%20you're%20seeing%20in%20this%20form.%20Our%20team%20will%20review%20your%20report%20as%20soon%20as%20possible.%20Thank%20you!%0A%0A%20Reported%20form%20URL%3A%20https%3A%2F%2Fairtable.com%2Fshri36qqm4SB9dTTC"
                                        class="link-quiet understroke pointer">Report abuse</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="createYourOwnFormWithAirtable baymax center py4 py4"><a
                    href="https://try.airtable.com/forms?utm_source=airtable_shared_form"
                    class="flex-inline items-center rounded clickable-stroked animate px1 py-half pointer strong"
                    target="_blank" rel="noopener noreferrer">
                <div class="quieter mr1">Create your own form with</div>
                <img src="https://static.airtable.com/images/logo_baymax_22h@2x.png" style="height: 22px; width: auto;"></a>
            </div>
        </div>
    </div>
</div>
<style>.tb_button {
    padding: 1px;
    cursor: pointer;
    border-right: 1px solid #8b8b8b;
    border-left: 1px solid #FFF;
    border-bottom: 1px solid #fff;
}

.tb_button.hover {
    borer: 2px outset #def;
    background-color: #f8f8f8 !important;
}

.ws_toolbar {
    z-index: 100000
}

.ws_toolbar .ws_tb_btn {
    cursor: pointer;
    border: 1px solid #555;
    padding: 3px
}

.tb_highlight {
    background-color: yellow
}

.tb_hide {
    visibility: hidden
}

.ws_toolbar img {
    padding: 2px;
    margin: 0px
}</style>
<div id="ui-datepicker-div" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"
     style="display: none;">
    <div class="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all"><a
            class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="Prev"
            tabindex="-1"><span class="ui-icon ui-icon-circle-triangle-w">Prev</span></a><a
            class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="Next"
            tabindex="-1"><span class="ui-icon ui-icon-circle-triangle-e">Next</span></a>
        <div class="ui-datepicker-title"><span class="ui-datepicker-month">May</span>&nbsp;<span
                class="ui-datepicker-year">2019</span></div>
    </div>
    <table class="ui-datepicker-calendar">
        <thead>
        <tr>
            <th scope="col" class="ui-datepicker-week-end"><span title="Sunday">Su</span></th>
            <th scope="col"><span title="Monday">Mo</span></th>
            <th scope="col"><span title="Tuesday">Tu</span></th>
            <th scope="col"><span title="Wednesday">We</span></th>
            <th scope="col"><span title="Thursday">Th</span></th>
            <th scope="col"><span title="Friday">Fr</span></th>
            <th scope="col" class="ui-datepicker-week-end"><span title="Saturday">Sa</span></th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td class=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">
                &nbsp;
            </td>
            <td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
            <td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
            <td class=" " data-handler="selectDay" data-event="click" data-month="4" data-year="2019"><a
                    class="ui-state-default" href="#" tabindex="-1">1</a></td>
            <td class=" " data-handler="selectDay" data-event="click" data-month="4" data-year="2019"><a
                    class="ui-state-default" href="#" tabindex="-1">2</a></td>
            <td class=" " data-handler="selectDay" data-event="click" data-month="4" data-year="2019"><a
                    class="ui-state-default" href="#" tabindex="-1">3</a></td>
            <td class=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="4"
                data-year="2019"><a class="ui-state-default" href="#" tabindex="-1">4</a></td>
        </tr>
        <tr>
            <td class=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="4"
                data-year="2019"><a class="ui-state-default" href="#" tabindex="-1">5</a></td>
            <td class=" " data-handler="selectDay" data-event="click" data-month="4" data-year="2019"><a
                    class="ui-state-default" href="#" tabindex="-1">6</a></td>
            <td class=" " data-handler="selectDay" data-event="click" data-month="4" data-year="2019"><a
                    class="ui-state-default" href="#" tabindex="-1">7</a></td>
            <td class=" " data-handler="selectDay" data-event="click" data-month="4" data-year="2019"><a
                    class="ui-state-default" href="#" tabindex="-1">8</a></td>
            <td class=" " data-handler="selectDay" data-event="click" data-month="4" data-year="2019"><a
                    class="ui-state-default" href="#" tabindex="-1">9</a></td>
            <td class=" " data-handler="selectDay" data-event="click" data-month="4" data-year="2019"><a
                    class="ui-state-default" href="#" tabindex="-1">10</a></td>
            <td class=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="4"
                data-year="2019"><a class="ui-state-default" href="#" tabindex="-1">11</a></td>
        </tr>
        <tr>
            <td class=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="4"
                data-year="2019"><a class="ui-state-default" href="#" tabindex="-1">12</a></td>
            <td class=" " data-handler="selectDay" data-event="click" data-month="4" data-year="2019"><a
                    class="ui-state-default" href="#" tabindex="-1">13</a></td>
            <td class=" " data-handler="selectDay" data-event="click" data-month="4" data-year="2019"><a
                    class="ui-state-default" href="#" tabindex="-1">14</a></td>
            <td class=" ui-datepicker-days-cell-over  ui-datepicker-current-day ui-datepicker-today"
                data-handler="selectDay" data-event="click" data-month="4" data-year="2019"><a
                    class="ui-state-default ui-state-highlight ui-state-active ui-state-hover" href="#"
                    tabindex="-1">15</a></td>
            <td class=" " data-handler="selectDay" data-event="click" data-month="4" data-year="2019"><a
                    class="ui-state-default" href="#" tabindex="-1">16</a></td>
            <td class=" " data-handler="selectDay" data-event="click" data-month="4" data-year="2019"><a
                    class="ui-state-default" href="#" tabindex="-1">17</a></td>
            <td class=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="4"
                data-year="2019"><a class="ui-state-default" href="#" tabindex="-1">18</a></td>
        </tr>
        <tr>
            <td class=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="4"
                data-year="2019"><a class="ui-state-default" href="#" tabindex="-1">19</a></td>
            <td class=" " data-handler="selectDay" data-event="click" data-month="4" data-year="2019"><a
                    class="ui-state-default" href="#" tabindex="-1">20</a></td>
            <td class=" " data-handler="selectDay" data-event="click" data-month="4" data-year="2019"><a
                    class="ui-state-default" href="#" tabindex="-1">21</a></td>
            <td class=" " data-handler="selectDay" data-event="click" data-month="4" data-year="2019"><a
                    class="ui-state-default" href="#" tabindex="-1">22</a></td>
            <td class=" " data-handler="selectDay" data-event="click" data-month="4" data-year="2019"><a
                    class="ui-state-default" href="#" tabindex="-1">23</a></td>
            <td class=" " data-handler="selectDay" data-event="click" data-month="4" data-year="2019"><a
                    class="ui-state-default" href="#" tabindex="-1">24</a></td>
            <td class=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="4"
                data-year="2019"><a class="ui-state-default" href="#" tabindex="-1">25</a></td>
        </tr>
        <tr>
            <td class=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="4"
                data-year="2019"><a class="ui-state-default" href="#" tabindex="-1">26</a></td>
            <td class=" " data-handler="selectDay" data-event="click" data-month="4" data-year="2019"><a
                    class="ui-state-default" href="#" tabindex="-1">27</a></td>
            <td class=" " data-handler="selectDay" data-event="click" data-month="4" data-year="2019"><a
                    class="ui-state-default" href="#" tabindex="-1">28</a></td>
            <td class=" " data-handler="selectDay" data-event="click" data-month="4" data-year="2019"><a
                    class="ui-state-default" href="#" tabindex="-1">29</a></td>
            <td class=" " data-handler="selectDay" data-event="click" data-month="4" data-year="2019"><a
                    class="ui-state-default" href="#" tabindex="-1">30</a></td>
            <td class=" " data-handler="selectDay" data-event="click" data-month="4" data-year="2019"><a
                    class="ui-state-default" href="#" tabindex="-1">31</a></td>
            <td class=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">
                &nbsp;
            </td>
        </tr>
        </tbody>
    </table>
    <div class="ui-datepicker-buttonpane ui-widget-content">
        <button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all"
                data-handler="today" data-event="click">Today
        </button>
        <button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all"
                data-handler="hide" data-event="click">Done
        </button>
    </div>
</div>
</body>`