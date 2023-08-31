import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createBaseVNode, F as Fragment, i as renderList, t as toDisplayString, n as normalizeClass, h as createBlock, e as withCtx, b as createTextVNode, m as resolveDynamicComponent } from "./app-8331cbf7.js";
const TimePlan_vue_vue_type_style_index_0_scoped_559671c5_lang = "";
function getWeekNumber(d) {
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  var weekNo = Math.ceil(((d - yearStart) / 864e5 + 1) / 7);
  return weekNo;
}
function dateToString(date) {
  const year = date.getFullYear();
  const m = date.getMonth() + 1;
  const month = m < 10 ? "0" + m : m;
  const d = date.getDate();
  const day = d < 10 ? "0" + d : d;
  return year + "-" + month + "-" + day;
}
const _sfc_main = {
  props: {
    startDate: Date,
    columns: Array,
    rows: Array
  },
  data() {
    const yesterDay = /* @__PURE__ */ new Date();
    yesterDay.setDate(yesterDay.getDate() - 1);
    const headers = this.columns.map((c) => c.name);
    const weekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    getWeekNumber(this.startDate);
    const numberOfWeeks = this.rows.length / 7;
    const weeks = [];
    for (let relativeWeekNumber = 1; relativeWeekNumber <= numberOfWeeks; relativeWeekNumber++) {
      const days = [];
      const beginR = (relativeWeekNumber - 1) * 7;
      const endR = relativeWeekNumber * 7;
      for (let r = beginR; r < endR; r++) {
        const date = new Date(this.startDate);
        date.setDate(date.getDate() + r);
        days.push({
          weekday: weekDays[date.getDay()],
          hasPassed: date < yesterDay,
          date: dateToString(date),
          tasks: this.columns.map(
            (c) => this.rows[r][c.key] || ""
          )
        });
      }
      weeks.push({
        relativeWeekNumber,
        realWeekNumber: getWeekNumber(this.startDate) + relativeWeekNumber - 1,
        days
      });
    }
    return {
      weeks,
      headers
    };
  }
};
const _hoisted_1 = ["title"];
const _hoisted_2 = ["title"];
const _hoisted_3 = ["innerHTML"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("table", null, [
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($data.weeks, (week) => {
          return openBlock(), createElementBlock(
            Fragment,
            {
              key: week.realWeekNumber
            },
            [
              createBaseVNode("tr", null, [
                createBaseVNode("td", {
                  title: `Course Week ${week.relativeWeekNumber}`
                }, "Week " + toDisplayString(week.relativeWeekNumber), 9, _hoisted_1),
                createBaseVNode("td", {
                  title: `Year Week ${week.realWeekNumber}`
                }, "Week " + toDisplayString(week.realWeekNumber), 9, _hoisted_2),
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($data.headers, (header) => {
                    return openBlock(), createElementBlock(
                      "td",
                      { key: header },
                      toDisplayString(header),
                      1
                      /* TEXT */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(week.days, (day) => {
                  return openBlock(), createElementBlock(
                    "tr",
                    {
                      key: day.date,
                      class: normalizeClass({ hasPassed: day.hasPassed })
                    },
                    [
                      createBaseVNode(
                        "td",
                        null,
                        toDisplayString(day.weekday),
                        1
                        /* TEXT */
                      ),
                      createBaseVNode(
                        "td",
                        null,
                        toDisplayString(day.date),
                        1
                        /* TEXT */
                      ),
                      (openBlock(true), createElementBlock(
                        Fragment,
                        null,
                        renderList(day.tasks, (task) => {
                          return openBlock(), createElementBlock("td", {
                            key: task,
                            innerHTML: task
                          }, null, 8, _hoisted_3);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ],
                    2
                    /* CLASS */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ],
            64
            /* STABLE_FRAGMENT */
          );
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ]),
    (openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList($props.columns, (column, index) => {
        return openBlock(), createBlock(
          resolveDynamicComponent("style"),
          {
            scoped: "",
            key: column.key
          },
          {
            default: withCtx(() => [
              createTextVNode(
                " td:nth-child(" + toDisplayString(3 + index) + "):not(:empty){ background-color: " + toDisplayString(column.color) + "; } ",
                1
                /* TEXT */
              )
            ]),
            _: 2
            /* DYNAMIC */
          },
          1024
          /* DYNAMIC_SLOTS */
        );
      }),
      128
      /* KEYED_FRAGMENT */
    ))
  ]);
}
const TimePlan = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-559671c5"], ["__file", "TimePlan.vue"]]);
export {
  TimePlan as default
};
